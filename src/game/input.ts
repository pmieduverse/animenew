export interface Actions {
  moveX: number;
  moveY: number;
  aimX: number;
  aimY: number;
  attack: boolean;
  heavy: boolean;
  dash: boolean;
  block: boolean;
  special: boolean;
  ult: boolean;
  pause: boolean;
}

export interface Edges {
  attack: boolean;
  heavy: boolean;
  dash: boolean;
  special: boolean;
  ult: boolean;
  pause: boolean;
}

const GAME_CODES = new Set([
  "KeyW",
  "KeyA",
  "KeyS",
  "KeyD",
  "ArrowUp",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "Space",
  "ShiftLeft",
  "ShiftRight",
  "KeyJ",
  "KeyK",
  "KeyQ",
  "KeyE",
  "KeyR",
  "KeyF",
  "Escape",
  "KeyP",
]);

function radial(x: number, y: number, dz = 0.18): { x: number; y: number } {
  const m = Math.hypot(x, y);
  if (m < dz) return { x: 0, y: 0 };
  const scale = ((m - dz) / (1 - dz)) / m;
  return { x: x * scale, y: y * scale };
}

export class Input {
  keys = new Set<string>();
  pointer = { x: 0, y: 0, down: false, secondary: false };
  stick = { x: 0, y: 0 };
  buttons = {
    attack: false,
    heavy: false,
    dash: false,
    block: false,
    special: false,
    ult: false,
    pause: false,
  };
  blockHeld = false;
  private prev: Actions = blankActions();
  private injected: string[] | null = null;
  private unbind: Array<() => void> = [];

  attach(el: HTMLElement) {
    const onKey = (e: KeyboardEvent, down: boolean) => {
      if (e.repeat) return;
      if (down) this.keys.add(e.code);
      else this.keys.delete(e.code);
      if (GAME_CODES.has(e.code)) e.preventDefault();
    };
    const kd = (e: KeyboardEvent) => onKey(e, true);
    const ku = (e: KeyboardEvent) => onKey(e, false);
    const blur = () => {
      this.keys.clear();
      this.pointer.down = false;
      this.stick.x = 0;
      this.stick.y = 0;
    };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      this.pointer.x = e.clientX - r.left;
      this.pointer.y = e.clientY - r.top;
    };
    const down = (e: PointerEvent) => {
      if (e.button === 0) this.pointer.down = true;
      if (e.button === 2) this.pointer.secondary = true;
      move(e);
    };
    const up = (e: PointerEvent) => {
      if (e.button === 0) this.pointer.down = false;
      if (e.button === 2) this.pointer.secondary = false;
    };
    const ctxmenu = (e: Event) => e.preventDefault();
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    window.addEventListener("blur", blur);
    document.addEventListener("visibilitychange", blur);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("contextmenu", ctxmenu);
    this.unbind.push(() => {
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
      window.removeEventListener("blur", blur);
      document.removeEventListener("visibilitychange", blur);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("contextmenu", ctxmenu);
    });
  }

  detach() {
    this.unbind.forEach((fn) => fn());
    this.unbind = [];
  }

  setKeys(codes: string[]) {
    this.injected = codes;
  }

  clearInjected() {
    this.injected = null;
  }

  sample(): { actions: Actions; edges: Edges } {
    const held = this.injected ? new Set(this.injected) : this.keys;
    let mx = 0;
    let my = 0;
    if (held.has("KeyA") || held.has("ArrowLeft")) mx -= 1;
    if (held.has("KeyD") || held.has("ArrowRight")) mx += 1;
    if (held.has("KeyW") || held.has("ArrowUp")) my -= 1;
    if (held.has("KeyS") || held.has("ArrowDown")) my += 1;
    mx += this.stick.x;
    my += this.stick.y;
    const pads = typeof navigator !== "undefined" ? navigator.getGamepads?.() ?? [] : [];
    for (const pad of pads) {
      if (!pad) continue;
      const st = radial(pad.axes[0] ?? 0, pad.axes[1] ?? 0);
      mx += st.x;
      my += st.y;
      if (pad.buttons[0]?.pressed) this.buttons.attack = true;
      if (pad.buttons[2]?.pressed) this.buttons.heavy = true;
      if (pad.buttons[1]?.pressed) this.buttons.dash = true;
      if (pad.buttons[4]?.pressed || pad.buttons[6]?.pressed) this.buttons.block = true;
      if (pad.buttons[5]?.pressed) this.buttons.special = true;
      if (pad.buttons[7]?.pressed) this.buttons.ult = true;
      if (pad.buttons[9]?.pressed) this.buttons.pause = true;
    }
    const move = radial(mx, my, 0.12);
    const actions: Actions = {
      moveX: Math.max(-1, Math.min(1, move.x)),
      moveY: Math.max(-1, Math.min(1, move.y)),
      aimX: this.pointer.x,
      aimY: this.pointer.y,
      attack: this.pointer.down || held.has("KeyJ") || this.buttons.attack,
      heavy: this.pointer.secondary || held.has("KeyK") || this.buttons.heavy,
      dash: held.has("Space") || this.buttons.dash,
      block: held.has("ShiftLeft") || held.has("ShiftRight") || this.buttons.block || this.blockHeld,
      special: held.has("KeyQ") || held.has("KeyE") || this.buttons.special,
      ult: held.has("KeyR") || held.has("KeyF") || this.buttons.ult,
      pause: held.has("Escape") || held.has("KeyP") || this.buttons.pause,
    };
    const edges: Edges = {
      attack: actions.attack && !this.prev.attack,
      heavy: actions.heavy && !this.prev.heavy,
      dash: actions.dash && !this.prev.dash,
      special: actions.special && !this.prev.special,
      ult: actions.ult && !this.prev.ult,
      pause: actions.pause && !this.prev.pause,
    };
    this.prev = { ...actions };
    this.buttons.attack = false;
    this.buttons.heavy = false;
    this.buttons.dash = false;
    this.buttons.special = false;
    this.buttons.ult = false;
    this.buttons.pause = false;
    return { actions, edges };
  }
}

function blankActions(): Actions {
  return {
    moveX: 0,
    moveY: 0,
    aimX: 0,
    aimY: 0,
    attack: false,
    heavy: false,
    dash: false,
    block: false,
    special: false,
    ult: false,
    pause: false,
  };
}

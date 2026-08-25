import { CLAN_DEFS, xpToNext } from "./data";
import { liveStats } from "./awakening";
import { Input } from "./input";
import { sfx } from "./audio";
import type { BattleHud, Character, PowerId } from "./types";
import type { EnemyKind } from "./data";

const YSCALE = 0.7;
const WORLD_W = 3000;
const WORLD_H = 2300;
const FIXED = 1 / 60;
const PARTICLE_CAP = 420;
const PROJ_CAP = 96;

type Team = "player" | "enemy";

interface Particle {
  live: boolean;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  max: number;
  size: number;
  color: string;
  kind: "spark" | "ring" | "smoke" | "slash" | "ember";
}

interface Proj {
  live: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  dmg: number;
  team: Team;
  ttl: number;
  color: string;
  homing: number;
  pierce: number;
  style: "orb" | "bolt" | "shard";
}

interface Zone {
  x: number;
  y: number;
  r: number;
  ttl: number;
  max: number;
  dmg: number;
  slow: number;
  color: string;
  team: Team;
}

interface Enemy {
  id: number;
  kind: EnemyKind;
  name: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hp: number;
  maxHp: number;
  atk: number;
  spd: number;
  color: string;
  flash: number;
  cd: number;
  phase: number;
  elite: boolean;
  boss: boolean;
  facing: number;
  dead: boolean;
  seed: number;
}

interface Obstacle {
  x: number;
  y: number;
  r: number;
  h: number;
}

interface FloatText {
  x: number;
  y: number;
  vy: number;
  text: string;
  color: string;
  life: number;
}

export interface BattleHooks {
  onHud: (hud: BattleHud) => void;
  onPause: () => void;
  onOver: (result: { score: number; wave: number; coins: number; xp: number; kills: number; bosses: number }) => void;
  onCharacter: (c: Character) => void;
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function expSmooth(cur: number, target: number, k: number, dt: number) {
  return cur + (target - cur) * (1 - Math.exp(-k * dt));
}
function rand(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export class BattleGame {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  input: Input;
  character: Character;
  hooks: BattleHooks;
  private raf = 0;
  private last = 0;
  private acc = 0;
  private running = false;
  private paused = false;
  private time = 0;
  private hitstop = 0;
  private trauma = 0;
  private cam = { x: WORLD_W / 2, y: WORLD_H / 2, z: 1.25 };
  private zoomT = 1.25;
  private player = {
    x: WORLD_W / 2,
    y: WORLD_H / 2,
    vx: 0,
    vy: 0,
    z: 0,
    facing: 0,
    hp: 1,
    maxHp: 1,
    energy: 1,
    maxEnergy: 1,
    iFrames: 0,
    dashT: 0,
    dashCd: 0,
    atkT: 0,
    heavyT: 0,
    recT: 0,
    specialCd: 0,
    ultCd: 0,
    blocking: false,
    alive: true,
    hurtT: 0,
    after: [] as { x: number; y: number; a: number }[],
  };
  private enemies: Enemy[] = [];
  private particles: Particle[] = [];
  private projs: Proj[] = [];
  private zones: Zone[] = [];
  private floats: FloatText[] = [];
  private obstacles: Obstacle[] = [];
  private nextId = 1;
  private wave = 0;
  private waveT = 0;
  private clearing = false;
  private score = 0;
  private runCoins = 0;
  private runXp = 0;
  private combo = 0;
  private comboT = 0;
  private kills = 0;
  private bosses = 0;
  private waveHits = 0;
  private banner: string | null = null;
  private bannerT = 0;
  private hudClock = 0;
  private overSent = false;
  private dpr = 1;
  private reduced = false;
  private shakeMul = 1;
  private ambient: { x: number; y: number; s: number; a: number }[] = [];
  private ruins: { x: number; y: number; w: number; h: number }[] = [];
  private clouds: { x: number; y: number; s: number; v: number }[] = [];

  constructor(canvas: HTMLCanvasElement, character: Character, hooks: BattleHooks, opts?: { reduced?: boolean; shake?: number }) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas unsupported");
    this.ctx = ctx;
    this.character = character;
    this.hooks = hooks;
    this.input = new Input();
    this.reduced = !!opts?.reduced;
    this.shakeMul = opts?.shake ?? 1;
    const stats = liveStats(character);
    this.player.hp = stats.hp;
    this.player.maxHp = stats.hp;
    this.player.energy = stats.energy;
    this.player.maxEnergy = stats.energy;
    this.buildWorld();
    this.resize();
  }

  start() {
    this.running = true;
    this.input.attach(this.canvas);
    this.last = performance.now();
    this.announce("WAVE 1");
    this.spawnWave(1);
    this.wave = 1;
    this.wireControlsTest();
    this.raf = requestAnimationFrame(this.loop);
  }

  destroy() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.input.detach();
    if (typeof window !== "undefined") delete window.__controlsTest;
  }

  setPaused(v: boolean) {
    this.paused = v;
  }

  setStick(x: number, y: number) {
    this.input.stick.x = x;
    this.input.stick.y = y;
  }

  press(btn: keyof Input["buttons"]) {
    this.input.buttons[btn] = true;
  }

  holdBlock(v: boolean) {
    this.input.blockHeld = v;
  }

  resize() {
    const parent = this.canvas.parentElement;
    const w = parent?.clientWidth ?? window.innerWidth;
    const h = parent?.clientHeight ?? window.innerHeight;
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    this.canvas.width = Math.floor(w * this.dpr);
    this.canvas.height = Math.floor(h * this.dpr);
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
  }

  private loop = (t: number) => {
    if (!this.running) return;
    const raw = Math.min(0.1, (t - this.last) / 1000);
    this.last = t;
    if (!this.paused) {
      if (this.hitstop > 0) this.hitstop -= raw;
      else {
        this.acc += raw;
        while (this.acc >= FIXED) {
          this.update(FIXED);
          this.acc -= FIXED;
        }
      }
    }
    this.render();
    this.raf = requestAnimationFrame(this.loop);
  };

  private stats() {
    return liveStats(this.character);
  }

  private buildWorld() {
    this.obstacles = [];
    this.ruins = [];
    for (let i = 0; i < 18; i++) {
      const x = rand(220, WORLD_W - 220);
      const y = rand(220, WORLD_H - 220);
      if (Math.hypot(x - WORLD_W / 2, y - WORLD_H / 2) < 220) continue;
      const r = rand(28, 54);
      this.obstacles.push({ x, y, r, h: rand(40, 90) });
      this.ruins.push({ x: x - r, y: y - r * 0.4, w: r * 2, h: r * 1.2 });
    }
    for (let i = 0; i < 80; i++) {
      this.ambient.push({ x: rand(0, WORLD_W), y: rand(0, WORLD_H), s: rand(0.6, 2.2), a: rand(0.15, 0.5) });
    }
    for (let i = 0; i < 7; i++) {
      this.clouds.push({ x: rand(0, WORLD_W), y: rand(0, WORLD_H * 0.5), s: rand(180, 360), v: rand(6, 16) });
    }
  }

  private announce(text: string) {
    this.banner = text;
    this.bannerT = 2.2;
  }

  private update(dt: number) {
    this.time += dt;
    const { actions, edges } = this.input.sample();
    if (edges.pause) this.hooks.onPause();
    if (!this.player.alive) {
      this.tickFx(dt);
      if (!this.overSent && this.player.hurtT > 1.4) {
        this.overSent = true;
        this.hooks.onOver({
          score: this.score,
          wave: this.wave,
          coins: this.runCoins,
          xp: this.runXp,
          kills: this.kills,
          bosses: this.bosses,
        });
      }
      return;
    }

    this.comboT -= dt;
    if (this.comboT <= 0) this.combo = 0;
    this.bannerT -= dt;
    if (this.bannerT <= 0) this.banner = null;
    this.trauma = Math.max(0, this.trauma - dt * 1.8);

    this.updatePlayer(dt, actions, edges);
    this.updateEnemies(dt);
    this.updateProjs(dt);
    this.updateZones(dt);
    this.tickFx(dt);
    this.updateWave(dt);
    this.followCam(dt, actions);

    this.hudClock += dt;
    if (this.hudClock > 0.08) {
      this.hudClock = 0;
      this.emitHud();
    }
  }

  private updatePlayer(dt: number, actions: ReturnType<Input["sample"]>["actions"], edges: ReturnType<Input["sample"]>["edges"]) {
    const st = this.stats();
    const p = this.player;
    p.iFrames = Math.max(0, p.iFrames - dt);
    p.dashCd = Math.max(0, p.dashCd - dt);
    p.specialCd = Math.max(0, p.specialCd - dt);
    p.ultCd = Math.max(0, p.ultCd - dt);
    p.atkT = Math.max(0, p.atkT - dt);
    p.heavyT = Math.max(0, p.heavyT - dt);
    p.recT = Math.max(0, p.recT - dt);
    p.hurtT = Math.max(0, p.hurtT - dt);
    p.energy = clamp(p.energy + dt * (12 + st.energy * 0.02), 0, p.maxEnergy);

    const aim = this.screenToWorld(actions.aimX, actions.aimY);
    p.facing = Math.atan2(aim.y - p.y, aim.x - p.x);

    p.blocking = actions.block && p.energy > 4 && p.dashT <= 0;
    if (p.blocking) p.energy = Math.max(0, p.energy - dt * 18);

    if (edges.dash && p.dashCd <= 0 && p.energy >= 10) {
      const mag = Math.hypot(actions.moveX, actions.moveY);
      const dx = mag > 0.1 ? actions.moveX : Math.cos(p.facing);
      const dy = mag > 0.1 ? actions.moveY : Math.sin(p.facing);
      const n = Math.hypot(dx, dy) || 1;
      p.vx = (dx / n) * st.spd * 3.6;
      p.vy = (dy / n) * st.spd * 3.6;
      p.dashT = 0.16;
      p.dashCd = this.character.clanId === "storm" ? 0.48 : 0.72;
      p.iFrames = 0.18;
      p.energy -= 10;
      p.z = 18;
      sfx("dash");
      this.burst(p.x, p.y, this.character.ability.color, 10, "smoke");
    }

    if (p.dashT > 0) {
      p.dashT -= dt;
      p.z = expSmooth(p.z, 0, 10, dt);
      p.after.push({ x: p.x, y: p.y, a: 0.5 });
      if (p.after.length > 8) p.after.shift();
    } else {
      p.z = expSmooth(p.z, 0, 14, dt);
      const busy = p.atkT > 0 || p.heavyT > 0 || p.recT > 0;
      const speed = st.spd * (p.blocking ? 0.45 : 1) * (busy ? 0.55 : 1);
      const berserk = this.character.clanId === "demon" && p.hp / p.maxHp < 0.4 ? 1.18 : 1;
      p.vx = actions.moveX * speed * berserk;
      p.vy = actions.moveY * speed * berserk;
    }

    p.x = clamp(p.x + p.vx * dt, 80, WORLD_W - 80);
    p.y = clamp(p.y + p.vy * dt, 80, WORLD_H - 80);
    this.collideObstacles(p, 16);

    if (edges.attack && p.recT <= 0 && p.heavyT <= 0) this.doSlash(false);
    if (edges.heavy && p.recT <= 0 && p.energy >= 8) this.doSlash(true);
    if (edges.special && p.specialCd <= 0 && p.energy >= 22) this.castAbility(false);
    if (edges.ult && p.ultCd <= 0 && p.energy >= 48) this.castAbility(true);

    for (const a of p.after) a.a -= dt * 2.2;
    p.after = p.after.filter((a) => a.a > 0);
  }

  private doSlash(heavy: boolean) {
    const st = this.stats();
    const p = this.player;
    const range = heavy ? 86 : 60;
    const arc = heavy ? 1.65 : 1.05;
    const dmg = st.atk * (heavy ? 1.9 : 1) * this.tierMul();
    if (heavy) {
      p.energy -= 8;
      p.heavyT = 0.22;
      p.recT = 0.38;
      this.trauma = Math.min(1, this.trauma + 0.28);
      sfx("heavy");
    } else {
      p.atkT = 0.12;
      p.recT = 0.2;
      sfx("slash");
    }
    this.slashFx(p.x, p.y, p.facing, range, this.character.ability.color, heavy);
    let hits = 0;
    for (const e of this.enemies) {
      if (e.dead) continue;
      const dx = e.x - p.x;
      const dy = e.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist > range + e.r) continue;
      const ang = Math.atan2(dy, dx);
      let diff = Math.abs(Math.atan2(Math.sin(ang - p.facing), Math.cos(ang - p.facing)));
      if (diff > arc) continue;
      this.hurtEnemy(e, dmg, p.facing, heavy ? 220 : 90);
      hits += 1;
      if (heavy && this.character.clanId === "demon") {
        p.hp = clamp(p.hp + dmg * 0.08, 0, p.maxHp);
      }
    }
    if (hits > 0 && heavy) this.hitstop = 0.045;
  }

  private tierMul() {
    return 1 + this.character.abilityTierIndex * 0.18;
  }

  private castAbility(ult: boolean) {
    const st = this.stats();
    const p = this.player;
    const style = this.character.ability.style;
    const col = this.character.ability.color;
    const mul = (ult ? 2.6 : 1) * this.tierMul();
    p.energy -= ult ? 48 : 22;
    if (ult) {
      p.ultCd = 15;
      this.trauma = Math.min(1, this.trauma + 0.72);
      this.hitstop = 0.08;
      this.zoomT = 1.05;
      sfx("ult");
      this.announce(this.character.ability.name.toUpperCase());
    } else {
      p.specialCd = 4.6 - this.character.abilityTierIndex * 0.4;
      this.trauma = Math.min(1, this.trauma + 0.32);
      sfx("special");
    }
    const dmg = st.atk * (ult ? 4.4 : 2.2) * this.tierMul();
    const dirx = Math.cos(p.facing);
    const diry = Math.sin(p.facing);

    if (style === "nova" || style === "pulse") {
      this.zones.push({ x: p.x, y: p.y, r: ult ? 210 : 120, ttl: ult ? 0.7 : 0.35, max: ult ? 0.7 : 0.35, dmg: dmg * 0.35, slow: 0.3, color: col, team: "player" });
      this.burst(p.x, p.y, col, ult ? 40 : 22, "ember");
      this.ring(p.x, p.y, col, ult ? 200 : 110);
      if (style === "pulse") p.hp = clamp(p.hp + st.hp * (ult ? 0.18 : 0.08), 0, p.maxHp);
      for (const e of this.enemies) {
        if (e.dead) continue;
        if (Math.hypot(e.x - p.x, e.y - p.y) < (ult ? 210 : 120) + e.r) this.hurtEnemy(e, dmg, p.facing, 280);
      }
    } else if (style === "projectile" || style === "curse") {
      const n = ult ? 9 : 4;
      for (let i = 0; i < n; i++) {
        const a = p.facing + (i - (n - 1) / 2) * 0.18;
        this.spawnProj(p.x, p.y, Math.cos(a) * 420, Math.sin(a) * 420, 8, dmg * 0.55, "player", col, ult ? 0.9 : 0.35, ult ? 2 : 0, "orb");
      }
      if (style === "curse") p.hp = clamp(p.hp + 8 * mul, 0, p.maxHp);
    } else if (style === "beam") {
      this.beam(p.x, p.y, p.facing, ult ? 520 : 340, dmg, col);
    } else if (style === "dashStrike") {
      const dist = ult ? 280 : 160;
      this.slashFx(p.x, p.y, p.facing, dist, col, true);
      for (const e of this.enemies) {
        if (e.dead) continue;
        const proj = ((e.x - p.x) * dirx + (e.y - p.y) * diry);
        const perp = Math.abs((e.x - p.x) * diry - (e.y - p.y) * dirx);
        if (proj > 0 && proj < dist && perp < 36 + e.r) this.hurtEnemy(e, dmg * 1.1, p.facing, 200);
      }
      p.x = clamp(p.x + dirx * dist, 80, WORLD_W - 80);
      p.y = clamp(p.y + diry * dist, 80, WORLD_H - 80);
      p.iFrames = 0.2;
    } else if (style === "zone") {
      this.zones.push({
        x: p.x + dirx * 80,
        y: p.y + diry * 80,
        r: ult ? 200 : 130,
        ttl: ult ? 3.2 : 1.8,
        max: ult ? 3.2 : 1.8,
        dmg: dmg * 0.12,
        slow: 0.55,
        color: col,
        team: "player",
      });
      this.ring(p.x, p.y, col, 90);
    } else if (style === "cone") {
      const reach = ult ? 300 : 190;
      this.slashFx(p.x, p.y, p.facing, reach, col, true);
      for (const e of this.enemies) {
        if (e.dead) continue;
        const dx = e.x - p.x;
        const dy = e.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist > reach + e.r) continue;
        const ang = Math.atan2(dy, dx);
        const diff = Math.abs(Math.atan2(Math.sin(ang - p.facing), Math.cos(ang - p.facing)));
        if (diff < 0.7) this.hurtEnemy(e, dmg, p.facing, 260);
      }
    }
    this.score += ult ? 40 : 15;
  }

  private beam(x: number, y: number, ang: number, len: number, dmg: number, color: string) {
    const dx = Math.cos(ang);
    const dy = Math.sin(ang);
    for (let i = 0; i < 14; i++) {
      this.burst(x + dx * ((i + 1) / 14) * len, y + dy * ((i + 1) / 14) * len, color, 3, "spark");
    }
    let chained = 0;
    const hit = new Set<number>();
    for (const e of this.enemies) {
      if (e.dead) continue;
      const proj = (e.x - x) * dx + (e.y - y) * dy;
      const perp = Math.abs((e.x - x) * dy - (e.y - y) * dx);
      if (proj > 0 && proj < len && perp < 28 + e.r) {
        this.hurtEnemy(e, dmg, ang, 140);
        hit.add(e.id);
        chained += 1;
      }
    }
    if (this.character.clanId === "storm" || this.character.powerIds.includes("lightning")) {
      for (const e of this.enemies) {
        if (e.dead || hit.has(e.id) || chained > 5) continue;
        const near = [...this.enemies].find((h) => hit.has(h.id) && Math.hypot(h.x - e.x, h.y - e.y) < 160);
        if (near) {
          this.hurtEnemy(e, dmg * 0.55, ang, 80);
          chained += 1;
        }
      }
    }
  }

  private spawnProj(x: number, y: number, vx: number, vy: number, r: number, dmg: number, team: Team, color: string, homing: number, pierce: number, style: Proj["style"]) {
    const slot = this.projs.find((p) => !p.live) ?? (this.projs.length < PROJ_CAP ? ({} as Proj) : null);
    if (!slot) return;
    Object.assign(slot, { live: true, x, y, vx, vy, r, dmg, team, ttl: 1.6, color, homing, pierce, style });
    if (!this.projs.includes(slot)) this.projs.push(slot);
  }

  private updateProjs(dt: number) {
    for (const pr of this.projs) {
      if (!pr.live) continue;
      pr.ttl -= dt;
      if (pr.ttl <= 0) {
        pr.live = false;
        continue;
      }
      if (pr.homing > 0 && pr.team === "player") {
        let best: Enemy | null = null;
        let bd = 9999;
        for (const e of this.enemies) {
          if (e.dead) continue;
          const d = Math.hypot(e.x - pr.x, e.y - pr.y);
          if (d < bd) {
            bd = d;
            best = e;
          }
        }
        if (best) {
          const a = Math.atan2(best.y - pr.y, best.x - pr.x);
          pr.vx = lerp(pr.vx, Math.cos(a) * 400, dt * pr.homing * 4);
          pr.vy = lerp(pr.vy, Math.sin(a) * 400, dt * pr.homing * 4);
        }
      }
      pr.x += pr.vx * dt;
      pr.y += pr.vy * dt;
      this.spawnP(pr.x, pr.y, -pr.vx * 0.05, -pr.vy * 0.05, 0, pr.color, 0.2, 3, "spark");
      if (pr.team === "player") {
        for (const e of this.enemies) {
          if (e.dead) continue;
          if (Math.hypot(e.x - pr.x, e.y - pr.y) < e.r + pr.r) {
            this.hurtEnemy(e, pr.dmg, Math.atan2(pr.vy, pr.vx), 80);
            pr.pierce -= 1;
            if (pr.pierce < 0) pr.live = false;
          }
        }
      } else if (this.player.alive && this.player.iFrames <= 0) {
        if (Math.hypot(this.player.x - pr.x, this.player.y - pr.y) < 16 + pr.r) {
          this.hurtPlayer(pr.dmg, Math.atan2(this.player.y - pr.y, this.player.x - pr.x));
          pr.live = false;
        }
      }
    }
  }

  private updateZones(dt: number) {
    for (let i = this.zones.length - 1; i >= 0; i--) {
      const z = this.zones[i]!;
      z.ttl -= dt;
      if (z.ttl <= 0) {
        this.zones.splice(i, 1);
        continue;
      }
      if (z.team === "player") {
        for (const e of this.enemies) {
          if (e.dead) continue;
          if (Math.hypot(e.x - z.x, e.y - z.y) < z.r + e.r) {
            e.hp -= z.dmg * dt * 8;
            e.vx *= 1 - z.slow * dt * 4;
            e.vy *= 1 - z.slow * dt * 4;
            if (e.hp <= 0) this.killEnemy(e);
          }
        }
      }
    }
  }

  private updateEnemies(dt: number) {
    const p = this.player;
    for (let i = 0; i < this.enemies.length; i++) {
      const e = this.enemies[i]!;
      if (e.dead) continue;
      e.flash = Math.max(0, e.flash - dt);
      e.cd = Math.max(0, e.cd - dt);
      let sx = 0;
      let sy = 0;
      for (let j = 0; j < this.enemies.length; j++) {
        if (i === j) continue;
        const o = this.enemies[j]!;
        if (o.dead) continue;
        const dx = e.x - o.x;
        const dy = e.y - o.y;
        const d = Math.hypot(dx, dy) || 1;
        if (d < e.r + o.r + 18) {
          sx += dx / d;
          sy += dy / d;
        }
      }
      const dx = p.x - e.x;
      const dy = p.y - e.y;
      const dist = Math.hypot(dx, dy) || 1;
      e.facing = Math.atan2(dy, dx);
      let ax = dx / dist;
      let ay = dy / dist;
      if (e.kind === "assassin" || e.kind === "elite") {
        ax += -ay * 0.55;
        ay += ax * 0.15;
      }
      if (e.kind === "spirit") {
        ax += Math.cos(this.time * 2 + e.seed) * 0.4;
        ay += Math.sin(this.time * 2 + e.seed) * 0.4;
      }
      const n = Math.hypot(ax, ay) || 1;
      e.vx = (ax / n) * e.spd + sx * 40;
      e.vy = (ay / n) * e.spd + sy * 40;
      e.x = clamp(e.x + e.vx * dt, 60, WORLD_W - 60);
      e.y = clamp(e.y + e.vy * dt, 60, WORLD_H - 60);
      this.collideObstacles(e, e.r);

      const range = e.boss ? 78 : e.kind === "spirit" ? 210 : 46 + e.r;
      if (dist < range && e.cd <= 0 && p.alive) {
        this.enemyAttack(e, dist);
      }

      if (e.boss) {
        const ratio = e.hp / e.maxHp;
        const ph = ratio < 0.2 ? 4 : ratio < 0.45 ? 3 : ratio < 0.75 ? 2 : 1;
        if (ph !== e.phase) {
          e.phase = ph;
          this.announce(`${e.name} — PHASE ${ph}`);
          this.trauma = Math.min(1, this.trauma + 0.4);
          sfx("boss");
          if (ph >= 3) e.spd *= 1.12;
        }
      }
    }
  }

  private enemyAttack(e: Enemy, dist: number) {
    const p = this.player;
    if (e.kind === "spirit" || (e.boss && e.phase >= 2 && Math.random() < 0.45)) {
      const a = Math.atan2(p.y - e.y, p.x - e.x);
      const n = e.boss && e.phase >= 3 ? 5 : 1;
      for (let i = 0; i < n; i++) {
        const ang = a + (i - (n - 1) / 2) * 0.22;
        this.spawnProj(e.x, e.y, Math.cos(ang) * 280, Math.sin(ang) * 280, 7, e.atk * 0.7, "enemy", e.color, 0, 0, "shard");
      }
      e.cd = e.boss ? 1.1 : 1.6;
      return;
    }
    if (e.kind === "assassin" && dist > 50) {
      const a = Math.atan2(p.y - e.y, p.x - e.x);
      e.x += Math.cos(a) * 90;
      e.y += Math.sin(a) * 90;
    }
    if (dist < 52 + e.r) {
      this.hurtPlayer(e.atk, e.facing);
      e.cd = e.boss ? (e.phase >= 4 ? 0.55 : 0.9) : 1.15;
      if (e.boss && e.phase >= 4) {
        this.ring(e.x, e.y, e.color, 140);
        this.zones.push({ x: e.x, y: e.y, r: 150, ttl: 0.4, max: 0.4, dmg: e.atk * 0.2, slow: 0, color: e.color, team: "enemy" });
        if (Math.hypot(p.x - e.x, p.y - e.y) < 150) this.hurtPlayer(e.atk * 0.6, e.facing);
      }
    } else {
      e.cd = 0.4;
    }
  }

  private hurtPlayer(raw: number, from: number) {
    const p = this.player;
    if (!p.alive || p.iFrames > 0) return;
    const st = this.stats();
    let dmg = raw * (100 / (100 + st.def * 4));
    if (p.blocking) {
      dmg *= 0.42;
      p.energy = Math.max(0, p.energy - 6);
      sfx("block");
    } else sfx("hurt");
    if (this.character.clanId === "dragon" && this.character.powerIds.includes("fire")) dmg *= 0.9;
    p.hp -= dmg;
    p.hurtT = 0.25;
    p.iFrames = 0.35;
    p.vx -= Math.cos(from) * 80;
    p.vy -= Math.sin(from) * 80;
    this.waveHits += 1;
    this.trauma = Math.min(1, this.trauma + 0.35);
    this.burst(p.x, p.y, "#c45c4a", 8, "spark");
    if (p.hp <= 0) {
      p.hp = 0;
      p.alive = false;
      p.hurtT = 0;
      sfx("death");
      this.burst(p.x, p.y, this.character.ability.color, 36, "ember");
      this.announce("FALLEN");
    }
  }

  private hurtEnemy(e: Enemy, dmg: number, from: number, kb: number) {
    if (e.dead) return;
    const st = this.stats();
    const crit = Math.random() * 100 < st.crit;
    const dealt = dmg * (crit ? 1.75 : 1) * (this.character.clanId === "shadow" && crit ? 1.2 : 1);
    e.hp -= dealt;
    e.flash = 0.08;
    e.x += Math.cos(from) * kb * 0.04;
    e.y += Math.sin(from) * kb * 0.04;
    this.combo += 1;
    this.comboT = 1.35;
    this.floats.push({ x: e.x, y: e.y - 20, vy: -40, text: crit ? `${Math.round(dealt)}!` : `${Math.round(dealt)}`, color: crit ? "#e8e4dc" : "#d4c4a0", life: 0.7 });
    this.burst(e.x, e.y, e.color, 6, "spark");
    sfx("hit");
    if (e.hp <= 0) this.killEnemy(e);
  }

  private killEnemy(e: Enemy) {
    if (e.dead) return;
    e.dead = true;
    e.hp = 0;
    this.kills += 1;
    this.character.totalKills += 1;
    const mult = 1 + Math.min(40, this.combo) * 0.08;
    let pts = 40;
    let coins = 4;
    let xp = 12;
    if (e.elite) {
      pts = 160;
      coins = 14;
      xp = 28;
    }
    if (e.boss) {
      pts = e.kind === "raid" ? 2400 : e.kind === "boss" ? 1400 : 700;
      coins = e.kind === "raid" ? 90 : 48;
      xp = e.kind === "raid" ? 160 : 90;
      this.bosses += 1;
      this.character.bossesDefeated += 1;
      this.zoomT = 1;
    }
    this.score += Math.round(pts * mult);
    this.runCoins += coins;
    this.runXp += xp;
    this.grantRewards(xp, coins);
    this.burst(e.x, e.y, e.color, e.boss ? 48 : 16, "ember");
    this.ring(e.x, e.y, e.color, e.boss ? 160 : 50);
    if (e.boss) this.trauma = Math.min(1, this.trauma + 0.6);
  }

  private grantRewards(xp: number, coins: number) {
    this.character.coins += coins;
    this.character.xp += xp;
    let leveled = false;
    while (this.character.xp >= xpToNext(this.character.level)) {
      this.character.xp -= xpToNext(this.character.level);
      this.character.level += 1;
      leveled = true;
      const st = this.stats();
      this.player.maxHp = st.hp;
      this.player.maxEnergy = st.energy;
      this.player.hp = clamp(this.player.hp + st.hp * 0.25, 0, this.player.maxHp);
    }
    if (leveled) {
      sfx("level");
      this.announce(`LEVEL ${this.character.level}`);
      this.hooks.onCharacter(this.character);
    }
  }

  private updateWave(dt: number) {
    this.waveT += dt;
    this.enemies = this.enemies.filter((e) => !e.dead);
    const alive = this.enemies.filter((e) => !e.dead);
    if (alive.length === 0 && !this.clearing) {
      this.clearing = true;
      const bonus = this.waveHits === 0 ? 400 : 0;
      if (bonus) {
        this.score += bonus;
        this.unlockTitle("Untouched");
      }
      this.score += 200 * this.wave;
      this.runCoins += 8 + this.wave;
      this.character.coins += 8 + this.wave;
      this.character.highestWave = Math.max(this.character.highestWave, this.wave);
      if (this.wave >= 5) this.unlockTitle("Clan Warrior");
      if (this.wave >= 20) this.unlockTitle("Wavebreaker");
      this.announce(`WAVE ${this.wave} CLEARED`);
      sfx("wave");
      this.hooks.onCharacter(this.character);
      window.setTimeout(() => {
        if (!this.running || !this.player.alive) return;
        this.wave += 1;
        this.waveHits = 0;
        this.clearing = false;
        this.spawnWave(this.wave);
        this.announce(`WAVE ${this.wave}`);
      }, 1400);
    }
  }

  private unlockTitle(name: string) {
    if (!this.character.unlockedTitles.includes(name)) {
      this.character.unlockedTitles = [...this.character.unlockedTitles, name];
      this.announce(name);
    }
  }

  private spawnWave(n: number) {
    this.enemies = this.enemies.filter((e) => !e.dead);
    const hpM = 1 + (n - 1) * 0.2;
    const dmgM = 1 + (n - 1) * 0.13;
    const spdM = 1 + (n - 1) * 0.028;
    const count = Math.min(18, 3 + Math.floor(n * 0.7));
    if (n === 10) this.spawnEnemy("miniboss", hpM, dmgM, spdM, true);
    else if (n === 20) this.spawnEnemy("boss", hpM, dmgM, spdM, true);
    else if (n >= 30 && n % 10 === 0) this.spawnEnemy("raid", hpM, dmgM, spdM, true);
    else {
      for (let i = 0; i < count; i++) {
        let kind: EnemyKind = "beast";
        if (n >= 2 && Math.random() < 0.35) kind = "warrior";
        if (n >= 3 && Math.random() < 0.25) kind = "spirit";
        if (n >= 5 && Math.random() < 0.22) kind = "elite";
        if (n >= 6 && Math.random() < 0.18) kind = "assassin";
        if (n >= 8 && Math.random() < 0.12) kind = "drake";
        this.spawnEnemy(kind, hpM, dmgM, spdM, n === 10 || n === 20);
      }
    }
    if (n === 10 || n === 20 || (n >= 30 && n % 10 === 0)) {
      sfx("boss");
      this.zoomT = 1.05;
      this.trauma = 0.5;
    } else this.zoomT = 1.25;
  }

  private spawnEnemy(kind: EnemyKind, hpM: number, dmgM: number, spdM: number, _bossWave: boolean) {
    const edge = Math.floor(Math.random() * 4);
    const ring = 380 + Math.random() * 220;
    const ang = rand(0, Math.PI * 2);
    let x = this.player.x + Math.cos(ang) * ring;
    let y = this.player.y + Math.sin(ang) * ring;
    if (kind === "miniboss" || kind === "boss" || kind === "raid") {
      x = this.player.x + Math.cos(ang) * 420;
      y = this.player.y + Math.sin(ang) * 320;
    }
    x = clamp(x, 120, WORLD_W - 120);
    y = clamp(y, 120, WORLD_H - 120);
    void edge;
    const table: Record<EnemyKind, Partial<Enemy> & { name: string }> = {
      beast: { name: "Shadow Beast", r: 18, hp: 34, atk: 8, spd: 78, color: "#6a7384", elite: false, boss: false },
      warrior: { name: "Demon Warrior", r: 20, hp: 52, atk: 11, spd: 70, color: "#8a3030", elite: false, boss: false },
      spirit: { name: "Elemental Spirit", r: 16, hp: 28, atk: 9, spd: 64, color: "#7ec8e3", elite: false, boss: false },
      assassin: { name: "Elite Assassin", r: 15, hp: 40, atk: 13, spd: 110, color: "#5b6578", elite: true, boss: false },
      drake: { name: "Ash Drake", r: 28, hp: 90, atk: 14, spd: 72, color: "#c45c4a", elite: true, boss: false },
      elite: { name: "Covenant Elite", r: 22, hp: 80, atk: 14, spd: 88, color: "#d4a574", elite: true, boss: false },
      miniboss: { name: "Ashen Warden", r: 42, hp: 720, atk: 18, spd: 62, color: "#a9845a", elite: true, boss: true },
      boss: { name: "Void Dragon", r: 58, hp: 2100, atk: 24, spd: 58, color: "#c45c4a", elite: true, boss: true },
      raid: { name: "The First Flame", r: 70, hp: 4200, atk: 30, spd: 64, color: "#e85d3a", elite: true, boss: true },
    };
    const t = table[kind];
    const e: Enemy = {
      id: this.nextId++,
      kind,
      name: t.name,
      x,
      y,
      vx: 0,
      vy: 0,
      r: t.r!,
      hp: t.hp! * hpM,
      maxHp: t.hp! * hpM,
      atk: t.atk! * dmgM,
      spd: t.spd! * spdM,
      color: t.color!,
      flash: 0,
      cd: rand(0.2, 0.8),
      phase: 1,
      elite: !!t.elite,
      boss: !!t.boss,
      facing: 0,
      dead: false,
      seed: Math.random() * 10,
    };
    this.enemies.push(e);
    if (e.boss) this.announce(e.name);
  }

  private collideObstacles(ent: { x: number; y: number }, r: number) {
    for (const o of this.obstacles) {
      const dx = ent.x - o.x;
      const dy = ent.y - o.y;
      const d = Math.hypot(dx, dy) || 1;
      const min = r + o.r * 0.7;
      if (d < min) {
        ent.x += (dx / d) * (min - d);
        ent.y += (dy / d) * (min - d);
      }
    }
  }

  private followCam(dt: number, actions: { moveX: number; moveY: number }) {
    const look = 90;
    const tx = this.player.x + Math.cos(this.player.facing) * 70 + actions.moveX * look;
    const ty = this.player.y + Math.sin(this.player.facing) * 70 + actions.moveY * look;
    this.cam.x = expSmooth(this.cam.x, tx, 3.2, dt);
    this.cam.y = expSmooth(this.cam.y, ty, 3.2, dt);
    this.cam.z = expSmooth(this.cam.z, this.zoomT, 2.2, dt);
  }

  private tickFx(dt: number) {
    for (const p of this.particles) {
      if (!p.live) continue;
      p.life -= dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      p.vz -= 40 * dt;
      if (p.life <= 0) p.live = false;
    }
    for (let i = this.floats.length - 1; i >= 0; i--) {
      const f = this.floats[i]!;
      f.life -= dt;
      f.y += f.vy * dt;
      if (f.life <= 0) this.floats.splice(i, 1);
    }
    for (const c of this.clouds) {
      c.x += c.v * dt;
      if (c.x > WORLD_W + 200) c.x = -200;
    }
  }

  private spawnP(x: number, y: number, vx: number, vy: number, z: number, color: string, life: number, size: number, kind: Particle["kind"]) {
    if (this.reduced && kind !== "slash") return;
    let slot = this.particles.find((p) => !p.live);
    if (!slot) {
      if (this.particles.length >= PARTICLE_CAP) return;
      slot = {} as Particle;
      this.particles.push(slot);
    }
    Object.assign(slot, { live: true, x, y, z, vx, vy, vz: rand(10, 40), life, max: life, size, color, kind });
  }

  private burst(x: number, y: number, color: string, n: number, kind: Particle["kind"]) {
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2);
      const s = rand(40, 180);
      this.spawnP(x, y, Math.cos(a) * s, Math.sin(a) * s, rand(4, 20), color, rand(0.25, 0.7), rand(2, 6), kind);
    }
  }

  private ring(x: number, y: number, color: string, size: number) {
    this.spawnP(x, y, 0, 0, 0, color, 0.35, size, "ring");
  }

  private slashFx(x: number, y: number, ang: number, range: number, color: string, heavy: boolean) {
    this.spawnP(x + Math.cos(ang) * range * 0.4, y + Math.sin(ang) * range * 0.4, 0, 0, 8, color, heavy ? 0.22 : 0.14, range, "slash");
  }

  private screenToWorld(sx: number, sy: number) {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    const x = (sx - w / 2) / this.cam.z + this.cam.x;
    const y = (sy - h / 2) / (this.cam.z * YSCALE) + this.cam.y;
    return { x, y };
  }

  private w2s(x: number, y: number, z = 0) {
    const shake = this.trauma * this.trauma * 18 * this.shakeMul;
    const t = this.time * 22;
    const ox = Math.sin(t) * shake;
    const oy = Math.cos(t * 1.3) * shake * 0.7;
    const cssW = this.canvas.width / this.dpr;
    const cssH = this.canvas.height / this.dpr;
    return {
      x: (x - this.cam.x) * this.cam.z + cssW / 2 + ox,
      y: (y - this.cam.y) * YSCALE * this.cam.z + cssH / 2 + oy - z * this.cam.z,
    };
  }

  private render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const cw = w / this.dpr;
    const ch = h / this.dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.scale(this.dpr, this.dpr);

    const g = ctx.createLinearGradient(0, 0, 0, ch);
    g.addColorStop(0, "#14121a");
    g.addColorStop(0.45, "#0c0b10");
    g.addColorStop(1, "#08070b");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, cw, ch);

    this.drawHorizon(ctx, cw, ch);
    this.drawGround(ctx);
    this.drawClouds(ctx);

    const drawables: { y: number; draw: () => void }[] = [];
    for (const r of this.ruins) {
      drawables.push({ y: r.y + r.h, draw: () => this.drawRuin(ctx, r) });
    }
    for (const o of this.obstacles) {
      drawables.push({ y: o.y, draw: () => this.drawPillar(ctx, o) });
    }
    for (const z of this.zones) {
      drawables.push({ y: z.y, draw: () => this.drawZone(ctx, z) });
    }
    for (const e of this.enemies) {
      if (e.dead) continue;
      drawables.push({ y: e.y, draw: () => this.drawEnemy(ctx, e) });
    }
    for (const pr of this.projs) {
      if (!pr.live) continue;
      drawables.push({ y: pr.y, draw: () => this.drawProj(ctx, pr) });
    }
    if (this.player.alive || this.player.hurtT < 2) {
      drawables.push({ y: this.player.y, draw: () => this.drawPlayer(ctx) });
    }
    drawables.sort((a, b) => a.y - b.y);
    for (const d of drawables) d.draw();
    this.drawParticles(ctx);
    this.drawFloats(ctx);
    this.drawVignette(ctx, cw, ch);
    ctx.restore();
  }

  private drawHorizon(ctx: CanvasRenderingContext2D, cw: number, ch: number) {
    ctx.save();
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = "#1c1a24";
    ctx.beginPath();
    ctx.moveTo(0, ch * 0.28);
    ctx.lineTo(cw * 0.18, ch * 0.2);
    ctx.lineTo(cw * 0.34, ch * 0.26);
    ctx.lineTo(cw * 0.55, ch * 0.16);
    ctx.lineTo(cw * 0.78, ch * 0.24);
    ctx.lineTo(cw, ch * 0.18);
    ctx.lineTo(cw, ch * 0.42);
    ctx.lineTo(0, ch * 0.42);
    ctx.fill();
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = this.character.ability.color;
    ctx.beginPath();
    ctx.arc(cw * 0.72, ch * 0.16, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  private drawGround(ctx: CanvasRenderingContext2D) {
    const origin = this.w2s(0, 0);
    const far = this.w2s(WORLD_W, WORLD_H);
    ctx.fillStyle = "#0e0d12";
    ctx.fillRect(origin.x, origin.y, far.x - origin.x, far.y - origin.y);

    const floor = this.w2s(WORLD_W / 2, WORLD_H / 2);
    ctx.fillStyle = "#1c1a24";
    ctx.beginPath();
    ctx.ellipse(floor.x, floor.y, 520 * this.cam.z, 520 * this.cam.z * YSCALE, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(196,92,74,0.28)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.strokeStyle = "rgba(232,228,220,0.08)";
    ctx.beginPath();
    ctx.ellipse(floor.x, floor.y, 280 * this.cam.z, 280 * this.cam.z * YSCALE, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(232,228,220,0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= WORLD_W; x += 140) {
      const a = this.w2s(x, 0);
      const b = this.w2s(x, WORLD_H);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    for (let y = 0; y <= WORLD_H; y += 140) {
      const a = this.w2s(0, y);
      const b = this.w2s(WORLD_W, y);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(196,92,74,0.22)";
    ctx.lineWidth = 2;
    const tl = this.w2s(40, 40);
    const br = this.w2s(WORLD_W - 40, WORLD_H - 40);
    ctx.strokeRect(tl.x, tl.y, br.x - tl.x, br.y - tl.y);

    for (const a of this.ambient) {
      const s = this.w2s(a.x, a.y);
      ctx.globalAlpha = a.a * (0.5 + Math.sin(this.time * 1.4 + a.x) * 0.5);
      ctx.fillStyle = "#e8e4dc";
      ctx.beginPath();
      ctx.arc(s.x, s.y, a.s, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  private drawClouds(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(232,228,220,0.04)";
    for (const c of this.clouds) {
      const s = this.w2s(c.x, c.y, 80);
      ctx.beginPath();
      ctx.ellipse(s.x, s.y, c.s * 0.25, c.s * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawRuin(ctx: CanvasRenderingContext2D, r: { x: number; y: number; w: number; h: number }) {
    const s = this.w2s(r.x + r.w / 2, r.y + r.h / 2);
    ctx.fillStyle = "rgba(26,24,31,0.9)";
    ctx.strokeStyle = "rgba(232,228,220,0.08)";
    ctx.lineWidth = 1;
    const bw = (r.w * this.cam.z) / 2;
    const bh = (r.h * this.cam.z * YSCALE) / 2;
    ctx.fillRect(s.x - bw, s.y - bh, bw * 2, bh * 2);
    ctx.strokeRect(s.x - bw, s.y - bh, bw * 2, bh * 2);
  }

  private drawPillar(ctx: CanvasRenderingContext2D, o: Obstacle) {
    const s = this.w2s(o.x, o.y);
    const top = this.w2s(o.x, o.y, o.h);
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.beginPath();
    ctx.ellipse(s.x, s.y + 6, o.r * 0.7, o.r * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#1c1a22";
    ctx.strokeStyle = "rgba(232,228,220,0.12)";
    ctx.beginPath();
    ctx.moveTo(s.x - o.r * 0.35, s.y);
    ctx.lineTo(top.x - o.r * 0.22, top.y);
    ctx.lineTo(top.x + o.r * 0.22, top.y);
    ctx.lineTo(s.x + o.r * 0.35, s.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  private drawZone(ctx: CanvasRenderingContext2D, z: Zone) {
    const s = this.w2s(z.x, z.y);
    const a = z.ttl / z.max;
    ctx.save();
    ctx.globalAlpha = 0.18 + a * 0.2;
    ctx.fillStyle = z.color;
    ctx.beginPath();
    ctx.ellipse(s.x, s.y, z.r * this.cam.z, z.r * this.cam.z * YSCALE, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = z.color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }

  private drawPlayer(ctx: CanvasRenderingContext2D) {
    const p = this.player;
    const clan = CLAN_DEFS[this.character.clanId];
    const col = this.character.ability.color;
    const z = this.cam.z;
    for (const a of p.after) {
      const s = this.w2s(a.x, a.y, p.z);
      ctx.globalAlpha = a.a * 0.45;
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.ellipse(s.x, s.y, 16 * z, 24 * z, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    const s = this.w2s(p.x, p.y, p.z);
    const x = s.x;
    const y = s.y;
    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.beginPath();
    ctx.ellipse(x, y + 22 * z, 22 * z, 9 * z, 0, 0, Math.PI * 2);
    ctx.fill();

    const pulse = 0.6 + Math.sin(this.time * 4) * 0.25;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const aura = ctx.createRadialGradient(x, y, 6, x, y, 70 * z);
    aura.addColorStop(0, col);
    aura.addColorStop(1, "rgba(0,0,0,0)");
    ctx.globalAlpha = 0.5 * pulse;
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(x, y, 70 * z, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    if (p.blocking) {
      ctx.strokeStyle = "rgba(232,228,220,0.85)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, 32 * z, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(p.facing);
    ctx.fillStyle = col;
    ctx.shadowColor = col;
    ctx.shadowBlur = 12;
    ctx.globalAlpha = 0.95;
    ctx.fillRect(14 * z, -4 * z, 38 * z, 8 * z);
    ctx.restore();
    ctx.globalAlpha = 1;

    ctx.fillStyle = p.hurtT > 0 ? "#e8e4dc" : clan.color;
    ctx.beginPath();
    ctx.ellipse(x, y + 6 * z, 12 * z, 18 * z, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(232,228,220,0.35)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "#f2efe8";
    ctx.beginPath();
    ctx.arc(x, y - 16 * z, 9 * z, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = clan.accent;
    ctx.beginPath();
    ctx.ellipse(x - 1 * z, y - 22 * z, 11 * z, 6 * z, -0.4, 0, Math.PI);
    ctx.fill();

    if (p.atkT > 0 || p.heavyT > 0) {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = col;
      ctx.lineWidth = p.heavyT > 0 ? 5 : 3;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.arc(x, y, (p.heavyT > 0 ? 62 : 44) * z, p.facing - 1, p.facing + 0.2);
      ctx.stroke();
      ctx.restore();
    }
  }

  private drawEnemy(ctx: CanvasRenderingContext2D, e: Enemy) {
    const s = this.w2s(e.x, e.y);
    const x = s.x;
    const y = s.y;
    const z = this.cam.z;
    const r = e.r * z * 1.15;
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.beginPath();
    ctx.ellipse(x, y + r * 0.7, r * 0.9, r * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = e.color;
    ctx.beginPath();
    ctx.arc(x, y, r * 1.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.save();
    if (e.flash > 0) ctx.globalAlpha = 0.95;
    ctx.fillStyle = e.flash > 0 ? "#e8e4dc" : e.color;
    if (e.kind === "beast") {
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.15, r * 0.7, e.facing, 0, Math.PI * 2);
      ctx.fill();
    } else if (e.kind === "spirit") {
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.arc(x, y - 8, r * 1.1, 0, Math.PI * 2);
      ctx.fill();
    } else if (e.kind === "drake" || e.boss) {
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.25, r * 0.78, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x - r, y);
      ctx.lineTo(x - r * 1.5, y - r * 0.7);
      ctx.lineTo(x - r * 0.2, y - r * 0.25);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.ellipse(x, y + 4, r * 0.62, r * 1.05, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y - r * 0.75, r * 0.42, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    const bw = r * 1.8;
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(x - bw / 2, y - r - 14, bw, 5);
    ctx.fillStyle = e.boss ? "#c45c4a" : "#e8e4dc";
    ctx.fillRect(x - bw / 2, y - r - 14, bw * clamp(e.hp / e.maxHp, 0, 1), 5);
  }

  private drawProj(ctx: CanvasRenderingContext2D, pr: Proj) {
    const s = this.w2s(pr.x, pr.y, 8);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = pr.color;
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.arc(s.x, s.y, pr.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  private drawParticles(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    for (const p of this.particles) {
      if (!p.live) continue;
      const s = this.w2s(p.x, p.y, p.z);
      const a = p.life / p.max;
      ctx.globalAlpha = a;
      ctx.strokeStyle = p.color;
      ctx.fillStyle = p.color;
      if (p.kind === "ring") {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(s.x, s.y, p.size * (1.2 - a), p.size * (1.2 - a) * YSCALE, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else if (p.kind === "slash") {
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(s.x, s.y, p.size * 0.45, this.player.facing - 1.2, this.player.facing + 0.4);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(s.x, s.y, p.size * a, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  private drawFloats(ctx: CanvasRenderingContext2D) {
    ctx.font = "600 12px Figtree, sans-serif";
    ctx.textAlign = "center";
    for (const f of this.floats) {
      const s = this.w2s(f.x, f.y, 24);
      ctx.globalAlpha = clamp(f.life * 2, 0, 1);
      ctx.fillStyle = f.color;
      ctx.fillText(f.text, s.x, s.y);
    }
    ctx.globalAlpha = 1;
  }

  private drawVignette(ctx: CanvasRenderingContext2D, cw: number, ch: number) {
    const v = ctx.createRadialGradient(cw / 2, ch / 2, cw * 0.2, cw / 2, ch / 2, cw * 0.72);
    v.addColorStop(0, "rgba(0,0,0,0)");
    v.addColorStop(1, "rgba(8,7,11,0.55)");
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, cw, ch);
  }

  private emitHud() {
    const boss = this.enemies.find((e) => e.boss && !e.dead) ?? null;
    this.hooks.onHud({
      hp: this.player.hp,
      maxHp: this.player.maxHp,
      energy: this.player.energy,
      maxEnergy: this.player.maxEnergy,
      xp: this.character.xp,
      xpToNext: xpToNext(this.character.level),
      level: this.character.level,
      wave: this.wave,
      score: this.score,
      coins: this.character.coins,
      combo: this.combo,
      specialCd: this.player.specialCd,
      specialMax: 4.6,
      ultCd: this.player.ultCd,
      ultMax: 15,
      dashCd: this.player.dashCd,
      dashMax: 0.72,
      boss: boss ? { name: boss.name, hp: boss.hp, maxHp: boss.maxHp, phase: boss.phase } : null,
      banner: this.banner,
      paused: this.paused,
      over: !this.player.alive,
      victoryWave: this.clearing,
    });
  }

  private wireControlsTest() {
    if (typeof window === "undefined") return;
    window.__controlsTest = {
      getYaw: () => this.player.facing,
      getSpeed: () => Math.hypot(this.player.vx, this.player.vy),
      getX: () => this.player.x,
      getY: () => this.player.y,
      setKeys: (codes: string[]) => this.input.setKeys(codes),
      clearKeys: () => this.input.clearInjected(),
    };
  }
}

declare global {
  interface Window {
    __controlsTest?: {
      getYaw: () => number;
      getSpeed: () => number;
      getX: () => number;
      getY: () => number;
      setKeys: (codes: string[]) => void;
      clearKeys: () => void;
    };
  }
}

export type { PowerId };

export type AudioBus = "master" | "music" | "sfx";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let musicBus: GainNode | null = null;
let sfxBus: GainNode | null = null;
let musicNodes: OscillatorNode[] = [];
let musicStarted = false;
let volumes = { master: 0.8, music: 0.45, sfx: 0.75 };

function ensure(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC({ latencyHint: "interactive" });
    master = ctx.createGain();
    musicBus = ctx.createGain();
    sfxBus = ctx.createGain();
    musicBus.connect(master);
    sfxBus.connect(master);
    master.connect(ctx.destination);
    applyVolumes();
  }
  return ctx;
}

function applyVolumes() {
  if (!ctx || !master || !musicBus || !sfxBus) return;
  const t = ctx.currentTime;
  master.gain.setTargetAtTime(volumes.master * volumes.master, t, 0.03);
  musicBus.gain.setTargetAtTime(volumes.music * volumes.music, t, 0.05);
  sfxBus.gain.setTargetAtTime(volumes.sfx * volumes.sfx, t, 0.03);
}

export function unlockAudio(): void {
  const c = ensure();
  if (!c) return;
  if (c.state === "suspended") void c.resume();
}

export function setBusVolume(bus: AudioBus, value: number): void {
  volumes[bus] = Math.max(0, Math.min(1, value));
  applyVolumes();
}

export function resumeAudio(): void {
  const c = ensure();
  if (c && c.state === "suspended") void c.resume();
}

function envGain(duration: number, peak: number, attack = 0.01, release = 0.08): GainNode | null {
  if (!ctx || !sfxBus) return null;
  const g = ctx.createGain();
  const t = ctx.currentTime;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  g.connect(sfxBus);
  window.setTimeout(() => {
    try {
      g.disconnect();
    } catch {
      /* already gone */
    }
  }, (duration + release) * 1000 + 40);
  return g;
}

function tone(freq: number, type: OscillatorType, duration: number, peak: number, detune = 0) {
  if (!ctx) return;
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.value = freq;
  o.detune.value = detune;
  const g = envGain(duration, peak);
  if (!g) return;
  o.connect(g);
  o.start();
  o.stop(ctx.currentTime + duration);
}

function noise(duration: number, peak: number, hp = 400, lp = 2400) {
  if (!ctx) return;
  const n = Math.floor(ctx.sampleRate * duration);
  const buf = ctx.createBuffer(1, n, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < n; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = (hp + lp) / 2;
  filter.Q.value = 0.7;
  const g = envGain(duration, peak, 0.004, 0.05);
  if (!g) return;
  src.connect(filter);
  filter.connect(g);
  src.start();
}

export function sfx(kind: string): void {
  const c = ensure();
  if (!c || c.state !== "running") return;
  const jitter = 0.92 + Math.random() * 0.16;
  switch (kind) {
    case "slash":
      noise(0.09, 0.22, 1200, 4000);
      tone(420 * jitter, "sawtooth", 0.08, 0.07);
      break;
    case "heavy":
      noise(0.14, 0.3, 200, 900);
      tone(90 * jitter, "sine", 0.16, 0.22);
      tone(180 * jitter, "triangle", 0.1, 0.08);
      break;
    case "hit":
      noise(0.06, 0.18, 400, 1800);
      tone(140 * jitter, "square", 0.05, 0.08);
      break;
    case "dash":
      noise(0.12, 0.16, 600, 2200);
      tone(520 * jitter, "triangle", 0.1, 0.05);
      break;
    case "special":
      tone(220 * jitter, "sawtooth", 0.22, 0.1);
      tone(330 * jitter, "triangle", 0.28, 0.08);
      noise(0.18, 0.14, 300, 1600);
      break;
    case "ult":
      tone(55, "sine", 0.5, 0.28);
      tone(110, "sawtooth", 0.4, 0.1);
      noise(0.35, 0.22, 100, 800);
      break;
    case "hurt":
      tone(70, "sine", 0.18, 0.2);
      noise(0.12, 0.16, 200, 700);
      break;
    case "death":
      tone(48, "sine", 0.6, 0.24);
      tone(36, "triangle", 0.7, 0.12);
      break;
    case "wave":
      tone(196, "triangle", 0.25, 0.08);
      tone(247, "sine", 0.3, 0.06);
      break;
    case "boss":
      tone(40, "sine", 0.8, 0.3);
      tone(80, "sawtooth", 0.5, 0.08);
      break;
    case "level":
      tone(392, "sine", 0.18, 0.08);
      tone(523, "triangle", 0.22, 0.07);
      tone(659, "sine", 0.28, 0.05);
      break;
    case "awaken":
      tone(130, "sine", 0.8, 0.16);
      tone(196, "triangle", 1.0, 0.1);
      tone(261, "sine", 1.2, 0.08);
      noise(0.4, 0.1, 200, 1200);
      break;
    case "rank":
      tone(174, "sine", 0.4, 0.14);
      tone(261, "triangle", 0.5, 0.1);
      tone(349, "sine", 0.7, 0.08);
      break;
    case "ui":
      tone(640 * jitter, "sine", 0.05, 0.04);
      break;
    case "coin":
      tone(880 * jitter, "sine", 0.08, 0.05);
      tone(1320 * jitter, "triangle", 0.1, 0.03);
      break;
    case "block":
      noise(0.08, 0.12, 800, 2400);
      tone(300, "square", 0.04, 0.04);
      break;
    default:
      tone(300, "sine", 0.06, 0.04);
  }
}

export function startMusic(): void {
  const c = ensure();
  if (!c || !musicBus || musicStarted) return;
  if (c.state !== "running") return;
  musicStarted = true;
  const base = c.createOscillator();
  base.type = "sine";
  base.frequency.value = 55;
  const fifth = c.createOscillator();
  fifth.type = "sine";
  fifth.frequency.value = 82.5;
  const air = c.createOscillator();
  air.type = "triangle";
  air.frequency.value = 165;
  const g1 = c.createGain();
  g1.gain.value = 0.18;
  const g2 = c.createGain();
  g2.gain.value = 0.08;
  const g3 = c.createGain();
  g3.gain.value = 0.03;
  const lfo = c.createOscillator();
  lfo.frequency.value = 0.07;
  const lfoGain = c.createGain();
  lfoGain.gain.value = 8;
  lfo.connect(lfoGain);
  lfoGain.connect(air.frequency);
  base.connect(g1);
  fifth.connect(g2);
  air.connect(g3);
  g1.connect(musicBus);
  g2.connect(musicBus);
  g3.connect(musicBus);
  base.start();
  fifth.start();
  air.start();
  lfo.start();
  musicNodes = [base, fifth, air, lfo];
}

export function stopMusic(): void {
  for (const n of musicNodes) {
    try {
      n.stop();
      n.disconnect();
    } catch {
      /* already stopped */
    }
  }
  musicNodes = [];
  musicStarted = false;
}

import type { Character, LeaderboardEntry, SaveBlob, Settings } from "./types";
import { emptyUpgrades } from "./data";

const KEY = "aetherwake-save-v1";
const SAVE_VERSION = 1;

export const DEFAULT_SETTINGS: Settings = {
  master: 0.8,
  music: 0.45,
  sfx: 0.75,
  shake: 1,
  reducedMotion: false,
};

const DEFAULT_SAVE: SaveBlob = {
  version: SAVE_VERSION,
  character: null,
  settings: DEFAULT_SETTINGS,
  leaderboard: [],
  bestScore: 0,
};

function migrate(raw: SaveBlob): SaveBlob {
  const s: SaveBlob = {
    ...DEFAULT_SAVE,
    ...raw,
    settings: { ...DEFAULT_SETTINGS, ...raw.settings },
    leaderboard: Array.isArray(raw.leaderboard) ? raw.leaderboard : [],
    character: raw.character
      ? {
          ...raw.character,
          upgrades: { ...emptyUpgrades(), ...raw.character.upgrades },
          unlockedTitles: raw.character.unlockedTitles ?? ["New Awakening"],
        }
      : null,
    version: SAVE_VERSION,
  };
  return s;
}

export function loadSave(): SaveBlob {
  if (typeof window === "undefined") return structuredClone(DEFAULT_SAVE);
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULT_SAVE);
    const parsed = JSON.parse(raw) as SaveBlob;
    return migrate(parsed);
  } catch {
    return structuredClone(DEFAULT_SAVE);
  }
}

export function writeSave(blob: SaveBlob): void {
  if (typeof window === "undefined") return;
  try {
    const payload = JSON.stringify({ ...blob, version: SAVE_VERSION });
    window.localStorage.setItem(KEY, payload);
  } catch {
    /* private mode / quota */
  }
}

export function upsertLeaderboard(list: LeaderboardEntry[], entry: LeaderboardEntry): LeaderboardEntry[] {
  const next = [...list, entry].sort((a, b) => b.score - a.score).slice(0, 10);
  return next;
}

export function persistCharacter(character: Character | null, extra?: Partial<SaveBlob>): SaveBlob {
  const current = loadSave();
  const next: SaveBlob = { ...current, character, ...extra };
  writeSave(next);
  return next;
}

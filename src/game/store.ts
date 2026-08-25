import { create } from "zustand";
import type { Character, ClanId, LeaderboardEntry, PowerId, ScreenId, Settings, StatUpgrades } from "./types";
import { ABILITY_UPGRADE_COST, TITLES, UPGRADE_COST, abilityTier, xpToNext } from "./data";
import { createCharacter, liveStats, maybeRankUp } from "./awakening";
import { DEFAULT_SETTINGS, loadSave, persistCharacter, upsertLeaderboard, writeSave } from "./save";
import { setBusVolume, unlockAudio, startMusic, sfx } from "./audio";

interface Draft {
  name: string;
  nickname: string;
  clanId: ClanId;
  powers: PowerId[];
}

interface GameState {
  ready: boolean;
  screen: ScreenId;
  character: Character | null;
  settings: Settings;
  leaderboard: LeaderboardEntry[];
  bestScore: number;
  draft: Draft;
  lastRun: { score: number; wave: number; coins: number; xp: number; kills: number; bosses: number } | null;
  hydrate: () => void;
  setScreen: (s: ScreenId) => void;
  setDraft: (p: Partial<Draft>) => void;
  togglePower: (id: PowerId) => void;
  awaken: () => void;
  newGame: () => void;
  continueGame: () => void;
  saveNow: () => void;
  applyRun: (run: GameState["lastRun"]) => void;
  buyUpgrade: (key: keyof StatUpgrades) => boolean;
  upgradeAbility: () => boolean;
  setTitle: (title: string) => void;
  setSettings: (p: Partial<Settings>) => void;
  unlockFromRun: (c: Character) => Character;
}

const defaultDraft = (): Draft => ({
  name: "",
  nickname: "",
  clanId: "dragon",
  powers: [],
});

function applyAudio(s: Settings) {
  setBusVolume("master", s.master);
  setBusVolume("music", s.music);
  setBusVolume("sfx", s.sfx);
}

export const useGameStore = create<GameState>((set, get) => ({
  ready: false,
  screen: "title",
  character: null,
  settings: DEFAULT_SETTINGS,
  leaderboard: [],
  bestScore: 0,
  draft: defaultDraft(),
  lastRun: null,

  hydrate: () => {
    const save = loadSave();
    applyAudio(save.settings);
    set({
      ready: true,
      character: save.character,
      settings: save.settings,
      leaderboard: save.leaderboard,
      bestScore: save.bestScore,
    });
  },

  setScreen: (screen) => set({ screen }),

  setDraft: (p) => set({ draft: { ...get().draft, ...p } }),

  togglePower: (id) => {
    const powers = [...get().draft.powers];
    const i = powers.indexOf(id);
    if (i >= 0) powers.splice(i, 1);
    else if (powers.length < 3) powers.push(id);
    set({ draft: { ...get().draft, powers } });
    sfx("ui");
  },

  awaken: () => {
    const d = get().draft;
    if (d.powers.length !== 3) return;
    const character = createCharacter(d.name, d.clanId, d.nickname, d.powers as [PowerId, PowerId, PowerId]);
    persistCharacter(character);
    set({ character, screen: "awakening" });
    sfx("awaken");
  },

  newGame: () => {
    unlockAudio();
    startMusic();
    sfx("ui");
    set({ draft: defaultDraft(), screen: "identity", lastRun: null });
  },

  continueGame: () => {
    unlockAudio();
    startMusic();
    sfx("ui");
    if (get().character) set({ screen: "hub" });
  },

  saveNow: () => {
    const { character, settings, leaderboard, bestScore } = get();
    writeSave({ version: 1, character, settings, leaderboard, bestScore });
  },

  applyRun: (run) => {
    if (!run) return;
    let character = get().character;
    if (!character) return;
    character = get().unlockFromRun({
      ...character,
      highestWave: Math.max(character.highestWave, run.wave),
      bossesDefeated: character.bossesDefeated,
      bestScore: Math.max(character.bestScore, run.score),
    });
    character = maybeRankUp(character);
    const stats = liveStats(character);
    const entry: LeaderboardEntry = {
      name: character.name,
      clan: character.clanId,
      rank: character.rank,
      level: character.level,
      highestWave: character.highestWave,
      bossesDefeated: character.bossesDefeated,
      totalPower: stats.power,
      score: run.score,
      ability: character.ability.name,
      at: Date.now(),
    };
    const leaderboard = upsertLeaderboard(get().leaderboard, entry);
    const bestScore = Math.max(get().bestScore, run.score);
    persistCharacter(character, { leaderboard, bestScore });
    set({ character, leaderboard, bestScore, lastRun: run, screen: "gameover" });
  },

  unlockFromRun: (c) => {
    const titles = new Set(c.unlockedTitles);
    if (c.highestWave >= 5) titles.add("Clan Warrior");
    if (c.highestWave >= 20) titles.add("Wavebreaker");
    if (c.totalKills >= 10) titles.add("Elite Hunter");
    if (c.bossesDefeated >= 1) titles.add("Dragon Slayer");
    if (c.bossesDefeated >= 3) titles.add("Thronebreaker");
    if (c.abilityTierIndex >= 3) titles.add("Transcendent");
    if (c.coins >= 1200) titles.add("Essence Hoarder");
    if (c.rank === "SSS" || c.rank === "EX") titles.add("God's Chosen");
    return { ...c, unlockedTitles: [...titles] };
  },

  buyUpgrade: (key) => {
    const c = get().character;
    if (!c) return false;
    const lvl = c.upgrades[key];
    const cost = UPGRADE_COST[Math.min(UPGRADE_COST.length - 1, lvl)] ?? 9999;
    if (c.coins < cost || lvl >= 10) return false;
    const next: Character = {
      ...c,
      coins: c.coins - cost,
      upgrades: { ...c.upgrades, [key]: lvl + 1 },
    };
    persistCharacter(next);
    set({ character: next });
    sfx("coin");
    return true;
  },

  upgradeAbility: () => {
    const c = get().character;
    if (!c) return false;
    if (c.abilityTierIndex >= 3) return false;
    const cost = ABILITY_UPGRADE_COST[c.abilityTierIndex] ?? 9999;
    if (c.coins < cost) return false;
    let next: Character = {
      ...c,
      coins: c.coins - cost,
      abilityTierIndex: c.abilityTierIndex + 1,
    };
    if (next.abilityTierIndex >= 3) {
      next = { ...next, unlockedTitles: [...new Set([...next.unlockedTitles, "Transcendent"])] };
    }
    persistCharacter(next);
    set({ character: next });
    sfx("level");
    return true;
  },

  setTitle: (title) => {
    const c = get().character;
    if (!c || !c.unlockedTitles.includes(title)) return;
    const next = { ...c, title };
    persistCharacter(next);
    set({ character: next });
    sfx("ui");
  },

  setSettings: (p) => {
    const settings = { ...get().settings, ...p };
    applyAudio(settings);
    set({ settings });
    get().saveNow();
  },
}));

export { TITLES, abilityTier, xpToNext, liveStats };

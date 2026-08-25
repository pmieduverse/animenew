export const POWERS = [
  "fire",
  "ice",
  "lightning",
  "shadow",
  "wind",
  "earth",
  "water",
  "blood",
  "spirit",
  "time",
  "void",
  "light",
  "dragon",
  "demon",
  "gravity",
  "illusion",
] as const;

export type PowerId = (typeof POWERS)[number];

export const CLANS = [
  "dragon",
  "shadow",
  "spirit",
  "demon",
  "celestial",
  "storm",
  "abyss",
] as const;

export type ClanId = (typeof CLANS)[number];

export const RARITIES = [
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
  "Mythic",
  "Divine",
  "Transcendent",
] as const;

export type Rarity = (typeof RARITIES)[number];

export const RANKS = ["E", "D", "C", "B", "A", "S", "SS", "SSS", "EX"] as const;
export type Rank = (typeof RANKS)[number];

export const ABILITY_TIERS = ["Awakened", "Enhanced", "Ascended", "Transcendent"] as const;
export type AbilityTier = (typeof ABILITY_TIERS)[number];

export type CombatStyle =
  | "nova"
  | "projectile"
  | "beam"
  | "dashStrike"
  | "zone"
  | "cone"
  | "curse"
  | "pulse";

export interface PowerDef {
  id: PowerId;
  name: string;
  blurb: string;
  color: string;
  glow: string;
  tags: string[];
  style: CombatStyle;
  adj: string;
  noun: string;
  art: string;
  atk: number;
  def: number;
  spd: number;
  hp: number;
  energy: number;
  crit: number;
}

export interface ClanDef {
  id: ClanId;
  name: string;
  epithet: string;
  blurb: string;
  color: string;
  accent: string;
  aura: string;
  bonuses: string[];
  stats: Partial<Stats>;
}

export interface Stats {
  hp: number;
  energy: number;
  atk: number;
  def: number;
  spd: number;
  crit: number;
  power: number;
}

export interface UniqueAbility {
  name: string;
  type: string;
  element: string;
  rarity: Rarity;
  powerLevel: number;
  style: CombatStyle;
  color: string;
  description: string;
  synergy: number;
}

export interface Character {
  name: string;
  clanId: ClanId;
  nickname: string;
  powerIds: [PowerId, PowerId, PowerId];
  ability: UniqueAbility;
  rank: Rank;
  title: string;
  unlockedTitles: string[];
  level: number;
  xp: number;
  coins: number;
  upgrades: StatUpgrades;
  abilityTierIndex: number;
  auraStyle: string;
  highestWave: number;
  bossesDefeated: number;
  totalKills: number;
  bestScore: number;
  createdAt: number;
}

export interface StatUpgrades {
  hp: number;
  energy: number;
  atk: number;
  def: number;
  spd: number;
  crit: number;
}

export interface Settings {
  master: number;
  music: number;
  sfx: number;
  shake: number;
  reducedMotion: boolean;
}

export interface LeaderboardEntry {
  name: string;
  clan: string;
  rank: Rank;
  level: number;
  highestWave: number;
  bossesDefeated: number;
  totalPower: number;
  score: number;
  ability: string;
  at: number;
}

export interface BattleHud {
  hp: number;
  maxHp: number;
  energy: number;
  maxEnergy: number;
  xp: number;
  xpToNext: number;
  level: number;
  wave: number;
  score: number;
  coins: number;
  combo: number;
  specialCd: number;
  specialMax: number;
  ultCd: number;
  ultMax: number;
  dashCd: number;
  dashMax: number;
  boss: { name: string; hp: number; maxHp: number; phase: number } | null;
  banner: string | null;
  paused: boolean;
  over: boolean;
  victoryWave: boolean;
}

export type ScreenId =
  | "title"
  | "identity"
  | "powers"
  | "awakening"
  | "hub"
  | "character"
  | "abilities"
  | "shop"
  | "leaderboard"
  | "battle"
  | "gameover"
  | "settings";

export interface SaveBlob {
  version: number;
  character: Character | null;
  settings: Settings;
  leaderboard: LeaderboardEntry[];
  bestScore: number;
}

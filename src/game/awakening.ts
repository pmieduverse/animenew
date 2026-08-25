import { CLAN_DEFS, POWER_DEFS, RECIPES, AFFINITY, RARITY_COLOR, emptyUpgrades, computeStats } from "./data";
import { RANKS, RARITIES, type Character, type ClanId, type PowerId, type Rank, type Rarity, type UniqueAbility } from "./types";

export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let x = seed || 1;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return (x >>> 0) / 4294967296;
  };
}

function pairKey(a: string, b: string): string {
  return a < b ? `${a}+${b}` : `${b}+${a}`;
}

export function comboKey(ids: PowerId[]): string {
  return [...ids].sort().join("+");
}

function affinityScore(ids: PowerId[]): number {
  let score = 0;
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const a = ids[i]!;
      const b = ids[j]!;
      score += AFFINITY[pairKey(a, b)] ?? 4;
      const ta = new Set(POWER_DEFS[a].tags);
      const shared = POWER_DEFS[b].tags.filter((t) => ta.has(t)).length;
      score += shared * 3;
    }
  }
  const rare = ids.filter((id) => POWER_DEFS[id].tags.includes("rare")).length;
  score += rare * 8;
  const dark = ids.filter((id) => POWER_DEFS[id].tags.includes("dark")).length;
  if (dark === 3) score += 18;
  const elemental = ids.filter((id) => POWER_DEFS[id].tags.includes("elemental")).length;
  if (elemental === 3) score += 10;
  if (ids.includes("dragon") && ids.includes("demon") && ids.includes("void")) score += 28;
  if (ids.includes("time") && ids.includes("void")) score += 10;
  return score;
}

function pickRarity(score: number, roll: number, named?: Rarity): Rarity {
  let idx = 0;
  if (score >= 28) idx = 1;
  if (score >= 38) idx = 2;
  if (score >= 48) idx = 3;
  if (score >= 58) idx = 4;
  if (score >= 70) idx = 5;
  if (score >= 84) idx = 6;
  if (score >= 98) idx = 7;
  if (named) idx = Math.max(idx, RARITIES.indexOf(named));
  if (roll > 0.97 && score >= 50) idx = Math.min(7, idx + 2);
  else if (roll > 0.9 && score >= 36) idx = Math.min(7, idx + 1);
  return RARITIES[idx]!;
}

function pickRank(powerLevel: number, rarity: Rarity, roll: number): Rank {
  let idx = 0;
  if (powerLevel >= 30) idx = 1;
  if (powerLevel >= 38) idx = 2;
  if (powerLevel >= 46) idx = 3;
  if (powerLevel >= 54) idx = 4;
  if (powerLevel >= 64) idx = 5;
  if (powerLevel >= 74) idx = 6;
  if (powerLevel >= 84) idx = 7;
  if (powerLevel >= 93) idx = 8;
  const floor: Record<Rarity, number> = {
    Common: 0,
    Uncommon: 1,
    Rare: 2,
    Epic: 3,
    Legendary: 4,
    Mythic: 5,
    Divine: 6,
    Transcendent: 7,
  };
  idx = Math.max(idx, floor[rarity]);
  if (roll > 0.985 && rarityIndexSafe(rarity) >= 4) idx = 8;
  else if (roll > 0.94 && rarityIndexSafe(rarity) >= 5) idx = Math.max(idx, 7);
  return RANKS[Math.min(8, idx)]!;
}

function rarityIndexSafe(r: Rarity): number {
  return RARITIES.indexOf(r);
}

function proceduralName(ids: PowerId[], seed: number): { name: string; type: string; element: string } {
  const [a, b, c] = ids.map((id) => POWER_DEFS[id]);
  const forms = [
    `${a!.adj} ${b!.noun} ${c!.art}`,
    `${c!.adj} ${a!.noun}`,
    `${b!.noun} of ${a!.noun}`,
    `${a!.adj} ${c!.art}`,
    `${c!.adj} ${b!.noun} ${a!.art}`,
  ];
  const types = [a!.art, b!.art, c!.art, "Art", "Domain"];
  const element = `${a!.adj.replace(/al$/, "")}${b!.noun}`;
  return {
    name: forms[seed % forms.length]!,
    type: types[(seed >> 3) % types.length]!,
    element,
  };
}

function descriptionFor(name: string, ids: PowerId[]): string {
  const nouns = ids.map((id) => POWER_DEFS[id].noun.toLowerCase());
  return `${name} binds ${nouns[0]}, ${nouns[1]}, and ${nouns[2]} into a single awakened law.`;
}

export function awakenAbility(
  name: string,
  clanId: ClanId,
  powerIds: [PowerId, PowerId, PowerId],
): UniqueAbility {
  const key = comboKey(powerIds);
  const seed = hashString(`${name}|${clanId}|${key}`);
  const rand = rng(seed);
  const recipe = RECIPES[key];
  const synergy = affinityScore(powerIds);
  const named = recipe?.rarity;
  const rarity = pickRarity(synergy, rand(), named);
  const generated = recipe
    ? { name: recipe.name, type: recipe.type, element: recipe.element }
    : proceduralName(powerIds, seed);
  const style = POWER_DEFS[powerIds[0]!].style;
  const color = POWER_DEFS[powerIds[0]!].color;
  const powerLevel = Math.max(
    22,
    Math.min(
      99,
      Math.round(28 + rarityIndexSafe(rarity) * 8 + synergy * 0.35 + rand() * 8 + (recipe ? 6 : 0)),
    ),
  );
  return {
    name: generated.name,
    type: generated.type,
    element: generated.element,
    rarity,
    powerLevel,
    style,
    color,
    description: recipe?.description ?? descriptionFor(generated.name, powerIds),
    synergy,
  };
}

export function awakenRank(ability: UniqueAbility, name: string, clanId: ClanId): Rank {
  const seed = hashString(`${name}|${clanId}|${ability.name}|rank`);
  const rand = rng(seed);
  return pickRank(ability.powerLevel, ability.rarity, rand());
}

export function suggestedTitle(rank: Rank, powerIds: PowerId[], nickname: string): string {
  if (nickname.trim()) return nickname.trim();
  if (rank === "EX") return "God's Chosen";
  if (rank === "SSS") return "Void Dragon";
  if (powerIds.includes("void")) return "Void Walker";
  if (powerIds.includes("dragon")) return "Scaleborn";
  return "New Awakening";
}

export function createCharacter(
  name: string,
  clanId: ClanId,
  nickname: string,
  powerIds: [PowerId, PowerId, PowerId],
): Character {
  const ability = awakenAbility(name, clanId, powerIds);
  const rank = awakenRank(ability, name, clanId);
  const title = suggestedTitle(rank, powerIds, nickname);
  const unlocked = ["New Awakening"];
  if (title !== "New Awakening") unlocked.push(title);
  if (powerIds.includes("void")) unlocked.push("Void Walker");
  if (rank === "SSS" || rank === "EX") unlocked.push("God's Chosen");
  return {
    name: name.trim() || "Nameless",
    clanId,
    nickname: nickname.trim(),
    powerIds,
    ability,
    rank,
    title,
    unlockedTitles: [...new Set(unlocked)],
    level: 1,
    xp: 0,
    coins: 0,
    upgrades: emptyUpgrades(),
    abilityTierIndex: 0,
    auraStyle: CLAN_DEFS[clanId].aura,
    highestWave: 0,
    bossesDefeated: 0,
    totalKills: 0,
    bestScore: 0,
    createdAt: Date.now(),
  };
}

export function liveStats(c: Character) {
  return computeStats(
    c.clanId,
    c.powerIds,
    c.rank,
    c.level,
    c.upgrades,
    c.ability,
    c.abilityTierIndex,
  );
}

export function rarityColor(r: Rarity): string {
  return RARITY_COLOR[r];
}

export function maybeRankUp(c: Character): Character {
  const stats = liveStats(c);
  const idx = RANKS.indexOf(c.rank);
  const thresholds = [0, 140, 190, 250, 330, 430, 560, 740, 960];
  let next = idx;
  while (next < 8 && stats.power >= thresholds[next + 1]!) next += 1;
  if (next === idx) return c;
  return { ...c, rank: RANKS[next]! };
}

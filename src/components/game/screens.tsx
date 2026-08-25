import { CLAN_DEFS, POWER_DEFS, RANK_COLOR, RARITY_COLOR, UPGRADE_COST, ABILITY_UPGRADE_COST, TITLES, abilityTier, xpToNext } from "@/game/data";
import { liveStats } from "@/game/awakening";
import { CLANS, POWERS, type ClanId, type PowerId, type StatUpgrades } from "@/game/types";
import { useGameStore } from "@/game/store";
import { Btn, Field, Panel, RankMark, RarityMark, StatBar } from "./ui";
import { sfx } from "@/game/audio";
import { useEffect, useMemo, useState, type PointerEvent } from "react";
import { ChevronLeft } from "lucide-react";

export function TitleScreen() {
  const character = useGameStore((s) => s.character);
  const newGame = useGameStore((s) => s.newGame);
  const continueGame = useGameStore((s) => s.continueGame);
  const setScreen = useGameStore((s) => s.setScreen);

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 py-16">
      <p className="rise-in text-xs uppercase tracking-[0.42em] text-ash">Dark fantasy awakening</p>
      <h1 className="flare-in mt-4 font-display text-5xl font-semibold text-moon md:text-7xl">AETHERWAKE</h1>
      <p className="rise-in mt-4 max-w-md text-center text-sm text-ash" style={{ animationDelay: "80ms" }}>
        Three powers. One law. A rank written in the dark.
      </p>
      <div className="mt-10 flex w-full max-w-xs flex-col gap-3">
        {character && (
          <Btn onClick={continueGame}>
            Continue — {character.name}
          </Btn>
        )}
        <Btn variant={character ? "ghost" : "primary"} onClick={newGame}>
          New Awakening
        </Btn>
        <Btn variant="ghost" onClick={() => setScreen("leaderboard")}>
          Leaderboard
        </Btn>
        <Btn variant="ghost" onClick={() => setScreen("settings")}>
          Settings
        </Btn>
      </div>
      {character && (
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-ash">
          {character.ability.name} · Rank {character.rank} · Lv {character.level}
        </p>
      )}
    </div>
  );
}

export function IdentityScreen() {
  const draft = useGameStore((s) => s.draft);
  const setDraft = useGameStore((s) => s.setDraft);
  const setScreen = useGameStore((s) => s.setScreen);

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-5xl flex-col px-4 py-8 md:px-8">
      <button
        className="mb-6 flex min-h-11 items-center gap-2 self-start text-sm text-ash"
        onClick={() => setScreen("title")}
      >
        <ChevronLeft className="size-4" /> Back
      </button>
      <p className="text-xs uppercase tracking-[0.3em] text-ash">Step 1</p>
      <h2 className="mt-2 font-display text-4xl text-moon">Name the blade</h2>
      <p className="mt-2 max-w-xl text-sm text-ash">Your name and clan shape the first breath of the art.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Field label="Warrior name" value={draft.name} onChange={(name) => setDraft({ name })} placeholder="Kael" />
        <Field
          label="Title / nickname"
          value={draft.nickname}
          onChange={(nickname) => setDraft({ nickname })}
          placeholder="Optional"
        />
      </div>

      <p className="mt-8 text-xs uppercase tracking-[0.18em] text-ash">Clan</p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CLANS.map((id) => {
          const c = CLAN_DEFS[id];
          const on = draft.clanId === id;
          return (
            <button
              key={id}
              onClick={() => {
                setDraft({ clanId: id });
                sfx("ui");
              }}
              className="rounded-lg border p-4 text-left transition-opacity"
              style={{
                borderColor: on ? c.color : "var(--color-line)",
                background: on ? "color-mix(in oklab, var(--color-raised) 80%, transparent)" : "transparent",
              }}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display text-xl" style={{ color: c.color }}>
                  {c.name}
                </span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-ash">{c.epithet}</span>
              </div>
              <p className="mt-2 text-sm text-ash">{c.blurb}</p>
              <ul className="mt-3 space-y-1 text-xs text-moon/80">
                {c.bonuses.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <Btn disabled={!draft.name.trim()} onClick={() => setScreen("powers")}>
          Choose powers
        </Btn>
      </div>
    </div>
  );
}

export function PowersScreen() {
  const draft = useGameStore((s) => s.draft);
  const togglePower = useGameStore((s) => s.togglePower);
  const setScreen = useGameStore((s) => s.setScreen);
  const awaken = useGameStore((s) => s.awaken);

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-5xl flex-col px-4 py-8 md:px-8">
      <button
        className="mb-6 flex min-h-11 items-center gap-2 self-start text-sm text-ash"
        onClick={() => setScreen("identity")}
      >
        <ChevronLeft className="size-4" /> Back
      </button>
      <p className="text-xs uppercase tracking-[0.3em] text-ash">Step 2 · {draft.powers.length}/3</p>
      <h2 className="mt-2 font-display text-4xl text-moon">Bind three laws</h2>
      <p className="mt-2 max-w-xl text-sm text-ash">
        They will not remain separate. The awakening forges a unique art from their collision.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {POWERS.map((id) => {
          const p = POWER_DEFS[id];
          const on = draft.powers.includes(id);
          const locked = !on && draft.powers.length >= 3;
          return (
            <button
              key={id}
              disabled={locked}
              onClick={() => togglePower(id)}
              className="rounded-md border p-3 text-left min-h-24 disabled:opacity-35"
              style={{
                borderColor: on ? p.color : "var(--color-line)",
                boxShadow: on ? `inset 0 0 0 1px ${p.color}` : undefined,
              }}
            >
              <div className="h-1 w-8 rounded-full" style={{ background: p.color }} />
              <p className="mt-2 font-display text-lg text-moon">{p.name}</p>
              <p className="mt-1 text-[11px] leading-snug text-ash">{p.blurb}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <Btn disabled={draft.powers.length !== 3} onClick={awaken}>
          Awaken
        </Btn>
      </div>
    </div>
  );
}

export function AwakeningScreen() {
  const character = useGameStore((s) => s.character);
  const setScreen = useGameStore((s) => s.setScreen);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [900, 2200, 3600, 5000].map((ms, i) => window.setTimeout(() => setStep(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (step === 3) sfx("rank");
  }, [step]);

  if (!character) return null;
  const a = character.ability;

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-ash">Power synchronization</p>
      {step >= 0 && (
        <p className="flare-in mt-6 font-display text-2xl text-moon md:text-3xl">Your powers have synchronized…</p>
      )}
      {step >= 1 && (
        <div className="flare-in mt-10">
          <RarityMark rarity={a.rarity} />
          <h2 className="mt-2 font-display text-4xl text-moon md:text-6xl" style={{ color: a.color }}>
            {a.name}
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-ash">
            {a.type} · {a.element}
          </p>
        </div>
      )}
      {step >= 2 && (
        <div className="rise-in mt-8 grid grid-cols-3 gap-6 text-xs uppercase tracking-[0.16em] text-ash">
          <div>
            <p>Rarity</p>
            <p className="mt-1 text-moon" style={{ color: RARITY_COLOR[a.rarity] }}>
              {a.rarity}
            </p>
          </div>
          <div>
            <p>Power</p>
            <p className="mt-1 tabular text-moon">{a.powerLevel}</p>
          </div>
          <div>
            <p>Synergy</p>
            <p className="mt-1 tabular text-moon">{a.synergy}</p>
          </div>
        </div>
      )}
      {step >= 3 && (
        <div className="flare-in mt-12">
          <p className="text-xs uppercase tracking-[0.4em] text-ash">Power synchronization complete</p>
          <p className="mt-3 font-display text-6xl md:text-8xl" style={{ color: RANK_COLOR[character.rank] }}>
            RANK {character.rank}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-ash">Title · {character.title}</p>
        </div>
      )}
      {step >= 4 && (
        <div className="mt-12">
          <Btn onClick={() => setScreen("hub")}>Enter the world</Btn>
        </div>
      )}
    </div>
  );
}

export function HubScreen() {
  const c = useGameStore((s) => s.character);
  const setScreen = useGameStore((s) => s.setScreen);
  if (!c) return null;
  const stats = liveStats(c);
  const clan = CLAN_DEFS[c.clanId];

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-4xl flex-col px-4 py-10 md:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-ash">{clan.name}</p>
      <h2 className="mt-2 font-display text-4xl text-moon">{c.name}</h2>
      <p className="mt-1 text-sm text-ash">{c.title}</p>
      <div className="mt-4 flex flex-wrap items-end gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-ash">Rank</p>
          <RankMark rank={c.rank} />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-ash">Level</p>
          <p className="tabular text-2xl text-moon">{c.level}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-ash">Power</p>
          <p className="tabular text-2xl text-moon">{stats.power}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-ash">Essence</p>
          <p className="tabular text-2xl text-moon">{c.coins}</p>
        </div>
      </div>
      <p className="mt-6 font-display text-2xl" style={{ color: c.ability.color }}>
        {c.ability.name}
      </p>
      <p className="text-sm text-ash">{c.ability.description}</p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        <Btn onClick={() => setScreen("battle")}>Enter arena</Btn>
        <Btn variant="ghost" onClick={() => setScreen("character")}>
          Character
        </Btn>
        <Btn variant="ghost" onClick={() => setScreen("abilities")}>
          Arts & upgrades
        </Btn>
        <Btn variant="ghost" onClick={() => setScreen("leaderboard")}>
          Leaderboard
        </Btn>
        <Btn variant="ghost" onClick={() => setScreen("settings")}>
          Settings
        </Btn>
        <Btn variant="ghost" onClick={() => setScreen("title")}>
          Main menu
        </Btn>
      </div>
    </div>
  );
}

export function CharacterScreen() {
  const c = useGameStore((s) => s.character);
  const setScreen = useGameStore((s) => s.setScreen);
  const setTitle = useGameStore((s) => s.setTitle);
  if (!c) return null;
  const stats = liveStats(c);
  const clan = CLAN_DEFS[c.clanId];

  return (
    <div className="relative mx-auto min-h-dvh max-w-4xl px-4 py-8 md:px-8">
      <button className="mb-6 flex min-h-11 items-center gap-2 text-sm text-ash" onClick={() => setScreen("hub")}>
        <ChevronLeft className="size-4" /> Hub
      </button>
      <h2 className="font-display text-4xl text-moon">{c.name}</h2>
      <p className="text-sm text-ash">
        {clan.name} · {c.title}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Panel>
          <p className="text-xs uppercase tracking-[0.16em] text-ash">Identity</p>
          <dl className="mt-3 space-y-2 text-sm">
            <Row k="Rank" v={c.rank} />
            <Row k="Level" v={`${c.level}`} />
            <Row k="XP" v={`${c.xp} / ${xpToNext(c.level)}`} />
            <Row k="Highest wave" v={`${c.highestWave}`} />
            <Row k="Bosses" v={`${c.bossesDefeated}`} />
          </dl>
        </Panel>
        <Panel>
          <p className="text-xs uppercase tracking-[0.16em] text-ash">Combat</p>
          <dl className="mt-3 space-y-2 text-sm">
            <Row k="Health" v={`${stats.hp}`} />
            <Row k="Energy" v={`${stats.energy}`} />
            <Row k="Attack" v={`${stats.atk}`} />
            <Row k="Defense" v={`${stats.def}`} />
            <Row k="Speed" v={`${stats.spd}`} />
            <Row k="Crit" v={`${stats.crit}%`} />
            <Row k="Power" v={`${stats.power}`} />
          </dl>
        </Panel>
      </div>
      <Panel className="mt-3">
        <p className="text-xs uppercase tracking-[0.16em] text-ash">Unique ability</p>
        <p className="mt-2 font-display text-2xl" style={{ color: c.ability.color }}>
          {c.ability.name}
        </p>
        <p className="mt-1 text-sm text-ash">{c.ability.description}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-ash">
          {abilityTier(c.abilityTierIndex)} · {c.ability.type} · {c.ability.element} · {c.ability.rarity}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {c.powerIds.map((id) => (
            <span key={id} className="rounded-sm border border-line px-2 py-1 text-xs uppercase tracking-[0.12em]">
              {POWER_DEFS[id].name}
            </span>
          ))}
        </div>
      </Panel>
      <Panel className="mt-3">
        <p className="text-xs uppercase tracking-[0.16em] text-ash">Titles</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {c.unlockedTitles.map((t) => (
            <button
              key={t}
              onClick={() => setTitle(t)}
              className="min-h-11 rounded-sm border px-3 text-xs uppercase tracking-[0.12em]"
              style={{
                borderColor: c.title === t ? "var(--color-moon)" : "var(--color-line)",
                color: c.title === t ? "var(--color-moon)" : "var(--color-ash)",
              }}
            >
              {t}
            </button>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-ash">Still sealed: {TITLES.filter((t) => !c.unlockedTitles.includes(t.name)).map((t) => t.name).join(" · ") || "None"}</p>
      </Panel>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-ash">{k}</dt>
      <dd className="tabular text-moon">{v}</dd>
    </div>
  );
}

export function ShopScreen() {
  const c = useGameStore((s) => s.character);
  const setScreen = useGameStore((s) => s.setScreen);
  const buyUpgrade = useGameStore((s) => s.buyUpgrade);
  const upgradeAbility = useGameStore((s) => s.upgradeAbility);
  if (!c) return null;
  const keys: { key: keyof StatUpgrades; label: string }[] = [
    { key: "hp", label: "Health" },
    { key: "energy", label: "Energy" },
    { key: "atk", label: "Attack" },
    { key: "def", label: "Defense" },
    { key: "spd", label: "Speed" },
    { key: "crit", label: "Critical" },
  ];
  const ac = ABILITY_UPGRADE_COST[c.abilityTierIndex];

  return (
    <div className="relative mx-auto min-h-dvh max-w-3xl px-4 py-8 md:px-8">
      <button className="mb-6 flex min-h-11 items-center gap-2 text-sm text-ash" onClick={() => setScreen("hub")}>
        <ChevronLeft className="size-4" /> Hub
      </button>
      <h2 className="font-display text-4xl text-moon">Arts & upgrades</h2>
      <p className="mt-1 text-sm text-ash">Essence {c.coins}</p>
      <Panel className="mt-6">
        <p className="text-xs uppercase tracking-[0.16em] text-ash">Unique art</p>
        <p className="mt-2 font-display text-2xl">{c.ability.name}</p>
        <p className="text-sm text-ash">
          {abilityTier(c.abilityTierIndex)}
          {c.abilityTierIndex < 3 ? ` → ${abilityTier(c.abilityTierIndex + 1)}` : " · complete"}
        </p>
        {c.abilityTierIndex < 3 && (
          <Btn className="mt-4" disabled={c.coins < (ac ?? 0)} onClick={() => upgradeAbility()}>
            Upgrade · {ac} essence
          </Btn>
        )}
      </Panel>
      <div className="mt-3 grid gap-2">
        {keys.map(({ key, label }) => {
          const lvl = c.upgrades[key];
          const cost = UPGRADE_COST[Math.min(UPGRADE_COST.length - 1, lvl)] ?? 0;
          return (
            <div key={key} className="panel-tight flex items-center justify-between gap-3 px-4 py-3">
              <div>
                <p className="text-sm text-moon">{label}</p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-ash">Rank {lvl}/10</p>
              </div>
              <Btn
                variant="ghost"
                disabled={lvl >= 10 || c.coins < cost}
                onClick={() => buyUpgrade(key)}
                className="min-w-28"
              >
                {lvl >= 10 ? "Max" : `${cost}`}
              </Btn>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function LeaderboardScreen() {
  const list = useGameStore((s) => s.leaderboard);
  const best = useGameStore((s) => s.bestScore);
  const setScreen = useGameStore((s) => s.setScreen);
  const character = useGameStore((s) => s.character);
  const back = character ? "hub" : "title";

  return (
    <div className="relative mx-auto min-h-dvh max-w-3xl px-4 py-8 md:px-8">
      <button className="mb-6 flex min-h-11 items-center gap-2 text-sm text-ash" onClick={() => setScreen(back)}>
        <ChevronLeft className="size-4" /> Back
      </button>
      <h2 className="font-display text-4xl text-moon">Leaderboard</h2>
      <p className="mt-1 text-sm text-ash">Personal best {best}</p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-[11px] uppercase tracking-[0.14em] text-ash">
            <tr>
              <th className="pb-3 font-medium">#</th>
              <th className="pb-3 font-medium">Name</th>
              <th className="pb-3 font-medium">Clan</th>
              <th className="pb-3 font-medium">Rank</th>
              <th className="pb-3 font-medium">Lv</th>
              <th className="pb-3 font-medium">Wave</th>
              <th className="pb-3 font-medium">Bosses</th>
              <th className="pb-3 font-medium">Power</th>
              <th className="pb-3 font-medium">Score</th>
            </tr>
          </thead>
          <tbody>
            {list.length === 0 && (
              <tr>
                <td colSpan={9} className="py-8 text-ash">
                  No hunts recorded yet.
                </td>
              </tr>
            )}
            {list.map((e, i) => (
              <tr key={`${e.at}-${i}`} className="border-t border-line">
                <td className="py-3 tabular text-ash">{i + 1}</td>
                <td className="py-3">{e.name}</td>
                <td className="py-3 capitalize text-ash">{e.clan}</td>
                <td className="py-3" style={{ color: RANK_COLOR[e.rank] }}>
                  {e.rank}
                </td>
                <td className="py-3 tabular">{e.level}</td>
                <td className="py-3 tabular">{e.highestWave}</td>
                <td className="py-3 tabular">{e.bossesDefeated}</td>
                <td className="py-3 tabular">{e.totalPower}</td>
                <td className="py-3 tabular">{e.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SettingsScreen() {
  const settings = useGameStore((s) => s.settings);
  const setSettings = useGameStore((s) => s.setSettings);
  const setScreen = useGameStore((s) => s.setScreen);
  const character = useGameStore((s) => s.character);
  const back = character ? "hub" : "title";

  return (
    <div className="relative mx-auto min-h-dvh max-w-lg px-4 py-8 md:px-8">
      <button className="mb-6 flex min-h-11 items-center gap-2 text-sm text-ash" onClick={() => setScreen(back)}>
        <ChevronLeft className="size-4" /> Back
      </button>
      <h2 className="font-display text-4xl text-moon">Settings</h2>
      <div className="mt-8 space-y-6">
        <Slider label="Master" value={settings.master} onChange={(master) => setSettings({ master })} />
        <Slider label="Music" value={settings.music} onChange={(music) => setSettings({ music })} />
        <Slider label="Effects" value={settings.sfx} onChange={(sfxV) => setSettings({ sfx: sfxV })} />
        <Slider label="Screen shake" value={settings.shake} onChange={(shake) => setSettings({ shake })} />
        <label className="flex min-h-11 items-center justify-between gap-4">
          <span className="text-sm">Reduce motion</span>
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(e) => setSettings({ reducedMotion: e.target.checked })}
            className="size-5 accent-ember"
          />
        </label>
      </div>
      <p className="mt-10 text-xs leading-relaxed text-ash">
        Move WASD / stick · Aim mouse · J / tap slash · K heavy · Space dash · Shift block · Q special · R ultimate · Esc pause
      </p>
    </div>
  );
}

function Slider({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <label className="block">
      <span className="mb-2 flex justify-between text-xs uppercase tracking-[0.14em] text-ash">
        {label}
        <span className="tabular text-moon">{Math.round(value * 100)}</span>
      </span>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-moon"
      />
    </label>
  );
}

export function GameOverScreen() {
  const run = useGameStore((s) => s.lastRun);
  const setScreen = useGameStore((s) => s.setScreen);
  const c = useGameStore((s) => s.character);
  if (!run || !c) return null;
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-ash">The field goes still</p>
      <h2 className="mt-3 font-display text-5xl text-moon">Fallen</h2>
      <div className="mt-8 grid w-full max-w-sm grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-ash">Score</p>
          <p className="tabular text-xl">{run.score}</p>
        </div>
        <div>
          <p className="text-ash">Wave</p>
          <p className="tabular text-xl">{run.wave}</p>
        </div>
        <div>
          <p className="text-ash">Essence</p>
          <p className="tabular text-xl">+{run.coins}</p>
        </div>
        <div>
          <p className="text-ash">XP</p>
          <p className="tabular text-xl">+{run.xp}</p>
        </div>
      </div>
      <div className="mt-10 flex w-full max-w-xs flex-col gap-3">
        <Btn onClick={() => setScreen("battle")}>Fight again</Btn>
        <Btn variant="ghost" onClick={() => setScreen("hub")}>
          Return to hub
        </Btn>
        <Btn variant="ghost" onClick={() => setScreen("abilities")}>
          Spend essence
        </Btn>
      </div>
    </div>
  );
}

export function PauseMenu({
  onResume,
  onRestart,
}: {
  onResume: () => void;
  onRestart: () => void;
}) {
  const setScreen = useGameStore((s) => s.setScreen);
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-ink/70 px-4">
      <Panel className="w-full max-w-sm">
        <h3 className="font-display text-3xl text-moon">Paused</h3>
        <div className="mt-6 flex flex-col gap-3">
          <Btn onClick={onResume}>Resume</Btn>
          <Btn variant="ghost" onClick={() => setScreen("character")}>
            Character
          </Btn>
          <Btn variant="ghost" onClick={() => setScreen("abilities")}>
            Abilities
          </Btn>
          <Btn variant="ghost" onClick={() => setScreen("settings")}>
            Settings
          </Btn>
          <Btn variant="ghost" onClick={onRestart}>
            Restart battle
          </Btn>
          <Btn variant="ghost" onClick={() => setScreen("hub")}>
            Main menu
          </Btn>
        </div>
      </Panel>
    </div>
  );
}

export function BattleHudLayer({
  hud,
  onPause,
  onStick,
  onPress,
  onBlockHold,
}: {
  hud: import("@/game/types").BattleHud;
  onPause: () => void;
  onStick: (x: number, y: number) => void;
  onPress: (k: "attack" | "heavy" | "dash" | "block" | "special" | "ult") => void;
  onBlockHold: (v: boolean) => void;
}) {
  const c = useGameStore((s) => s.character);
  const coarse = useMemo(
    () =>
      typeof window !== "undefined"
        ? window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 820
        : false,
    [],
  );
  if (!c) return null;
  const clan = CLAN_DEFS[c.clanId];

  return (
    <div className="pointer-events-none absolute inset-0 z-10 p-3 md:p-5">
      <div className="pointer-events-auto flex flex-wrap items-start justify-between gap-2">
        <div className="panel-tight px-3 py-2">
          <p className="text-sm text-moon">{c.name}</p>
          <p className="text-xs uppercase tracking-[0.14em] text-ash">
            {clan.name} · <span style={{ color: RANK_COLOR[c.rank] }}>{c.rank}</span> · Lv {hud.level}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-display text-xl tabular text-moon md:text-2xl">WAVE {hud.wave}</p>
          {hud.boss && (
            <div className="mt-2 w-[min(68vw,420px)]">
              <p className="mb-1 text-center text-xs uppercase tracking-[0.16em] text-ash">
                {hud.boss.name} · Phase {hud.boss.phase}
              </p>
              <div className="hud-bar h-2">
                <span
                  style={{
                    width: `${(hud.boss.hp / hud.boss.maxHp) * 100}%`,
                    background: "var(--color-ember)",
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="panel-tight px-3 py-2 text-right">
          <p className="tabular text-sm text-moon">{hud.score}</p>
          <p className="text-xs uppercase tracking-[0.14em] text-ash">{hud.coins} essence</p>
          <button className="mt-1 min-h-8 text-xs uppercase tracking-[0.14em] text-ash" onClick={onPause}>
            Pause
          </button>
        </div>
      </div>

      {hud.banner && (
        <div className="pointer-events-none mt-8 text-center">
          <p className="flare-in font-display text-3xl text-moon md:text-5xl">{hud.banner}</p>
        </div>
      )}
      {hud.combo > 1 && (
        <p className="pointer-events-none mt-2 text-center font-display text-xl tabular text-moon">{hud.combo} HIT</p>
      )}

      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 md:bottom-5 md:left-5 md:right-5">
        <div className="flex items-end gap-3">
          {coarse && <Stick onStick={onStick} />}
          <div className="pointer-events-auto w-[min(46vw,240px)] space-y-2">
            <StatBar label="Health" value={hud.hp} max={hud.maxHp} color="var(--color-ember)" />
            <StatBar label="Energy" value={hud.energy} max={hud.maxEnergy} color="#c9d4c4" />
            <StatBar label="XP" value={hud.xp} max={hud.xpToNext} color="#d4c4a0" />
          </div>
        </div>
        <div className="pointer-events-auto grid grid-cols-3 gap-2">
          <Ability keyName="Dash" ready={hud.dashCd <= 0} onPress={() => onPress("dash")} />
          <Ability keyName="Slash" ready onPress={() => onPress("attack")} />
          <Ability keyName="Heavy" ready onPress={() => onPress("heavy")} />
          <Ability
            keyName="Block"
            ready
            onPress={() => onPress("block")}
            onHold={onBlockHold}
          />
          <Ability keyName="Art" ready={hud.specialCd <= 0} onPress={() => onPress("special")} />
          <Ability keyName="Ult" ready={hud.ultCd <= 0} onPress={() => onPress("ult")} />
        </div>
      </div>
    </div>
  );
}

function Ability({
  keyName,
  ready,
  onPress,
  onHold,
}: {
  keyName: string;
  ready: boolean;
  onPress: () => void;
  onHold?: (v: boolean) => void;
}) {
  return (
    <button
      className="ability-btn"
      data-ready={ready ? "true" : "false"}
      onPointerDown={(e) => {
        e.preventDefault();
        onPress();
        onHold?.(true);
      }}
      onPointerUp={() => onHold?.(false)}
      onPointerCancel={() => onHold?.(false)}
    >
      <span className="text-xs uppercase tracking-[0.12em]">{keyName}</span>
    </button>
  );
}

function Stick({ onStick }: { onStick: (x: number, y: number) => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width * 2 - 1;
    const y = (e.clientY - r.top) / r.height * 2 - 1;
    const m = Math.hypot(x, y) || 1;
    const nx = m > 1 ? x / m : x;
    const ny = m > 1 ? y / m : y;
    setPos({ x: nx, y: ny });
    onStick(nx, ny);
  };
  return (
    <div
      className="pointer-events-auto touch-stick relative size-28 rounded-full border border-line-strong bg-surface/70"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        move(e);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e);
      }}
      onPointerUp={() => {
        setPos({ x: 0, y: 0 });
        onStick(0, 0);
      }}
      onPointerCancel={() => {
        setPos({ x: 0, y: 0 });
        onStick(0, 0);
      }}
    >
      <div
        className="absolute left-1/2 top-1/2 size-10 rounded-full bg-moon/80"
        style={{ transform: `translate(calc(-50% + ${pos.x * 36}px), calc(-50% + ${pos.y * 36}px))` }}
      />
    </div>
  );
}

export function useHydrate() {
  const hydrate = useGameStore((s) => s.hydrate);
  const ready = useGameStore((s) => s.ready);
  useEffect(() => {
    hydrate();
  }, [hydrate]);
  return ready;
}

export type { ClanId, PowerId };

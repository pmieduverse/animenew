import { useEffect } from "react";
import { useGameStore } from "@/game/store";
import { resumeAudio, startMusic, unlockAudio } from "@/game/audio";
import { Atmosphere } from "./Atmosphere";
import { BattleView } from "./BattleView";
import {
  AwakeningScreen,
  CharacterScreen,
  GameOverScreen,
  HubScreen,
  IdentityScreen,
  LeaderboardScreen,
  PowersScreen,
  SettingsScreen,
  ShopScreen,
  TitleScreen,
  useHydrate,
} from "./screens";
import { CLAN_DEFS } from "@/game/data";

export function GameApp() {
  const ready = useHydrate();
  const screen = useGameStore((s) => s.screen);
  const character = useGameStore((s) => s.character);
  const saveNow = useGameStore((s) => s.saveNow);

  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === "hidden") saveNow();
      else resumeAudio();
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", saveNow);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", saveNow);
    };
  }, [saveNow]);

  useEffect(() => {
    const unlock = () => {
      unlockAudio();
      startMusic();
    };
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  if (!ready) {
    return (
      <div className="relative min-h-dvh overflow-x-hidden bg-ink text-moon">
        <Atmosphere accent="#c45c4a" />
        <div className="relative z-10">
          <TitleScreen />
        </div>
      </div>
    );
  }

  const accent = character ? CLAN_DEFS[character.clanId].aura : "#c45c4a";
  const battle = screen === "battle";

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-ink text-moon">
      {!battle && <Atmosphere accent={accent} />}
      {battle ? (
        <BattleView />
      ) : (
        <div className="relative z-10">
          {screen === "title" && <TitleScreen />}
          {screen === "identity" && <IdentityScreen />}
          {screen === "powers" && <PowersScreen />}
          {screen === "awakening" && <AwakeningScreen />}
          {screen === "hub" && <HubScreen />}
          {screen === "character" && <CharacterScreen />}
          {screen === "abilities" && <ShopScreen />}
          {screen === "leaderboard" && <LeaderboardScreen />}
          {screen === "settings" && <SettingsScreen />}
          {screen === "gameover" && <GameOverScreen />}
        </div>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { BattleGame } from "@/game/battle";
import type { BattleHud } from "@/game/types";
import { useGameStore } from "@/game/store";
import { BattleHudLayer, PauseMenu } from "./screens";
import { persistCharacter } from "@/game/save";

export function BattleView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<BattleGame | null>(null);
  const character = useGameStore((s) => s.character);
  const settings = useGameStore((s) => s.settings);
  const applyRun = useGameStore((s) => s.applyRun);
  const saveNow = useGameStore((s) => s.saveNow);
  const [hud, setHud] = useState<BattleHud | null>(null);
  const [paused, setPaused] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !character) return;
    const game = new BattleGame(canvas, structuredClone(character), {
      onHud: (h) => setHud(h),
      onPause: () => {
        setPaused(true);
        game.setPaused(true);
      },
      onOver: (result) => {
        useGameStore.setState({ character: game.character });
        persistCharacter(game.character);
        applyRun(result);
      },
      onCharacter: (c) => {
        useGameStore.setState({ character: c });
        persistCharacter(c);
      },
    }, { reduced: settings.reducedMotion, shake: settings.shake });
    gameRef.current = game;
    game.start();
    const onResize = () => game.resize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      game.destroy();
      gameRef.current = null;
      saveNow();
    };
  }, [character?.createdAt, key]);

  useEffect(() => {
    gameRef.current?.setPaused(paused);
  }, [paused]);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-ink" style={{ touchAction: "none" }}>
      <canvas ref={canvasRef} className="block h-full w-full" />
      {hud && (
        <BattleHudLayer
          hud={hud}
          onPause={() => {
            setPaused(true);
            gameRef.current?.setPaused(true);
          }}
          onStick={(x, y) => gameRef.current?.setStick(x, y)}
          onPress={(k) => gameRef.current?.press(k)}
          onBlockHold={(v) => gameRef.current?.holdBlock(v)}
        />
      )}
      {paused && (
        <PauseMenu
          onResume={() => {
            setPaused(false);
            gameRef.current?.setPaused(false);
          }}
          onRestart={() => {
            setPaused(false);
            setHud(null);
            setKey((k) => k + 1);
          }}
        />
      )}
    </div>
  );
}

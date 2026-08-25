import type { ReactNode } from "react";
import type { Rank, Rarity } from "@/game/types";
import { RANK_COLOR, RARITY_COLOR } from "@/game/data";
import { clsx } from "clsx";

export function Btn({
  children,
  onClick,
  variant = "primary",
  disabled,
  className,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "danger";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  const base =
    "min-h-11 px-5 text-sm font-medium tracking-wide transition-opacity duration-150 disabled:opacity-40";
  const styles =
    variant === "primary"
      ? "bg-moon text-ink rounded-sm hover:opacity-90"
      : variant === "danger"
        ? "border border-ember text-ember rounded-md hover:bg-ember/10"
        : "border border-line text-moon rounded-md hover:bg-raised";
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={clsx(base, styles, className)}>
      {children}
    </button>
  );
}

export function RankMark({ rank, size = "md" }: { rank: Rank; size?: "sm" | "md" | "xl" }) {
  const cls = size === "xl" ? "text-5xl md:text-7xl" : size === "sm" ? "text-sm" : "text-xl";
  return (
    <span className={clsx("font-display font-semibold tabular tracking-wide", cls)} style={{ color: RANK_COLOR[rank] }}>
      {rank}
    </span>
  );
}

export function RarityMark({ rarity }: { rarity: Rarity }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: RARITY_COLOR[rarity] }}>
      {rarity}
    </span>
  );
}

export function Field({
  label,
  value,
  onChange,
  placeholder,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ash">{label}</span>
      <input
        value={value}
        maxLength={maxLength ?? 24}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-md border border-line bg-raised px-3 text-moon outline-none placeholder:text-ash/60 focus:border-line-strong"
      />
    </label>
  );
}

export function StatBar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  const pct = max <= 0 ? 0 : Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div>
      <div className="mb-1 flex justify-between text-[11px] uppercase tracking-[0.14em] text-ash">
        <span>{label}</span>
        <span className="tabular text-moon">
          {Math.round(value)}/{Math.round(max)}
        </span>
      </div>
      <div className="hud-bar">
        <span style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("panel p-5 md:p-6", className)}>{children}</div>;
}

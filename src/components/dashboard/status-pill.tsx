export type PillColor = "amber" | "red" | "green";

const COLOR_BORDER: Record<PillColor, string> = {
  amber: "border-[rgba(255,171,64,0.4)]",
  red: "border-[rgba(255,73,93,0.4)]",
  green: "border-[rgba(68,218,149,0.4)]",
};

export function StatusPill({ label, color }: { label: string; color: PillColor }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border px-2.5 py-[5px] font-mono-space text-[11px] text-muted-foreground ${COLOR_BORDER[color]}`}
    >
      {label}
    </span>
  );
}

type Mode = "dark" | "amber";

const MODE_CLASSES: Record<Mode, string> = {
  dark: "bg-background text-foreground hover:bg-white hover:text-background active:bg-[#d1d1d1] active:text-background",
  amber:
    "bg-[#ffab40] text-background hover:bg-[#ffae46] active:bg-[#d18c34]",
};

const CIRCLE_CLASSES: Record<Mode, string> = {
  dark: "bg-white text-background group-hover:bg-background group-hover:text-white",
  amber: "bg-background text-white",
};

export function AdvanceButton({
  label,
  mode = "dark",
  onClick,
}: {
  label: string;
  mode?: Mode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex h-10 cursor-pointer items-center gap-3 rounded-full py-1 pl-5 pr-1 border border-transparent transition-colors hover:border-white/18 hover:shadow-[0px_6px_10px_rgba(0,0,0,0.35)] active:border-white/14 active:shadow-none ${MODE_CLASSES[mode]}`}
    >
      <span className="font-mono-space text-sm">{label}</span>
      <span
        className={`flex size-8 items-center justify-center rounded-full transition-colors ${CIRCLE_CLASSES[mode]}`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 12L10 8L6 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

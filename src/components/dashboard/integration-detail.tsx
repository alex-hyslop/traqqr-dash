import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AdvanceButton } from "@/components/dashboard/advance-button";
import { StatusPill, type PillColor } from "@/components/dashboard/status-pill";

export function IntegrationDetail({
  icon,
  name,
  status,
  statusColor,
  subtitle,
  emptyStateHeading,
  emptyStateDescription,
  ctaLabel,
  ctaMode = "dark",
}: {
  icon: string;
  name: string;
  status: string;
  statusColor: PillColor;
  subtitle: string;
  emptyStateHeading: string;
  emptyStateDescription: ReactNode;
  ctaLabel: string;
  ctaMode?: "dark" | "amber";
}) {
  return (
    <main className="relative flex w-full flex-col px-4 py-6 md:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-px top-[85px] h-[811px] w-full max-w-[1200px] blur-[150px]"
        style={{
          backgroundImage:
            "linear-gradient(227.83deg, rgba(56,189,248,0.1) 23.935%, rgba(255,171,64,0.42) 42.214%, rgb(3,7,18) 72.883%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-px top-[85px] h-[811px] w-full max-w-[1200px]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <nav className="relative flex items-center gap-2 pt-6 font-mono-space text-xs">
        <Link
          href="/integrations"
          className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
        >
          Integrations
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-foreground">{name}</span>
      </nav>

      <div className="relative flex flex-col gap-[18px] pt-[30px]">
        <div className="flex items-center gap-4">
          <Image src={icon} alt="" width={56} height={56} />
          <div className="flex items-center gap-[22px]">
            <h1 className="text-3xl font-medium leading-9 tracking-[-1px] text-foreground">
              {name}
            </h1>
            <StatusPill label={status} color={statusColor} />
          </div>
        </div>
        <p className="font-mono-space text-sm leading-5 text-muted-foreground">{subtitle}</p>
      </div>

      <div className="relative flex flex-col items-stretch gap-6 pt-8 md:flex-row md:pt-[52px]">
        <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-[14px] border border-border bg-[rgba(3,7,18,0.5)] px-4 py-12 md:py-16">
          <p className="text-xl font-semibold leading-[30px] text-foreground">
            {emptyStateHeading}
          </p>
          <p className="w-full max-w-[500px] text-center text-sm leading-6 text-muted-foreground">
            {emptyStateDescription}
          </p>
          <AdvanceButton label={ctaLabel} mode={ctaMode} />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-[14px] border border-border bg-[rgba(16,27,39,0.5)] px-4 py-8">
          <p className="text-xl font-semibold leading-[30px] text-foreground">
            Need help connecting {name}?
          </p>
          <p className="w-full max-w-[420px] text-center text-sm leading-6 text-muted-foreground">
            Follow the setup guide for this integration, or reach out to support if you get stuck
            along the way.
          </p>
          <button
            type="button"
            className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-5"
          >
            <span className="font-mono-space text-sm text-[#ffab40]">View documentation</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 12L10 8L6 4"
                stroke="#ffab40"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}

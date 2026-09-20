import Image from "next/image";
import Link from "next/link";
import { StatusPill } from "@/components/dashboard/status-pill";

export default function FacebookDetailPage() {
  return (
    <main className="relative flex w-full flex-col px-16 py-6">
      <div
        aria-hidden
        className="pointer-events-none absolute left-px top-[85px] h-[811px] w-[1200px] blur-[150px]"
        style={{
          backgroundImage:
            "linear-gradient(227.83deg, rgba(56,189,248,0.1) 23.935%, rgba(255,171,64,0.42) 42.214%, rgb(3,7,18) 72.883%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-px top-[85px] h-[811px] w-[1200px]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <nav className="relative flex items-center gap-2 pt-6 font-mono-space text-xs">
        <Link href="/integrations" className="cursor-pointer text-muted-foreground">
          Integrations
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-foreground">Facebook</span>
      </nav>

      <div className="relative flex flex-col gap-[18px] pt-[30px]">
        <div className="flex items-center gap-4">
          <Image src="/brand/facebook.svg" alt="" width={56} height={56} />
          <div className="flex items-center gap-[22px]">
            <h1 className="text-3xl font-medium leading-9 tracking-[-1px] text-foreground">
              Facebook
            </h1>
            <StatusPill label="Not connected" color="red" />
          </div>
        </div>
        <p className="font-mono-space text-sm leading-5 text-muted-foreground">
          OAuth install and ad-account selection for Meta conversion attribution.
        </p>
      </div>

      <div className="relative flex items-stretch gap-6 pt-[52px]">
        <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-[14px] border border-border bg-[rgba(3,7,18,0.5)] px-4 py-16">
          <p className="text-xl font-semibold leading-[30px] text-foreground">
            No Facebook Pixels yet
          </p>
          <p className="w-[500px] text-center text-sm leading-6 text-muted-foreground">
            Create a pixel credential here. Then link it to a site from the
            <br />
            Site detail page to start server-side event forwarding.
          </p>
          <button
            type="button"
            className="flex h-10 cursor-pointer items-center gap-3 rounded-full bg-background py-1 pl-5 pr-1 transition-colors hover:bg-[rgba(255,255,255,0.06)]"
          >
            <span className="font-mono-space text-sm text-foreground">Connect Pixel</span>
            <span className="flex size-8 items-center justify-center rounded-full bg-white">
              <Image src="/icons/chevron-right-dark.svg" alt="" width={16} height={16} />
            </span>
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-[14px] border border-border bg-[rgba(16,27,39,0.5)] py-8">
          <p className="text-xl font-semibold leading-[30px] text-foreground">
            Need help connecting Facebook?
          </p>
          <p className="w-[420px] text-center text-sm leading-6 text-muted-foreground">
            Follow the setup guide for this integration, or reach out to support if you get stuck
            along the way.
          </p>
          <button
            type="button"
            className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-5"
          >
            <span className="font-mono-space text-sm text-[#ffab40]">View documentation</span>
            <Image src="/icons/chevron-right-amber.svg" alt="" width={16} height={16} />
          </button>
        </div>
      </div>
    </main>
  );
}

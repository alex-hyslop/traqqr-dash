import Image from "next/image";
import { AdvanceButton } from "@/components/dashboard/advance-button";

export default function SitesPage() {
  return (
    <main className="relative flex w-full flex-col gap-8 px-6 pb-6 pt-9">
      <div
        aria-hidden
        className="pointer-events-none absolute left-px top-[25px] h-[811px] w-[1200px] blur-[150px]"
        style={{
          backgroundImage:
            "linear-gradient(227.83deg, rgba(56,189,248,0.1) 23.935%, rgba(255,171,64,0.42) 42.214%, rgb(3,7,18) 72.883%)",
        }}
      />

      <div className="relative flex flex-col gap-1.5 px-8">
        <h1 className="text-3xl font-medium leading-9 tracking-[-1px] text-foreground">Sites</h1>
        <p className="text-xs leading-4 text-muted-foreground">
          Manage your tracking sites and their configuration.
        </p>
      </div>

      <div className="relative flex flex-col items-center gap-5 pt-[90px]">
        <span className="flex size-16 items-center justify-center rounded-full bg-white/[0.06]">
          <Image src="/icons/sites-globe.svg" alt="" width={35} height={34} />
        </span>
        <p className="text-lg font-semibold text-foreground">No sites yet</p>
        <p className="w-[360px] text-center text-sm text-muted-foreground">
          Create your first site to start tracking events and conversions.
        </p>
        <AdvanceButton label="Create your first site" mode="amber" />
      </div>
    </main>
  );
}

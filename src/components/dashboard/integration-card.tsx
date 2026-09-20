import Image from "next/image";
import type { ReactNode } from "react";
import { StatusPill, type PillColor } from "@/components/dashboard/status-pill";

export type Integration = {
  name: string;
  description: ReactNode;
  icon: string;
  status: string;
  statusColor: PillColor;
};

export function IntegrationCard({ name, description, icon, status, statusColor }: Integration) {
  return (
    <button
      type="button"
      className="flex h-[182px] w-full flex-col gap-4 rounded-[14px] border border-border bg-card p-5 text-left transition-[background-color,border-color,box-shadow] hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.06)] hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.35)] active:border-[rgba(255,255,255,0.14)] active:bg-[rgba(0,0,0,0.18)] active:shadow-none"
    >
      <div className="flex w-full items-center justify-between">
        <div
          className="flex size-14 items-center justify-center overflow-hidden rounded-[14px] border border-[#3d372e]"
          style={{
            backgroundImage:
              "linear-gradient(-56.73deg, rgba(56,189,248,0.076) 20.104%, rgba(255,171,64,0.319) 85.775%)",
          }}
        >
          <Image src={icon} alt="" width={56} height={56} />
        </div>
        <div className="flex items-center gap-2.5">
          <StatusPill label={status} color={statusColor} />
          <Image src="/icons/chevron-right.svg" alt="" width={18} height={18} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-base font-medium leading-6 text-foreground">{name}</p>
        <p className="text-xs leading-[18px] text-muted-foreground">{description}</p>
      </div>
    </button>
  );
}

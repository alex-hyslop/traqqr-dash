"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { NAV_ITEMS } from "@/lib/nav";

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-[#0f1117]">
      <div className="flex items-center border-b border-[rgba(255,255,255,0.06)] px-[22px] py-5">
        <Image src="/icons/logo.svg" alt="Traqqr.ai" width={164} height={44} priority />
      </div>

      <nav className="flex flex-1 flex-col gap-[2px] overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const isActive = !!item.href && pathname.startsWith(item.href);
          const Icon = item.icon;
          const content = (
            <>
              {isActive && (
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-[10px] border-t border-[rgba(255,255,255,0.14)] bg-gradient-to-b from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.03)] via-40% to-transparent"
                />
              )}
              <Icon
                width={18}
                height={18}
                className={`relative shrink-0 ${isActive ? "text-[#ffb74d]" : "text-[#90a1b9]"}`}
              />
              <span
                className={`relative text-base leading-6 ${
                  isActive ? "font-semibold text-[#f9fafb]" : "font-medium text-[#d1d5db]"
                }`}
              >
                {item.label}
              </span>
            </>
          );

          const baseClassName = `relative flex h-[41px] items-center gap-[13px] rounded-[10px] px-[13px] py-[9px] ${
            isActive ? "bg-white/8" : ""
          }`;

          return item.href ? (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className={`${baseClassName} cursor-pointer transition-colors ${
                isActive ? "" : "hover:bg-white/5"
              }`}
            >
              {content}
            </Link>
          ) : (
            <div key={item.label} className={`${baseClassName} cursor-default`}>
              {content}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-[rgba(255,255,255,0.06)] px-3 py-4">
        <div className="flex items-center gap-3 rounded-[10px] px-3 py-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
            <Avatar className="size-8">
              <AvatarImage src="/avatars/user-08.png" alt="Tim. G" />
              <AvatarFallback>TG</AvatarFallback>
            </Avatar>
          </span>
          <div className="flex w-[105px] flex-col">
            <p className="text-sm font-semibold leading-5 text-[#cad5e2]">Tim. G</p>
            <p className="font-mono-space text-sm leading-4 text-[#90a1b9]">Admin</p>
          </div>
          <Image src="/icons/chevron-down.svg" alt="" width={14} height={14} />
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-[216px] shrink-0 border-r border-[rgba(255,255,255,0.06)] md:flex">
      <SidebarContent />
    </aside>
  );
}

export { SidebarContent };

"use client";

import { SidebarContent } from "@/components/dashboard/sidebar";
import { SlideOver } from "@/components/ui/slide-over";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <SlideOver open={open} onClose={onClose} side="left" widthClassName="w-[216px]">
      <SidebarContent onNavigate={onClose} />
    </SlideOver>
  );
}

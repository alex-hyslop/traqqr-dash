"use client";

import { useState } from "react";
import { Sidebar, SidebarContent } from "@/components/dashboard/sidebar";
import { TopBar } from "@/components/dashboard/topbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen w-full items-start overflow-hidden">
      <Sidebar />
      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="w-[216px] gap-0 border-none bg-[#0f1117] p-0 sm:max-w-[216px]">
          <SidebarContent onNavigate={() => setMobileNavOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="flex h-screen flex-1 flex-col overflow-y-auto">
        <TopBar onMenuClick={() => setMobileNavOpen(true)} />
        {children}
      </div>
    </div>
  );
}

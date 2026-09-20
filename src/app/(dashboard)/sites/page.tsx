"use client";

import Image from "next/image";
import { useState } from "react";
import { AdvanceButton } from "@/components/dashboard/advance-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function SitesPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative flex w-full flex-col gap-8 px-4 pb-6 pt-6 md:px-6 md:pt-9">
      <div
        aria-hidden
        className="pointer-events-none absolute left-px top-[25px] h-[811px] w-full max-w-[1200px] blur-[150px]"
        style={{
          backgroundImage:
            "linear-gradient(227.83deg, rgba(56,189,248,0.1) 23.935%, rgba(255,171,64,0.42) 42.214%, rgb(3,7,18) 72.883%)",
        }}
      />

      <div className="relative flex flex-col gap-1.5 md:px-8">
        <h1 className="text-3xl font-medium leading-9 tracking-[-1px] text-foreground">Sites</h1>
        <p className="text-xs leading-4 text-muted-foreground">
          Manage your tracking sites and their configuration.
        </p>
      </div>

      <div className="relative flex flex-col items-center gap-5 pt-[26px]">
        <span className="flex size-16 items-center justify-center rounded-full bg-white/[0.06]">
          <Image src="/icons/sites-globe.svg" alt="" width={35} height={34} />
        </span>
        <p className="text-lg font-semibold text-foreground">No sites yet</p>
        <p className="w-full max-w-[360px] text-center text-sm text-muted-foreground">
          Create your first site to start tracking events and conversions.
        </p>
        <AdvanceButton label="Create your first site" mode="amber" onClick={() => setOpen(true)} />
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-full gap-6 p-6 sm:max-w-[460px] md:p-8">
          <SheetHeader className="gap-2 p-0">
            <SheetTitle className="text-xl font-semibold text-foreground">Create Site</SheetTitle>
          </SheetHeader>
          <p className="text-sm leading-6 text-muted-foreground">
            Add a new site to start tracking events and conversions.
          </p>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="site-name" className="text-sm text-muted-foreground">
              Name
            </Label>
            <Input id="site-name" placeholder="My Website" className="h-9" />
            <p className="text-xs text-muted-foreground">A friendly name for your site.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="site-domains" className="text-sm text-muted-foreground">
              Allowed Domains
            </Label>
            <Textarea
              id="site-domains"
              placeholder="example.com, www.example.com, localhost"
              className="h-20 resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Comma-separated list of domains allowed to send events.
            </p>
          </div>

          <SheetFooter className="mt-0 flex-row justify-end p-0">
            <AdvanceButton label="Create Site" mode="amber" onClick={() => setOpen(false)} />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </main>
  );
}

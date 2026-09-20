import Image from "next/image";
import { Menu } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function TopBar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
      <div className="flex items-center gap-3 md:hidden">
        <button
          type="button"
          aria-label="Open menu"
          onClick={onMenuClick}
          className="flex cursor-pointer items-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#f3f4f6]/80 active:bg-[#f3f4f6]"
        >
          <Menu size={20} />
        </button>
        <Image src="/icons/logo.svg" alt="Traqqr.ai" width={105} height={28} />
      </div>

      <div className="hidden w-[193px] md:block">
        <div className="relative">
          <Image
            src="/icons/search.svg"
            alt=""
            width={16}
            height={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
          />
          <Input placeholder="Search" className="h-9 rounded-lg pl-9 text-sm" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-[#f3f4f6]/80 active:bg-[#f3f4f6]"
        >
          <Image src="/icons/bell.svg" alt="" width={16} height={16} />
          <span className="absolute right-2 top-[5px] size-2 rounded-full border border-background bg-destructive" />
        </button>
        <Avatar className="size-8">
          <AvatarImage src="/avatars/user-08.png" alt="Tim. G" />
          <AvatarFallback>TG</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

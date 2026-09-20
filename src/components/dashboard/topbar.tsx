import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
      <div className="w-[193px]">
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
        <div className="relative flex items-center rounded-lg p-2">
          <Image src="/icons/bell.svg" alt="Notifications" width={16} height={16} />
          <span className="absolute right-2 top-[5px] size-2 rounded-full border border-background bg-destructive" />
        </div>
        <Avatar className="size-8">
          <AvatarImage src="/avatars/user-08.png" alt="Tim. G" />
          <AvatarFallback>TG</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

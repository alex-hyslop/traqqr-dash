import { Sidebar } from "@/components/dashboard/sidebar";
import { TopBar } from "@/components/dashboard/topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full items-start overflow-hidden">
      <Sidebar />
      <div className="flex h-screen flex-1 flex-col overflow-y-auto">
        <TopBar />
        {children}
      </div>
    </div>
  );
}

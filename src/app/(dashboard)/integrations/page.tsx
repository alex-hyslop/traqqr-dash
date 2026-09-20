import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCard } from "@/components/dashboard/integration-card";
import { INTEGRATIONS } from "@/lib/integrations";

export default function IntegrationsPage() {
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

      <div className="relative flex items-center justify-between px-8">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-medium leading-9 tracking-[-1px] text-foreground">
            Integrations
          </h1>
          <p className="text-xs leading-4 text-muted-foreground">
            Connect and manage your marketing and analytics integrations.
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <p className="text-xs leading-[18px] text-muted-foreground">Filter Status</p>
          <Tabs defaultValue="all">
            <TabsList className="h-auto gap-0 rounded-lg bg-muted p-[3px]">
              <TabsTrigger
                value="all"
                className="rounded-md px-3 py-1.5 font-mono-space text-xs text-muted-foreground data-active:bg-foreground data-active:text-[#080809]"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="connected"
                className="rounded-md px-3 py-1.5 font-mono-space text-xs text-muted-foreground data-active:bg-foreground data-active:text-[#080809]"
              >
                Connected
              </TabsTrigger>
              <TabsTrigger
                value="not-connected"
                className="rounded-md px-3 py-1.5 font-mono-space text-xs text-muted-foreground data-active:bg-foreground data-active:text-[#080809]"
              >
                Not Connected
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {INTEGRATIONS.map((integration) => (
          <IntegrationCard key={integration.name} {...integration} />
        ))}
      </div>
    </main>
  );
}

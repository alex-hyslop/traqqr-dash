"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCard } from "@/components/dashboard/integration-card";
import { INTEGRATIONS } from "@/lib/integrations";

type Filter = "all" | "connected" | "not-connected";

export default function IntegrationsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const visibleIntegrations = INTEGRATIONS.filter((integration) => {
    const isConnected = integration.statusColor === "green";
    if (filter === "connected") return isConnected;
    if (filter === "not-connected") return !isConnected;
    return true;
  });

  return (
    <main className="relative flex w-full flex-col gap-6 px-4 pb-6 pt-6 md:gap-8 md:px-6 md:pt-9">
      <div
        aria-hidden
        className="pointer-events-none absolute left-px top-[25px] h-[811px] w-full max-w-[1200px] blur-[150px]"
        style={{
          backgroundImage:
            "linear-gradient(227.83deg, rgba(56,189,248,0.1) 23.935%, rgba(255,171,64,0.42) 42.214%, rgb(3,7,18) 72.883%)",
        }}
      />

      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-medium leading-9 tracking-[-1px] text-foreground">
            Integrations
          </h1>
          <p className="text-xs leading-4 text-muted-foreground">
            Connect and manage your marketing and analytics integrations.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <p className="text-xs leading-[18px] text-muted-foreground">Filter Status</p>
          <Tabs
            value={filter}
            onValueChange={(value) => setFilter(value as Filter)}
            className="w-full md:w-auto"
          >
            <TabsList className="h-auto w-full gap-0 rounded-lg bg-muted p-[3px] md:w-auto">
              <TabsTrigger
                value="all"
                className="flex-1 cursor-pointer rounded-md px-3 py-1.5 font-mono-space text-xs text-muted-foreground transition-colors hover:text-foreground data-active:bg-foreground data-active:text-[#080809] md:flex-none"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="connected"
                className="flex-1 cursor-pointer rounded-md px-3 py-1.5 font-mono-space text-xs text-muted-foreground transition-colors hover:text-foreground data-active:bg-foreground data-active:text-[#080809] md:flex-none"
              >
                Connected
              </TabsTrigger>
              <TabsTrigger
                value="not-connected"
                className="flex-1 cursor-pointer rounded-md px-3 py-1.5 font-mono-space text-xs text-muted-foreground transition-colors hover:text-foreground data-active:bg-foreground data-active:text-[#080809] md:flex-none"
              >
                Not Connected
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visibleIntegrations.map((integration) => (
          <IntegrationCard key={integration.name} {...integration} />
        ))}
      </div>
    </main>
  );
}

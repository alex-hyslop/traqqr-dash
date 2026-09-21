import { IntegrationCard } from "@/components/dashboard/integration-card";
import { INTEGRATIONS } from "@/lib/integrations";

export default function IntegrationsPage() {
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

      <div className="relative flex flex-col gap-1.5 md:px-8">
        <h1 className="text-3xl font-medium leading-9 tracking-[-1px] text-foreground">
          Integrations
        </h1>
        <p className="text-xs leading-4 text-muted-foreground">
          Connect and manage your marketing and analytics integrations.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {INTEGRATIONS.map((integration) => (
          <IntegrationCard key={integration.name} {...integration} />
        ))}
      </div>
    </main>
  );
}

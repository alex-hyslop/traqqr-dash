import { IntegrationDetail } from "@/components/dashboard/integration-detail";

export default function HubSpotDetailPage() {
  return (
    <IntegrationDetail
      icon="/brand/hubspot.svg"
      name="HubSpot"
      status="Not connected"
      statusColor="red"
      subtitle="OAuth install status for HubSpot meetings and contact enrichment."
      emptyStateHeading="No HubSpot install yet"
      emptyStateDescription={
        <>
          No persisted HubSpot OAuth install was found for your account.
          <br />
          Start the connect flow to grant the required scopes.
        </>
      }
      ctaLabel="Connect HubSpot"
      ctaMode="amber"
    />
  );
}

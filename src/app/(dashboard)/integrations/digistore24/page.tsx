import { IntegrationDetail } from "@/components/dashboard/integration-detail";

export default function Digistore24DetailPage() {
  return (
    <IntegrationDetail
      icon="/brand/digistore24.svg"
      name="Digistore24"
      status="Not connected"
      statusColor="red"
      subtitle="Payment provider for purchase tracking and order enrichment."
      emptyStateHeading="Connect your Digistore24 account"
      emptyStateDescription={
        <>
          Enter your Digistore24 API key to enable purchase
          <br />
          tracking and order enrichment.
        </>
      }
      ctaLabel="Connect Digistore24"
      ctaMode="amber"
    />
  );
}

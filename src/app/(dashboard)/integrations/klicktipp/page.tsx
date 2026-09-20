import { IntegrationDetail } from "@/components/dashboard/integration-detail";

export default function KlickTippDetailPage() {
  return (
    <IntegrationDetail
      icon="/brand/klicktipp.svg"
      name="KlickTipp"
      status="Not connected"
      statusColor="red"
      subtitle="Email marketing automation and subscriber enrichment."
      emptyStateHeading="Connect your KlickTipp account"
      emptyStateDescription="Connect your KlickTipp account to enable email marketing automation and subscriber enrichment."
      ctaLabel="Connect KlickTipp"
      ctaMode="amber"
    />
  );
}

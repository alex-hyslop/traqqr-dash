import { IntegrationDetail } from "@/components/dashboard/integration-detail";

export default function WebinarisDetailPage() {
  return (
    <IntegrationDetail
      icon="/brand/webinaris.svg"
      name="Webinaris"
      status="Not connected"
      statusColor="red"
      subtitle="Webinar attendance and registration enrichment for the attribution pipeline."
      emptyStateHeading="Connect your Webinaris account"
      emptyStateDescription="Enter your Webinaris API key to enable webinar attendance and registration enrichment. You can find your key under your Webinaris account settings."
      ctaLabel="Connect Webinaris"
      ctaMode="amber"
    />
  );
}

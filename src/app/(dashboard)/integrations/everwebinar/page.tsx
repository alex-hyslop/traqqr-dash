import { IntegrationDetail } from "@/components/dashboard/integration-detail";

export default function EverWebinarDetailPage() {
  return (
    <IntegrationDetail
      icon="/brand/everwebinar.svg"
      name="EverWebinar"
      status="Not connected"
      statusColor="red"
      subtitle="Evergreen webinar registration and attendance enrichment for the attribution pipeline."
      emptyStateHeading="Connect your EverWebinar account"
      emptyStateDescription="Enter your EverWebinar API key to enable evergreen webinar registration and attendance enrichment. You can find your key in your EverWebinar / WebinarJam account API settings."
      ctaLabel="Connect EverWebinar"
      ctaMode="amber"
    />
  );
}

import { IntegrationDetail } from "@/components/dashboard/integration-detail";

export default function AblefyDetailPage() {
  return (
    <IntegrationDetail
      icon="/brand/ablefy.svg"
      name="Ablefy"
      status="Not connected"
      statusColor="red"
      subtitle="Course & membership order tracking via the Ablefy API."
      emptyStateHeading="Connect your Ablefy account"
      emptyStateDescription={
        <>
          Enter your Ablefy API key and secret to enable order tracking.
          <br />
          You can find them in your Ablefy account API settings.
        </>
      }
      ctaLabel="Connect Ablefy"
      ctaMode="amber"
    />
  );
}

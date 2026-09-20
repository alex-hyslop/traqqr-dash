import { IntegrationDetail } from "@/components/dashboard/integration-detail";

export default function FacebookDetailPage() {
  return (
    <IntegrationDetail
      icon="/brand/facebook.svg"
      name="Facebook"
      status="Not connected"
      statusColor="red"
      subtitle="OAuth install and ad-account selection for Meta conversion attribution."
      emptyStateHeading="No Facebook Pixels yet"
      emptyStateDescription={
        <>
          Create a pixel credential here. Then link it to a site from the
          <br />
          Site detail page to start server-side event forwarding.
        </>
      }
      ctaLabel="Connect Pixel"
      ctaMode="amber"
    />
  );
}

import { IntegrationDetail } from "@/components/dashboard/integration-detail";

export default function MetaAdsDetailPage() {
  return (
    <IntegrationDetail
      icon="/brand/facebook.svg"
      name="Meta Ads"
      status="Not connected"
      statusColor="red"
      subtitle="OAuth install and ad-account selection for Meta conversion attribution."
      emptyStateHeading="No Meta install yet"
      emptyStateDescription={
        <>
          Connect Meta Ads to enable Meta conversion attribution.
          <br />
          Traqqr will request ads_read and ads_management scopes.
        </>
      }
      ctaLabel="Connect Meta Ads"
      ctaMode="amber"
    />
  );
}

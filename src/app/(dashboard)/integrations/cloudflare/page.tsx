import { IntegrationDetail } from "@/components/dashboard/integration-detail";

export default function CloudflareDetailPage() {
  return (
    <IntegrationDetail
      icon="/brand/cloudflare.svg"
      name="Cloudflare"
      status="Not connected"
      statusColor="red"
      subtitle="Longer cookie lifetime and fewer blocked events via first-party reverse proxy."
      emptyStateHeading="Connect your Cloudflare account"
      emptyStateDescription={
        <>
          Enter your Cloudflare API token to enable first-party proxy setup. Create a token with
          Zone:Read, Workers Scripts:Edit, and Workers Routes:
          <br />
          Edit permissions.
        </>
      }
      ctaLabel="Connect Cloudflare"
      ctaMode="amber"
    />
  );
}

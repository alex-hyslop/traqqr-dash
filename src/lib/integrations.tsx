import type { ReactNode } from "react";
import type { Integration } from "@/components/dashboard/integration-card";

const br = (before: string, after: string): ReactNode => (
  <>
    {before}
    <br />
    {after}
  </>
);

export const INTEGRATIONS: Integration[] = [
  {
    name: "Facebook",
    description: "Server-side event forwarding via Conversions API",
    icon: "/brand/facebook.svg",
    status: "No pixels",
    statusColor: "amber",
    href: "/integrations/facebook",
  },
  {
    name: "Cloudflare",
    description: br(
      "Longer cookie lifetime and fewer blocked events via ",
      "first-party reverse proxy"
    ),
    icon: "/brand/cloudflare.svg",
    status: "Not connected",
    statusColor: "red",
    href: "/integrations/cloudflare",
  },
  {
    name: "Ablefy",
    description: "Course & membership order tracking via the Ablefy API",
    icon: "/brand/ablefy.svg",
    status: "Not connected",
    statusColor: "red",
    href: "/integrations/ablefy",
  },
  {
    name: "KlickTipp",
    description: "Email marketing automation and subscriber enrichment",
    icon: "/brand/klicktipp.svg",
    status: "Not connected",
    statusColor: "red",
    href: "/integrations/klicktipp",
  },
  {
    name: "Digistore24",
    description: br("Payment provider for purchase tracking and ", "order enrichment"),
    icon: "/brand/digistore24.svg",
    status: "Not connected",
    statusColor: "red",
    href: "/integrations/digistore24",
  },
  {
    name: "Webinaris",
    description: br(
      "Webinar attendance and registration enrichment ",
      "for the attribution pipeline"
    ),
    icon: "/brand/webinaris.svg",
    status: "Not connected",
    statusColor: "red",
    href: "/integrations/webinaris",
  },
  {
    name: "EverWebinar",
    description: "Evergreen webinar registration and attendance enrichment for the attribution pipeline",
    icon: "/brand/everwebinar.svg",
    status: "Not connected",
    statusColor: "red",
    href: "/integrations/everwebinar",
  },
  {
    name: "HubSpot",
    description: br("Meeting sync and contact enrichment for", "CRM-backed attribution"),
    icon: "/brand/hubspot.svg",
    status: "Not connected",
    statusColor: "red",
    href: "/integrations/hubspot",
  },
  {
    name: "Meta Ads",
    description: "Conversion attribution for Meta advertising accounts",
    icon: "/brand/meta-ads.svg",
    status: "Open",
    statusColor: "green",
    href: "/integrations/meta-ads",
  },
];

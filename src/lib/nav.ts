import type { ComponentType, SVGProps } from "react";
import {
  WelcomeIcon,
  DashboardIcon,
  SitesIcon,
  SnippetsIcon,
  IntegrationsIcon,
  ReverseProxyIcon,
  EventInspectorIcon,
  SettingsIcon,
} from "@/components/dashboard/nav-icons";

export type NavItem = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Welcome", icon: WelcomeIcon },
  { label: "Dashboard", icon: DashboardIcon },
  { label: "Sites", icon: SitesIcon, href: "/sites" },
  { label: "Snippets", icon: SnippetsIcon },
  { label: "Integrations", icon: IntegrationsIcon, href: "/integrations" },
  { label: "Reverse Proxy", icon: ReverseProxyIcon },
  { label: "Event Inspector", icon: EventInspectorIcon },
  { label: "Live Feed", icon: SnippetsIcon },
  { label: "Settings", icon: SettingsIcon },
];

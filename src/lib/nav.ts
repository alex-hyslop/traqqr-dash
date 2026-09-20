export type NavItem = {
  label: string;
  icon: string;
  href?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Welcome", icon: "/icons/nav-welcome.svg" },
  { label: "Dashboard", icon: "/icons/nav-dashboard.svg" },
  { label: "Sites", icon: "/icons/nav-sites.svg", href: "/sites" },
  { label: "Snippets", icon: "/icons/nav-snippets.svg" },
  { label: "Integrations", icon: "/icons/nav-integrations.svg", href: "/integrations" },
  { label: "Reverse Proxy", icon: "/icons/nav-reverse-proxy.svg" },
  { label: "Event Inspector", icon: "/icons/nav-event-inspector.svg" },
  { label: "Live Feed", icon: "/icons/nav-snippets.svg" },
  { label: "Settings", icon: "/icons/nav-settings.svg" },
];

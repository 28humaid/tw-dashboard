import { BarChart2, Monitor, Bell, FileText, Settings, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface QuickLink {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
}

export const quickLinks: QuickLink[] = [
  { title: "quickLinks.reports.title", description: "quickLinks.reports.description", icon: BarChart2, route: "/reports" },
  { title: "quickLinks.devices.title", description: "quickLinks.devices.description", icon: Monitor, route: "/devices" },
  { title: "quickLinks.alerts.title", description: "quickLinks.alerts.description", icon: Bell, route: "/alerts" },
  { title: "quickLinks.documents.title", description: "quickLinks.documents.description", icon: FileText, route: "/documents" },
  { title: "quickLinks.settings.title", description: "quickLinks.settings.description", icon: Settings, route: "/settings" },
  { title: "quickLinks.users.title", description: "quickLinks.users.description", icon: Users, route: "/users" },
  { title: "quickLinks.reports.title", description: "quickLinks.reports.description", icon: BarChart2, route: "/reports" },
  { title: "quickLinks.devices.title", description: "quickLinks.devices.description", icon: Monitor, route: "/devices" },
  { title: "quickLinks.alerts.title", description: "quickLinks.alerts.description", icon: Bell, route: "/alerts" },
  { title: "quickLinks.documents.title", description: "quickLinks.documents.description", icon: FileText, route: "/documents" },
  { title: "quickLinks.settings.title", description: "quickLinks.settings.description", icon: Settings, route: "/settings" },
  { title: "quickLinks.reports.title", description: "quickLinks.reports.description", icon: BarChart2, route: "/reports" },
  { title: "quickLinks.devices.title", description: "quickLinks.devices.description", icon: Monitor, route: "/devices" },
  { title: "quickLinks.alerts.title", description: "quickLinks.alerts.description", icon: Bell, route: "/alerts" },
  { title: "quickLinks.documents.title", description: "quickLinks.documents.description", icon: FileText, route: "/documents" },
  { title: "quickLinks.settings.title", description: "quickLinks.settings.description", icon: Settings, route: "/settings" },
  { title: "quickLinks.users.title", description: "quickLinks.users.description", icon: Users, route: "/users" },
];
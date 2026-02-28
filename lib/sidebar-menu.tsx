// src/lib/sidebar-menu.ts
import { LayoutDashboard, Users, Database } from "lucide-react";

export interface MenuItem {
  label: string;       // ← translation key
  icon?: React.ReactNode;
  href?: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "sidebar.dashboard.title",
    icon: <LayoutDashboard size={20} />,
    href: "/home/dashboard",
  },
  
  {
    label: "sidebar.employeeSelfService.title",
    icon: <Users size={20} />,
    children: [
      {
        label: "sidebar.employeeSelfService.attendance",
        href: "/home/employeeSelfService/attendance",
      },
    ],
  },
  {
    label: "sidebar.masters.title",
    icon: <Database size={20} />,
    children: [
      {
        label: "sidebar.masters.company",
        href: "/home/masters/company",
      },
      {
        label: "sidebar.masters.location",
        href: "/home/masters/location",
      },
    ],
  },
];
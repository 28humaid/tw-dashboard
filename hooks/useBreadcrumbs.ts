// src/hooks/useBreadcrumbs.ts
import { usePathname } from "next/navigation";
import { menuItems, MenuItem } from "@/lib/sidebar-menu";

export interface Crumb {
  label: string; // i18n key
  href?: string;
}

function findCrumbs(items: MenuItem[], pathname: string): Crumb[] | null {
  for (const item of items) {
    // Leaf match
    if (item.href && (pathname === item.href || pathname.startsWith(`${item.href}/`))) {
      return [{ label: item.label, href: item.href }];
    }
    // Recurse into children
    if (item.children) {
      const childMatch = findCrumbs(item.children, pathname);
      if (childMatch) {
        return [{ label: item.label }, ...childMatch];
      }
    }
  }
  return null;
}

export function useBreadcrumbs(): Crumb[] {
  const pathname = usePathname();
  return findCrumbs(menuItems, pathname) ?? [];
}
// src/components/common/Breadcrumb.tsx
"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

export default function Breadcrumb() {
  const { t } = useTranslation();
  const crumbs = useBreadcrumbs();

  if (crumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500 mb-4">
      <Link href="/home/dashboard" className="hover:text-gray-900 transition-colors">
        <Home size={12} />
      </Link>

      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1 text-xs">
            <ChevronRight size={12} className="text-[var(--color-holiday)] flip-in-rtl" />
            {isLast || !crumb.href ? (
              <span className={isLast ? "text-[var(--color-holiday)] font-medium" : "text-gray-500"}>
                {t(crumb.label)}
              </span>
            ) : (
              <Link href={crumb.href} className="hover:text-[var(--color-holiday)] transition-colors">
                {t(crumb.label)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
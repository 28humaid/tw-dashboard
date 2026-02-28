"use client";

import { ChevronsRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BottomSheetModal from "../common/BottomSheetModal";
import QuickLinkCard from "./QuickLinkCard";
import LinksCardsSection from "./LinksCardsSection";
import { quickLinks } from "@/data/quickLinksData";

export default function QuickLinksComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="relative space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">
            {t("Quick Links")}
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {quickLinks.slice(0, 4).map((link, index) => (
            <QuickLinkCard
              key={index}
              title={t(link.title)}
              description={t(link.description)}
              icon={link.icon}
              route={link.route}
            />
          ))}
        </div>

        <div className="p-2 text-[var(--text-grey-color)] font-semibold text-xs">
          <div
            className="absolute bottom-1 right-1 flex items-center gap-1 hover:cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {t("View more")}
            <ChevronsRight size={16} />
          </div>
        </div>
      </div>

      <BottomSheetModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <LinksCardsSection links={quickLinks} />
      </BottomSheetModal>
    </>
  );
}
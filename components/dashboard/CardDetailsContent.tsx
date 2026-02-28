"use client";

import { useTranslation } from "react-i18next";
import DataTable from "@/components/common/DataTable";
import { StatCardProps } from "@/types/type";

interface CardDetailsContentProps {
  card: StatCardProps;
}

export default function CardDetailsContent({ card }: CardDetailsContentProps) {
  const { t } = useTranslation();
  const gridTemplate = card.tableGridTemplate || "grid-cols-[minmax(0,2fr)_minmax(0,2.5fr)_minmax(0,1.4fr)_minmax(0,1.4fr)_minmax(0,1fr)]";
  const minWidth = card.tableMinWidth || "min-w-[720px]";

  // const effectiveTitle = card.modalTitle || card.title || "Details";

  return (
    <div className="space-y-6 pb-4">
      {/* Header section */}
      <div>
        {/* <h2 className="text-xl font-semibold">{effectiveTitle}</h2> */}

        <div className="mt-2 flex items-baseline gap-3">
          <div className="text-3xl font-bold text-gray-900">
            {card.value}
          </div>
          {card.label && (
            <span className="text-xl text-gray-600">
              {card.label}
            </span>
          )}
        </div>

        {card.percentage !== undefined && (
          <div className="mt-1 text-sm text-gray-500">
            {card.percentage}% {t("card details content.of total")}
          </div>
        )}

        {card.modalSubtitle && (
          <div className="mt-3 text-sm text-gray-600">
            {card.modalSubtitle}
          </div>
        )}
      </div>

      {/* Custom content takes highest priority */}
      {card.modalContent && (
        <div className="pt-2">{card.modalContent}</div>
      )}

      {/* Table — only shown if tableData & tableColumns are provided */}
      {card.tableData && card.tableColumns && card.tableData.length > 0 && (
        <div>
          <DataTable
            data={card.tableData}
            columns={card.tableColumns}
            gridTemplateColumns={gridTemplate}
            minWidth={minWidth}
            emptyMessage={t("card details content.No records found")}
            searchable={true}
            paginated={true}
            pageSize={5}
            searchPlaceholder={t("card details content.Search...")}
            className="rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          />
        </div>
      )}

      {/* Fallback message when nothing is provided */}
      {!card.modalContent && (!card.tableData || card.tableData.length === 0) && (
        <div className="py-8 text-center text-gray-500 italic">
          {t("card details content.No details available")}
        </div>
      )}
    </div>
  );
}
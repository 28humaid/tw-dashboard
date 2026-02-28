"use client";

import { useState, useMemo } from "react";
import StatCardsSection from "@/components/dashboard/StatCardsSection";
import { StatCardProps } from "@/types/type";

type DateBasedStatSectionProps<T> = {
  title: string;
  dateWiseData: Record<string, T>;
  getCards: (dataForDate: T) => StatCardProps[];
  emptyMessage: (date: string) => React.ReactNode;
};

export default function DateBasedStatSection<T>({
  title,
  dateWiseData,
  getCards,
  emptyMessage,
}: DateBasedStatSectionProps<T>) {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  const enrichedCards = useMemo(() => {
    const dataForDate = dateWiseData[selectedDate];
    if (!dataForDate) return [];

    return getCards(dataForDate);
  }, [selectedDate, dateWiseData, getCards]);

  const hasData = enrichedCards.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap sm:items-center gap-2">
        <h2 className="text-lg text-[var(--text-grey-color)] font-semibold flex-1 min-w-[150px]">
          {title}
        </h2>

        <div className="flex-1 min-w-[160px] flex items-center justify-end">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 rounded-lg text-sm"
          />
        </div>
      </div>

      {hasData ? (
        <StatCardsSection data={enrichedCards} clickable={true} />
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center text-gray-700 min-h-[220px] flex items-center justify-center">
          {emptyMessage(selectedDate)}
        </div>
      )}
    </div>
  );
}
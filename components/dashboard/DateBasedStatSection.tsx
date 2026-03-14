"use client";

import { useState, useMemo, useEffect } from "react";
import StatCardsSection from "@/components/dashboard/StatCardsSection";
import { StatCardProps } from "@/types/type";
import StatCardSkeleton from "../common/loader/StatCardSkeleton";

type DateBasedStatSectionProps<T> = {
  title: string;
  dateWiseData: Record<string, T>;
  getCards: (dataForDate: T) => StatCardProps[];
  emptyMessage: (date: string) => React.ReactNode;
};

function DeviceStatCardsSkeleton() {
    return (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <StatCardSkeleton key={i} />
          ))}
        </div>
    );
  }

export default function DateBasedStatSection<T>({
  title,
  dateWiseData,
  getCards,
  emptyMessage,
}: DateBasedStatSectionProps<T>) {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>setIsLoading(false),4000);
    return () => clearTimeout(timer)
  },[])

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const value = e.target.value;
    setTimeout(() => {
      setSelectedDate(value);
      setIsLoading(false);
    }, 4000);
  };


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

        <div className="flex-1 min-w-[150px] lg:min-w-[120px] flex items-center justify-end">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="px-3 py-2 rounded-lg text-sm"
          />
        </div>
      </div>

      {isLoading ? (
        <DeviceStatCardsSkeleton />
      ) : hasData ? (
        <StatCardsSection data={enrichedCards} clickable={true} />
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center text-gray-700 min-h-[220px] flex items-center justify-center">
          {emptyMessage(selectedDate)}
        </div>
      )}
    </div>
  );
}
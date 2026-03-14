"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import StackedAreaChart from "../charts/StackedAreaChart";
import { dateWiseData } from "@/data/DateWiseData";
import { useTranslation } from "react-i18next";
import ShiftStackedAreaChartSkeleton from "@/components/common/loader/StackedAreaChartSkeleton";

const LOADING_DELAY = 4000;

export default function ShiftStackedAreaChart() {
  const today = new Date().toISOString().split("T")[0];
  const { t } = useTranslation();

  const [selectedDate, setSelectedDate] = useState(today);
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerLoading = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsLoading(true);
    timerRef.current = setTimeout(() => setIsLoading(false), LOADING_DELAY);
  };

  // Initial load
  useEffect(() => {
    timerRef.current = setTimeout(() => setIsLoading(false), LOADING_DELAY);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    triggerLoading();
  };

  const chartData = useMemo(() => {
    const day = dateWiseData[selectedDate as keyof typeof dateWiseData];
    const coverage = day?.shiftCoverage ?? [];

    if (coverage.length === 0) return [];

    const shiftCodes = new Set<string>();
    coverage.forEach((point) => {
      point.shifts.forEach((s) => shiftCodes.add(s.shiftCode));
    });
    const shifts = Array.from(shiftCodes);

    return coverage.map((point) => {
      const row: Record<string, number | string> = { hour: point.hour };
      shifts.forEach((code) => {
        const shift = point.shifts.find((s) => s.shiftCode === code);
        row[code] = shift?.employees ?? 0;
      });
      return row;
    });
  }, [selectedDate]);

  const hasData = chartData.length > 0;

  return (
    <div className="bg-[var(--content-background)] p-4 rounded-xl shadow-md border border-gray-200 max-h-[340px] mt-5">
      {isLoading ? (
        <ShiftStackedAreaChartSkeleton />
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">
              {t("ShiftCoverageByHour")}
            </h2>
            <div className="flex items-center gap-3">
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="px-3 py-2 rounded-lg text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6 min-h-[220px]">
            {hasData ? (
              <StackedAreaChart data={chartData} />
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center text-gray-700 h-[220px] flex items-center justify-center">
                <div>
                  <p className="text-lg font-medium">
                    No shift coverage data for {selectedDate}
                  </p>
                  <p className="mt-2 text-sm">Please select another date.</p>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
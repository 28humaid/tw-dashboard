"use client";

import { useState, useMemo } from "react";
import StackedAreaChart from "./StackedAreaChart";
import { dateWiseData } from "@/data/DateWiseData";
import { useTranslation } from "react-i18next";
// type HourlyShiftCoverage = {
//   hour: number;
//   shifts: { shiftCode: string; employees: number }[];
// };

export default function ShiftStackedAreaChart() {
  const today = new Date().toISOString().split("T")[0];
  const {t}=useTranslation()

  const [selectedDate, setSelectedDate] = useState(today);

  const chartData = useMemo(() => {
    const day = dateWiseData[selectedDate as keyof typeof dateWiseData];
    const coverage = day?.shiftCoverage ?? [];

    if (coverage.length === 0) return [];

    // Discover all unique shift codes
    const shiftCodes = new Set<string>();
    coverage.forEach((point) => {
      point.shifts.forEach((s) => shiftCodes.add(s.shiftCode));
    });
    const shifts = Array.from(shiftCodes);

    // Transform to Recharts format
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
    <div className="bg-[var(--content-background)] dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 max-h-[340px] mt-5">
      {/* Header + Date Picker – same structure & classes as your example */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">
          {t("ShiftCoverageByHour")}
        </h2>

        <div className="flex items-center gap-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="
              px-3 py-2 rounded-lg text-sm dark:bg-gray-700 dark:text-white
            "
          />
        </div>
      </div>

      {hasData ? (
        <div className="mt-6">
          <StackedAreaChart data={chartData} />
        </div>
      ) : (
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 text-center text-gray-700 dark:text-gray-300 min-h-[220px] flex items-center justify-center mt-6">
          <div>
            <p className="text-lg font-medium">No shift coverage data for {selectedDate}</p>
            <p className="mt-2 text-sm">Please select another date.</p>
          </div>
        </div>
      )}
    </div>
  );
}
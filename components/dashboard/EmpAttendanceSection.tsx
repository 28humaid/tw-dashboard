"use client";

import { useState, useMemo } from "react";
import StatCardsSection from "@/components/dashboard/StatCardsSection";
import { StatCardProps } from "@/types/type";

// Import the date-keyed data directly here
import { dateWiseData } from "@/data/DateWiseData";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const PieChart = dynamic(() => import("./PieChart"), {
  ssr: false,
});

const fallbackData: { statCards: StatCardProps[]; deviceCards: StatCardProps[] } = {
  statCards: [],
  deviceCards: [],
};

export default function EmpAttendanceSection() {
  const {t} = useTranslation();
  // Default to today
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);

  // Filter once → memoized
  const dayData = useMemo(() => {
    return dateWiseData[selectedDate as keyof typeof dateWiseData] ?? fallbackData;
  }, [selectedDate]);

  const statCards = dayData.statCards;
  const hasData = statCards.length > 0;

  return (
    <div className="space-y-6">
      {/* Date picker + title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">{t("EmpAttendanceSection.EmployeeAttendance")}</h2>

        <div className="flex items-center gap-3">
          {/* <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Date:
          </label> */}
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="
              px-3 py-2 rounded-lg text-sm
            "
          />
        </div>
      </div>

      {hasData ? (
        <div className="flex flex-col md:flex-row gap-4">
            <StatCardsSection data={statCards} cards="ASa" />
            <PieChart data={statCards} heading={t("attendanceDistribution")} />
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center text-gray-700 min-h-[280px] flex items-center justify-center">
          <div>
            <p className="text-lg font-medium">{t("EmpAttendanceSection.NoAttendanceMsg")} {selectedDate}</p>
            <p className="mt-2 text-sm">{t("EmpAttendanceSection.SelectAnotherDateMsg")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// TW6000PW08250007
// TW5000FP24080074
// 4E533330350F1B2A
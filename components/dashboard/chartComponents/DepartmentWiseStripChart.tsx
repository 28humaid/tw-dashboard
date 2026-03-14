"use client";

import StripChart from "../charts/StripChart";
import { dateWiseData } from "@/data/DateWiseData";
import { useMemo, useState, useEffect, useRef } from "react";
import { DepartmentAttendance } from "@/types/type";
import { useTranslation } from "react-i18next";
import GraphSkeleton from "@/components/common/loader/GraphSkeleton";

const LOADING_DELAY = 4000;
const fallbackData: DepartmentAttendance[] = [];

export default function DepartmentWiseStripChart() {
  const { t } = useTranslation();
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerLoading = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsLoading(true);
    timerRef.current = setTimeout(() => setIsLoading(false), LOADING_DELAY);
  };

  // Initial fake loading
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

  const departmentData = useMemo(() => {
    const day = dateWiseData[selectedDate as keyof typeof dateWiseData];
    return day?.departmentData ?? fallbackData;
  }, [selectedDate]);

  const hasData = departmentData.length > 0;

  return (
    <div className="bg-[var(--content-background)] p-4 rounded-xl shadow-md border border-gray-200 min-h-[500px]">
      {isLoading ? (
        <GraphSkeleton />
      ) : (
        <>
          {/* Header + Date Picker */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">
              {t("AttendanceOverview")}
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

          <div className="mt-6">
            {hasData ? (
              <StripChart
                data={departmentData}
                heading=""
                barColor="var(--color-present)"
              />
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center text-gray-700 min-h-[380px] flex items-center justify-center">
                <div>
                  <p className="text-lg font-medium">
                    No department data for {selectedDate}
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
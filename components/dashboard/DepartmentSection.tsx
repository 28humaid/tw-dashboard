"use client";

import { useState, useEffect, useRef } from "react";
import { dateWiseData } from "@/data/DateWiseData";
import DepartmentCards from "./DepartmentCards";
import DepartmentCardsSkeleton from "@/components/common/loader/DepartmentCardsSkeleton";

const LOADING_DELAY = 4000;

export default function DepartmentSection() {
  const today = new Date().toISOString().split("T")[0] as keyof typeof dateWiseData;
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
    setSelectedDate(e.target.value as keyof typeof dateWiseData);
    triggerLoading();
  };

  const departmentData = dateWiseData[selectedDate]?.departmentData || [];

  return (
    <div className="space-y-6">
      {/* Date Picker */}
      <div className="flex items-center justify-between gap-4">
        <label className="font-medium text-sm text-gray-600" />
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="rounded-md px-3 py-2 text-sm"
        />
      </div>

      {/* Department Cards */}
      {isLoading ? (
        <DepartmentCardsSkeleton />
      ) : (
        <DepartmentCards data={departmentData} />
      )}
    </div>
  );
}
// 1439
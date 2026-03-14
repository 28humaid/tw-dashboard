"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { attendanceData } from "@/data/dashboardData";
import AttendanceTrendChart from "../charts/AttendanceTrendChart";
import AttendanceTrendChartSkeleton from "@/components/common/loader/GraphSkeleton";

const LOADING_DELAY = 4000;

const lines = [
  { dataKey: "present", stroke: "var(--color-present)", name: "Present" },
  { dataKey: "absent",  stroke: "var(--color-absent)",  name: "Absent"  },
  { dataKey: "late",    stroke: "var(--color-late)",    name: "Late"    },
  { dataKey: "leave",   stroke: "var(--color-leave)",   name: "Leave"   },
  { dataKey: "holiday", stroke: "var(--color-holiday)", name: "Holiday" },
  { dataKey: "weekOff", stroke: "var(--color-weekoff)", name: "Week Off"},
] as const;

type Props = { lang: string };

export default function EmpAttendanceTrendChart({ lang }: Props) {
  const [selectedDays, setSelectedDays] = useState(7);
  const [isLoading, setIsLoading] = useState(true); // true for initial load
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

  const handleDaysChange = (days: number) => {
    setSelectedDays(days);
    triggerLoading();
  };

  const filteredData = useMemo(() => {
    const threshold = new Date();
    threshold.setDate(threshold.getDate() - selectedDays);
    return attendanceData.filter((item) => new Date(item.date) >= threshold);
  }, [selectedDays]);

  if (isLoading) return <AttendanceTrendChartSkeleton />;

  return (
    <AttendanceTrendChart
      data={attendanceData}
      filteredData={filteredData}
      heading="Attendance Trend"
      lines={lines}
      lang={lang}
      selectedDays={selectedDays}
      onDaysChange={handleDaysChange}
    />
  );
}
"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { deptWiseTrendData } from "@/data/dashboardData";
import AttendanceTrendChart from "../charts/AttendanceTrendChart";
import AttendanceTrendChartSkeleton from "@/components/common/loader/GraphSkeleton";

const LOADING_DELAY = 4000;

const lines = [
  { dataKey: "Sales",     stroke: "var(--color-present)", name: "Sales"     },
  { dataKey: "IT",        stroke: "var(--color-absent)",  name: "IT"        },
  { dataKey: "HR",        stroke: "var(--color-leave)",   name: "HR"        },
  { dataKey: "Marketing", stroke: "var(--color-holiday)", name: "Marketing" },
] as const;

type Props = { lang: string };

export default function DeptAttendanceTrendChart({ lang }: Props) {
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
    return deptWiseTrendData.filter((item) => new Date(item.date) >= threshold);
  }, [selectedDays]);

  if (isLoading) return <AttendanceTrendChartSkeleton />;

  return (
    <AttendanceTrendChart
      data={deptWiseTrendData}
      filteredData={filteredData}
      heading="PresenceTrend"
      lines={lines}
      lang={lang}
      selectedDays={selectedDays}
      onDaysChange={handleDaysChange}
    />
  );
}
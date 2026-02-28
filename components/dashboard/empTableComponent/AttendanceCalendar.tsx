// components/AttendanceCalendar.tsx
"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  getDate,
  getMonth,
  getYear,
  differenceInMinutes,
  parse,
  isSameDay,
  isToday,
} from "date-fns";
import { enUS, ar } from "date-fns/locale";

import type { Employee } from "@/types/type";
interface AttendanceCalendarProps {
  employee: Employee;
}

export default function AttendanceCalendar({ employee }: AttendanceCalendarProps) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const locale = isArabic ? ar : enUS;

  const today = new Date(); // runtime current date

  // Extract all unique years from attendance data (for reference, but we won't limit by data)
  const attendanceYears = useMemo(() => {
    const years = new Set(
      employee.attendance.map((rec) => getYear(new Date(rec.date)))
    );
    return Array.from(years).sort((a, b) => a - b);
  }, [employee.attendance]);

  // Years dropdown: from 2015 (or earliest reasonable) up to current year
  const availableYears = useMemo(() => {
    const minYear = Math.min(2015, ...attendanceYears); // allow some history
    const maxYear = getYear(today);
    return Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
  }, [attendanceYears, today]);

  const [selectedYear, setSelectedYear] = useState(getYear(today));
  const [selectedMonth, setSelectedMonth] = useState(getMonth(today) + 1); // 1-12

  // Available months: all 1-12 if past year, up to current month if current year
  const availableMonths = useMemo(() => {
    const months: number[] = [];
    const currentYear = getYear(today);
    const currentMonth = getMonth(today) + 1;

    if (selectedYear < currentYear) {
      for (let m = 1; m <= 12; m++) months.push(m);
    } else if (selectedYear === currentYear) {
      for (let m = 1; m <= currentMonth; m++) months.push(m);
    }
    return months;
  }, [selectedYear, today]);

  // When year changes → reset month to latest allowed
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = Number(e.target.value);
    setSelectedYear(newYear);

    // Reset month to latest possible for new year
    const maxMonth =
      newYear === getYear(today) ? getMonth(today) + 1 : 12;
    setSelectedMonth(maxMonth);
  };

  // Month name array (translated)
  const monthNames = Array.from({ length: 12 }, (_, i) =>
    format(new Date(2025, i, 1), "MMMM", { locale })
  );

  // Find attendance record for a specific date
  const getAttendanceForDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return employee.attendance.find((rec) => rec.date === dateStr);
  };

  // Calculate working hours (present/late only)
  const calculateHours = (record: NonNullable<ReturnType<typeof getAttendanceForDate>>) => {
    if (!record.loginTime || !record.logoutTime) return "";

    try {
      const loginDate = parse(record.loginTime, "h:mm a", new Date(record.date));
      const logoutDate = parse(record.logoutTime, "h:mm a", new Date(record.date));

      if (isNaN(loginDate.getTime()) || isNaN(logoutDate.getTime())) return "";

      const minutes = differenceInMinutes(logoutDate, loginDate);
      if (minutes <= 0) return "";

      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    } catch {
      return "";
    }
  };

  // Generate calendar days
  const monthStart = startOfMonth(new Date(selectedYear, selectedMonth - 1, 1));
  const monthEnd = endOfMonth(monthStart);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Pad beginning of month (to fill grid from Sunday or Monday)
  const firstDayWeekday = getDay(monthStart); // 0 = Sunday
  const emptyStart = Array(firstDayWeekday).fill(null);

  const calendarDays = [...emptyStart, ...days];

  const statusColors: Record<string, string> = {
    present: "bg-[var(--bg-present)] text-[var(--text-present)]",
    late: "bg-[var(--bg-late)] text-[var(--text-late)]",
    absent: "bg-[var(--bg-absent)] text-[var(--text-absent)]",
    leave: "bg-[var(--bg-leave)] text-[var(--text-leave)]",
    holiday: "bg-[var(--bg-holiday)] text-[var(--text-holiday)]",
    weekoff: "bg-[var(--bg-weekoff)] text-[var(--text-weekoff)]",
  };

  const defaultBg = "bg-gray-50 dark:bg-gray-800/30 text-gray-400 dark:text-gray-500";

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Header with pickers */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold mb-3 text-[var(--text-grey-color)]">
          Attendance Calendar
        </h2>

        <div className="flex gap-4">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="px-4 py-2 hover:bg-gray-300 rounded-md text-sm font-medium transition"
          >
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="px-4 py-2 hover:bg-gray-300 rounded-md text-sm font-medium transition"
          >
            {availableMonths.map((m) => (
              <option key={m} value={m}>
                {monthNames[m - 1]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto pb-4">
        <div className="grid grid-cols-7 gap-1 text-center min-w-[500px]">
            {/* Weekday headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
            <div
                key={day}
                className="font-medium text-gray-500 dark:text-gray-400 py-2"
            >
                {format(new Date(2025, 0, i + 5), "EEE", { locale })} {/* locale-aware */}
            </div>
            ))}

            {/* Days */}
            {calendarDays.map((day, index) => {
              if (!day) {
                return <div key={`empty-${index}`} className="h-20 bg-transparent" />; // slightly smaller height
              }

              const record = getAttendanceForDate(day);
              const status = record?.status || "";
              const bgClass = statusColors[status] || defaultBg;

              const hours = record && (status === "present" || status === "late")
                ? calculateHours(record)
                : "";

              const isCurrentDay = isToday(day);

              // Short time format (optional: remove seconds if any, or keep as is)
              // const shortLogin  = record?.loginTime  ? record.loginTime.replace(/:\d{2}(?=\s[AP]M)/, '') : "—";
              // const shortLogout = record?.logoutTime ? record.logoutTime.replace(/:\d{2}(?=\s[AP]M)/, '') : "—";
              const shortLogin = record?.loginTime
              ? format(
                  parse(record.loginTime, "h:mm a", new Date(record.date)),
                  "HH:mm"
                )
              : "—";

            const shortLogout = record?.logoutTime
              ? format(
                  parse(record.logoutTime, "h:mm a", new Date(record.date)),
                  "HH:mm"
                )
              : "—";

              return (
                <div
                  key={day.toISOString()}
                  className={`
                    h-20               // reduced from h-24
                    p-1.5              // reduced padding
                    border rounded-md
                    flex flex-col justify-between items-center
                    text-center
                    transition-colors ${bgClass}
                    ${isCurrentDay ? "ring-2 ring-blue-500/70 dark:ring-blue-400/70" : ""}
                    hover:shadow-sm
                    group
                    min-w-[70px]       // slightly narrower min-width
                  `}
                  title={
                    record
                      ? `${t(record.status) || record.status.toUpperCase()}\nLogin: ${record.loginTime || "—"}\nLogout: ${record.logoutTime || "—"}\n${hours ? `Hours: ${hours}` : ""}`
                      : "No attendance record"
                  }
                >
                  {/* Day number – slightly smaller */}
                  <span className="text-base font-medium leading-none">  {/* text-lg → text-base */}
                    {getDate(day)}
                  </span>

                  {/* Hours – keep but smaller */}
                  {hours && (
                    <span className="text-xs font-semibold text-inherit opacity-90">
                      {hours}
                    </span>
                  )}

                  {/* Status label – only for non-present/late, very small */}
                  {status && status !== "present" && status !== "late" && (
                    <span className="text-[10px] capitalize opacity-70 leading-tight">
                      {t(status) || status}
                    </span>
                  )}

                  {/* Login / Logout – only show when present or late, very compact */}
                  {(status === "present" || status === "late") && record && (
                    <div className="w-full text-[10px] leading-tight opacity-80 mt-0.5">
                      <div className="flex justify-between">
                        <span className="font-medium">In:</span>
                        <span>{shortLogin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Out:</span>
                        <span>{shortLogout}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
"use client";

import { AttendanceStatus, Employee } from "@/types/type";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



interface Props {
  employee: Employee;
}

const periods = [7, 14, 30];

const COLORS: Record<AttendanceStatus, string> = {
  present: "var(--color-present)",
  late: "var(--color-late)",
  absent: "var(--color-absent)",
  leave: "var(--color-leave)",
  holiday: "var(--color-holiday)",
  weekoff: "var(--color-weekoff)",
};

export default function AttendanceDoughnut({ employee }: Props) {
  const [selectedDays, setSelectedDays] = useState<number>(7);

  // SAME threshold logic as your trend chart
  const thresholdDate = new Date();
  thresholdDate.setDate(thresholdDate.getDate() - selectedDays);

  const filteredAttendance = employee.attendance.filter(
    (item) => new Date(item.date) >= thresholdDate
  );

  // ---- Missing = Absent logic ----
  const summary = {
    present: 0,
    late: 0,
    absent: 0,
    leave: 0,
    holiday: 0,
    weekoff: 0,
  };

  // Map for quick lookup
  const attendanceMap = new Map<string, AttendanceStatus>();

  filteredAttendance.forEach((record) => {
    attendanceMap.set(record.date, record.status);
  });

  // Generate full date range just like we discussed
  const today = new Date();
  for (let i = 0; i < selectedDays; i++) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    const isoDate = date.toISOString().split("T")[0];

    const status = attendanceMap.get(isoDate);

    if (status) {
      summary[status]++;
    } else {
      summary.absent++; // Missing → Absent
    }
  }

  const chartData = [
    { name: "Present", value: summary.present, color: COLORS.present },
    { name: "Late", value: summary.late, color: COLORS.late },
    { name: "Absent", value: summary.absent, color: COLORS.absent },
    { name: "Leave", value: summary.leave, color: COLORS.leave },
    { name: "Holiday", value: summary.holiday, color: COLORS.holiday },
    { name: "Week Off", value: summary.weekoff, color: COLORS.weekoff },
  ];

  return (
    <div className="w-full">
      {/* Header + Range Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">
          Attendance Overview
        </h2>

        <select
          value={selectedDays}
          onChange={(e) => setSelectedDays(Number(e.target.value))}
          className="hover:bg-gray-300 rounded-md text-sm font-medium transition"
        >
          {periods.map((days) => (
            <option key={days} value={days}>
              {`Past ${days} days`}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* Chart */}
        <div dir="ltr">
            <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie
                data={chartData}
                dataKey="value"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                >
                {chartData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                ))}
                </Pie>
                <Tooltip />
            </PieChart>
            </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 text-sm">
            {chartData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
                <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
                />
                <span>
                {item.name}: <strong>{item.value}</strong>
                </span>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

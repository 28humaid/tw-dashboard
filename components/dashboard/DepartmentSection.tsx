"use client";

import { useState } from "react";
import { dateWiseData } from "@/data/DateWiseData";
import DepartmentCards from "./DepartmentCards";

export default function DepartmentSection() {
  const today = new Date().toISOString().split("T")[0] as keyof typeof dateWiseData;
  const [selectedDate, setSelectedDate] = useState(today);

  const departmentData = dateWiseData[selectedDate]?.departmentData || [];  

  return (
    <div className="space-y-6">
      
      {/* Date Picker */}
      <div className="flex items-center justify-between gap-4">
        <label className="font-medium text-sm text-gray-600">
          {/* Select Date: */}
        </label>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) =>
            setSelectedDate(e.target.value as keyof typeof dateWiseData)
          }
          className="rounded-md px-3 py-2 text-sm"
        />
      </div>

      {/* Department Cards */}
      <DepartmentCards data={departmentData} />

    </div>
  );
}
// 1439
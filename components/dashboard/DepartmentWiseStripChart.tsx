"use client"
// import { departmentAttendanceData } from "@/data/dashboardData";
import StripChart from "./StripChart";
import { dateWiseData } from "@/data/DateWiseData";
import { useMemo, useState } from "react";
import { DepartmentAttendance } from "@/types/type";
import { useTranslation } from "react-i18next";

const fallbackData: DepartmentAttendance[] = [];

export default function DepartmentWiseStripChart(){
    const {t} = useTranslation()
    const today = new Date().toISOString().split("T")[0];

    const [selectedDate, setSelectedDate] = useState(today);

    const departmentData = useMemo(() => {
        const day = dateWiseData[selectedDate as keyof typeof dateWiseData];
        return day?.departmentData ?? fallbackData;
    }, [selectedDate]);

    const hasData = departmentData.length > 0;
    return(
        <div className="bg-[var(--content-background)] p-4 rounded-xl shadow-md border border-gray-200 min-h-[500px]">
        {/* Header + Date Picker – consistent look */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">{t("AttendanceOverview")}</h2>

            <div className="flex items-center gap-3">
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
            <StripChart
            data={departmentData}
            heading="" // heading already shown above
            barColor="var(--color-present)"
            />
        ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center text-gray-700 min-h-[220px] flex items-center justify-center">
            <div>
                <p className="text-lg font-medium">No department data for {selectedDate}</p>
                <p className="mt-2 text-sm">Please select another date.</p>
            </div>
            </div>
        )}
        </div>
    )
}
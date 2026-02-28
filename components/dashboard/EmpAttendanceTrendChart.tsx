import AttendanceTrendChart from "./AttendanceTrendChart";
import { attendanceData } from "@/data/dashboardData";

type Props = {
  lang: string;
};

export default function EmpAttendanceTrendChart({ lang }: Props){
    return(
        <AttendanceTrendChart data={attendanceData} heading="Attendance Trend"
            lines={[
                { dataKey: "present", stroke: "var(--color-present)", name: "Present" },
                { dataKey: "absent", stroke: "var(--color-absent)", name: "Absent" },
                { dataKey: "late", stroke: "var(--color-late)", name: "Late" },
                { dataKey: "leave", stroke: "var(--color-leave)", name: "Leave" },
                { dataKey: "holiday", stroke: "var(--color-holiday)", name: "Holiday" },
                { dataKey: "weekOff", stroke: "var(--color-weekoff)", name: "Week Off" },
            ]}
            lang={lang}
        />
    )
}
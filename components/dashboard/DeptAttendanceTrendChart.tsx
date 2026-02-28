import AttendanceTrendChart from "./AttendanceTrendChart";
import { deptWiseTrendData } from "@/data/dashboardData";

type Props = {
  lang: string;
};

export default function DeptAttendanceTrendChart({ lang }: Props){
    return(
        <AttendanceTrendChart
            data={deptWiseTrendData}
            heading="PresenceTrend"
            lines={[
                { dataKey: "Sales", stroke: "var(--color-present)", name: "Sales" },
                { dataKey: "IT", stroke: "var(--color-absent)", name: "IT" },
                { dataKey: "HR", stroke: "var(--color-leave)", name: "HR" },
                { dataKey: "Marketing", stroke: "var(--color-holiday)", name: "Marketing" },
            ]}
            lang={lang}
        />
    )
}
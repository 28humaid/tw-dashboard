"use client";

import { DepartmentAttendanceStripChartProps } from "@/types/type";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function StripChart<
  T extends { department: string; total: number; present: number }
>({
  data,
  heading,
  barColor = "var(--color-present)",
}: DepartmentAttendanceStripChartProps<T>) {
  return (
    <div className="w-full bg-[var(--content-background)]">
      {/* <div className="mb-4 flex justify-end text-[var(--content-background)]"> */}
        {/* Empty div...date picker to compensate krne k liye */}
      {/* </div> */}
      <h2 className="text-lg text-[var(--text-grey-color)] font-semibold mb-4">{heading}</h2>
      <div dir="ltr">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            layout="vertical"
            barCategoryGap="35%"
            barGap={-22}
          >
            <CartesianGrid horizontal={false} vertical={false} />

            <XAxis type="number" />

            <YAxis
              type="category"
              dataKey="department"
              width={100}
            />

            <Tooltip />

            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: 30 }}
            />

            {/* Grey total background strip */}
            <Bar
              dataKey="total"
              fill="var(--color-active-members)"
              name="Total"
              barSize={22}
              // radius={[0, 10, 10, 0]}
            />

            {/* Colored present strip (overlay) */}
            <Bar
              dataKey="present"
              fill={barColor}
              name="Present"
              barSize={22}
              // radius={[0, 10, 10, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

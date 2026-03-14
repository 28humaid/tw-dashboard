// components/StackedAreaChart.tsx  (unchanged from previous version)

"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface StackedAreaChartProps {
  data: Array<Record<string, number | string>>;
  xKey?: string;
  colors?: Record<string, string>;
}

const DEFAULT_COLORS: Record<string, string> = {
  MOR: "var(--color-present)",
  GEN: "var(--color-absent)",
  NIG: "var(--color-holiday)",
  // ← add more shift codes here if you have them
};

export default function StackedAreaChart({
  data,
  xKey = "hour",
  colors = DEFAULT_COLORS,
}: StackedAreaChartProps) {
  if (!data || data.length === 0) return null;

  const shiftKeys = Object.keys(data[0]).filter((k) => k !== xKey);

  return (
    <div className="h-[220px] sm:h-[250px] [@media(min-width:768px)_and_(max-width:914px)]:h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} label={{ value: "Hour", position: "insideBottom", offset: -3, fontSize:"12px" }} />
          <YAxis />
          <Tooltip />
          <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: 30 }}
          />
          {shiftKeys.map((key) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stackId="1"
              stroke={colors[key] || "#000"}
              fill={colors[key] || "#fff"}
              fillOpacity={0.7}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// 768
// 914
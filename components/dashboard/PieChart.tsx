"use client";

import { StatCardProps } from "@/types/type";
import { useTranslation } from "react-i18next";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LegendProps,
  LegendPayload
} from "recharts";

export default function PieChart(props: { data: StatCardProps[]; heading: string }) {
  const { data, heading } = props;
  const { t } = useTranslation();

  // Exclude total
  const chartData = data.filter(
    (item) => item.title !== "Active Members" && item.title !== "Total Devices" && item.title !== "Logs"
  );

  const total = chartData.reduce((acc, item) => acc + item.value, 0);

  // ────────────────────────────────────────────────
  // Custom legend renderer
  // ────────────────────────────────────────────────
//   type CustomLegendPayload = {
//   value: string;
//   color?: string;
// };
  const renderCustomizedLegend = (props: {payload?: readonly LegendPayload[];}) => {

    const { payload } = props;
    if (!payload) return null;

    return (
      <ul className="flex flex-wrap justify-center gap-4 mt-3 text-sm">
        {payload.map((entry, index) => {
          const translatedLabel = t(`stats.${entry.value}`);

          return (
            <li key={`legend-item-${index}`} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span style={{ color: entry.color || "inherit" }}>
                {translatedLabel}
              </span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="bg-[var(--content-background)] p-6 rounded-xl shadow-lg h-[420px] w-full md:w-[60%] relative">
      <h2 className="text-lg text-[var(--text-grey-color)] font-semibold mb-4">
        {heading}
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <RechartsPieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="title"
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="100%"
            paddingAngle={3}
            isAnimationActive={true}
            animationDuration={1200}
            animationEasing="ease-out"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                className="hover:opacity-80 transition duration-300"
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) => {
              const numericValue = Number(value) || 0;
              return `${numericValue} (${((numericValue / total) * 100).toFixed(1)}%)`;
            }}
          />

          {/* Use custom legend */}
          <Legend content={renderCustomizedLegend} />
        </RechartsPieChart>
      </ResponsiveContainer>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="text-sm text-[var(--text-grey-color)]">{t("Total")}</p>
          <h3 className="text-2xl font-bold">{total}</h3>
        </div>
      </div>
    </div>
  );
}
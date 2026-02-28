"use client";

import { AttendanceTrendChartProps } from "@/types/type";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "@/lib/dynamic-recharts";
import type { LegendPayload } from "@/lib/dynamic-recharts";


export default function AttendanceTrendChart<
  T extends { date: string }
>({
  data,
  heading,
  lines,
  lang = "en",
}: AttendanceTrendChartProps<T>) {
  const [selectedDays, setSelectedDays] = useState(7);
  const [visibleLines, setVisibleLines] = useState<string[]>(
  lines.map((line) => String(line.dataKey))
);
  const { i18n, t } = useTranslation();
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  const thresholdDate = new Date();
  thresholdDate.setDate(thresholdDate.getDate() - selectedDays);

  const filteredData = data.filter(
    (item) => new Date(item.date) >= thresholdDate
  );

  const periods = [7, 10, 14];

  return (
    <div className="w-full bg-[var(--content-background)] rounded-xl shadow-lg p-4  min-h-[500px]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-lg text-[var(--text-grey-color)] font-semibold mb-4">{t(heading)}</h2>
        <select
          value={selectedDays}
          onChange={(e) => setSelectedDays(Number(e.target.value))}
          className="px-4 py-2 bg-[var(--content-background)] hover:bg-gray-300 rounded-md text-sm font-medium transition"
        >
          {periods.map((days) => (
            <option key={days} value={days}>
              {t("pastDays", { count: days })}
            </option>
          ))}
        </select>
      </div>

      <div dir="ltr">
        <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData}>
          {/* <CartesianGrid /> */}
          <XAxis
            dataKey="date"
            tickFormatter={(value) => {
              const date = new Date(value);
              return String(date.getDate());
              // YE DATE THA...ISKO STRING KIYA HU
            }}
            label={{ value: t("days"), position: "insideBottom", offset: -3, fontSize:"12px" }}
          />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ paddingBottom: 40 }}
            onClick={(payload: LegendPayload) => {
              const key = String(payload.dataKey);

              setVisibleLines((prev) =>
                prev.includes(key)
                  ? prev.filter((v) => v !== key)
                  : [...prev, key]
              );
            }}
          />

          {/* {lines.filter((line) =>
    visibleLines.includes(String(line.dataKey))
  ).map((line) => (
            <Line
              key={String(line.dataKey)}
              type="monotone"
              dataKey={line.dataKey as string}
              stroke={line.stroke}
              name={line.name}
              strokeWidth={2}
            />
          ))} */}
          {lines.map((line) => {
            const key = String(line.dataKey);
            const isVisible = visibleLines.includes(key);

            return (
              <Line
                key={key}
                type="monotone"
                dataKey={line.dataKey as string}
                stroke={line.stroke}
                name={t(line.name)}
                strokeWidth={2}
                hide={!isVisible}           // ← this is the key
                dot={isVisible}             // optional: hide dots too
                activeDot={isVisible ? { r: 6 } : false}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

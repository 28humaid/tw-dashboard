"use client";

import { useEffect, useState } from "react";
import { StatCardProps } from "@/types/type";
import { useTranslation } from "react-i18next";

export default function StatCard({
  title,
  value,
  percentage,
  label,
  color,
  onClick,
  clickable = false,
}: StatCardProps) {

  const [animatedValue, setAnimatedValue] = useState(0);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const {t} = useTranslation();

  useEffect(() => {
    const duration = 1200; // total animation time (ms)
    const intervalTime = 20;

    const valueStep = value / (duration / intervalTime);
    const percentageStep =
      percentage !== undefined
        ? percentage / (duration / intervalTime)
        : 0;

    const interval = setInterval(() => {
      setAnimatedValue((prev) => {
        const next = prev + valueStep;
        return next >= value ? value : next;
      });

      if (percentage !== undefined) {
        setAnimatedPercentage((prev) => {
          const next = prev + percentageStep;
          return next >= percentage ? percentage : next;
        });
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [value, percentage]);

  const handleClick = () => {
    if (onClick) {
      onClick({ title, value, percentage, label, color });
    } else {
      // fallback / future removal
      alert(`Clicked: ${title}\nValue: ${value}${label ? ` ${label}` : ""}${percentage !== undefined ? `\n${percentage}%` : ""}`);
    }
  };
  const isInteractive = !!onClick && clickable;
  return (
    <div
      onClick={isInteractive ? handleClick:undefined}
      className="bg-[var(--content-background)] p-4 rounded-xl shadow-xl border-b-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:z-10 flex-1 min-w-[140px] 2xl:min-w-[190px] max-h-[140px]"
      style={{ borderColor: color }}
    >
      <p className="text-sm text-[var(--text-grey-color)]">{t(`stats.${title}`)}</p>

      <div className="flex items-center justify-between mt-2">
        <div>
          <h2 className="text-2xl font-bold">
            {Math.floor(animatedValue)}{" "}
            {label && <span className="text-base font-normal">{label}</span>}
          </h2>
        </div>

        {percentage !== undefined && (
          <div
            className="relative w-14 h-14 rounded-full flex items-center justify-center text-sm font-semibold"
            style={{
              background: `conic-gradient(${color} ${animatedPercentage}%, #e5e7eb ${animatedPercentage}%)`,
            }}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span style={{ color }}>
                {Math.floor(animatedPercentage)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { DepartmentAttendance } from "@/types/type";
import {
  Briefcase,
  Users,
  Code,
  Megaphone,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props {
  data: DepartmentAttendance[];
}

// Map departments to icons
const departmentIcons: Record<string, LucideIcon> = {
  Sales: Briefcase,
  HR: Users,
  IT: Code,
  Marketing: Megaphone,
};

const getAngle = (value: number, total: number) => {
  if (total === 0) return 0;
  const angle = (value / total) * 360;
  return angle >= 360 ? 359.999 : angle;
};
// Reusable pie segment component
function PieSegment({
  color,
  startAngle,
  endAngle,
}: {
  color: string;
  startAngle: number;
  endAngle: number;
}) {
  if (endAngle <= startAngle) return null;

  const radius = 50;
  const centerX = 50;
  const centerY = 50;

  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  const startX = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
  const startY = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
  const endX = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
  const endY = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

  const path = [
    `M ${centerX} ${centerY}`,
    `L ${startX} ${startY}`,
    `A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}`,
    "Z",
  ].join(" ");

  return <path d={path} fill={color} />;
}
export default function DepartmentCards({ data }: Props) {
  const {t} = useTranslation()
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((dept) => {
        const Icon =
          departmentIcons[dept.department] || Building2;

        return (
          <div
            key={dept.department}
            className="bg-white rounded-2xl shadow-lg min-w-[260px] flex-1"
          >
            {/* Top Section */}
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">{t("Total")}</p>
                        <h2 className="text-3xl font-bold text-gray-800">
                            {dept.total}
                        </h2>
                    </div>
                    {/* <div>
                        CHART HERE
                    </div> */}
                    <div className="w-10 h-10 relative shrink-0">
                        <svg
                            viewBox="0 0 100 100"
                            className="w-full h-full drop-shadow-sm"
                        >
                            <PieSegment
                            color="var(--color-present)"
                            startAngle={0}
                            endAngle={getAngle(dept.present, dept.total)}
                            />
                            <PieSegment
                            color="var(--color-absent)"
                            startAngle={getAngle(dept.present, dept.total)}
                            endAngle={getAngle(dept.present + dept.absent, dept.total)}
                            />
                            <PieSegment
                            color="var(--color-late)"
                            startAngle={getAngle(dept.present + dept.absent, dept.total)}
                            endAngle={getAngle(dept.present + dept.absent + dept.late, dept.total)}
                            />
                            <PieSegment
                            color="var(--color-leave)"
                            startAngle={getAngle(dept.present + dept.absent + dept.late, dept.total)}
                            endAngle={getAngle(dept.present + dept.absent + dept.late + dept.leave, dept.total)}
                            />
                            <PieSegment
                            color="var(--color-holiday)"
                            startAngle={getAngle(dept.present + dept.absent + dept.late + dept.leave, dept.total)}
                            endAngle={getAngle(dept.present + dept.absent + dept.late + dept.leave + dept.holiday, dept.total)}
                            />
                            <PieSegment
                            color="var(--color-weekoff)"
                            startAngle={getAngle(dept.present + dept.absent + dept.late + dept.leave + dept.holiday, dept.total)}
                            endAngle={360}
                            />
                        </svg>
                      </div>
                </div>

              <div className="mt-4 space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>{t("Present")}</span>
                  <span className="font-bold">
                    {dept.present}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t("Absent")}</span>
                  <span className="font-bold">
                    {dept.absent}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t("Late")}</span>
                  <span className="font-bold">
                    {dept.late}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t("Leave")}</span>
                  <span className="font-bold">
                    {dept.leave}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t("Holiday")}</span>
                  <span className="font-bold">
                    {dept.holiday}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t("Week Off")}</span>
                  <span className="font-bold">
                    {dept.weekOff}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[var(--text-grey-color)] px-5 py-3 flex items-center gap-2 text-gray-700 font-medium">
              <Icon size={18} />
              {t(dept.department)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

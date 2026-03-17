"use client";

import { useTranslation } from "react-i18next";
import { AttendanceCorrection, StatCardProps } from "@/types/type";
import DateBasedStatSection from "./DateBasedStatSection";
import { dateWiseData } from "@/data/DateWiseData";

export default function AttendanceApprovalSection() {
  const { t } = useTranslation();

  const getAttendanceCards = (dataForDate: any): StatCardProps[] => {
    const corrections: AttendanceCorrection[] = dataForDate.attendanceCorrections ?? [];
    const cards: StatCardProps[] = dataForDate.attendanceCards ?? [];

    return cards.map((card: any) => {
      let filtered = corrections;

      if (card.title === "Pending") {
        filtered = corrections.filter((c) => c.status === "Pending");
      } else if (card.title === "Approved") {
        filtered = corrections.filter((c) => c.status === "Approved");
      } else if (card.title === "Rejected") {
        filtered = corrections.filter((c) => c.status === "Rejected");
      }

      const tableRows = filtered.map((item) => ({
        employeeName: item.employeeName,
        employeeId: item.employeeId,
        attendanceDate: item.attendanceDate,
        punchType: item.punchType,
        punchTime: item.punchTime || "—",
        requestedPunchTime: item.requestedPunchTime,
        reason: item.reason || "—",
        appliedOn: item.appliedOn,
        status: item.status,
      }));

      return {
        ...card,
        modalTitle: t(`attendanceSection.${card.title}`),
        tableData: tableRows,
        tableColumns: [
          {
            id: "status",
            header: t("attendanceSection.Status"),
            cell: (row: any) => row.status,
          },
          {
            id: "employeeName",
            header: t("attendanceSection.Employee Name"),
            cell: (row: any) => row.employeeName,
          },
          {
            id: "employeeId",
            header: t("attendanceSection.Employee ID"),
            cell: (row: any) => row.employeeId,
          },
          {
            id: "attendanceDate",
            header: t("attendanceSection.Date"),
            cell: (row: any) => row.attendanceDate,
          },
          {
            id: "punchType",
            header: t("attendanceSection.Punch"),
            cell: (row: any) => row.punchType,
          },
          {
            id: "requestedPunchTime",
            header: t("attendanceSection.Requested Time"),
            cell: (row: any) => row.requestedPunchTime,
          },
        ],
        tableGridTemplate: "grid-cols-7", // adjust according to how many columns you show
      };
    });
  };

  return (
    <DateBasedStatSection
      title={t("stats.Attendance Requests")}
      dateWiseData={dateWiseData}
      getCards={getAttendanceCards}
      emptyMessage={(date) => (
        <div>
          <p className="text-lg font-medium">
            {t("attendanceSection.No correction requests for")} {date}
          </p>
          <p className="mt-2 text-sm">
            {t("attendanceSection.Please select another date")}
          </p>
        </div>
      )}
    />
  );
}
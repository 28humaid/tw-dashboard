"use client";

import { useTranslation } from "react-i18next";
import { dateWiseData } from "@/data/DateWiseData";
import { LeaveInfo, StatCardProps } from "@/types/type";
import DateBasedStatSection from "./DateBasedStatSection";

export default function LeaveApprovalSection() {
  const { t } = useTranslation();

  const getLeaveCards = (dataForDate: any): StatCardProps[] => {
    const leaveInformation: LeaveInfo[] = dataForDate.leaveInformation ?? [];
    const leaveCards = dataForDate.leaveCards ?? [];

    return leaveCards.map((card: any) => {
      let filteredLeaves = leaveInformation;

      if (card.title === "Pending") {
        filteredLeaves = leaveInformation.filter((l) => l.status === "Pending");
      } else if (card.title === "Approved") {
        filteredLeaves = leaveInformation.filter((l) => l.status === "Approved");
      } else if (card.title === "Rejected") {
        filteredLeaves = leaveInformation.filter((l) => l.status === "Rejected");
      }

      const tableRows = filteredLeaves.map((leave) => ({
        employeeName: leave.employeeName,
        employeeId: leave.employeeId,
        leaveCode: leave.leaveCode,
        fromDate: leave.fromDate,
        toDate: leave.toDate,
        appliedOn: leave.appliedOn,
        status: leave.status,
      }));

      return {
        ...card,
        modalTitle: card.title === "Attendance Requests"? t("All Leave Requests"): `${card.title} ${t("leaveSection.Leave Requests")}`,
        tableData: tableRows,
        tableColumns: [
          {
            id: "status",
            header: t("leaveSection.Status"),
            cell: (row: any) => row.status,
          },
          {
            id: "employeeName",
            header: t("leaveSection.Employee Name"),
            cell: (row: any) => row.employeeName,
          },
          {
            id: "employeeId",
            header: t("leaveSection.Employee ID"),
            cell: (row: any) => row.employeeId,
          },
        ],
        tableGridTemplate: "grid-cols-3",
      };
    });
  };

  return (
    <DateBasedStatSection
      title={t("stats.Leave Requests")}
      dateWiseData={dateWiseData}
      getCards={getLeaveCards}
      emptyMessage={(date) => (
        <div>
          <p className="text-lg font-medium">
            {t("leaveSection.No leave data for")} {date}
          </p>
          <p className="mt-2 text-sm">
            {t("leaveSection.Please select another date")}
          </p>
        </div>
      )}
    />
  );
}
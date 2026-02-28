"use client";

import { Employee } from "@/types/type";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import DataTable from "@/components/common/DataTable";

interface Props {
  employees: Employee[];
  selectedDate: string;
  onViewDetails: (employee: Employee) => void;
}

export default function EmployeeTable({
  employees,
  selectedDate,
  onViewDetails,
}: Props) {
  const { t } = useTranslation();

  const columns = [
    {
      id: "employee",
      header: t("Employee"),
      cell: (emp: Employee) => (
        <div className="flex items-center gap-3">
          <Image
            src={emp.avatar}
            alt={emp.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">{emp.name}</div>
            <div className="text-xs text-gray-500">{emp.role}</div>
          </div>
        </div>
      ),
    },
    {
      id: "id",
      header: t("ID"),
      cell: (emp: Employee) => emp.employeeId,
    },
    {
      id: "department",
      header: t("Department"),
      cell: (emp: Employee) => emp.department,
    },
    {
      id: "login",
      header: t("Login"),
      cell: (emp: Employee) => {
        const att = emp.attendance.find((a) => a.date === selectedDate);
        return (
          <>
            {att?.loginTime ?? "-"}
            {/* {att?.isLate && <span className="text-blue-500 text-xs ml-2">Late</span>} */}
          </>
        );
      },
    },
    {
      id: "logout",
      header: t("Logout"),
      cell: (emp: Employee) => {
        const att = emp.attendance.find((a) => a.date === selectedDate);
        return att?.logoutTime ?? "-";
      },
    },
    {
      id: "actions",
      header: t("Profile"),
      cell: (emp: Employee) => (
        <button
          onClick={() => onViewDetails(emp)}
          className="text-blue-600 underline text-sm hover:text-blue-800"
        >
          {t("View details")}
        </button>
      ),
      className: "text-right", // optional alignment
    },
  ];

  return (
    <DataTable<Employee>
      data={employees}
      columns={columns}
      gridTemplateColumns="grid-cols-[2fr_1fr_1.5fr_1fr_1fr_0.7fr]"
      minWidth="min-w-[900px]"
      emptyMessage="No employees found for the selected date."
    />
  );
}
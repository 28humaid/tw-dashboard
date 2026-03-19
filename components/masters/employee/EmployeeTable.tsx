"use client";

import { useState } from "react";
import { Employee } from "@/types/masters/EmployeeTypes";
import DataTable from "@/components/common/DataTable";
import { employees } from "@/data/EmployeeData";
import { useTranslation } from "react-i18next";

interface EmployeeTableProps {
  handleEdit: (row: Employee, index: number) => void;
}

const EmployeeTable = ({ handleEdit }: EmployeeTableProps) => {
  const [data, setData] = useState<Employee[]>(employees);
  const { t } = useTranslation();

  const handleDelete = (row: Employee, index: number) => {
    if (
      window.confirm(
        `Delete "${row.employeeName}"?\n\nThis action cannot be undone.`
      )
    ) {
      setData((prev) => prev.filter((_, i) => i !== index));
      alert(`✅ "${row.employeeName}" has been deleted (demo).`);
    }
  };

  const columns = [
    {
      id: "status",
      header: t("masters.employeeTable.Status"),
      cell: (row: Employee) => (
        <span
          className={`text-xs font-medium ${
            row.status === "ACTIVE"
              ? "text-[var(--color-present)]"
              : "text-[var(--color-absent)]"
          }`}
        >
          {row.status}
        </span>
      ),
      className: "text-center",
    },
    {
      id: "employeeCode",
      header: t("masters.employeeTable.Employee Code"),
      cell: (row: Employee) => (
        <span className="font-mono">{row.employeeCode}</span>
      ),
    },
    {
      id: "employeeName",
      header: t("masters.employeeTable.Employee Name"),
      cell: (row: Employee) => <span>{row.employeeName}</span>,
    },
    {
      id: "employeeType",
      header: t("masters.employeeTable.Employee Type"),
      cell: (row: Employee) => row.employeeType,
    },
    {
      id: "department",
      header: t("masters.employeeTable.Department"),
      cell: (row: Employee) => row.department,
    },
    {
      id: "designation",
      header: t("masters.employeeTable.Designation"),
      cell: (row: Employee) => row.designation,
    },
    {
      id: "location",
      header: t("masters.employeeTable.Location"),
      cell: (row: Employee) => row.location,
    },
    {
      id: "email",
      header: t("masters.employeeTable.Email"),
      cell: (row: Employee) => (
        <a
          href={`mailto:${row.email}`}
          className="text-blue-600 hover:underline truncate block"
        >
          {row.email}
        </a>
      ),
    },
    {
      id: "dateOfJoin",
      header: t("masters.employeeTable.Date Of Join"),
      cell: (row: Employee) =>
        new Date(row.dateOfJoin).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
    },
    {
      id: "reportingManager",
      header: t("masters.employeeTable.Reporting Manager"),
      cell: (row: Employee) => row.reportingManager,
    },
  ];

  return (
    <DataTable<Employee>
      data={data}
      columns={columns}
      gridTemplateColumns="grid-cols-11"
      searchable
      paginated
      pageSize={4}
      searchPlaceholder={t("masters.employeeTable.Search Placeholder")}
      onEdit={handleEdit}
      onDelete={handleDelete}
      minWidth="min-w-[2400px]"
    />
  );
};

export default EmployeeTable;
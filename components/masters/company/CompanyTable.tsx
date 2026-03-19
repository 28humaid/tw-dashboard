"use client";

import { useState } from "react";
import { Company } from "@/types/type";
import DataTable from "@/components/common/DataTable"; 
import { companies } from "@/data/CompanyData"; 
import { useTranslation } from "react-i18next";
interface CompanyTableProps {
  handleEdit: (row: Company, index: number) => void;
}

const CompanyTable = ({handleEdit}: CompanyTableProps) => {
  // Local state so delete actually works (industry standard for demo tables)
  const [data, setData] = useState<Company[]>(companies);
  const {t} = useTranslation()

  // ─── Delete Handler (with confirmation) ───────────────────────────────
  const handleDelete = (row: Company, index: number) => {
    if (window.confirm(`Delete "${row.name}"?\n\nThis action cannot be undone.`)) {
      setData((prev) => prev.filter((_, i) => i !== index));
      alert(`✅ "${row.name}" has been deleted (demo).`);
      // Real implementation: call API + refetch or optimistic update
    }
  };

  // ─── Column Definition (fully typed, clean, responsive) ───────────────
  const columns = [
    {
      id: "status",
      header: t("masters.companyTable.Status"),
      cell: (row:Company) => (
        <span
            className={`text-xs ${
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
      id: "code",
      header: t("masters.companyTable.Code"),
      cell: (row:Company) => <span className="font-mono">{row.code}</span>,
    },
    {
      id: "name",
      header: t("masters.companyTable.Company Name"),
      cell: (row:Company) => <span>{row.name}</span>,
    },
    {
      id: "shortName",
      header: t("masters.companyTable.Short Name"),
      cell: (row:Company) => row.shortName,
    },
    {
      id: "industryNature",
      header: t("masters.companyTable.Industry"),
      cell: (row:Company) => row.industryNature,
    },
    {
      id: "address",
      header: t("masters.companyTable.Address"),
      cell: (row:Company) => row.address,
    },
    {
      id: "phoneNumber",
      header: t("masters.companyTable.Phone Number"),
      cell: (row:Company) => row.phoneNumber,
    },
    {
      id: "email",
      header: t("masters.companyTable.Email"),
      cell: (row:Company) => (
        <a
          href={`mailto:${row.email}`}
          className="text-blue-600 hover:underline truncate block"
        >
          {row.email}
        </a>
      ),
    },
    {
      id: "validUpto",
      header: t("masters.companyTable.Valid Upto"),
      cell: (row:Company) =>
        new Date(row.validUpto).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
    },
  ];

  return (
    <DataTable<Company>
      data={data}
      columns={columns}
      gridTemplateColumns="grid-cols-10"
      searchable
      paginated
      pageSize={4}
      searchPlaceholder={t("masters.companyTable.Search Placeholder")}
      onEdit={handleEdit}
      onDelete={handleDelete}
      minWidth="min-w-[2000px]"
    />
  );
};

export default CompanyTable;
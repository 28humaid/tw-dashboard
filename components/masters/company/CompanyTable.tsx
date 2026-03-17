"use client";

import { useState } from "react";
import { Company } from "@/types/type";
import DataTable from "@/components/common/DataTable"; 
import { companies } from "@/data/CompanyData"; 
interface CompanyTableProps {
  handleEdit: (row: Company, index: number) => void;
}

const CompanyTable = ({handleEdit}: CompanyTableProps) => {
  // Local state so delete actually works (industry standard for demo tables)
  const [data, setData] = useState<Company[]>(companies);

  // ─── Delete Handler (with confirmation) ───────────────────────────────
  const handleDelete = (row: Company, index: number) => {
    if (window.confirm(`🗑️ Delete "${row.name}"?\n\nThis action cannot be undone.`)) {
      setData((prev) => prev.filter((_, i) => i !== index));
      alert(`✅ "${row.name}" has been deleted (demo).`);
      // Real implementation: call API + refetch or optimistic update
    }
  };

  // ─── Column Definition (fully typed, clean, responsive) ───────────────
  const columns = [
    {
      id: "status",
      header: "Status",
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
      header: "Code",
      cell: (row:Company) => <span className="font-mono">{row.code}</span>,
    },
    {
      id: "name",
      header: "Company Name",
      cell: (row:Company) => <span>{row.name}</span>,
    },
    {
      id: "shortName",
      header: "Short Name",
      cell: (row:Company) => row.shortName,
    },
    {
      id: "industryNature",
      header: "Industry",
      cell: (row:Company) => row.industryNature,
    },
    {
      id: "address",
      header: "Address",
      cell: (row:Company) => row.address,
    },
    {
      id: "phoneNumber",
      header: "Phone Number",
      cell: (row:Company) => row.phoneNumber,
    },
    {
      id: "email",
      header: "Email",
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
      header: "Valid Upto",
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
      searchPlaceholder="Search companies..."
      onEdit={handleEdit}
      onDelete={handleDelete}
      minWidth="min-w-[2000px]"
    />
  );
};

export default CompanyTable;
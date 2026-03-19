"use client";

import { useState } from "react";
import { Location } from "@/types/type";
import DataTable from "@/components/common/DataTable";

import { useTranslation } from "react-i18next";
import { locations } from "@/data/LocationData";

interface LocationTableProps {
  handleEdit: (row: Location, index: number) => void;
}

const LocationTable = ({ handleEdit }: LocationTableProps) => {
  const [data, setData] = useState<Location[]>(locations);
  const { t } = useTranslation();

  const handleDelete = (row: Location, index: number) => {
    if (window.confirm(`Delete "${row.name}"?\n\nThis action cannot be undone.`)) {
      setData((prev) => prev.filter((_, i) => i !== index));
      alert(`✅ "${row.name}" has been deleted (demo).`);
      // Real implementation: call API + refetch or optimistic update
    }
  };

  const columns = [
    {
      id: "code",
      header: t("masters.locationTable.Code"),
      cell: (row: Location) => (
        <span className="font-mono">{row.code}</span>
      ),
    },
    {
      id: "name",
      header: t("masters.locationTable.Location Name"),
      cell: (row: Location) => <span>{row.name}</span>,
    },
    {
      id: "address1",
      header: t("masters.locationTable.Address"),
      cell: (row: Location) => (
        <span>
          {row.address1}
          {row.address2 ? `, ${row.address2}` : ""}
        </span>
      ),
    },
    {
      id: "city",
      header: t("masters.locationTable.City"),
      cell: (row: Location) => row.city,
    },
    {
      id: "state",
      header: t("masters.locationTable.State"),
      cell: (row: Location) => row.state,
    },
    {
      id: "postalCode",
      header: t("masters.locationTable.Postal Code"),
      cell: (row: Location) => row.postalCode,
    },
    {
      id: "country",
      header: t("masters.locationTable.Country"),
      cell: (row: Location) => row.country,
    },
    {
      id: "contact",
      header: t("masters.locationTable.Contact"),
      cell: (row: Location) => row.contact,
    },
    {
      id: "emailId",
      header: t("masters.locationTable.Email"),
      cell: (row: Location) => (
        <a
          href={`mailto:${row.emailId}`}
          className="text-blue-600 hover:underline truncate block"
        >
          {row.emailId}
        </a>
      ),
    },
  ];

  return (
    <DataTable<Location>
      data={data}
      columns={columns}
      gridTemplateColumns="grid-cols-10"
      searchable
      paginated
      pageSize={4}
      searchPlaceholder={t("masters.locationTable.Search Placeholder")}
      onEdit={handleEdit}
      onDelete={handleDelete}
      minWidth="min-w-[2000px]"
    />
  );
};

export default LocationTable;
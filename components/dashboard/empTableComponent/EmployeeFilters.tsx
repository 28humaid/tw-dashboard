"use client";

import { useTranslation } from "react-i18next";

interface Props {
  selectedDate: string;
  setSelectedDate: (val: string) => void;
  selectedDepartment: string;
  setSelectedDepartment: (val: string) => void;
  search: string;
  setSearch: (val: string) => void;
  departments: string[];
  resetPage: () => void;
}

export default function EmployeeFilters({
  selectedDate,
  setSelectedDate,
  selectedDepartment,
  setSelectedDepartment,
  search,
  setSearch,
  departments,
  resetPage,
}: Props) {
  const {t} = useTranslation()
  return (
    <div className="flex flex-wrap gap-4 items-center">
        <input
            type="text"
            placeholder={t("searchByNameOrId")}
            value={search}
            onChange={(e) => {
            setSearch(e.target.value);
            resetPage();
            }}
            className="shadow-lg px-3 py-2 rounded-lg text-sm flex-1 min-w-[100px]"
        />
        <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
            setSelectedDate(e.target.value);
            resetPage();
            }}
            className="shadow-lg px-3 py-2 rounded text-sm flex-1 min-w-[100px]"
        />

        <select
            value={selectedDepartment}
            onChange={(e) => {
            setSelectedDepartment(e.target.value);
            resetPage();
            }}
            className="shadow-lg px-3 py-2 rounded text-sm flex-1 min-w-[100px]"
        >
            <option value="">{t("AllDepartments")}</option>
            {departments.map((dept) => (
            <option key={dept} value={dept}>
                {dept}
            </option>
            ))}
        </select>
    </div>
  );
}

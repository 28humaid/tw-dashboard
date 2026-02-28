"use client";

import { useMemo, useState } from "react";
import { employees } from "@/data/dashboardData";
import { Employee } from "@/types/type";

import EmployeeFilters from "./EmployeeFilters";
import EmployeeTable from "./EmployeeTable";
import Pagination from "./Pagination";
import BottomSheetModal from "@/components/common/BottomSheetModal";
import EmployeeDetailsContent from "./EmployeeDetailsContent";

const ITEMS_PER_PAGE = 5;

export default function EmployeesContainer() {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const departments = useMemo(() => {
    return Array.from(new Set(employees.map((e) => e.department)));
  }, []);

  const filteredData = useMemo(() => {
    let data = employees;

    if (selectedDepartment) {
      data = data.filter((e) => e.department === selectedDepartment);
    }

    if (search) {
      data = data.filter(
        (e) =>
          e.name.toLowerCase().includes(search.toLowerCase()) ||
          e.employeeId.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Only include employees who have attendance on selected date
    data = data.filter((e) =>
      e.attendance.some((a) => a.date === selectedDate)
    );

    return data;
  }, [selectedDepartment, search, selectedDate]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  const handleViewDetails = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <EmployeeFilters
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        search={search}
        setSearch={setSearch}
        departments={departments}
        resetPage={() => setCurrentPage(1)}
      />

      <EmployeeTable
        employees={paginatedData}
        selectedDate={selectedDate}
        onViewDetails={handleViewDetails}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      <BottomSheetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {selectedEmployee && (
          <EmployeeDetailsContent
            employee={selectedEmployee}
            selectedDate={selectedDate}
          />
        )}
      </BottomSheetModal>
    </div>
  );
}

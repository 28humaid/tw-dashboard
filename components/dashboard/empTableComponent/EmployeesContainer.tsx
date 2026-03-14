"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { employees } from "@/data/dashboardData";
import { Employee } from "@/types/type";

import EmployeeFilters from "./EmployeeFilters";
import EmployeeTable from "./EmployeeTable";
import Pagination from "./Pagination";
import BottomSheetModal from "@/components/common/BottomSheetModal";
import EmployeeDetailsContent from "./EmployeeDetailsContent";
import EmployeeTableSkeleton from "@/components/common/loader/EmployeeTableSkeleton";

const ITEMS_PER_PAGE = 5;
const LOADING_DELAY = 4000;

export default function EmployeesContainer() {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // true for initial load

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Helper — clears any running timer, sets loading, then clears after delay
  const triggerLoading = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsLoading(true);
    timerRef.current = setTimeout(() => setIsLoading(false), LOADING_DELAY);
  };

  // Initial load skeleton
  useEffect(() => {
    timerRef.current = setTimeout(() => setIsLoading(false), LOADING_DELAY);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

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

  // Trigger loading on filter/date changes
  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setCurrentPage(1);
    triggerLoading();
  };

  const handleDepartmentChange = (dept: string) => {
    setSelectedDepartment(dept);
    setCurrentPage(1);
    triggerLoading();
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
    triggerLoading();
  };

  // Trigger loading on pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    triggerLoading();
  };

  return (
    <div className="flex flex-col gap-6">
      <EmployeeFilters
        selectedDate={selectedDate}
        setSelectedDate={handleDateChange}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={handleDepartmentChange}
        search={search}
        setSearch={handleSearchChange}
        departments={departments}
        resetPage={() => setCurrentPage(1)}
      />

      {/* Wrap in overflow-auto to keep horizontal scroll on skeleton too */}
      <div className="overflow-x-auto">
        {isLoading ? (
          <EmployeeTableSkeleton rows={ITEMS_PER_PAGE} />
        ) : (
          <EmployeeTable
            employees={paginatedData}
            selectedDate={selectedDate}
            onViewDetails={handleViewDetails}
          />
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={handlePageChange}
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
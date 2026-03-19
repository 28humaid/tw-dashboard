"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import EmployeeTable from "./EmployeeTable";
import EmployeeFormModal from "./EmployeeForm";
import { Employee } from "@/types/masters/EmployeeTypes";
import { useTranslation } from "react-i18next";

const EmployeeComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const { t } = useTranslation();

  const handleAddClick = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  const handleEdit = (row: Employee) => {
    setEditingEmployee(row);
    setIsModalOpen(true);
  };

  const handleSuccess = (data: unknown, isEdit: boolean) => {
    console.log("Employee form success:", { data, isEdit });
    // Call your API and refresh the table here
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-end">
          <Button onClick={handleAddClick} size="sm">
            {t("masters.employeePage.Add Employee")}
          </Button>
        </div>
        <div>
          <EmployeeTable handleEdit={handleEdit} />
        </div>
      </div>

      <EmployeeFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={editingEmployee}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default EmployeeComponent;
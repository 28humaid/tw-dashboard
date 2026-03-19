"use client";

import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/common/InputField";
import FormSelect from "@/components/common/FormSelect";
import {
  EMPLOYEE_TYPE_OPTIONS,
  USER_TYPE_OPTIONS,
  COMPANY_OPTIONS,
  DEPARTMENT_OPTIONS,
  CATEGORY_OPTIONS,
  LOCATION_OPTIONS,
  EMPLOYEE_GROUP_OPTIONS,
  DESIGNATION_OPTIONS,
  GRADE_OPTIONS,
  SECTION_OPTIONS,
} from "@/data/EmployeeData";

// The form type for this step — passed in from the parent form context
interface OfficeDetailsStepProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  // fieldPrefix allows nesting under "officeDetails." in the full form
  fieldPrefix?: string;
}

export default function OfficeDetailsStep({
  form,
  fieldPrefix = "officeDetails.",
}: OfficeDetailsStepProps) {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = form;

  // Helper: resolves nested error by dot-path prefix
  const err = (field: string) => {
    const parts = `${fieldPrefix}${field}`.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return parts.reduce((acc: any, key) => acc?.[key], errors)?.message as
      | string
      | undefined;
  };

  const reg = (field: string) => register(`${fieldPrefix}${field}`);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Employee Type */}
        <FormSelect
          label={`${t("masters.employeeForm.office.Employee Type")} *`}
          required
          options={EMPLOYEE_TYPE_OPTIONS}
          register={reg("employeeType")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.employeeType}
          placeholder={t("masters.employeeForm.placeholder.selectEmployeeType")}
        />

        {/* Employee Code */}
        <Input
          label={`${t("masters.employeeForm.office.Employee Code")} *`}
          {...reg("employeeCode")}
          error={err("employeeCode")}
          placeholder="EMP001"
        />

        {/* Enrollment Code */}
        <Input
          label={`${t("masters.employeeForm.office.Enrollment Code")} *`}
          {...reg("enrollmentCode")}
          error={err("enrollmentCode")}
          placeholder="ENR001"
        />

        {/* Proximity Card Number */}
        <Input
          label={`${t("masters.employeeForm.office.Proximity Card Number")} *`}
          {...reg("proximityCardNumber")}
          error={err("proximityCardNumber")}
          placeholder="PXY001"
        />

        {/* Employee Name */}
        <Input
          label={`${t("masters.employeeForm.office.Employee Name")} *`}
          {...reg("employeeName")}
          error={err("employeeName")}
          placeholder={t("masters.employeeForm.placeholder.employeeName")}
        />

        {/* Guardian Name */}
        <Input
          label={`${t("masters.employeeForm.office.Guardian Name")} *`}
          {...reg("guardianName")}
          error={err("guardianName")}
          placeholder={t("masters.employeeForm.placeholder.guardianName")}
        />

        {/* Company */}
        <FormSelect
          label={`${t("masters.employeeForm.office.Company")} *`}
          required
          options={COMPANY_OPTIONS}
          register={reg("company")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.company}
          placeholder={t("masters.employeeForm.placeholder.selectCompany")}
        />

        {/* Department */}
        <FormSelect
          label={`${t("masters.employeeForm.office.Department")} *`}
          required
          options={DEPARTMENT_OPTIONS}
          register={reg("department")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.department}
          placeholder={t("masters.employeeForm.placeholder.selectDepartment")}
        />

        {/* Category */}
        <FormSelect
          label={`${t("masters.employeeForm.office.Category")} *`}
          required
          options={CATEGORY_OPTIONS}
          register={reg("category")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.category}
          placeholder={t("masters.employeeForm.placeholder.selectCategory")}
        />

        {/* Location */}
        <FormSelect
          label={`${t("masters.employeeForm.office.Location")} *`}
          required
          options={LOCATION_OPTIONS}
          register={reg("location")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.location}
          placeholder={t("masters.employeeForm.placeholder.selectLocation")}
        />

        {/* Employee Group */}
        <FormSelect
          label={`${t("masters.employeeForm.office.Employee Group")} *`}
          required
          options={EMPLOYEE_GROUP_OPTIONS}
          register={reg("employeeGroup")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.employeeGroup}
          placeholder={t("masters.employeeForm.placeholder.selectEmployeeGroup")}
        />

        {/* Designation */}
        <FormSelect
          label={`${t("masters.employeeForm.office.Designation")} *`}
          required
          options={DESIGNATION_OPTIONS}
          register={reg("designation")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.designation}
          placeholder={t("masters.employeeForm.placeholder.selectDesignation")}
        />

        {/* Reporting Manager */}
        <Input
          label={`${t("masters.employeeForm.office.Reporting Manager")} *`}
          {...reg("reportingManager")}
          error={err("reportingManager")}
          placeholder={t("masters.employeeForm.placeholder.reportingManager")}
        />

        {/* Grade */}
        <FormSelect
          label={`${t("masters.employeeForm.office.Grade")} *`}
          required
          options={GRADE_OPTIONS}
          register={reg("grade")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.grade}
          placeholder={t("masters.employeeForm.placeholder.selectGrade")}
        />

        {/* Section */}
        <FormSelect
          label={`${t("masters.employeeForm.office.Section")} *`}
          required
          options={SECTION_OPTIONS}
          register={reg("section")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.section}
          placeholder={t("masters.employeeForm.placeholder.selectSection")}
        />

        {/* User Type */}
        <FormSelect
          label={`${t("masters.employeeForm.office.User Type")} *`}
          required
          options={USER_TYPE_OPTIONS}
          register={reg("userType")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.userType}
          placeholder={t("masters.employeeForm.placeholder.selectUserType")}
        />

        {/* Validity From Date */}
        <Input
          label={`${t("masters.employeeForm.office.Validity From Date")} *`}
          type="date"
          {...reg("validityFromDate")}
          error={err("validityFromDate")}
        />

        {/* Validity End Date */}
        <Input
          label={`${t("masters.employeeForm.office.Validity End Date")} *`}
          type="date"
          {...reg("validityEndDate")}
          error={err("validityEndDate")}
        />
      </div>
    </div>
  );
}
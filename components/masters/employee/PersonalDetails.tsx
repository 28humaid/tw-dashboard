"use client";

import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/common/InputField";
import FormSelect from "@/components/common/FormSelect";
import {
  GENDER_OPTIONS,
  MARITAL_STATUS_OPTIONS,
  BLOOD_GROUP_OPTIONS,
  BANK_OPTIONS,
} from "@/data/EmployeeData";

interface PersonalDetailsStepProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  fieldPrefix?: string;
}

export default function PersonalDetailsStep({
  form,
  fieldPrefix = "personalDetails.",
}: PersonalDetailsStepProps) {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = form;

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
        {/* Date Of Join */}
        <Input
          label={`${t("masters.employeeForm.personal.Date Of Join")} *`}
          type="date"
          {...reg("dateOfJoin")}
          error={err("dateOfJoin")}
        />

        {/* Date Of Birth */}
        <Input
          label={`${t("masters.employeeForm.personal.Date Of Birth")} *`}
          type="date"
          {...reg("dateOfBirth")}
          error={err("dateOfBirth")}
        />

        {/* Marital Status */}
        <FormSelect
          label={`${t("masters.employeeForm.personal.Married")} *`}
          required
          options={MARITAL_STATUS_OPTIONS}
          register={reg("married")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.married}
          placeholder={t("masters.employeeForm.placeholder.selectMaritalStatus")}
        />

        {/* Gender */}
        <FormSelect
          label={`${t("masters.employeeForm.personal.Gender")} *`}
          required
          options={GENDER_OPTIONS}
          register={reg("gender")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.gender}
          placeholder={t("masters.employeeForm.placeholder.selectGender")}
        />

        {/* Email */}
        <Input
          label={`${t("masters.employeeForm.personal.Email")} *`}
          type="email"
          {...reg("email")}
          error={err("email")}
          placeholder="employee@company.com"
        />

        {/* Blood Group */}
        <FormSelect
          label={`${t("masters.employeeForm.personal.Blood Group")} *`}
          required
          options={BLOOD_GROUP_OPTIONS}
          register={reg("bloodGroup")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.bloodGroup}
          placeholder={t("masters.employeeForm.placeholder.selectBloodGroup")}
        />

        {/* Qualification */}
        <Input
          label={`${t("masters.employeeForm.personal.Qualification")} *`}
          {...reg("qualification")}
          error={err("qualification")}
          placeholder={t("masters.employeeForm.placeholder.qualification")}
        />

        {/* Experience */}
        <Input
          label={`${t("masters.employeeForm.personal.Experience")} *`}
          {...reg("experience")}
          error={err("experience")}
          placeholder="3 years"
        />

        {/* Bank */}
        <FormSelect
          label={`${t("masters.employeeForm.personal.Bank")} *`}
          required
          options={BANK_OPTIONS}
          register={reg("bank")}
          error={errors?.[fieldPrefix?.replace(".", "")]?.bank}
          placeholder={t("masters.employeeForm.placeholder.selectBank")}
        />

        {/* Account No */}
        <Input
          label={`${t("masters.employeeForm.personal.Account No")} *`}
          {...reg("accountNo")}
          error={err("accountNo")}
          placeholder="HDFC0012345678"
        />

        {/* Aadhar */}
        <Input
          label={`${t("masters.employeeForm.personal.Aadhar")} *`}
          {...reg("aadhar")}
          error={err("aadhar")}
          placeholder="1234 5678 9012"
        />

        {/* PAN No */}
        <Input
          label={`${t("masters.employeeForm.personal.PAN No")} *`}
          {...reg("panNo")}
          error={err("panNo")}
          placeholder="ABCDE1234F"
        />
      </div>
    </div>
  );
}
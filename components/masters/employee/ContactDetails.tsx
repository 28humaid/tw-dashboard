"use client";

import { useEffect } from "react";
import { UseFormReturn, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/common/InputField";

interface ContactDetailsStepProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  fieldPrefix?: string;
}

// Reusable address sub-section
function AddressSection({
  title,
  prefix,
  form,
  disabled = false,
}: {
  title: string;
  prefix: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  disabled?: boolean;
}) {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = form;

  const err = (field: string) => {
    const parts = `${prefix}.${field}`.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return parts.reduce((acc: any, key) => acc?.[key], errors)?.message as
      | string
      | undefined;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-gray-700 border-b border-gray-200 pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Address */}
        <div className="md:col-span-2">
          <Input
            label={`${t("masters.employeeForm.contact.Address")} *`}
            {...register(`${prefix}.address`)}
            error={err("address")}
            placeholder={t("masters.employeeForm.placeholder.address")}
            disabled={disabled}
          />
        </div>

        {/* Postal Code */}
        <Input
          label={`${t("masters.employeeForm.contact.Postal Code")} *`}
          {...register(`${prefix}.postalCode`)}
          error={err("postalCode")}
          placeholder="400001"
          disabled={disabled}
        />

        {/* Mobile Number */}
        <Input
          label={`${t("masters.employeeForm.contact.Mobile Number")} *`}
          {...register(`${prefix}.mobileNumber`)}
          error={err("mobileNumber")}
          placeholder="91-9876543210"
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default function ContactDetailsStep({
  form,
  fieldPrefix = "contactDetails.",
}: ContactDetailsStepProps) {
  const { t } = useTranslation();
  const { register, setValue, getValues } = form;

  const permanentPrefix = `${fieldPrefix}permanentAddress`;
  const temporaryPrefix = `${fieldPrefix}temporaryAddress`;
  const checkboxKey = `${fieldPrefix}isSameAsPermanent`;

  // Watch the checkbox and permanent address fields
  const isSame = useWatch({ control: form.control, name: checkboxKey });
  const permanentAddress = useWatch({
    control: form.control,
    name: permanentPrefix,
  });

  // When "same as permanent" is checked OR permanent address changes while same is checked,
  // copy the permanent values into temporary address fields
  useEffect(() => {
    if (isSame && permanentAddress) {
      setValue(`${temporaryPrefix}.address`, permanentAddress.address ?? "");
      setValue(`${temporaryPrefix}.postalCode`, permanentAddress.postalCode ?? "");
      setValue(`${temporaryPrefix}.mobileNumber`, permanentAddress.mobileNumber ?? "");
    }
  }, [isSame, permanentAddress, setValue, temporaryPrefix]);

  const handleCheckboxChange = (checked: boolean) => {
    setValue(checkboxKey, checked);
    if (checked) {
      const perm = getValues(permanentPrefix);
      setValue(`${temporaryPrefix}.address`, perm?.address ?? "");
      setValue(`${temporaryPrefix}.postalCode`, perm?.postalCode ?? "");
      setValue(`${temporaryPrefix}.mobileNumber`, perm?.mobileNumber ?? "");
    }
  };

  return (
    <div className="space-y-8">
      {/* Permanent Address */}
      <AddressSection
        title={t("masters.employeeForm.contact.Permanent Address")}
        prefix={permanentPrefix}
        form={form}
      />

      {/* Same as Permanent Checkbox */}
      <div className="flex items-center gap-3">
        <input
          id="isSameAsPermanent"
          type="checkbox"
          className="w-4 h-4 accent-[var(--color-primary)] cursor-pointer"
          {...register(checkboxKey)}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
        <label
          htmlFor="isSameAsPermanent"
          className="text-sm font-medium text-gray-700 cursor-pointer select-none"
        >
          {t("masters.employeeForm.contact.Is Temporary Address Same as Permanent Address")}
        </label>
      </div>

      {/* Temporary Address */}
      <AddressSection
        title={t("masters.employeeForm.contact.Temporary Address")}
        prefix={temporaryPrefix}
        form={form}
        disabled={!!isSame}
      />
    </div>
  );
}
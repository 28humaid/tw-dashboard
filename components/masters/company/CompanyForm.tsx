"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import BottomSheetModal from "@/components/common/BottomSheetModal";

import Button from "@/components/common/Button";
import { useToast } from "@/components/common/ToastProvider";

import { Company } from "@/types/type";
import { Input } from "@/components/common/InputField";
import FormSelect from "@/components/common/FormSelect";
import {useStatusOptions} from "@/hooks/useStatusOptions";
import { useTranslation } from "react-i18next";
import { createCompanySchema } from "@/lib/companySchema";

type CompanyFormData = z.infer<ReturnType<typeof createCompanySchema>>;

interface CompanyFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Company | null; // null = Add mode, object = Edit mode
  onSuccess?: (data: CompanyFormData, isEdit: boolean) => void;
}

export default function CompanyFormModal({
  isOpen,
  onClose,
  initialData = null,
  onSuccess,
}: CompanyFormModalProps) {
  const isEditMode = !!initialData;
  const {t} = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<CompanyFormData>({
    resolver: zodResolver(createCompanySchema(t)),
    defaultValues: {
      status: "ACTIVE",
      maxUser: 50,
      maxDevice: 100,
    },
  });
  const { options, loading } = useStatusOptions();
  const { success } = useToast();

  // Reset / populate form when modal opens or initialData changes
  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        Object.keys(initialData).forEach((key) => {
          const value = (initialData as any)[key];
          if (value !== undefined) {
            setValue(key as keyof CompanyFormData, value as any);
          }
        });
      } else {
        reset();
      }
    }
  }, [isOpen, initialData, reset, setValue]);

  const onSubmit = async (data: CompanyFormData) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log(
      isEditMode ? "=== COMPANY UPDATED ===" : "=== NEW COMPANY ADDED ===",
      data
    );
    // alert(
    //   isEditMode
    //     ? `✅ Company "${data.name}" updated successfully!`
    //     : `✅ Company "${data.name}" added successfully!`
    // );
    success(
      isEditMode
        ? t("masters.companyForm.companyUpdatedSuccess", { name: data.name })
        : t("masters.companyForm.companyAddedSuccess", { name: data.name })
    );

    onSuccess?.(data, isEditMode);
    onClose();
  };

  return (
    <>
      <BottomSheetModal isOpen={isOpen} onClose={onClose}>
        <div className="mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              {isEditMode ? t("masters.companyForm.Edit Company") : t("masters.companyForm.Add New Company")}
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Code */}
              <Input
                label={`${t("masters.companyForm.Company Code")} *`}
                {...register("code")}
                error={errors.code?.message}
                placeholder="ORG001"
              />

              {/* Name */}
              <Input
                label={`${t("masters.companyForm.Company Name")}*`}
                {...register("name")}
                error={errors.name?.message}
                placeholder={t("masters.companyForm.placeholder.companyName")}
              />

              {/* Short Name */}
              <Input
                label={`${t("masters.companyForm.Short Name")}*`}
                {...register("shortName")}
                error={errors.shortName?.message}
                placeholder={t("masters.companyForm.placeholder.shortName")}
              />

              {/* Industry */}
              <Input
                label={`${t("masters.companyForm.Industry Nature")}*`}
                {...register("industryNature")}
                error={errors.industryNature?.message}
                placeholder={t("masters.companyForm.placeholder.Industry")}
              />

              {/* Email */}
              <Input
                label={`${t("masters.companyForm.Email")}*`}
                type="email"
                {...register("email")}
                error={errors.email?.message}
                placeholder="contact@technova.com"
              />

              {/* Phone */}
              <Input
                label={`${t("masters.companyForm.Phone Number")}*`}
                {...register("phoneNumber")}
                error={errors.phoneNumber?.message}
                placeholder="91-9876543210"
              />

              {/* Address */}
              <div className="md:col-span-2">
                <Input
                  label={`${t("masters.companyForm.Address")}*`}
                  {...register("address")}
                  error={errors.address?.message}
                  placeholder={t("masters.companyForm.placeholder.companyName")}
                />
              </div>

              {/* PAN */}
              <Input
                label={`${t("masters.companyForm.PAN")}*`}
                {...register("pan")}
                error={errors.pan?.message}
                placeholder="AAACT1234F"
              />

              {/* Registration Number */}
              <Input
                label={`${t("masters.companyForm.Registration Number")}*`}
                {...register("registrationNumber")}
                error={errors.registrationNumber?.message}
                placeholder="U72900UP2018PTC102345"
              />

              {/* Max Users & Devices */}
              <Input
                label={`${t("masters.companyForm.Max Users")}*`}
                type="number"
                {...register("maxUser", { valueAsNumber: true })}
                error={errors.maxUser?.message}
              />

              <Input
                label={`${t("masters.companyForm.Max Devices")}*`}
                type="number"
                {...register("maxDevice", { valueAsNumber: true })}
                error={errors.maxDevice?.message}
              />

              {/* Valid Upto */}
              <Input
                label={`${t("masters.companyForm.Valid Upto")}*`}
                type="date"
                {...register("validUpto")}
                error={errors.validUpto?.message}
              />

              {/* Registration Date */}
              <Input
                label={`${t("masters.companyForm.Registration Number")}*`}
                type="date"
                {...register("registrationDate")}
                error={errors.registrationDate?.message}
              />
              <FormSelect
                label={`${t("masters.companyForm.Status")}*`}
                required
                options={options}
                register={register("status")}
                error={errors.status}
                loading={loading}
                placeholder={t("masters.companyForm.placeholder.Select status")}
                />
            </div>

            {/* Optional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label={t("masters.companyForm.TAN")}
                {...register("tan")}
                error={errors.tan?.message}
              />
              <Input
                label={t("masters.companyForm.PF Number")}
                {...register("pfNumber")}
                error={errors.pfNumber?.message}
              />
              <Input
                label={t("masters.companyForm.LC Number")}
                {...register("lcNumber")}
                error={errors.lcNumber?.message}
              />
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-gray-300">
              <Button type="button" variant="outline" onClick={onClose}>
                {t("masters.companyForm.Cancel")}
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? t("masters.companyForm.Saving")
                  : isEditMode
                  ? t("masters.companyForm.Update Company")
                  : t("masters.companyForm.Add Company")}
              </Button>
            </div>
          </form>
        </div>
      </BottomSheetModal>
    </>
  );
}
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import BottomSheetModal from "@/components/common/BottomSheetModal";
import Button from "@/components/common/Button";
import { useToast } from "@/components/common/ToastProvider";
import { Location } from "@/types/type";
import { Input } from "@/components/common/InputField";
import { useTranslation } from "react-i18next";
import { createLocationSchema } from "@/lib/locationSchema";

type LocationFormData = z.infer<ReturnType<typeof createLocationSchema>>;

interface LocationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Location | null; // null = Add mode, object = Edit mode
  onSuccess?: (data: LocationFormData, isEdit: boolean) => void;
}

export default function LocationFormModal({
  isOpen,
  onClose,
  initialData = null,
  onSuccess,
}: LocationFormModalProps) {
  const isEditMode = !!initialData;
  const { t } = useTranslation();
  const { success } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<LocationFormData>({
    resolver: zodResolver(createLocationSchema(t)),
  });

  // Reset / populate form when modal opens or initialData changes
  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        Object.keys(initialData).forEach((key) => {
          const value = (initialData as any)[key];
          if (value !== undefined) {
            setValue(key as keyof LocationFormData, value as any);
          }
        });
      } else {
        reset();
      }
    }
  }, [isOpen, initialData, reset, setValue]);

  const onSubmit = async (data: LocationFormData) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log(
      isEditMode ? "=== LOCATION UPDATED ===" : "=== NEW LOCATION ADDED ===",
      data
    );

    success(
      isEditMode
        ? t("masters.locationForm.locationUpdatedSuccess", { name: data.name })
        : t("masters.locationForm.locationAddedSuccess", { name: data.name })
    );

    onSuccess?.(data, isEditMode);
    onClose();
  };

  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose}>
      <div className="mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            {isEditMode
              ? t("masters.locationForm.Edit Location")
              : t("masters.locationForm.Add New Location")}
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Code */}
            <Input
              label={`${t("masters.locationForm.Location Code")} *`}
              {...register("code")}
              error={errors.code?.message}
              placeholder="LOC001"
            />

            {/* Name */}
            <Input
              label={`${t("masters.locationForm.Location Name")} *`}
              {...register("name")}
              error={errors.name?.message}
              placeholder={t("masters.locationForm.placeholder.locationName")}
            />

            {/* Address 1 */}
            <div className="md:col-span-2">
              <Input
                label={`${t("masters.locationForm.Address Line 1")} *`}
                {...register("address1")}
                error={errors.address1?.message}
                placeholder={t("masters.locationForm.placeholder.address1")}
              />
            </div>

            {/* Address 2 */}
            <div className="md:col-span-2">
              <Input
                label={t("masters.locationForm.Address Line 2")}
                {...register("address2")}
                error={errors.address2?.message}
                placeholder={t("masters.locationForm.placeholder.address2")}
              />
            </div>

            {/* City */}
            <Input
              label={`${t("masters.locationForm.City")} *`}
              {...register("city")}
              error={errors.city?.message}
              placeholder={t("masters.locationForm.placeholder.city")}
            />

            {/* State */}
            <Input
              label={`${t("masters.locationForm.State")} *`}
              {...register("state")}
              error={errors.state?.message}
              placeholder={t("masters.locationForm.placeholder.state")}
            />

            {/* Postal Code */}
            <Input
              label={`${t("masters.locationForm.Postal Code")} *`}
              {...register("postalCode")}
              error={errors.postalCode?.message}
              placeholder="400001"
            />

            {/* Country */}
            <Input
              label={`${t("masters.locationForm.Country")} *`}
              {...register("country")}
              error={errors.country?.message}
              placeholder={t("masters.locationForm.placeholder.country")}
            />

            {/* Contact */}
            <Input
              label={`${t("masters.locationForm.Contact")} *`}
              {...register("contact")}
              error={errors.contact?.message}
              placeholder="91-9876543210"
            />

            {/* Email */}
            <Input
              label={`${t("masters.locationForm.Email ID")} *`}
              type="email"
              {...register("emailId")}
              error={errors.emailId?.message}
              placeholder="location@company.com"
            />
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-300">
            <Button type="button" variant="outline" onClick={onClose}>
              {t("masters.locationForm.Cancel")}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? t("masters.locationForm.Saving")
                : isEditMode
                ? t("masters.locationForm.Update Location")
                : t("masters.locationForm.Add Location")}
            </Button>
          </div>
        </form>
      </div>
    </BottomSheetModal>
  );
}
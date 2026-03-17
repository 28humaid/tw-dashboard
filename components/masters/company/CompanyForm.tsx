"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import BottomSheetModal from "@/components/common/BottomSheetModal";

import Button from "@/components/common/Button";
import Toast from "@/components/common/Toast"; // your Toast component

import { Company } from "@/types/type";
import { Input } from "@/components/common/InputField";
import FormSelect from "@/components/common/FormSelect";
import {useStatusOptions} from "@/hooks/useStatusOptions";
import { companySchema } from "@/lib/companySchema";

type CompanyFormData = z.infer<typeof companySchema>;

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      status: "ACTIVE",
      maxUser: 50,
      maxDevice: 100,
    },
  });
  const { options, loading } = useStatusOptions();

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

    // Show success toast (you can manage toast state globally or pass callback)
    // For simplicity, we'll alert here. In production, use a global toast store.
    alert(
      isEditMode
        ? `✅ Company "${data.name}" updated successfully!`
        : `✅ Company "${data.name}" added successfully!`
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
              {isEditMode ? "Edit Company" : "Add New Company"}
            </h2>
            {/* <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button> */}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Code */}
              <Input
                label="Company Code *"
                {...register("code")}
                error={errors.code?.message}
                placeholder="ORG001"
              />

              {/* Name */}
              <Input
                label="Company Name *"
                {...register("name")}
                error={errors.name?.message}
                placeholder="TechNova Solutions Pvt Ltd"
              />

              {/* Short Name */}
              <Input
                label="Short Name *"
                {...register("shortName")}
                error={errors.shortName?.message}
                placeholder="TechNova"
              />

              {/* Industry */}
              <Input
                label="Industry Nature *"
                {...register("industryNature")}
                error={errors.industryNature?.message}
                placeholder="Information Technology"
              />

              {/* Email */}
              <Input
                label="Email *"
                type="email"
                {...register("email")}
                error={errors.email?.message}
                placeholder="contact@technova.com"
              />

              {/* Phone */}
              <Input
                label="Phone Number *"
                {...register("phoneNumber")}
                error={errors.phoneNumber?.message}
                placeholder="+91-9876543210"
              />

              {/* Address */}
              <div className="md:col-span-2">
                <Input
                  label="Address *"
                  {...register("address")}
                  error={errors.address?.message}
                  placeholder="Sector 62, Noida, Uttar Pradesh, India"
                />
              </div>

              {/* PAN */}
              <Input
                label="PAN *"
                {...register("pan")}
                error={errors.pan?.message}
                placeholder="AAACT1234F"
              />

              {/* Registration Number */}
              <Input
                label="Registration Number *"
                {...register("registrationNumber")}
                error={errors.registrationNumber?.message}
                placeholder="U72900UP2018PTC102345"
              />

              {/* Max Users & Devices */}
              <Input
                label="Max Users *"
                type="number"
                {...register("maxUser", { valueAsNumber: true })}
                error={errors.maxUser?.message}
              />

              <Input
                label="Max Devices *"
                type="number"
                {...register("maxDevice", { valueAsNumber: true })}
                error={errors.maxDevice?.message}
              />

              {/* Valid Upto */}
              <Input
                label="Valid Upto *"
                type="date"
                {...register("validUpto")}
                error={errors.validUpto?.message}
              />

              {/* Registration Date */}
              <Input
                label="Registration Date *"
                type="date"
                {...register("registrationDate")}
                error={errors.registrationDate?.message}
              />
              <FormSelect
                label="Status"
                required
                options={options}
                register={register("status")}
                error={errors.status}
                loading={loading}
                placeholder="Select status"
                />
            </div>

            {/* Optional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="TAN"
                {...register("tan")}
                error={errors.tan?.message}
              />
              <Input
                label="PF Number"
                {...register("pfNumber")}
                error={errors.pfNumber?.message}
              />
              <Input
                label="LC Number"
                {...register("lcNumber")}
                error={errors.lcNumber?.message}
              />
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-gray-300">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? "Saving..."
                  : isEditMode
                  ? "Update Company"
                  : "Add Company"}
              </Button>
            </div>
          </form>
        </div>
      </BottomSheetModal>

      {/* Optional: Global Toast can be placed here or in a provider */}
    </>
  );
}
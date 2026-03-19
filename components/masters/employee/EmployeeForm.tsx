"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

import BottomSheetModal from "@/components/common/BottomSheetModal";
import Button from "@/components/common/Button";
import { useToast } from "@/components/common/ToastProvider";

import { Employee } from "@/types/masters/EmployeeTypes";
import { EMPLOYEE_STEPS } from "@/data/EmployeeData";
import { createEmployeeFormSchema, getStepSchema } from "@/lib/employeesSchema";

import OfficeDetailsStep from "./OfficeDetails";
import PersonalDetailsStep from "./PersonalDetails";
import ContactDetailsStep from "./ContactDetails";
import UploadDetailsStep from "./UploadDetails";

// ─── Types ────────────────────────────────────────────────────────────────────

type EmployeeFormData = {
  officeDetails: Record<string, unknown>;
  personalDetails: Record<string, unknown>;
  contactDetails: Record<string, unknown>;
  uploadDetails: Record<string, unknown>;
};

interface EmployeeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Employee | null;
  onSuccess?: (data: EmployeeFormData, isEdit: boolean) => void;
}

// ─── Step Map ─────────────────────────────────────────────────────────────────

const STEP_PREFIXES: Record<number, string> = {
  1: "officeDetails.",
  2: "personalDetails.",
  3: "contactDetails.",
  4: "uploadDetails.",
};

// ─── Stepper UI ───────────────────────────────────────────────────────────────

function Stepper({
  currentStep,
  completedSteps,
}: {
  currentStep: number;
  completedSteps: Set<number>;
}) {
  return (
    <div className="flex items-start gap-0 mb-8 overflow-x-auto pb-1">
      {EMPLOYEE_STEPS.map((step, idx) => {
        const isActive = currentStep === step.id;
        const isCompleted = completedSteps.has(step.id);
        const isLast = idx === EMPLOYEE_STEPS.length - 1;

        return (
          <div key={step.id} className="flex items-start flex-1 min-w-0">
            {/* Step bubble + label */}
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all
                  ${
                    isCompleted
                      ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                      : isActive
                      ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-white"
                      : "border-gray-300 text-gray-400 bg-white"
                  }`}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              <div className="text-center w-20">
                <p
                  className={`text-xs font-medium leading-tight ${
                    isActive ? "text-[var(--color-primary)]" : isCompleted ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            </div>

            {/* Connector line */}
            {!isLast && (
              <div
                className={`flex-1 h-0.5 mt-4 mx-1 transition-all ${
                  isCompleted ? "bg-[var(--color-primary)]" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function EmployeeFormModal({
  isOpen,
  onClose,
  initialData = null,
  onSuccess,
}: EmployeeFormModalProps) {
  const { t } = useTranslation();
  const { success } = useToast();
  const isEditMode = !!initialData;

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const form = useForm<EmployeeFormData>({
    resolver: zodResolver(createEmployeeFormSchema(t)),
    mode: "onChange",
    defaultValues: {
      officeDetails: {},
      personalDetails: {},
      contactDetails: {
        isSameAsPermanent: false,
        permanentAddress: { address: "", postalCode: "", mobileNumber: "" },
        temporaryAddress: { address: "", postalCode: "", mobileNumber: "" },
      },
      uploadDetails: {
        employeeImage: null,
        employeeSignature: null,
      },
    },
  });

  const { handleSubmit, reset, setValue, trigger, formState: { isSubmitting } } = form;

  // Reset form & step when modal opens/closes or initialData changes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setCompletedSteps(new Set());
      if (initialData) {
        // Map flat Employee to nested form shape
        setValue("officeDetails", {
          employeeType: initialData.employeeType,
          employeeCode: initialData.employeeCode,
          enrollmentCode: initialData.enrollmentCode,
          proximityCardNumber: initialData.proximityCardNumber,
          employeeName: initialData.employeeName,
          guardianName: initialData.guardianName,
          company: initialData.company,
          department: initialData.department,
          category: initialData.category,
          location: initialData.location,
          employeeGroup: initialData.employeeGroup,
          designation: initialData.designation,
          reportingManager: initialData.reportingManager,
          grade: initialData.grade,
          section: initialData.section,
          userType: initialData.userType,
          validityFromDate: initialData.validityFromDate,
          validityEndDate: initialData.validityEndDate,
        });
        setValue("personalDetails", {
          dateOfJoin: initialData.dateOfJoin,
          dateOfBirth: initialData.dateOfBirth,
          married: initialData.married,
          gender: initialData.gender,
          email: initialData.email,
          bloodGroup: initialData.bloodGroup,
          qualification: initialData.qualification,
          experience: initialData.experience,
          bank: initialData.bank,
          accountNo: initialData.accountNo,
          aadhar: initialData.aadhar,
          panNo: initialData.panNo,
        });
        setValue("contactDetails", {
          permanentAddress: initialData.permanentAddress,
          temporaryAddress: initialData.temporaryAddress,
          isSameAsPermanent: false,
        });
        setValue("uploadDetails", {
          employeeImage: null,
          employeeSignature: null,
        });
      } else {
        reset();
      }
    }
  }, [isOpen, initialData, reset, setValue]);

  // ─── Step Navigation ─────────────────────────────────────────────────────

  const handleNext = async () => {
    // Validate only the current step's fields
    const stepPrefix = STEP_PREFIXES[currentStep].replace(".", "") as keyof EmployeeFormData;
    const isValid = await trigger(stepPrefix);

    if (isValid) {
      setCompletedSteps((prev) => new Set(prev).add(currentStep));
      setCurrentStep((prev) => Math.min(prev + 1, EMPLOYEE_STEPS.length));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const isLastStep = currentStep === EMPLOYEE_STEPS.length;

  // ─── Submit ───────────────────────────────────────────────────────────────

  const onSubmit = async (data: EmployeeFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const employeeName = (data.officeDetails as { employeeName?: string })?.employeeName ?? "";

    console.log(
      isEditMode ? "=== EMPLOYEE UPDATED ===" : "=== NEW EMPLOYEE ADDED ===",
      data
    );

    success(
      isEditMode
        ? t("masters.employeeForm.employeeUpdatedSuccess", { name: employeeName })
        : t("masters.employeeForm.employeeAddedSuccess", { name: employeeName })
    );

    onSuccess?.(data, isEditMode);
    onClose();
  };

  // ─── Step Renderer ────────────────────────────────────────────────────────

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <OfficeDetailsStep form={form} fieldPrefix="officeDetails." />;
      case 2:
        return <PersonalDetailsStep form={form} fieldPrefix="personalDetails." />;
      case 3:
        return <ContactDetailsStep form={form} fieldPrefix="contactDetails." />;
      case 4:
        return <UploadDetailsStep form={form} fieldPrefix="uploadDetails." />;
      default:
        return null;
    }
  };

  const stepMeta = EMPLOYEE_STEPS[currentStep - 1];

  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose}>
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">
              {isEditMode
                ? t("masters.employeeForm.Edit Employee")
                : t("masters.employeeForm.Add New Employee")}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {stepMeta.description}
            </p>
          </div>
          <span className="text-sm text-gray-400 font-medium">
            {t("masters.employeeForm.stepOf", {
              current: currentStep,
              total: EMPLOYEE_STEPS.length,
            })}
          </span>
        </div>

        {/* Stepper */}
        <Stepper currentStep={currentStep} completedSteps={completedSteps} />

        {/* Step Content */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="min-h-[300px]">{renderStep()}</div>

          {/* Footer Actions */}
          <div className="flex justify-between gap-4 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={currentStep === 1 ? onClose : handleBack}
            >
              {currentStep === 1
                ? t("masters.employeeForm.Cancel")
                : t("masters.employeeForm.Back")}
            </Button>

            <div className="flex gap-3">
              {!isLastStep ? (
                <Button type="button" onClick={handleNext}>
                  {t("masters.employeeForm.Next")}
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? t("masters.employeeForm.Saving")
                    : isEditMode
                    ? t("masters.employeeForm.Update Employee")
                    : t("masters.employeeForm.Add Employee")}
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </BottomSheetModal>
  );
}
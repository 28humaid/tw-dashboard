import { z } from "zod";
import { TFunction } from "i18next";

// ─── Step 1: Office Details Schema ───────────────────────────────────────────

export const createOfficeDetailsSchema = (t: TFunction) =>
  z
    .object({
      employeeType: z.string().min(1, t("masters.employeeForm.validation.employeeTypeRequired")),
      employeeCode: z.string().min(1, t("masters.employeeForm.validation.employeeCodeRequired")),
      enrollmentCode: z.string().min(1, t("masters.employeeForm.validation.enrollmentCodeRequired")),
      proximityCardNumber: z.string().min(1, t("masters.employeeForm.validation.proximityCardRequired")),
      employeeName: z.string().min(1, t("masters.employeeForm.validation.employeeNameRequired")),
      guardianName: z.string().min(1, t("masters.employeeForm.validation.guardianNameRequired")),
      company: z.string().min(1, t("masters.employeeForm.validation.companyRequired")),
      department: z.string().min(1, t("masters.employeeForm.validation.departmentRequired")),
      category: z.string().min(1, t("masters.employeeForm.validation.categoryRequired")),
      location: z.string().min(1, t("masters.employeeForm.validation.locationRequired")),
      employeeGroup: z.string().min(1, t("masters.employeeForm.validation.employeeGroupRequired")),
      designation: z.string().min(1, t("masters.employeeForm.validation.designationRequired")),
      reportingManager: z.string().min(1, t("masters.employeeForm.validation.reportingManagerRequired")),
      grade: z.string().min(1, t("masters.employeeForm.validation.gradeRequired")),
      section: z.string().min(1, t("masters.employeeForm.validation.sectionRequired")),
      userType: z.string().min(1, t("masters.employeeForm.validation.userTypeRequired")),
      validityFromDate: z.string().min(1, t("masters.employeeForm.validation.validityFromRequired")),
      validityEndDate: z.string().min(1, t("masters.employeeForm.validation.validityEndRequired")),
    })
    .refine((data) => data.validityEndDate >= data.validityFromDate, {
      message: t("masters.employeeForm.validation.validityEndAfterFrom"),
      path: ["validityEndDate"],
    });

// ─── Step 2: Personal Details Schema ─────────────────────────────────────────

export const createPersonalDetailsSchema = (t: TFunction) =>
  z.object({
    dateOfJoin: z.string().min(1, t("masters.employeeForm.validation.dateOfJoinRequired")),
    dateOfBirth: z.string().min(1, t("masters.employeeForm.validation.dateOfBirthRequired")),
    married: z.string().min(1, t("masters.employeeForm.validation.maritalStatusRequired")),
    gender: z.string().min(1, t("masters.employeeForm.validation.genderRequired")),
    email: z
      .string()
      .min(1, t("masters.employeeForm.validation.emailRequired"))
      .email(t("masters.employeeForm.validation.emailInvalid")),
    bloodGroup: z.string().min(1, t("masters.employeeForm.validation.bloodGroupRequired")),
    qualification: z.string().min(1, t("masters.employeeForm.validation.qualificationRequired")),
    experience: z.string().min(1, t("masters.employeeForm.validation.experienceRequired")),
    bank: z.string().min(1, t("masters.employeeForm.validation.bankRequired")),
    accountNo: z.string().min(1, t("masters.employeeForm.validation.accountNoRequired")),
    aadhar: z
      .string()
      .min(1, t("masters.employeeForm.validation.aadharRequired"))
      .regex(/^\d{4}\s?\d{4}\s?\d{4}$/, t("masters.employeeForm.validation.aadharInvalid")),
    panNo: z
      .string()
      .min(1, t("masters.employeeForm.validation.panRequired"))
      .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, t("masters.employeeForm.validation.panInvalid")),
  });

// ─── Step 3: Contact Details Schema ──────────────────────────────────────────

const addressBlockSchema = (t: TFunction) =>
  z.object({
    address: z.string().min(1, t("masters.employeeForm.validation.addressRequired")),
    postalCode: z
      .string()
      .min(1, t("masters.employeeForm.validation.postalCodeRequired"))
      .regex(/^\d{6}$/, t("masters.employeeForm.validation.postalCodeInvalid")),
    mobileNumber: z.string().min(1, t("masters.employeeForm.validation.mobileRequired")),
  });

export const createContactDetailsSchema = (t: TFunction) =>
  z.object({
    permanentAddress: addressBlockSchema(t),
    temporaryAddress: addressBlockSchema(t),
    isSameAsPermanent: z.boolean(),
  });

// ─── Step 4: Upload Details Schema ───────────────────────────────────────────

export const createUploadDetailsSchema = (t: TFunction) =>
  z.object({
    employeeImage: z
      .instanceof(File)
      .nullable()
      .refine((f) => f !== null, t("masters.employeeForm.validation.employeeImageRequired")),
    employeeSignature: z
      .instanceof(File)
      .nullable()
      .refine((f) => f !== null, t("masters.employeeForm.validation.employeeSignatureRequired")),
  });

// ─── Full Schema (combined — useful for final submit type inference) ──────────

export const createEmployeeFormSchema = (t: TFunction) =>
  z.object({
    officeDetails: createOfficeDetailsSchema(t),
    personalDetails: createPersonalDetailsSchema(t),
    contactDetails: createContactDetailsSchema(t),
    uploadDetails: createUploadDetailsSchema(t),
  });

// ─── Per-step schema map (used by the stepper to validate on Next) ────────────

export const getStepSchema = (step: number, t: TFunction) => {
  switch (step) {
    case 1:
      return createOfficeDetailsSchema(t);
    case 2:
      return createPersonalDetailsSchema(t);
    case 3:
      return createContactDetailsSchema(t);
    case 4:
      return createUploadDetailsSchema(t);
    default:
      return createOfficeDetailsSchema(t);
  }
};
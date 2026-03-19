import { z } from "zod";
import { TFunction } from "i18next";

export const createCompanySchema = (t: TFunction) => z.object({
  code: z.string().min(3, t("masters.companyForm.companySchema.Code must be at least 3 characters")).max(20),
  name: z.string().min(3, t("masters.companyForm.companySchema.Company name is required")).max(150),
  shortName: z.string().min(2, t("masters.companyForm.companySchema.Short name is required")).max(50),
  industryNature: z.string().min(3, t("masters.companyForm.companySchema.Industry nature is required")),
  address: z.string().min(10, t("masters.companyForm.companySchema.Address must be at least 10 characters")),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, t("masters.companyForm.companySchema.Invalid phone number")),
  email: z.string().email(t("masters.companyForm.companySchema.Invalid email address")),
  registrationNumber: z.string().min(5, t("masters.companyForm.companySchema.Registration number is required")),
  pan: z.string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, t("masters.companyForm.companySchema.Invalid PAN format (e.g. ABCDE1234F)")),
  tan: z.string().optional(),
  pfNumber: z.string().optional(),
  lcNumber: z.string().optional(),
  maxUser: z.number().min(1, t("masters.companyForm.companySchema.Max users must be at least 1")),
  maxDevice: z.number().min(1, t("masters.companyForm.companySchema.Max devices must be at least 1")),
  validUpto: z.string().refine((val) => !isNaN(Date.parse(val)), t("masters.companyForm.companySchema.Invalid date")),
  registrationDate: z.string().refine((val) => !isNaN(Date.parse(val)), t("masters.companyForm.companySchema.Invalid date")),
  status: z.enum(["ACTIVE", "INACTIVE"]),
});
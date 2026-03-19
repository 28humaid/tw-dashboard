import { z } from "zod";
import { TFunction } from "i18next";

export const createLocationSchema = (t: TFunction) => z.object({
  code: z
    .string()
    .min(1, t("masters.locationForm.locationSchema.Location code is required"))
    .max(20, t("masters.locationForm.locationSchema.Code must be 20 characters or less")),
    // .regex(/^[A-Z0-9_-]+$/, "Code must be uppercase letters, numbers, hyphens, or underscores"),

  name: z
    .string()
    .min(1, t("masters.locationForm.locationSchema.Location name is required"))
    .max(100, t("masters.locationForm.locationSchema.Name must be 100 characters or less")),

  city: z
    .string()
    .min(1, t("masters.locationForm.locationSchema.City is required"))
    .max(50, t("masters.locationForm.locationSchema.City must be 50 characters or less")),

  state: z
    .string()
    .min(1, t("masters.locationForm.locationSchema.State is required"))
    .max(50, t("masters.locationForm.locationSchema.State must be 50 characters or less")),

  postalCode: z
    .string()
    .min(1, t("masters.locationForm.locationSchema.Postal code is required"))
    .max(10, t("masters.locationForm.locationSchema.Postal code must be 10 characters or less")),
    // .regex(/^[A-Z0-9\s-]+$/i, "Invalid postal code format"),

  country: z
    .string()
    .min(1, t("masters.locationForm.locationSchema.Country is required"))
    .max(50, t("masters.locationForm.locationSchema.Country must be 50 characters or less")),

  address1: z
    .string()
    .min(1, t("masters.locationForm.locationSchema.Address line 1 is required"))
    .max(200, t("masters.locationForm.locationSchema.Address must be 200 characters or less")),

  address2: z
    .string()
    .max(200, t("masters.locationForm.locationSchema.Address must be 200 characters or less"))
    .optional()
    .or(z.literal("")),

  contact: z
    .string()
    .min(1, t("masters.locationForm.locationSchema.Contact number is required"))
    // .regex(/^[\d\s+\-().]+$/, "Invalid contact number format")
    .max(10, t("masters.locationForm.locationSchema.Contact must be 10 characters")),

  emailId: z
    .string()
    .min(1, t("masters.locationForm.locationSchema.Email is required"))
    .email(t("masters.locationForm.locationSchema.Invalid email address")),
});
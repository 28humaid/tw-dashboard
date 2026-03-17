import { z } from "zod";

export const companySchema = z.object({
  code: z.string().min(3, "Code must be at least 3 characters").max(20),
  name: z.string().min(3, "Company name is required").max(150),
  shortName: z.string().min(2, "Short name is required").max(50),
  industryNature: z.string().min(3, "Industry nature is required"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  phoneNumber: z
    .string()
    .regex(/^(\+91-)?\d{10}$/, "Invalid Indian phone number (+91-XXXXXXXXXX)"),
  email: z.string().email("Invalid email address"),
  registrationNumber: z.string().min(5, "Registration number is required"),
  pan: z.string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format (e.g. ABCDE1234F)"),
  tan: z.string().optional(),
  pfNumber: z.string().optional(),
  lcNumber: z.string().optional(),
  maxUser: z.number().min(1, "Max users must be at least 1"),
  maxDevice: z.number().min(1, "Max devices must be at least 1"),
  validUpto: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
  registrationDate: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
  status: z.enum(["ACTIVE", "INACTIVE"]),
});
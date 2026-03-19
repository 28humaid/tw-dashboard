// ─── Employee Types ───────────────────────────────────────────────────────────

export type EmployeeType = "PERMANENT" | "CONTRACT" | "INTERN" | "CONSULTANT";
export type UserType = "ADMIN" | "USER" | "MANAGER" | "HR";
export type Gender = "MALE" | "FEMALE" | "OTHER";
export type MaritalStatus = "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED";
export type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
export type Status = "ACTIVE" | "INACTIVE";

// ─── Step 1: Office Details ───────────────────────────────────────────────────

export interface OfficeDetails {
  employeeType: EmployeeType;
  employeeCode: string;
  enrollmentCode: string;
  proximityCardNumber: string;
  employeeName: string;
  guardianName: string;
  company: string;
  department: string;
  category: string;
  location: string;
  employeeGroup: string;
  designation: string;
  reportingManager: string;
  grade: string;
  section: string;
  userType: UserType;
  validityFromDate: string;
  validityEndDate: string;
}

// ─── Step 2: Personal Details ─────────────────────────────────────────────────

export interface PersonalDetails {
  dateOfJoin: string;
  dateOfBirth: string;
  married: MaritalStatus;
  gender: Gender;
  email: string;
  bloodGroup: BloodGroup;
  qualification: string;
  experience: string;
  bank: string;
  accountNo: string;
  aadhar: string;
  panNo: string;
}

// ─── Step 3: Contact Details ──────────────────────────────────────────────────

export interface AddressBlock {
  address: string;
  postalCode: string;
  mobileNumber: string;
}

export interface ContactDetails {
  permanentAddress: AddressBlock;
  temporaryAddress: AddressBlock;
  isSameAsPermanent: boolean;
}

// ─── Step 4: Upload Details ───────────────────────────────────────────────────

export interface UploadDetails {
  employeeImage: File | null;
  employeeSignature: File | null;
}

// ─── Full Employee Form (all steps combined) ──────────────────────────────────

export interface EmployeeFormData {
  officeDetails: OfficeDetails;
  personalDetails: PersonalDetails;
  contactDetails: ContactDetails;
  uploadDetails: UploadDetails;
}

// ─── Employee record (as stored / returned from API) ─────────────────────────

export interface Employee {
  id: string;
  status: Status;
  employeeCode: string;
  employeeName: string;
  employeeType: EmployeeType;
  department: string;
  designation: string;
  location: string;
  email: string;
  dateOfJoin: string;
  // Flatten remaining fields for table display as needed
  enrollmentCode: string;
  proximityCardNumber: string;
  guardianName: string;
  company: string;
  category: string;
  employeeGroup: string;
  reportingManager: string;
  grade: string;
  section: string;
  userType: UserType;
  validityFromDate: string;
  validityEndDate: string;
  dateOfBirth: string;
  married: MaritalStatus;
  gender: Gender;
  bloodGroup: BloodGroup;
  qualification: string;
  experience: string;
  bank: string;
  accountNo: string;
  aadhar: string;
  panNo: string;
  permanentAddress: AddressBlock;
  temporaryAddress: AddressBlock;
  employeeImageUrl?: string;
  employeeSignatureUrl?: string;
}

// ─── Step meta (used by the stepper UI) ──────────────────────────────────────

export interface StepMeta {
  id: number;
  label: string;
  description: string;
}
import {
  Employee,
  EmployeeType,
  UserType,
  Gender,
  MaritalStatus,
  BloodGroup,
  StepMeta,
} from "@/types/masters/EmployeeTypes";

// ─── Step Meta ────────────────────────────────────────────────────────────────

export const EMPLOYEE_STEPS: StepMeta[] = [
  { id: 1, label: "Office Details", description: "Role, department & validity" },
  { id: 2, label: "Personal Details", description: "Personal & financial info" },
  { id: 3, label: "Contact Details", description: "Permanent & temporary address" },
  { id: 4, label: "Upload", description: "Photo & signature" },
];

// ─── Dropdown Options ─────────────────────────────────────────────────────────

export const EMPLOYEE_TYPE_OPTIONS: { label: string; value: EmployeeType }[] = [
  { label: "Permanent", value: "PERMANENT" },
  { label: "Contract", value: "CONTRACT" },
  { label: "Intern", value: "INTERN" },
  { label: "Consultant", value: "CONSULTANT" },
];

export const USER_TYPE_OPTIONS: { label: string; value: UserType }[] = [
  { label: "Admin", value: "ADMIN" },
  { label: "User", value: "USER" },
  { label: "Manager", value: "MANAGER" },
  { label: "HR", value: "HR" },
];

export const GENDER_OPTIONS: { label: string; value: Gender }[] = [
  { label: "Male", value: "MALE" },
  { label: "Female", value: "FEMALE" },
  { label: "Other", value: "OTHER" },
];

export const MARITAL_STATUS_OPTIONS: { label: string; value: MaritalStatus }[] = [
  { label: "Single", value: "SINGLE" },
  { label: "Married", value: "MARRIED" },
  { label: "Divorced", value: "DIVORCED" },
  { label: "Widowed", value: "WIDOWED" },
];

export const BLOOD_GROUP_OPTIONS: { label: string; value: BloodGroup }[] = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

// These would come from your API in a real app
export const COMPANY_OPTIONS = [
  { label: "TechNova Pvt Ltd", value: "TECHNOVA" },
  { label: "Innovate Corp", value: "INNOVATE" },
  { label: "GlobalEdge Inc", value: "GLOBALEDGE" },
];

export const DEPARTMENT_OPTIONS = [
  { label: "Engineering", value: "ENG" },
  { label: "Human Resources", value: "HR" },
  { label: "Finance", value: "FIN" },
  { label: "Operations", value: "OPS" },
  { label: "Marketing", value: "MKT" },
];

export const CATEGORY_OPTIONS = [
  { label: "General", value: "GENERAL" },
  { label: "OBC", value: "OBC" },
  { label: "SC", value: "SC" },
  { label: "ST", value: "ST" },
];

export const LOCATION_OPTIONS = [
  { label: "Mumbai HQ", value: "MUM_HQ" },
  { label: "Delhi Office", value: "DEL_OFF" },
  { label: "Bangalore Tech Park", value: "BLR_TP" },
  { label: "Pune Branch", value: "PUN_BR" },
];

export const EMPLOYEE_GROUP_OPTIONS = [
  { label: "Group A", value: "GRP_A" },
  { label: "Group B", value: "GRP_B" },
  { label: "Group C", value: "GRP_C" },
];

export const DESIGNATION_OPTIONS = [
  { label: "Software Engineer", value: "SWE" },
  { label: "Senior Engineer", value: "SR_SWE" },
  { label: "Tech Lead", value: "TL" },
  { label: "Manager", value: "MGR" },
  { label: "Director", value: "DIR" },
  { label: "HR Executive", value: "HR_EXE" },
];

export const GRADE_OPTIONS = [
  { label: "Grade 1", value: "G1" },
  { label: "Grade 2", value: "G2" },
  { label: "Grade 3", value: "G3" },
  { label: "Grade 4", value: "G4" },
];

export const SECTION_OPTIONS = [
  { label: "Development", value: "DEV" },
  { label: "QA", value: "QA" },
  { label: "DevOps", value: "DEVOPS" },
  { label: "Support", value: "SUPPORT" },
];

export const BANK_OPTIONS = [
  { label: "State Bank of India", value: "SBI" },
  { label: "HDFC Bank", value: "HDFC" },
  { label: "ICICI Bank", value: "ICICI" },
  { label: "Axis Bank", value: "AXIS" },
  { label: "Kotak Mahindra Bank", value: "KOTAK" },
];

// ─── Mock Employee Data ───────────────────────────────────────────────────────

export const employees: Employee[] = [
  {
    id: "EMP001",
    status: "ACTIVE",
    employeeCode: "EMP001",
    enrollmentCode: "ENR001",
    proximityCardNumber: "PXY001",
    employeeName: "Arjun Sharma",
    guardianName: "Ramesh Sharma",
    company: "TECHNOVA",
    department: "ENG",
    category: "GENERAL",
    location: "MUM_HQ",
    employeeGroup: "GRP_A",
    designation: "SWE",
    reportingManager: "Priya Mehta",
    grade: "G2",
    section: "DEV",
    userType: "USER",
    validityFromDate: "2023-01-01",
    validityEndDate: "2025-12-31",
    employeeType: "PERMANENT",
    dateOfJoin: "2023-01-15",
    dateOfBirth: "1995-06-20",
    married: "SINGLE",
    gender: "MALE",
    email: "arjun.sharma@technova.com",
    bloodGroup: "B+",
    qualification: "B.Tech Computer Science",
    experience: "3 years",
    bank: "HDFC",
    accountNo: "HDFC0012345678",
    aadhar: "1234 5678 9012",
    panNo: "ABCDE1234F",
    permanentAddress: {
      address: "12, Green Park, Andheri West",
      postalCode: "400058",
      mobileNumber: "9876543210",
    },
    temporaryAddress: {
      address: "12, Green Park, Andheri West",
      postalCode: "400058",
      mobileNumber: "9876543210",
    },
  },
  {
    id: "EMP002",
    status: "ACTIVE",
    employeeCode: "EMP002",
    enrollmentCode: "ENR002",
    proximityCardNumber: "PXY002",
    employeeName: "Priya Mehta",
    guardianName: "Suresh Mehta",
    company: "TECHNOVA",
    department: "ENG",
    category: "GENERAL",
    location: "MUM_HQ",
    employeeGroup: "GRP_A",
    designation: "MGR",
    reportingManager: "Vikram Nair",
    grade: "G4",
    section: "DEV",
    userType: "MANAGER",
    validityFromDate: "2021-03-01",
    validityEndDate: "2026-02-28",
    employeeType: "PERMANENT",
    dateOfJoin: "2021-03-10",
    dateOfBirth: "1990-11-05",
    married: "MARRIED",
    gender: "FEMALE",
    email: "priya.mehta@technova.com",
    bloodGroup: "O+",
    qualification: "MBA + B.Tech",
    experience: "8 years",
    bank: "ICICI",
    accountNo: "ICICI00987654321",
    aadhar: "9876 5432 1098",
    panNo: "FGHIJ5678K",
    permanentAddress: {
      address: "45, Sector 18, Noida",
      postalCode: "201301",
      mobileNumber: "9123456789",
    },
    temporaryAddress: {
      address: "Flat 3B, DLF Phase 2, Gurugram",
      postalCode: "122002",
      mobileNumber: "9123456789",
    },
  },
  {
    id: "EMP003",
    status: "INACTIVE",
    employeeCode: "EMP003",
    enrollmentCode: "ENR003",
    proximityCardNumber: "PXY003",
    employeeName: "Rohan Verma",
    guardianName: "Anil Verma",
    company: "INNOVATE",
    department: "HR",
    category: "OBC",
    location: "DEL_OFF",
    employeeGroup: "GRP_B",
    designation: "HR_EXE",
    reportingManager: "Sunita Rao",
    grade: "G1",
    section: "SUPPORT",
    userType: "HR",
    validityFromDate: "2022-07-01",
    validityEndDate: "2024-06-30",
    employeeType: "CONTRACT",
    dateOfJoin: "2022-07-05",
    dateOfBirth: "1998-03-15",
    married: "SINGLE",
    gender: "MALE",
    email: "rohan.verma@innovate.com",
    bloodGroup: "A+",
    qualification: "MBA HR",
    experience: "1.5 years",
    bank: "SBI",
    accountNo: "SBI00112233445",
    aadhar: "4567 8901 2345",
    panNo: "LMNOP9012Q",
    permanentAddress: {
      address: "78, Civil Lines, Allahabad",
      postalCode: "211001",
      mobileNumber: "9988776655",
    },
    temporaryAddress: {
      address: "78, Civil Lines, Allahabad",
      postalCode: "211001",
      mobileNumber: "9988776655",
    },
  },
];
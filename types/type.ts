export type StatCardProps = {
  title: string;
  value: number;
  percentage?: number;
  label?: string;
  color: string;
  onClick?: (card: StatCardProps) => void;
  relatedDevices?: Device[];
  clickable?: boolean;
  relatedLeaves?: LeaveInfo[];

  modalTitle?: string;                    // optional override
  modalSubtitle?: string | React.ReactNode;
  modalContent?: React.ReactNode;         // completely custom content
  tableData?: any[];                      // generic table rows
  tableColumns?: any[];                   // generic column definitions
  tableGridTemplate?: string;
  tableMinWidth?:string;
};
export type AttendanceData = {
  date: string; // ISO date string, e.g., '2026-02-01'
  present: number;
  absent: number;
  late: number;
  leave: number;
  holiday: number;
  weekOff: number;
}

export interface DeptAttendanceData {
  date: string;
  Sales: number;
  IT: number;
  HR: number;
  Marketing: number;
}

/**
 * Generic trend data used for any multi-line time series chart
 * Example:
 * { date: "2026-02-01", Sales: 20, IT: 30 }
 */
export interface TrendData {
  date: string;
  [key: string]: string | number;
}

export interface LineConfig<T> {
  dataKey: keyof T;
  stroke: string;
  name: string;
}

export interface AttendanceTrendChartProps<T> {
  data: T[];
  heading: string;
  lines: readonly LineConfig<T>[];
  lang?: string;
}

export interface DepartmentAttendanceData {
  department: string;
  total: number;
  present: number;
}

export interface DepartmentAttendanceStripChartProps<T> {
  data: T[];
  heading: string;
  barColor?: string;
}

export interface Device {
  serialNumber: string;
  name: string;
  connected: boolean;
  ipAddress: string;
  lastConnected: string; // e.g. "2025-02-12 14:30" or relative time
}

// types/checkIn.ts
export interface CheckInData {
  checkedIn: number;
  total: number;
}
export type DepartmentAttendance = {
  department: string;
  total: number;
  present: number;
  absent: number;
  late: number;
  leave: number;
  holiday: number;
  weekOff: number;
};
export type ShiftCoverage = {
  shiftCode: string;
  employees: number;
};
export type HourlyShiftCoverage = {
  hour: number; // 0–23
  shifts: ShiftCoverage[];
};
export type ShiftCoverageByDate = {
  date: string; // YYYY-MM-DD
  hourlyCoverage: HourlyShiftCoverage[];
};

export type Shift = {
  id: string;
  code: string;
  startTime: string;
  endTime: string;
  hours: number;
};


export type AttendanceStatus =
  | "present"
  | "late"
  | "absent"
  | "leave"
  | "holiday"
  | "weekoff";

export interface AttendanceRecord {
  date: string; // ISO string: "2026-02-17"
  status: AttendanceStatus;
  loginTime?: string;
  logoutTime?: string | null;
}

export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  attendance: AttendanceRecord[];
  faceCount: number;  
  fingerCount: number;   
  cardCount: number;     
  pinCount: number;      
}

export interface LeaveInfo {
  employeeName: string;
  employeeId: string;
  leaveCode: string;
  fromDate: string;
  toDate: string;
  appliedOn: string;
  status: "Pending" | "Approved" | "Rejected";
}

export type LoginFormData = {
  companyCode:string;
  username:string;
  password:string;
}

export interface AttendanceCorrection {
  employeeName: string;
  employeeId: string;
  attendanceDate: string;      // e.g. "2026-03-16"
  punchTime?: string;          // original / expected punch (e.g. "09:14")
  requestedPunchTime: string;  // what employee requested (e.g. "09:00")
  punchType: "IN" | "OUT";
  reason?: string;
  appliedOn: string;
  status: "Pending" | "Approved" | "Rejected";
  requestedBy?: string;        // optional: employee or admin
}

export type CompanyStatus = "ACTIVE" | "INACTIVE";

export interface Company {
  status: CompanyStatus;                  // enum
  code: string;                                // unique org code
  name: string;                                // full legal name
  shortName: string;                           // short display name
  industryNature: string;                      // industry type
  address: string;                             // full address
  phoneNumber: string;                         // contact number
  email: string;                               // official email

  registrationNumber: string;                  // company registration no
  pan: string;                                 // PAN number
  tan?: string;                                 // Tax Deduction Account Number
  pfNumber?: string;                            // Provident Fund number
  lcNumber?: string;                            // License/LC number

  maxUser: number;                             // allowed users
  maxDevice: number;                           // allowed devices

  validUpto: string;                           // ISO date (YYYY-MM-DD)
  registrationDate: string;                    // ISO date

  createdAt?: string;                          // optional metadata
  updatedAt?: string;
}
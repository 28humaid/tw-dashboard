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
  lines: LineConfig<T>[];
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


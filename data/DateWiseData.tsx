import { DepartmentAttendance, Device, HourlyShiftCoverage, LeaveInfo, StatCardProps } from "@/types/type";

export const dateWiseData = {
  "2026-02-16": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 188, percentage: 80, color: "var(--color-present)" },
      { title: "Absent",   value: 16,  percentage: 7,  color: "var(--color-absent)" },
      { title: "Late",     value: 12,  percentage: 5,  color: "var(--color-late)" },
      { title: "Leave",    value: 8,   percentage: 3,  color: "var(--color-leave)" },
      { title: "Holiday",  value: 6,   percentage: 3,  color: "var(--color-holiday)" },
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },
      { title: "Online",  value: 19, percentage: 95, color: "var(--color-device-online)" },
      { title: "Offline", value: 1,  percentage: 5,  color: "var(--color-device-offline)" },
      { title: "Logs", value: 5000, color: "var(--color-device-logs)" },
    ] as StatCardProps[],

    leaveCards : [
      { title: "Leave Requests", value: 315, color: "var(--color-active-members)" },
      { title: "Pending",             value: 142, percentage: 45, color: "var(--color-late)" },
      { title: "Approved",            value: 138, percentage: 44, color: "var(--color-present)" },
      { title: "Rejected",            value: 35,  percentage: 11, color: "var(--color-absent)" },
    ] as StatCardProps[],

    leaveInformation: [
      { employeeName: "Neha Gupta",       employeeId: "EMP-3014", leaveCode: "EL", fromDate: "2025-04-05", toDate: "2025-04-08", appliedOn: "2025-03-20", status: "Approved"  },
      { employeeName: "Rohan Desai",      employeeId: "EMP-5721", leaveCode: "SL", fromDate: "2025-04-12", toDate: "2025-04-12", appliedOn: "2025-04-08", status: "Pending"   },
      { employeeName: "Ishita Banerjee",  employeeId: "EMP-6489", leaveCode: "CL", fromDate: "2025-03-28", toDate: "2025-03-30", appliedOn: "2025-03-15", status: "Approved"  },
      { employeeName: "Arjun Malhotra",   employeeId: "EMP-9173", leaveCode: "PL", fromDate: "2025-05-01", toDate: "2025-05-10", appliedOn: "2025-04-10", status: "Pending"   },
      { employeeName: "Simran Kaur",      employeeId: "EMP-2850", leaveCode: "ML", fromDate: "2025-04-15", toDate: "2025-05-14", appliedOn: "2025-03-25", status: "Approved"  },
      { employeeName: "Yash Thakur",      employeeId: "EMP-7402", leaveCode: "CL", fromDate: "2025-04-20", toDate: "2025-04-21", appliedOn: "2025-04-18", status: "Rejected"  },
      { employeeName: "Divya Iyer",       employeeId: "EMP-8635", leaveCode: "SL", fromDate: "2025-04-25", toDate: "2025-04-27", appliedOn: "2025-04-15", status: "Pending"   },
    ]  as LeaveInfo[],

    departmentData: [
      { department: "Sales",     total: 35, present: 32, absent: 1, late: 1, leave: 1, holiday: 0, weekOff: 0 },
      { department: "HR",        total: 10, present: 8,  absent: 1, late: 0, leave: 1, holiday: 0, weekOff: 0 },
      { department: "IT",        total: 25, present: 20, absent: 2, late: 1, leave: 1, holiday: 1, weekOff: 0 },
      { department: "Marketing", total: 51, present: 45, absent: 2, late: 1, leave: 2, holiday: 1, weekOff: 0 },
    ] as DepartmentAttendance[],
    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 16 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 11 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 9 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 7 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 7 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 15 }, { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 5 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 22 }, { shiftCode: "GEN", employees: 12 }, { shiftCode: "NIG", employees: 3 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 30 }, { shiftCode: "GEN", employees: 18 }, { shiftCode: "NIG", employees: 1 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 34 }, { shiftCode: "GEN", employees: 28 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 33 }, { shiftCode: "GEN", employees: 36 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 31 }, { shiftCode: "GEN", employees: 39 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 26 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 2 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 18 }, { shiftCode: "GEN", employees: 29 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 12 }, { shiftCode: "GEN", employees: 25 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 22 }, { shiftCode: "NIG", employees: 11 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 5 },  { shiftCode: "GEN", employees: 18 }, { shiftCode: "NIG", employees: 14 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 15 }, { shiftCode: "NIG", employees: 18 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 10 }, { shiftCode: "NIG", employees: 21 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 7 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 4 },  { shiftCode: "NIG", employees: 25 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 27 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 24 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 19 }] }
    ] as HourlyShiftCoverage[],
    devices: [
      {serialNumber: "DEV-00124", name: "Main Gateway - Lobby", connected: true, ipAddress: "192.168.1.104", lastConnected: "Just now"},
      {serialNumber: "DEV-00891", name: "Camera - Entrance", connected: false, ipAddress: "192.168.1.45", lastConnected: "3 hours ago"},
      {serialNumber: "DEV-00337", name: "Sensor - Server Room", connected: true, ipAddress: "10.0.0.78", lastConnected: "2 minutes ago"},
      {serialNumber: "DEV-00912", name: "Access Point - Floor 2", connected: true, ipAddress: "192.168.2.15", lastConnected: "15 minutes ago"},
      {serialNumber: "DEV-00456", name: "Thermostat - Conference", connected: false, ipAddress: "192.168.1.89", lastConnected: "Yesterday 23:41"},
      {serialNumber: "DEV-00723", name: "Doorbell - Back Gate", connected: true, ipAddress: "192.168.3.22", lastConnected: "4 minutes ago"},
      {serialNumber: "DEV-00773", name: "Access Point - Floor 4", connected: true, ipAddress: "192.168.3.22", lastConnected: "4 minutes ago"}
    ] as Device[],
  },
  "2026-02-17": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 160, percentage: 68, color: "var(--color-present)" },
      { title: "Absent",   value: 24,  percentage: 10, color: "var(--color-absent)" },
      { title: "Late",     value: 10,  percentage: 4,  color: "var(--color-late)" },
      { title: "Leave",    value: 12,  percentage: 5,  color: "var(--color-leave)" },
      { title: "Holiday",  value: 20,  percentage: 9,  color: "var(--color-holiday)" },
      { title: "Week Off", value: 8,   percentage: 3,  color: "var(--color-weekoff)" },
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },
      { title: "Online",  value: 16, percentage: 80, color: "var(--color-device-online)" },
      { title: "Offline", value: 4,  percentage: 20, color: "var(--color-device-offline)" },
      { title: "Logs", value: 10000, color: "var(--color-device-logs)" },
    ] as StatCardProps[],
    departmentData: [
      { department: "Sales",     total: 35, present: 32, absent: 1, late: 1, leave: 1, holiday: 0, weekOff: 0 },
      { department: "HR",        total: 10, present: 10, absent: 0, late: 0, leave: 0, holiday: 0, weekOff: 0 },
      { department: "IT",        total: 25, present: 18, absent: 3, late: 1, leave: 2, holiday: 1, weekOff: 0 },
      { department: "Marketing", total: 51, present: 47, absent: 1, late: 1, leave: 1, holiday: 1, weekOff: 0 },
    ] as DepartmentAttendance[],
    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 18 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 17 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 15 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 6 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 10 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 12 }, { shiftCode: "GEN", employees: 4 },  { shiftCode: "NIG", employees: 8 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 19 }, { shiftCode: "GEN", employees: 9 },  { shiftCode: "NIG", employees: 6 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 24 }, { shiftCode: "GEN", employees: 15 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 27 }, { shiftCode: "GEN", employees: 26 }, { shiftCode: "NIG", employees: 2 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 29 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 1 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 30 }, { shiftCode: "GEN", employees: 38 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 28 }, { shiftCode: "GEN", employees: 36 }, { shiftCode: "NIG", employees: 1 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 23 }, { shiftCode: "GEN", employees: 33 }, { shiftCode: "NIG", employees: 3 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 17 }, { shiftCode: "GEN", employees: 29 }, { shiftCode: "NIG", employees: 6 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 12 }, { shiftCode: "GEN", employees: 26 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 23 }, { shiftCode: "NIG", employees: 12 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 5 },  { shiftCode: "GEN", employees: 21 }, { shiftCode: "NIG", employees: 15 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 18 }, { shiftCode: "NIG", employees: 19 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 14 }, { shiftCode: "NIG", employees: 22 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 10 }, { shiftCode: "NIG", employees: 24 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 26 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 20 }] }
    ] as HourlyShiftCoverage[],
    devices: [
      {serialNumber: "DEV-00124", name: "Main Gateway - Lobby", connected: true, ipAddress: "192.168.1.104", lastConnected: "Just now"},
      {serialNumber: "DEV-00891", name: "Camera - Entrance", connected: false, ipAddress: "192.168.1.45", lastConnected: "3 hours ago"},
      {serialNumber: "DEV-00337", name: "Sensor - Server Room", connected: true, ipAddress: "10.0.0.78", lastConnected: "2 minutes ago"},
      {serialNumber: "DEV-00912", name: "Access Point - Floor 2", connected: true, ipAddress: "192.168.2.15", lastConnected: "15 minutes ago"},
      {serialNumber: "DEV-00456", name: "Thermostat - Conference", connected: false, ipAddress: "192.168.1.89", lastConnected: "Yesterday 23:41"},
      {serialNumber: "DEV-00723", name: "Doorbell - Back Gate", connected: true, ipAddress: "192.168.3.22", lastConnected: "4 minutes ago"},
      {serialNumber: "DEV-00773", name: "Access Point - Floor 4", connected: true, ipAddress: "192.168.3.22", lastConnected: "4 minutes ago"}
    ] as Device[],
  },
  "2026-02-18": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 150, percentage: 64, color: "var(--color-present)" },
      { title: "Absent",   value: 18,  percentage: 8,  color: "var(--color-absent)" },
      { title: "Late",     value: 6,   percentage: 3,  color: "var(--color-late)" },
      { title: "Leave",    value: 14,  percentage: 6,  color: "var(--color-leave)" },
      { title: "Holiday",  value: 30,  percentage: 13, color: "var(--color-holiday)" },
      { title: "Week Off", value: 16,  percentage: 7,  color: "var(--color-weekoff)" },
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },
      { title: "Online",  value: 15, percentage: 75, color: "var(--color-device-online)" },
      { title: "Offline", value: 5,  percentage: 25, color: "var(--color-device-offline)" },
      { title: "Logs", value: 20000, color: "var(--color-device-logs)" },
    ] as StatCardProps[],
    departmentData: [
      { department: "Sales",     total: 35, present: 33, absent: 1, late: 1, leave: 0, holiday: 0, weekOff: 0 },
      { department: "HR",        total: 10, present: 9,  absent: 1, late: 0, leave: 0, holiday: 0, weekOff: 0 },
      { department: "IT",        total: 25, present: 15, absent: 4, late: 2, leave: 2, holiday: 1, weekOff: 1 },
      { department: "Marketing", total: 51, present: 44, absent: 3, late: 1, leave: 1, holiday: 1, weekOff: 1 },
    ] as DepartmentAttendance[],
    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 15 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 13 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 10 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 5 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 8 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 5 },  { shiftCode: "NIG", employees: 5 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 18 }, { shiftCode: "GEN", employees: 10 }, { shiftCode: "NIG", employees: 2 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 28 }, { shiftCode: "GEN", employees: 35 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 30 }, { shiftCode: "GEN", employees: 40 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 32 }, { shiftCode: "GEN", employees: 42 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 38 }, { shiftCode: "NIG", employees: 3 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 20 }, { shiftCode: "GEN", employees: 36 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 15 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 8 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 28 }, { shiftCode: "NIG", employees: 10 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 5 },  { shiftCode: "GEN", employees: 22 }, { shiftCode: "NIG", employees: 12 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 18 }, { shiftCode: "NIG", employees: 14 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 12 }, { shiftCode: "NIG", employees: 18 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 8 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 5 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 24 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 26 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 18 }] }
    ] as HourlyShiftCoverage[],
  },
  "2026-02-19": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 192, percentage: 82, color: "var(--color-present)" },
      { title: "Absent",   value: 14,  percentage: 6,  color: "var(--color-absent)" },
      { title: "Late",     value: 10,  percentage: 4,  color: "var(--color-late)" },
      { title: "Leave",    value: 8,   percentage: 3,  color: "var(--color-leave)" },
      { title: "Holiday",  value: 6,   percentage: 3,  color: "var(--color-holiday)" },
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },
      { title: "Online",  value: 18, percentage: 90, color: "var(--color-device-online)" },
      { title: "Offline", value: 2,  percentage: 10, color: "var(--color-device-offline)" },
      { title: "Logs", value: 10005, color: "var(--color-device-logs)" },
    ] as StatCardProps[],
    departmentData: [
      { department: "Sales",     total: 35, present: 30, absent: 2, late: 1, leave: 1, holiday: 1, weekOff: 0 },
      { department: "HR",        total: 10, present: 9,  absent: 1, late: 0, leave: 0, holiday: 0, weekOff: 0 },
      { department: "IT",        total: 25, present: 23, absent: 1, late: 0, leave: 1, holiday: 0, weekOff: 0 },
      { department: "Marketing", total: 51, present: 49, absent: 1, late: 0, leave: 1, holiday: 0, weekOff: 0 },
    ] as DepartmentAttendance[],
    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 21 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 18 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 16 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 14 }, { shiftCode: "GEN", employees: 5 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 20 }, { shiftCode: "GEN", employees: 10 }, { shiftCode: "NIG", employees: 10 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 24 }, { shiftCode: "GEN", employees: 18 }, { shiftCode: "NIG", employees: 8 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 26 }, { shiftCode: "GEN", employees: 28 }, { shiftCode: "NIG", employees: 6 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 27 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 36 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 22 }, { shiftCode: "GEN", employees: 35 }, { shiftCode: "NIG", employees: 6 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 18 }, { shiftCode: "GEN", employees: 32 }, { shiftCode: "NIG", employees: 8 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 14 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 10 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 26 }, { shiftCode: "NIG", employees: 12 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 7 },  { shiftCode: "GEN", employees: 22 }, { shiftCode: "NIG", employees: 14 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 5 },  { shiftCode: "GEN", employees: 18 }, { shiftCode: "NIG", employees: 16 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 14 }, { shiftCode: "NIG", employees: 18 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 10 }, { shiftCode: "NIG", employees: 20 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 7 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 5 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 24 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 23 }] }
    ] as HourlyShiftCoverage[],
  },
  "2026-02-20": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 186, percentage: 79, color: "var(--color-present)" },  // 186 / 234 ≈ 79%
      { title: "Absent",   value: 18,  percentage: 8,  color: "var(--color-absent)" },  // 18 / 234 ≈ 8%
      { title: "Late",     value: 12,  percentage: 5,  color: "var(--color-late)" },  // 12 / 234 ≈ 5%
      { title: "Leave",    value: 9,   percentage: 4,  color: "var(--color-leave)" },  // 9 / 234 ≈ 4%
      { title: "Holiday",  value: 5,   percentage: 2,  color: "var(--color-holiday)" },  // 5 / 234 ≈ 2%
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },  // 4 / 234 ≈ 2%
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },

      { title: "Online",  value: 16, percentage: 80, color: "var(--color-device-online)" }, // 16 / 20 = 80%
      { title: "Offline", value: 4,  percentage: 20, color: "var(--color-device-offline)" }, // 4 / 20 = 20%
      { title: "Logs", value: 5769, color: "var(--color-device-logs)" },
    ] as StatCardProps[],

    departmentData: [
        { department: "Sales",     total: 35, present: 31, absent: 1, late: 1, leave: 1, holiday: 0, weekOff: 1 },
        { department: "HR",        total: 10, present: 10, absent: 0, late: 0, leave: 0, holiday: 0, weekOff: 0 },
        { department: "IT",        total: 25, present: 18, absent: 3, late: 1, leave: 2, holiday: 1, weekOff: 0 },
        { department: "Marketing", total: 51, present: 45, absent: 1, late: 1, leave: 1, holiday: 1, weekOff: 2 },
    ] as DepartmentAttendance[],

    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 18 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 17 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 16 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 16 }, { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 22 }, { shiftCode: "GEN", employees: 12 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 27 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 28 }, { shiftCode: "GEN", employees: 32 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 26 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 23 }, { shiftCode: "GEN", employees: 33 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 19 }, { shiftCode: "GEN", employees: 29 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 15 }, { shiftCode: "GEN", employees: 27 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 11 }, { shiftCode: "GEN", employees: 23 }, { shiftCode: "NIG", employees: 11 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 13 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 6 },  { shiftCode: "GEN", employees: 16 }, { shiftCode: "NIG", employees: 15 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 13 }, { shiftCode: "NIG", employees: 17 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 9 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 21 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 4 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 22 }] }
    ] as HourlyShiftCoverage[],
  },
  "2026-02-21": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 191, percentage: 82, color: "var(--color-present)" },   // +5   → 81.6% ≈ 82%
      { title: "Absent",   value: 15,  percentage: 6,  color: "var(--color-absent)" },    // -3
      { title: "Late",     value: 13,  percentage: 6,  color: "var(--color-late)" },      // +1
      { title: "Leave",    value: 8,   percentage: 3,  color: "var(--color-leave)" },     // -1
      { title: "Holiday",  value: 4,   percentage: 2,  color: "var(--color-holiday)" },   // -1
      { title: "Week Off", value: 3,   percentage: 1,  color: "var(--color-weekoff)" },   // -1
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },
      { title: "Online",  value: 17, percentage: 85, color: "var(--color-device-online)" },  // +1   → 85%
      { title: "Offline", value: 3,  percentage: 15, color: "var(--color-device-offline)" }, // -1
      { title: "Logs", value: 7000, color: "var(--color-device-logs)" },
    ] as StatCardProps[],

    departmentData: [
      { department: "Sales",     total: 35, present: 33, absent: 0, late: 1, leave: 0, holiday: 0, weekOff: 1 },
      { department: "HR",        total: 10, present: 10, absent: 0, late: 0, leave: 0, holiday: 0, weekOff: 0 },
      { department: "IT",        total: 25, present: 19, absent: 2, late: 2, leave: 1, holiday: 1, weekOff: 0 },  // +1 present
      { department: "Marketing", total: 51, present: 46, absent: 1, late: 1, leave: 1, holiday: 1, weekOff: 1 },   // +1 present, -1 weekOff
    ] as DepartmentAttendance[],

    shiftCoverage: [
      { hour: 0,  shifts: [{ shiftCode: "MOR", employees: 0 }, { shiftCode: "GEN", employees: 4 }, { shiftCode: "NIG", employees: 20 }] },
      { hour: 1,  shifts: [{ shiftCode: "MOR", employees: 0 }, { shiftCode: "GEN", employees: 3 }, { shiftCode: "NIG", employees: 20 }] },
      { hour: 2,  shifts: [{ shiftCode: "MOR", employees: 0 }, { shiftCode: "GEN", employees: 2 }, { shiftCode: "NIG", employees: 19 }] },
      { hour: 3,  shifts: [{ shiftCode: "MOR", employees: 1 }, { shiftCode: "GEN", employees: 2 }, { shiftCode: "NIG", employees: 18 }] },
      { hour: 4,  shifts: [{ shiftCode: "MOR", employees: 4 }, { shiftCode: "GEN", employees: 1 }, { shiftCode: "NIG", employees: 17 }] },
      { hour: 5,  shifts: [{ shiftCode: "MOR", employees: 11 },{ shiftCode: "GEN", employees: 4 }, { shiftCode: "NIG", employees: 15 }] },
      { hour: 6,  shifts: [{ shiftCode: "MOR", employees: 17 },{ shiftCode: "GEN", employees: 7 }, { shiftCode: "NIG", employees: 13 }] },
      { hour: 7,  shifts: [{ shiftCode: "MOR", employees: 23 },{ shiftCode: "GEN", employees: 13 },{ shiftCode: "NIG", employees: 10 }] },
      { hour: 8,  shifts: [{ shiftCode: "MOR", employees: 26 },{ shiftCode: "GEN", employees: 21 },{ shiftCode: "NIG", employees: 8  }] },
      { hour: 9,  shifts: [{ shiftCode: "MOR", employees: 28 },{ shiftCode: "GEN", employees: 30 },{ shiftCode: "NIG", employees: 6  }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 29 },{ shiftCode: "GEN", employees: 32 },{ shiftCode: "NIG", employees: 5  }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 27 },{ shiftCode: "GEN", employees: 34 },{ shiftCode: "NIG", employees: 5  }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 24 },{ shiftCode: "GEN", employees: 33 },{ shiftCode: "NIG", employees: 6  }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 20 },{ shiftCode: "GEN", employees: 30 },{ shiftCode: "NIG", employees: 8  }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 16 },{ shiftCode: "GEN", employees: 27 },{ shiftCode: "NIG", employees: 10 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 12 },{ shiftCode: "GEN", employees: 24 },{ shiftCode: "NIG", employees: 12 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 9  },{ shiftCode: "GEN", employees: 21 },{ shiftCode: "NIG", employees: 14 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 7  },{ shiftCode: "GEN", employees: 17 },{ shiftCode: "NIG", employees: 15 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 5  },{ shiftCode: "GEN", employees: 14 },{ shiftCode: "NIG", employees: 17 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 4  },{ shiftCode: "GEN", employees: 11 },{ shiftCode: "NIG", employees: 19 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 3  },{ shiftCode: "GEN", employees: 8  },{ shiftCode: "NIG", employees: 21 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 2  },{ shiftCode: "GEN", employees: 6  },{ shiftCode: "NIG", employees: 22 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 1  },{ shiftCode: "GEN", employees: 5  },{ shiftCode: "NIG", employees: 22 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0  },{ shiftCode: "GEN", employees: 4  },{ shiftCode: "NIG", employees: 21 }] }
    ] as HourlyShiftCoverage[],
  },
  "2026-02-22": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 192, percentage: 82, color: "var(--color-present)" },
      { title: "Absent",   value: 14,  percentage: 6,  color: "var(--color-absent)" },
      { title: "Late",     value: 10,  percentage: 4,  color: "var(--color-late)" },
      { title: "Leave",    value: 8,   percentage: 3,  color: "var(--color-leave)" },
      { title: "Holiday",  value: 6,   percentage: 3,  color: "var(--color-holiday)" },
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },
      { title: "Online",  value: 18, percentage: 90, color: "var(--color-device-online)" },
      { title: "Offline", value: 2,  percentage: 10, color: "var(--color-device-offline)" },
      { title: "Logs", value: 10001, color: "var(--color-device-logs)" },
    ] as StatCardProps[],
    departmentData: [
      { department: "Sales",     total: 35, present: 30, absent: 2, late: 1, leave: 1, holiday: 1, weekOff: 0 },
      { department: "HR",        total: 10, present: 9,  absent: 1, late: 0, leave: 0, holiday: 0, weekOff: 0 },
      { department: "IT",        total: 25, present: 23, absent: 1, late: 0, leave: 1, holiday: 0, weekOff: 0 },
      { department: "Marketing", total: 51, present: 49, absent: 1, late: 0, leave: 1, holiday: 0, weekOff: 0 },
    ] as DepartmentAttendance[],
    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 21 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 18 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 16 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 14 }, { shiftCode: "GEN", employees: 5 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 20 }, { shiftCode: "GEN", employees: 10 }, { shiftCode: "NIG", employees: 10 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 24 }, { shiftCode: "GEN", employees: 18 }, { shiftCode: "NIG", employees: 8 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 26 }, { shiftCode: "GEN", employees: 28 }, { shiftCode: "NIG", employees: 6 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 27 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 36 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 22 }, { shiftCode: "GEN", employees: 35 }, { shiftCode: "NIG", employees: 6 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 18 }, { shiftCode: "GEN", employees: 32 }, { shiftCode: "NIG", employees: 8 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 14 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 10 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 26 }, { shiftCode: "NIG", employees: 12 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 7 },  { shiftCode: "GEN", employees: 22 }, { shiftCode: "NIG", employees: 14 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 5 },  { shiftCode: "GEN", employees: 18 }, { shiftCode: "NIG", employees: 16 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 14 }, { shiftCode: "NIG", employees: 18 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 10 }, { shiftCode: "NIG", employees: 20 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 7 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 5 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 24 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 23 }] }
    ] as HourlyShiftCoverage[],
  },
  "2026-02-23": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 186, percentage: 79, color: "var(--color-present)" },  // 186 / 234 ≈ 79%
      { title: "Absent",   value: 18,  percentage: 8,  color: "var(--color-absent)" },  // 18 / 234 ≈ 8%
      { title: "Late",     value: 12,  percentage: 5,  color: "var(--color-late)" },  // 12 / 234 ≈ 5%
      { title: "Leave",    value: 9,   percentage: 4,  color: "var(--color-leave)" },  // 9 / 234 ≈ 4%
      { title: "Holiday",  value: 5,   percentage: 2,  color: "var(--color-holiday)" },  // 5 / 234 ≈ 2%
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },  // 4 / 234 ≈ 2%
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },
      { title: "Online",  value: 16, percentage: 80, color: "var(--color-device-online)" }, // 16 / 20 = 80%
      { title: "Offline", value: 4,  percentage: 20, color: "var(--color-device-offline)" }, // 4 / 20 = 20%
      { title: "Logs", value: 10005, color: "var(--color-device-logs)" },
    ] as StatCardProps[],

    departmentData: [
        { department: "Sales",     total: 35, present: 31, absent: 1, late: 1, leave: 1, holiday: 0, weekOff: 1 },
        { department: "HR",        total: 10, present: 10, absent: 0, late: 0, leave: 0, holiday: 0, weekOff: 0 },
        { department: "IT",        total: 25, present: 18, absent: 3, late: 1, leave: 2, holiday: 1, weekOff: 0 },
        { department: "Marketing", total: 51, present: 45, absent: 1, late: 1, leave: 1, holiday: 1, weekOff: 2 },
    ] as DepartmentAttendance[],

    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 18 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 17 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 16 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 16 }, { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 22 }, { shiftCode: "GEN", employees: 12 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 27 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 28 }, { shiftCode: "GEN", employees: 32 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 26 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 23 }, { shiftCode: "GEN", employees: 33 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 19 }, { shiftCode: "GEN", employees: 29 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 15 }, { shiftCode: "GEN", employees: 27 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 11 }, { shiftCode: "GEN", employees: 23 }, { shiftCode: "NIG", employees: 11 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 13 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 6 },  { shiftCode: "GEN", employees: 16 }, { shiftCode: "NIG", employees: 15 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 13 }, { shiftCode: "NIG", employees: 17 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 9 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 21 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 4 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 22 }] }
    ] as HourlyShiftCoverage[],
  },
  "2026-02-24": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 186, percentage: 79, color: "var(--color-present)" },  // 186 / 234 ≈ 79%
      { title: "Absent",   value: 18,  percentage: 8,  color: "var(--color-absent)" },  // 18 / 234 ≈ 8%
      { title: "Late",     value: 12,  percentage: 5,  color: "var(--color-late)" },  // 12 / 234 ≈ 5%
      { title: "Leave",    value: 9,   percentage: 4,  color: "var(--color-leave)" },  // 9 / 234 ≈ 4%
      { title: "Holiday",  value: 5,   percentage: 2,  color: "var(--color-holiday)" },  // 5 / 234 ≈ 2%
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },  // 4 / 234 ≈ 2%
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },

      { title: "Online",  value: 16, percentage: 80, color: "var(--color-device-online)" }, // 16 / 20 = 80%
      { title: "Offline", value: 4,  percentage: 20, color: "var(--color-device-offline)" }, // 4 / 20 = 20%
      { title: "Logs", value: 10760, color: "var(--color-device-logs)" },
    ] as StatCardProps[],

    departmentData: [
        { department: "Sales",     total: 35, present: 31, absent: 1, late: 1, leave: 1, holiday: 0, weekOff: 1 },
        { department: "HR",        total: 10, present: 10, absent: 0, late: 0, leave: 0, holiday: 0, weekOff: 0 },
        { department: "IT",        total: 25, present: 18, absent: 3, late: 1, leave: 2, holiday: 1, weekOff: 0 },
        { department: "Marketing", total: 51, present: 45, absent: 1, late: 1, leave: 1, holiday: 1, weekOff: 2 },
    ] as DepartmentAttendance[],

    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 18 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 17 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 16 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 16 }, { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 22 }, { shiftCode: "GEN", employees: 12 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 27 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 28 }, { shiftCode: "GEN", employees: 32 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 26 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 23 }, { shiftCode: "GEN", employees: 33 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 19 }, { shiftCode: "GEN", employees: 29 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 15 }, { shiftCode: "GEN", employees: 27 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 11 }, { shiftCode: "GEN", employees: 23 }, { shiftCode: "NIG", employees: 11 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 13 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 6 },  { shiftCode: "GEN", employees: 16 }, { shiftCode: "NIG", employees: 15 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 13 }, { shiftCode: "NIG", employees: 17 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 9 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 21 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 4 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 22 }] }
    ] as HourlyShiftCoverage[],
  },
  "2026-02-25": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 186, percentage: 79, color: "var(--color-present)" },  // 186 / 234 ≈ 79%
      { title: "Absent",   value: 18,  percentage: 8,  color: "var(--color-absent)" },  // 18 / 234 ≈ 8%
      { title: "Late",     value: 12,  percentage: 5,  color: "var(--color-late)" },  // 12 / 234 ≈ 5%
      { title: "Leave",    value: 9,   percentage: 4,  color: "var(--color-leave)" },  // 9 / 234 ≈ 4%
      { title: "Holiday",  value: 5,   percentage: 2,  color: "var(--color-holiday)" },  // 5 / 234 ≈ 2%
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },  // 4 / 234 ≈ 2%
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },

      { title: "Online",  value: 16, percentage: 80, color: "var(--color-device-online)" }, // 16 / 20 = 80%
      { title: "Offline", value: 4,  percentage: 20, color: "var(--color-device-offline)" }, // 4 / 20 = 20%
      { title: "Logs", value: 7609, color: "var(--color-device-logs)" },
    ] as StatCardProps[],

    leaveCards : [
      { title: "Leave Requests", value: 315, color: "var(--color-active-members)" },
      { title: "Pending",             value: 142, percentage: 45, color: "var(--color-late)" },
      { title: "Approved",            value: 138, percentage: 44, color: "var(--color-present)" },
      { title: "Rejected",            value: 35,  percentage: 11, color: "var(--color-absent)" },
    ] as StatCardProps[],

    leaveInformation: [
      { employeeName: "Neha Gupta",       employeeId: "EMP-3014", leaveCode: "EL", fromDate: "2025-04-05", toDate: "2025-04-08", appliedOn: "2025-03-20", status: "Approved"  },
      { employeeName: "Rohan Desai",      employeeId: "EMP-5721", leaveCode: "SL", fromDate: "2025-04-12", toDate: "2025-04-12", appliedOn: "2025-04-08", status: "Pending"   },
      { employeeName: "Ishita Banerjee",  employeeId: "EMP-6489", leaveCode: "CL", fromDate: "2025-03-28", toDate: "2025-03-30", appliedOn: "2025-03-15", status: "Approved"  },
      { employeeName: "Arjun Malhotra",   employeeId: "EMP-9173", leaveCode: "PL", fromDate: "2025-05-01", toDate: "2025-05-10", appliedOn: "2025-04-10", status: "Pending"   },
      { employeeName: "Simran Kaur",      employeeId: "EMP-2850", leaveCode: "ML", fromDate: "2025-04-15", toDate: "2025-05-14", appliedOn: "2025-03-25", status: "Approved"  },
      { employeeName: "Yash Thakur",      employeeId: "EMP-7402", leaveCode: "CL", fromDate: "2025-04-20", toDate: "2025-04-21", appliedOn: "2025-04-18", status: "Rejected"  },
      { employeeName: "Divya Iyer",       employeeId: "EMP-8635", leaveCode: "SL", fromDate: "2025-04-25", toDate: "2025-04-27", appliedOn: "2025-04-15", status: "Pending"   },
    ]  as LeaveInfo[],

    departmentData: [
        { department: "Sales",     total: 35, present: 31, absent: 1, late: 1, leave: 1, holiday: 0, weekOff: 1 },
        { department: "HR",        total: 10, present: 10, absent: 0, late: 0, leave: 0, holiday: 0, weekOff: 0 },
        { department: "IT",        total: 25, present: 18, absent: 3, late: 1, leave: 2, holiday: 1, weekOff: 0 },
        { department: "Marketing", total: 51, present: 45, absent: 1, late: 1, leave: 1, holiday: 1, weekOff: 2 },
    ] as DepartmentAttendance[],

    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 18 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 17 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 16 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 16 }, { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 22 }, { shiftCode: "GEN", employees: 12 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 27 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 28 }, { shiftCode: "GEN", employees: 32 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 26 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 23 }, { shiftCode: "GEN", employees: 33 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 19 }, { shiftCode: "GEN", employees: 29 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 15 }, { shiftCode: "GEN", employees: 27 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 11 }, { shiftCode: "GEN", employees: 23 }, { shiftCode: "NIG", employees: 11 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 13 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 6 },  { shiftCode: "GEN", employees: 16 }, { shiftCode: "NIG", employees: 15 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 13 }, { shiftCode: "NIG", employees: 17 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 9 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 21 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 4 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 22 }] }
    ] as HourlyShiftCoverage[],
  },
  "2026-02-26": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 180, percentage: 77, color: "var(--color-present)" },
      { title: "Absent",   value: 20,  percentage: 9,  color: "var(--color-absent)" },
      { title: "Late",     value: 14,  percentage: 6,  color: "var(--color-late)" },
      { title: "Leave",    value: 10,  percentage: 4,  color: "var(--color-leave)" },
      { title: "Holiday",  value: 6,   percentage: 3,  color: "var(--color-holiday)" },
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },
      { title: "Online",  value: 17, percentage: 85, color: "var(--color-device-online)" },
      { title: "Offline", value: 3,  percentage: 15, color: "var(--color-device-offline)" },
      { title: "Logs", value: 10000, color: "var(--color-device-logs)" },
    ] as StatCardProps[],

    leaveCards : [
      { title: "Leave Requests", value: 248, color: "var(--color-active-members)" },
      { title: "Pending",             value: 87,  percentage: 35, color: "var(--color-late)" },
      { title: "Approved",            value: 132, percentage: 53, color: "var(--color-present)" },
      { title: "Rejected",            value: 29,  percentage: 12, color: "var(--color-absent)" },
    ] as StatCardProps[],

    leaveInformation : [
      { employeeName: "Aarav Sharma",   employeeId: "EMP-1023", leaveCode: "CL",  fromDate: "2025-03-10", toDate: "2025-03-12", appliedOn: "2025-02-28", status: "Approved" },
      { employeeName: "Priya Patel",    employeeId: "EMP-4567", leaveCode: "SL",  fromDate: "2025-03-15", toDate: "2025-03-15", appliedOn: "2025-03-05", status: "Pending"  },
      { employeeName: "Rahul Verma",    employeeId: "EMP-8912", leaveCode: "PL",  fromDate: "2025-02-20", toDate: "2025-03-05", appliedOn: "2025-02-10", status: "Approved" },
      { employeeName: "Sneha Kapoor",   employeeId: "EMP-2345", leaveCode: "ML",  fromDate: "2025-03-18", toDate: "2025-04-15", appliedOn: "2025-03-01", status: "Pending"  },
      { employeeName: "Vikram Singh",   employeeId: "EMP-6789", leaveCode: "CL",  fromDate: "2025-03-22", toDate: "2025-03-22", appliedOn: "2025-03-20", status: "Rejected" },
      { employeeName: "Ananya Roy",     employeeId: "EMP-1357", leaveCode: "PL",  fromDate: "2025-04-01", toDate: "2025-04-07", appliedOn: "2025-03-15", status: "Pending"  },
      { employeeName: "Karan Mehta",    employeeId: "EMP-9991", leaveCode: "SL",  fromDate: "2025-03-05", toDate: "2025-03-06", appliedOn: "2025-03-02", status: "Approved" },
    ] as LeaveInfo[],

    departmentData: [
      { department: "Sales",     total: 35, present: 28, absent: 2, late: 1, leave: 2, holiday: 1, weekOff: 1 },
      { department: "HR",        total: 10, present: 7,  absent: 1, late: 0, leave: 1, holiday: 0, weekOff: 1 },
      { department: "IT",        total: 25, present: 18, absent: 2, late: 1, leave: 2, holiday: 1, weekOff: 1 },
      { department: "Marketing", total: 51, present: 38, absent: 3, late: 2, leave: 3, holiday: 2, weekOff: 3 },
    ] as DepartmentAttendance[],
    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 15 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 13 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 10 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 5 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 8 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 5 },  { shiftCode: "NIG", employees: 5 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 18 }, { shiftCode: "GEN", employees: 10 }, { shiftCode: "NIG", employees: 2 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 28 }, { shiftCode: "GEN", employees: 35 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 30 }, { shiftCode: "GEN", employees: 40 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 32 }, { shiftCode: "GEN", employees: 42 }, { shiftCode: "NIG", employees: 0 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 38 }, { shiftCode: "NIG", employees: 3 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 20 }, { shiftCode: "GEN", employees: 36 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 15 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 8 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 28 }, { shiftCode: "NIG", employees: 10 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 5 },  { shiftCode: "GEN", employees: 22 }, { shiftCode: "NIG", employees: 12 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 18 }, { shiftCode: "NIG", employees: 14 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 12 }, { shiftCode: "NIG", employees: 18 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 8 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 5 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 24 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 26 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 18 }] }
    ] as HourlyShiftCoverage[],
    devices: [
      {serialNumber: "DEV-00124", name: "Main Gateway - Lobby", connected: true, ipAddress: "192.168.1.104", lastConnected: "Just now"},
      {serialNumber: "DEV-00891", name: "Camera - Entrance", connected: false, ipAddress: "192.168.1.45", lastConnected: "3 hours ago"},
      {serialNumber: "DEV-00337", name: "Sensor - Server Room", connected: true, ipAddress: "10.0.0.78", lastConnected: "2 minutes ago"},
      {serialNumber: "DEV-00912", name: "Access Point - Floor 2", connected: true, ipAddress: "192.168.2.15", lastConnected: "15 minutes ago"},
      {serialNumber: "DEV-00456", name: "Thermostat - Conference", connected: false, ipAddress: "192.168.1.89", lastConnected: "Yesterday 23:41"},
      {serialNumber: "DEV-00723", name: "Doorbell - Back Gate", connected: true, ipAddress: "192.168.3.22", lastConnected: "4 minutes ago"},
      {serialNumber: "DEV-00773", name: "Access Point - Floor 4", connected: true, ipAddress: "192.168.3.22", lastConnected: "4 minutes ago"}
  ] as Device[],
  },
  "2026-02-27": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 186, percentage: 79, color: "var(--color-present)" },  // 186 / 234 ≈ 79%
      { title: "Absent",   value: 18,  percentage: 8,  color: "var(--color-absent)" },  // 18 / 234 ≈ 8%
      { title: "Late",     value: 12,  percentage: 5,  color: "var(--color-late)" },  // 12 / 234 ≈ 5%
      { title: "Leave",    value: 9,   percentage: 4,  color: "var(--color-leave)" },  // 9 / 234 ≈ 4%
      { title: "Holiday",  value: 5,   percentage: 2,  color: "var(--color-holiday)" },  // 5 / 234 ≈ 2%
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },  // 4 / 234 ≈ 2%
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },

      { title: "Online",  value: 16, percentage: 80, color: "var(--color-device-online)" }, // 16 / 20 = 80%
      { title: "Offline", value: 4,  percentage: 20, color: "var(--color-device-offline)" }, // 4 / 20 = 20%
      { title: "Logs", value: 10760, color: "var(--color-device-logs)" },
    ] as StatCardProps[],

    departmentData: [
        { department: "Sales",     total: 35, present: 31, absent: 1, late: 1, leave: 1, holiday: 0, weekOff: 1 },
        { department: "HR",        total: 10, present: 10, absent: 0, late: 0, leave: 0, holiday: 0, weekOff: 0 },
        { department: "IT",        total: 25, present: 18, absent: 3, late: 1, leave: 2, holiday: 1, weekOff: 0 },
        { department: "Marketing", total: 51, present: 45, absent: 1, late: 1, leave: 1, holiday: 1, weekOff: 2 },
    ] as DepartmentAttendance[],

    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 18 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 17 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 16 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 16 }, { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 22 }, { shiftCode: "GEN", employees: 12 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 27 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 28 }, { shiftCode: "GEN", employees: 32 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 26 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 23 }, { shiftCode: "GEN", employees: 33 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 19 }, { shiftCode: "GEN", employees: 29 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 15 }, { shiftCode: "GEN", employees: 27 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 11 }, { shiftCode: "GEN", employees: 23 }, { shiftCode: "NIG", employees: 11 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 13 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 6 },  { shiftCode: "GEN", employees: 16 }, { shiftCode: "NIG", employees: 15 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 13 }, { shiftCode: "NIG", employees: 17 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 9 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 21 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 4 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 22 }] }
    ] as HourlyShiftCoverage[],
  },
  "2026-02-28": {
    statCards: [
      { title: "Active Members", value: 234, color: "var(--color-active-members)" },

      { title: "Present",  value: 186, percentage: 79, color: "var(--color-present)" },  // 186 / 234 ≈ 79%
      { title: "Absent",   value: 18,  percentage: 8,  color: "var(--color-absent)" },  // 18 / 234 ≈ 8%
      { title: "Late",     value: 12,  percentage: 5,  color: "var(--color-late)" },  // 12 / 234 ≈ 5%
      { title: "Leave",    value: 9,   percentage: 4,  color: "var(--color-leave)" },  // 9 / 234 ≈ 4%
      { title: "Holiday",  value: 5,   percentage: 2,  color: "var(--color-holiday)" },  // 5 / 234 ≈ 2%
      { title: "Week Off", value: 4,   percentage: 2,  color: "var(--color-weekoff)" },  // 4 / 234 ≈ 2%
    ] as StatCardProps[],

    deviceCards: [
      { title: "Total Devices", value: 20, color: "var(--color-total-devices)" },

      { title: "Online",  value: 16, percentage: 80, color: "var(--color-device-online)" }, // 16 / 20 = 80%
      { title: "Offline", value: 4,  percentage: 20, color: "var(--color-device-offline)" }, // 4 / 20 = 20%
      { title: "Logs", value: 7609, color: "var(--color-device-logs)" },
    ] as StatCardProps[],

    leaveCards : [
      { title: "Leave Requests", value: 315, color: "var(--color-active-members)" },
      { title: "Pending",             value: 142, percentage: 45, color: "var(--color-late)" },
      { title: "Approved",            value: 138, percentage: 44, color: "var(--color-present)" },
      { title: "Rejected",            value: 35,  percentage: 11, color: "var(--color-absent)" },
    ] as StatCardProps[],

    leaveInformation: [
      { employeeName: "Neha Gupta",       employeeId: "EMP-3014", leaveCode: "EL", fromDate: "2025-04-05", toDate: "2025-04-08", appliedOn: "2025-03-20", status: "Approved"  },
      { employeeName: "Rohan Desai",      employeeId: "EMP-5721", leaveCode: "SL", fromDate: "2025-04-12", toDate: "2025-04-12", appliedOn: "2025-04-08", status: "Pending"   },
      { employeeName: "Ishita Banerjee",  employeeId: "EMP-6489", leaveCode: "CL", fromDate: "2025-03-28", toDate: "2025-03-30", appliedOn: "2025-03-15", status: "Approved"  },
      { employeeName: "Arjun Malhotra",   employeeId: "EMP-9173", leaveCode: "PL", fromDate: "2025-05-01", toDate: "2025-05-10", appliedOn: "2025-04-10", status: "Pending"   },
      { employeeName: "Simran Kaur",      employeeId: "EMP-2850", leaveCode: "ML", fromDate: "2025-04-15", toDate: "2025-05-14", appliedOn: "2025-03-25", status: "Approved"  },
      { employeeName: "Yash Thakur",      employeeId: "EMP-7402", leaveCode: "CL", fromDate: "2025-04-20", toDate: "2025-04-21", appliedOn: "2025-04-18", status: "Rejected"  },
      { employeeName: "Divya Iyer",       employeeId: "EMP-8635", leaveCode: "SL", fromDate: "2025-04-25", toDate: "2025-04-27", appliedOn: "2025-04-15", status: "Pending"   },
    ]  as LeaveInfo[],

    departmentData: [
        { department: "Sales",     total: 35, present: 31, absent: 1, late: 1, leave: 1, holiday: 0, weekOff: 1 },
        { department: "HR",        total: 10, present: 10, absent: 0, late: 0, leave: 0, holiday: 0, weekOff: 0 },
        { department: "IT",        total: 25, present: 18, absent: 3, late: 1, leave: 2, holiday: 1, weekOff: 0 },
        { department: "Marketing", total: 51, present: 45, absent: 1, late: 1, leave: 1, holiday: 1, weekOff: 2 },
    ] as DepartmentAttendance[],

    shiftCoverage: [
      { hour: 0, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 20 }] },
      { hour: 1, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 2, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 18 }] },
      { hour: 3, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 1 },  { shiftCode: "NIG", employees: 17 }] },
      { hour: 4, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 0 },  { shiftCode: "NIG", employees: 16 }] },
      { hour: 5, shifts: [{ shiftCode: "MOR", employees: 10 }, { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 14 }] },
      { hour: 6, shifts: [{ shiftCode: "MOR", employees: 16 }, { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 12 }] },
      { hour: 7, shifts: [{ shiftCode: "MOR", employees: 22 }, { shiftCode: "GEN", employees: 12 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 8, shifts: [{ shiftCode: "MOR", employees: 25 }, { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 9, shifts: [{ shiftCode: "MOR", employees: 27 }, { shiftCode: "GEN", employees: 30 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 10, shifts: [{ shiftCode: "MOR", employees: 28 }, { shiftCode: "GEN", employees: 32 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 11, shifts: [{ shiftCode: "MOR", employees: 26 }, { shiftCode: "GEN", employees: 34 }, { shiftCode: "NIG", employees: 4 }] },
      { hour: 12, shifts: [{ shiftCode: "MOR", employees: 23 }, { shiftCode: "GEN", employees: 33 }, { shiftCode: "NIG", employees: 5 }] },
      { hour: 13, shifts: [{ shiftCode: "MOR", employees: 19 }, { shiftCode: "GEN", employees: 29 }, { shiftCode: "NIG", employees: 7 }] },
      { hour: 14, shifts: [{ shiftCode: "MOR", employees: 15 }, { shiftCode: "GEN", employees: 27 }, { shiftCode: "NIG", employees: 9 }] },
      { hour: 15, shifts: [{ shiftCode: "MOR", employees: 11 }, { shiftCode: "GEN", employees: 23 }, { shiftCode: "NIG", employees: 11 }] },
      { hour: 16, shifts: [{ shiftCode: "MOR", employees: 8 },  { shiftCode: "GEN", employees: 20 }, { shiftCode: "NIG", employees: 13 }] },
      { hour: 17, shifts: [{ shiftCode: "MOR", employees: 6 },  { shiftCode: "GEN", employees: 16 }, { shiftCode: "NIG", employees: 15 }] },
      { hour: 18, shifts: [{ shiftCode: "MOR", employees: 4 },  { shiftCode: "GEN", employees: 13 }, { shiftCode: "NIG", employees: 17 }] },
      { hour: 19, shifts: [{ shiftCode: "MOR", employees: 3 },  { shiftCode: "GEN", employees: 9 },  { shiftCode: "NIG", employees: 19 }] },
      { hour: 20, shifts: [{ shiftCode: "MOR", employees: 2 },  { shiftCode: "GEN", employees: 6 },  { shiftCode: "NIG", employees: 21 }] },
      { hour: 21, shifts: [{ shiftCode: "MOR", employees: 1 },  { shiftCode: "GEN", employees: 4 },  { shiftCode: "NIG", employees: 22 }] },
      { hour: 22, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 3 },  { shiftCode: "NIG", employees: 23 }] },
      { hour: 23, shifts: [{ shiftCode: "MOR", employees: 0 },  { shiftCode: "GEN", employees: 2 },  { shiftCode: "NIG", employees: 22 }] }
    ] as HourlyShiftCoverage[],
    devices: [
      {serialNumber: "DEV-00124", name: "Main Gateway - Lobby", connected: true, ipAddress: "192.168.1.104", lastConnected: "Just now"},
      {serialNumber: "DEV-00891", name: "Camera - Entrance", connected: false, ipAddress: "192.168.1.45", lastConnected: "3 hours ago"},
      {serialNumber: "DEV-00337", name: "Sensor - Server Room", connected: true, ipAddress: "10.0.0.78", lastConnected: "2 minutes ago"},
      {serialNumber: "DEV-00912", name: "Access Point - Floor 2", connected: true, ipAddress: "192.168.2.15", lastConnected: "15 minutes ago"},
      {serialNumber: "DEV-00456", name: "Thermostat - Conference", connected: false, ipAddress: "192.168.1.89", lastConnected: "Yesterday 23:41"},
      {serialNumber: "DEV-00723", name: "Doorbell - Back Gate", connected: true, ipAddress: "192.168.3.22", lastConnected: "4 minutes ago"},
      {serialNumber: "DEV-00773", name: "Access Point - Floor 4", connected: true, ipAddress: "192.168.3.22", lastConnected: "4 minutes ago"}
  ] as Device[],
  },
} as const;
import { Employee } from "@/types/type";
import {  } from "lucide-react";
import Image from "next/image";
import AttendanceDoughnut from "./AttendanceDoughnut";
import {X, UserCircle, Fingerprint, CreditCard, KeyRound} from "lucide-react";
import AttendanceCalendar from "./AttendanceCalendar";

interface Props {
  employee: Employee;
  selectedDate: string;
}

export default function EmployeeDetailsContent({
  employee,
  selectedDate,
}: Props) {

  const attendance = employee.attendance.find(
    (a) => a.date === selectedDate
  );

  return (
        <div className="flex flex-wrap gap-4">
            <div className=" flex flex-col flex-1 min-w-[256px] gap-4">
                {/* Employee ki detail wala card */}
                <div className="rounded-lg shadow-lg p-6 flex flex-col-reverse lg:flex-row gap-4 items-center justify-between bg-[var(--section-background)]">
                    <div className="space-y-1">
                        <div>
                            <h2 className="text-lg text-[var(--text-grey-color)] font-semibold mb-4">
                                {employee.name} | {employee.employeeId}
                            </h2>
                        </div>
                        <div>
                            <p className="text-xs">
                                {employee.role}
                            </p>
                        </div>
                        <div>{employee.department}</div>
                        <div className="flex flex-wrap gap-4 mt-3 text-sm">
                            {employee.faceCount > 0 && (
                            <div className="flex items-center gap-1.5">
                                <UserCircle className="h-4 w-4" />
                                <span>{employee.faceCount} Face</span>
                            </div>
                            )}

                            {employee.fingerCount > 0 && (
                            <div className="flex items-center gap-1.5">
                                <Fingerprint className="h-4 w-4" />
                                <span>{employee.fingerCount} Finger</span>
                            </div>
                            )}

                            {employee.cardCount > 0 && (
                            <div className="flex items-center gap-1.5">
                                <CreditCard className="h-4 w-4" />
                                <span>{employee.cardCount} Card</span>
                            </div>
                            )}

                            {employee.pinCount > 0 && (
                            <div className="flex items-center gap-1.5">
                                <KeyRound className="h-4 w-4" />
                                <span>{employee.pinCount} PIN</span>
                            </div>
                            )}
                            {employee.faceCount === 0 &&
                            employee.fingerCount === 0 &&
                            employee.cardCount === 0 &&
                            employee.pinCount === 0 && (
                                <div className="text-xs text-gray-500 italic">
                                No authentication methods enrolled
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <Image
                            src={employee.avatar}
                            alt={employee.name}
                            width={140}
                            height={140}
                            className="rounded-full"
                        />
                    </div>
                </div>
                {/* ye to pta hi lag rha hai ki kya hai */}
                <div className="flex-1 rounded-lg shadow-lg p-6 bg-[var(--section-background)]">
                    <AttendanceDoughnut employee={employee} />
                </div>
            </div>

            <div className="flex-1 min-w-[256px] rounded-lg shadow-lg p-6 bg-[var(--section-background)] mb-64 md:mb-0">
                <AttendanceCalendar employee={employee} />
            </div>
        </div>
  )
}

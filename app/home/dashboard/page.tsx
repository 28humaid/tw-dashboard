import SectionLayout from "@/components/dashboard/SectionLayout";
import EmpAttendanceSection from "@/components/dashboard/EmpAttendanceSection";
import DepartmentWiseStripChart from "@/components/dashboard/DepartmentWiseStripChart";
import ShiftStackedAreaChart from "@/components/dashboard/ShiftStackedAreaChart";
import ActiveShiftsCarousel from "@/components/dashboard/ActiveShiftsCarousel";
import DepartmentSection from "@/components/dashboard/DepartmentSection";
import EmployeesContainer from "@/components/dashboard/empTableComponent/EmployeesContainer";
import { cookies } from "next/headers";
import EmpAttendanceTrendChart from "@/components/dashboard/EmpAttendanceTrendChart";
import DeptAttendanceTrendChart from "@/components/dashboard/DeptAttendanceTrendChart";
import DeviceStatCardsSection from "@/components/dashboard/DeviceStatCardsSection";
import LeaveApprovalSection from "@/components/dashboard/LeaveApprovalSection";
import AttendanceApprovalSection from "@/components/dashboard/AttendanceApprovalSection";
import QuickLinksSection from "@/components/dashboard/QuickLinksSection";


export default async function dashboardPage(){
    const cookieStore = await cookies();
    const lang = cookieStore.get("preferredLanguage")?.value || "en";
    return(
        <>
            <div className="p-2 space-y-4">
                {/* ye devices k liye hojayega cards+chart*/}
                <SectionLayout>
                    <DeviceStatCardsSection/>
                </SectionLayout>
                
                <SectionLayout>
                        {/* Leave + Attendance approval */}
                        <div className="flex flex-wrap items-stretch gap-8 md:gap-4">
                                <div className="flex-1 min-w-[250px]">
                                    <LeaveApprovalSection/>
                                </div>
                                <div className="flex-1 min-w-[250px] lg:min-w-[720px] xl:min-w-[250px]">
                                    <QuickLinksSection/>
                                </div>
                                <div className="flex-1 min-w-[250px]">
                                    <AttendanceApprovalSection/>
                                </div>
                        </div>
                </SectionLayout>
                
                <SectionLayout>
                        {/* Employee wali table */}
                        <div>
                            <EmployeesContainer/>
                        </div>
                </SectionLayout>

                <SectionLayout>
                    {/* cards + pie-chart */}
                    <EmpAttendanceSection/>
                </SectionLayout>

                {/* ye employee k liye part-2 */}
                <SectionLayout>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-[50%]">
                            <EmpAttendanceTrendChart lang={lang}/>
                        </div>
                        <div className="w-full md:w-[50%]">
                            <ActiveShiftsCarousel/>
                            <ShiftStackedAreaChart/>
                        </div>
                    </div>
                </SectionLayout>

                {/* ye employee k liye part-3.....department wise cheeze */}
                <SectionLayout>
                    <div className="flex flex-col gap-4">
                        <div className="w-full">
                            <DepartmentSection/>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-wrap gap-4">
                                <div className="flex-1 min-w-[303px] sm:min-w-[380px]">
                                    <DeptAttendanceTrendChart lang={lang}/>
                                </div>
                                <div className="flex-1  min-w-[303px] sm:min-w-[380px]">
                                    <DepartmentWiseStripChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionLayout>
            </div>  
        </>
    )
}
import { Shimmer } from "./Shimmer";

function EmployeeRowSkeleton() {
  return (
    <div className="grid grid-cols-[2fr_1fr_1.5fr_1fr_1fr_0.7fr] items-center px-4 py-3 border-b border-gray-100">
      {/* Employee: avatar + name/role */}
      <div className="flex items-center gap-3">
        <Shimmer className="h-8 w-8 rounded-full shrink-0" />
        <div className="flex flex-col gap-1.5">
          <Shimmer className="h-3 w-24" />
          <Shimmer className="h-2.5 w-16" />
        </div>
      </div>
      {/* ID */}
      <Shimmer className="h-3 w-14" />
      {/* Department */}
      <Shimmer className="h-3 w-20" />
      {/* Login */}
      <Shimmer className="h-3 w-12" />
      {/* Logout */}
      <Shimmer className="h-3 w-12" />
      {/* Action */}
      <Shimmer className="h-3 w-16 ml-auto" />
    </div>
  );
}

export default function EmployeeTableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm min-w-[900px]">
      {/* Header row */}
      <div className="grid grid-cols-[2fr_1fr_1.5fr_1fr_1fr_0.7fr] px-4 py-3 bg-gray-50 border-b border-gray-200">
        {["w-16", "w-6", "w-20", "w-10", "w-12", "w-12"].map((w, i) => (
          <Shimmer key={i} className={`h-3 ${w}`} />
        ))}
      </div>

      {/* Data rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <EmployeeRowSkeleton key={i} />
      ))}
    </div>
  );
}
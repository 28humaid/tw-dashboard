import { Shimmer } from "@/components/common/loader/Shimmer";

function DepartmentCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg min-w-[260px] flex-1">
      {/* Top Section */}
      <div className="p-5">
        {/* Total + Pie */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <Shimmer className="h-3 w-10" /> {/* "Total" label */}
            <Shimmer className="h-8 w-12" /> {/* Big number */}
          </div>
          {/* Pie circle */}
          <Shimmer className="w-10 h-10 rounded-full" />
        </div>

        {/* 6 label/value rows */}
        <div className="mt-4 space-y-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex justify-between items-center">
              <Shimmer className="h-3 w-14" />
              <Shimmer className="h-3 w-6" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 px-5 py-3 flex items-center gap-2">
        <Shimmer className="h-4 w-4 rounded-sm" /> {/* Icon */}
        <Shimmer className="h-4 w-20" />            {/* Dept name */}
      </div>
    </div>
  );
}

export default function DepartmentCardsSkeleton() {
  return (
    <div className="flex flex-wrap gap-4">
      {[1, 2].map((i) => (
        <DepartmentCardSkeleton key={i} />
      ))}
    </div>
  );
}
import { Shimmer } from "@/components/common/loader/Shimmer";

export default function GraphSkeleton() {
  return (
    <div className="w-full bg-[var(--content-background)] rounded-xl shadow-lg p-4 min-h-[500px] flex flex-col gap-6">
      {/* Header row: title + dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Shimmer className="h-5 w-48" />
        <Shimmer className="h-9 w-32 rounded-md" />
      </div>

      {/* Legend row */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <Shimmer className="h-3 w-6 rounded-full" />
            <Shimmer className="h-3 w-14" />
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="flex gap-3 flex-1">
        {/* Y-axis */}
        <div className="flex flex-col justify-between py-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Shimmer key={i} className="h-3 w-6" />
          ))}
        </div>

        {/* Grid + bars area */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Horizontal grid lines */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full h-px bg-gray-200" />
          ))}
        </div>
      </div>

      {/* X-axis ticks */}
      <div className="flex justify-between px-8">
        {Array.from({ length: 7 }).map((_, i) => (
          <Shimmer key={i} className="h-3 w-5" />
        ))}
      </div>
    </div>
  );
}
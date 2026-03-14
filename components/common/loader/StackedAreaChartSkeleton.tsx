import { Shimmer } from "@/components/common/loader/Shimmer";

export default function ShiftStackedAreaChartSkeleton() {
  return (
    <div className="bg-[var(--content-background)] max-h-[80%]">
      {/* Header row: title + date picker */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Shimmer className="h-5 w-48" />
        <Shimmer className="h-9 w-36 rounded-lg" />
      </div>

      {/* Chart area */}
      <div className="mt-6 flex gap-3" style={{ height: "220px" }}>
        {/* Y-axis ticks */}
        <div className="flex flex-col justify-between py-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Shimmer key={i} className="h-3 w-5" />
          ))}
        </div>

        {/* Stacked area columns */}
        <div className="flex-1 flex items-end gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col-reverse gap-0.5">
              <Shimmer
                className="w-full rounded-sm"
              />
              <Shimmer
                className="w-full rounded-sm opacity-60"
              />
            </div>
          ))}
        </div>
      </div>

      {/* X-axis ticks */}
      <div className="flex justify-between px-8 mt-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <Shimmer key={i} className="h-3 w-5" />
        ))}
      </div>
    </div>
  );
}
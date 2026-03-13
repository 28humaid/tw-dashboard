import { Shimmer } from "./Shimmer";

export default function PieChartSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm md:w-[50%] min-w-[220px]">
      {/* Heading */}
        <Shimmer className="h-8 w-[90%]" />
      {/* Circle */}
      <div className="relative h-56 w-56">
        <Shimmer className="h-full w-full rounded-full" />
        {/* Donut hole */}
        <div className="absolute inset-[32%] rounded-full bg-gray-50" />
      </div>
      {/* Legend rows */}
      <div className="flex flex-col gap-2 w-full">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <Shimmer className="h-3 w-3 rounded-sm" />
            <Shimmer className="h-3 w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}
import { Shimmer } from "./Shimmer";

export default function StatCardSkeleton() {
  return (
    <div className="bg-[var(--content-background)] p-4 rounded-xl shadow-xl border-b-4 border-gray-200 flex-1 min-w-[140px] 2xl:min-w-[190px] max-h-[140px]">
      {/* Title line */}
      <Shimmer className="h-3 w-28" />

      {/* Bottom row: big number left, donut right */}
      <div className="flex items-center justify-between mt-4">
        {/* Number */}
        <Shimmer className="h-8 w-8" />

        {/* Donut circle */}
        <div className="relative w-12 h-12">
          <Shimmer className="w-full h-full rounded-full" />
          {/* Inner hole to mimic donut */}
          <div className="absolute inset-[18%] rounded-full bg-[var(--content-background)]" />
        </div>
      </div>
    </div>
  );
}
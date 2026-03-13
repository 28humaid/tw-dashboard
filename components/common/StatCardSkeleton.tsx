import { Shimmer } from "./Shimmer";

export default function StatCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Icon + title row */}
      <div className="flex items-center gap-3">
        <Shimmer className="h-10 w-10 rounded-lg" />
        <Shimmer className="h-4 w-24" />
      </div>
      {/* Big number */}
      <Shimmer className="h-8 w-16" />
      {/* Sub-label */}
      <Shimmer className="h-3 w-32" />
    </div>
  );
}
import { Shimmer } from "@/components/common/loader/Shimmer";

function ShiftCardSkeleton() {
  return (
    <div className="bg-white shadow-xl rounded-xl p-4 h-[95%] flex flex-col justify-between min-h-[140px]">
      {/* Shift code */}
      <Shimmer className="h-5 w-24" />

      {/* Detail rows */}
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex justify-between items-center">
            <Shimmer className="h-3 w-10" />
            <Shimmer className="h-3 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ActiveShiftsCarouselSkeleton() {
  return (
    <div className="w-full px-2">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <ShiftCardSkeleton key={i} />
        ))}
      </div> */}
        <ShiftCardSkeleton/>
    </div>
  );
}
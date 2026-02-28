import { activeShifts } from "@/data/dashboardData";
import HorizontalCarousel from "./HorizontalCarousel";

export default function ActiveShiftsCarousel() {
  return (
    <div>
      <HorizontalCarousel shifts={activeShifts} />
    </div>
  );
}

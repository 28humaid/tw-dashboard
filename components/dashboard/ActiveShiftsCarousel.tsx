"use client";

import { useEffect, useRef, useState } from "react";
import { activeShifts } from "@/data/dashboardData";
import HorizontalCarousel from "./HorizontalCarousel";
import ActiveShiftsCarouselSkeleton from "../common/loader/ShiftsCarouselSkeleton";

const LOADING_DELAY = 4000;

export default function ActiveShiftsCarousel() {
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setIsLoading(false), LOADING_DELAY);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <ActiveShiftsCarouselSkeleton />
      ) : (
        <HorizontalCarousel shifts={activeShifts} />
      )}
    </div>
  );
}
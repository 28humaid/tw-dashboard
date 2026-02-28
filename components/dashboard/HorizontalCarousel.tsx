"use client";

import { Shift } from "@/types/type";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useTranslation } from "react-i18next";

interface Props {
  shifts: Shift[];
}

const HorizontalCarousel: React.FC<Props> = ({ shifts }) => {
  const {t} = useTranslation();

  return (
    <div className="w-full" dir="ltr">
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          gap: "1rem",
          padding: { left: "0.5rem", right: "0.5rem" },
          pagination: false,
          arrows: true,
          breakpoints: {
            1218: { perPage: 2 },
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
          classes: {
            arrow: "splide__arrow !opacity-50",
            prev: "splide__arrow--prev !-left-2",
            next: "splide__arrow--next !-right-2",
          },
        }}
        aria-label="Active Shifts"
      >
        {shifts.map((shift) => (
          <SplideSlide key={shift.id}>
            <div className="bg-white shadow-xl rounded-xl p-4 h-[95%] flex flex-col justify-between">
              
              {/* Big Shift Code */}
              <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">
                {shift.code}
              </h2>

              {/* Shift Details */}
              <div className="space-y-2 text-sm text-[var(--text-grey-color)]">
                <div className="flex justify-between">
                  <span>{t("Start")}</span>
                  <span className="font-medium text-gray-900">
                    {shift.startTime}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>{t("End")}</span>
                  <span className="font-medium text-gray-900">
                    {shift.endTime}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>{t("Hours")}</span>
                  <span className="font-semibold text-gray-900">
                    {shift.hours} {t("hrs")}
                  </span>
                </div>
              </div>

            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default HorizontalCarousel;
// 1173

// app/components/DevicesSection.tsx
"use client";

import { Device } from "@/types/type";           // adjust path if needed
import DeviceCard from "./DeviceCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';             // core styles
import { useTranslation } from "react-i18next";
// Optional: choose one theme or none (minimal)
// import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';

interface Props {
  devices?: Device[];
}

export default function DevicesSection({ devices: propDevices = [] }: Props) {
  const displayDevices = propDevices;
  const {t} = useTranslation()
  if (displayDevices.length === 0) {
    return (
      <div className="w-full">
        <h2 className="text-lg font-semibold mb-3 text-[var(--text-grey-color)]">
          {t("DeviceActivity")}
        </h2>
        <div className="h-[420px] flex items-center justify-center text-[var(--foreground)]/50">
          {t("NoActiveDevicesFound")}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[80%]">
      <h2 className="text-lg font-semibold mb-3 text-[var(--text-grey-color)]">
        {t("DeviceActivity")}
      </h2>

      <div className="h-[260px] bg-transparent"> {/* ← container height — adjust as needed */}
        <Splide
          options={{
            type       : 'loop',           // infinite loop
            direction  : 'ttb',            // top → bottom (vertical)
            perPage    : 4,                // how many cards visible at once (adjust 3–5)
            perMove    : 1,
            gap        : '9rem',           // space between cards
            height     : '100%',           // fill parent height
            autoplay   : true,
            interval   : 1500,             // ms — time between slides
            pauseOnHover: true,
            arrows     : false,            // hide arrows (clean look)
            pagination : false,            // hide dots
            drag       : 'free',           // smooth feel when dragging
            easing     : 'ease',           // or 'linear' for constant speed
            speed      : 800,              // transition duration
            waitForTransition: false,
            // Optional: slower continuous feel (combine with smaller interval)
            // autoScroll: { speed: 0.5 }, // ← requires @splidejs/autoscroll extension
          }}
          aria-label="Device carousel"
          className="h-full splide--vertical" // optional helper class
        >
          {displayDevices.map((device, idx) => (
            <SplideSlide key={device.serialNumber}>
              <DeviceCard device={device} index={idx} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
"use client";

import { useState, useMemo, useEffect } from "react";
import StatCardsSection from "@/components/dashboard/StatCardsSection";
import { Device, StatCardProps } from "@/types/type";

// Import the same date-wise data source
import { dateWiseData } from "@/data/DateWiseData";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import StatCardSkeleton from "../common/loader/StatCardSkeleton";
import PieChartSkeleton from "../common/loader/PieChartSkeleton";

const PieChart = dynamic(() => import("./charts/PieChart"), {
  ssr: false,
  loading: () => <PieChartSkeleton />,
});

const fallbackData: StatCardProps[] = [];


function DeviceStatCardsSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Stat cards: show 3 placeholders */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
      <PieChartSkeleton />
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function DeviceStatCardsSection() {
  const { t } = useTranslation();
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>setIsLoading(false),4000)
    return () => clearTimeout(timer)
  },[])

  // Simulate async date change with brief loading state
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const value = e.target.value;
    // Use a short timeout to allow the skeleton to flash in on date switch
    setTimeout(() => {
      setSelectedDate(value);
      setIsLoading(false);
    }, 400);
  };

  const enrichedDeviceCards = useMemo(() => {
    const dataForDate = dateWiseData[selectedDate as keyof typeof dateWiseData];
    if (!dataForDate) return fallbackData;

    const devices: Device[] = "devices" in dataForDate ? dataForDate.devices : [];

    return (dataForDate.deviceCards ?? []).map((card) => {
      let filteredDevices = devices;
      if (card.title === "Online") {
        filteredDevices = devices.filter((d) => d.connected);
      } else if (card.title === "Offline") {
        filteredDevices = devices.filter((d) => !d.connected);
      }

      const tableRows = filteredDevices.map((d) => ({
        name: d.name,
        serialNumber: d.serialNumber,
        ipAddress: d.ipAddress,
        lastConnected: d.lastConnected,
        connected: d.connected,
      }));

      return {
        ...card,
        relatedDevices: devices,
        modalTitle: `${t(`deviceSection.${card.title}`)} ${t("deviceSection.Devices")}`,
        tableData: tableRows,
        tableColumns: [
          {
            id: "status",
            header: t("deviceSection.Status"),
            cell: (row: any) => (
              <span
                className={`font-medium ${
                  row.connected
                    ? "text-[var(--color-present)]"
                    : "text-[var(--color-absent)]"
                }`}
              >
                {row.connected ? t("Online") : t("Offline")}
              </span>
            ),
          },
          {
            id: "name",
            header: t("deviceSection.Device Name"),
            cell: (row: any) => row.name,
          },
          {
            id: "serial",
            header: t("deviceSection.Serial Number"),
            cell: (row: any) => (
              <span className="font-mono text-xs text-gray-600">
                {row.serialNumber}
              </span>
            ),
          },
          {
            id: "ip",
            header: t("deviceSection.IP Address"),
            cell: (row: any) => (
              <span className="font-mono text-sm">{row.ipAddress}</span>
            ),
          },
          {
            id: "lastSeen",
            header: t("deviceSection.Last Seen"),
            cell: (row: any) => row.lastConnected,
            className: "text-gray-600",
          },
        ],
        tableGridTemplate: "grid-cols-[2.4fr_2.6fr_1.6fr_1.5fr_1.3fr]",
      };
    });
  }, [selectedDate, t]);

  const hasData = enrichedDeviceCards.length > 0;

  return (
    <>
      {/* Shimmer keyframe — injected once, no extra CSS file needed */}
      {/* <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style> */}

      <div className="space-y-6">
        {/* Header + Date Picker */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">
            {t("DeviceStatus")}
          </h2>
          <div>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="px-3 py-2 rounded-lg text-sm"
            />
          </div>
        </div>

        {/* Content area */}
        {isLoading ? (
          <DeviceStatCardsSkeleton />
        ) : hasData ? (
          <div className="flex flex-col md:flex-row gap-4">
            <StatCardsSection
              data={enrichedDeviceCards}
              clickable={true}
              cards="device cards"
            />
            <PieChart
              data={enrichedDeviceCards}
              heading={t("deviceActivityDistribution")}
            />
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center text-gray-700 min-h-[220px] flex items-center justify-center">
            <div>
              <p className="text-lg font-medium">
                {t("deviceSection.No device data for")} {selectedDate}
              </p>
              <p className="mt-2 text-sm">
                {t("deviceSection.Please select another date")}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
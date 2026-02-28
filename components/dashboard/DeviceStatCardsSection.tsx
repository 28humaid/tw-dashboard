"use client";

import { useState, useMemo } from "react";
import StatCardsSection from "@/components/dashboard/StatCardsSection";
import { Device, StatCardProps } from "@/types/type";

// Import the same date-wise data source
import { dateWiseData } from "@/data/DateWiseData";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
const PieChart = dynamic(() => import("./PieChart"), {
  ssr: false,
});

const fallbackData: StatCardProps[] = [];

export default function DeviceStatCardsSection() {
  const {t} = useTranslation();
  // Default to today in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);

  // Get device cards for the selected date
  const enrichedDeviceCards = useMemo(() => {
    const dataForDate = dateWiseData[selectedDate as keyof typeof dateWiseData];
    if (!dataForDate) return fallbackData;

    const devices: Device[] = 'devices' in dataForDate ? dataForDate.devices : [];

    return (dataForDate.deviceCards ?? []).map((card) => {
      // Decide which devices to show based on card title
      let filteredDevices = devices;
      if (card.title === "Online") {
        filteredDevices = devices.filter(d => d.connected);
      } else if (card.title === "Offline") {
        filteredDevices = devices.filter(d => !d.connected);
      }

      const tableRows = filteredDevices.map(d => ({
        name: d.name,
        serialNumber: d.serialNumber,
        ipAddress: d.ipAddress,
        lastConnected: d.lastConnected,
        connected: d.connected,
      }));

      return {
        ...card,
        relatedDevices: devices,           // optional — keep for compatibility

        // ── New modal control fields ──
        modalTitle: `${card.title} ${t("deviceSection.Devices")}`,
        // modalSubtitle: `${filteredDevices.length} device${filteredDevices.length !== 1 ? 's' : ''} found`,

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
              <span className="font-mono text-xs text-gray-600 dark:text-gray-400">
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
            className: "text-gray-600 dark:text-gray-400",
          },
        ],
        tableGridTemplate: "grid-cols-[2.4fr_2.6fr_1.6fr_1.5fr_1.3fr]",
      };
    });
  }, [selectedDate, t]);

  const hasData = enrichedDeviceCards.length > 0;

  return (
    <div className="space-y-6">
      {/* Header + Date Picker – consistent style with EmpAttendanceSection */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 dark:bg-gray-800">
        <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">{t("DeviceStatus")}</h2>

        <div>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="
              px-3 py-2 rounded-lg text-sm dark:bg-gray-700 dark:text-white
            "
          />
        </div>
      </div>

      {hasData ? (
        <div className="flex flex-col md:flex-row gap-4">
          <StatCardsSection data={enrichedDeviceCards} clickable={true} cards="device cards"/>
          <PieChart data={enrichedDeviceCards} heading={t("deviceActivityDistribution")} />
        </div>
      ) : (
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 text-center text-gray-700 dark:text-gray-300 min-h-[220px] flex items-center justify-center">
          <div>
            <p className="text-lg font-medium">{t("deviceSection.No device data for")} {selectedDate}</p>
            <p className="mt-2 text-sm">{t("deviceSection.Please select another date")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
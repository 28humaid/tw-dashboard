// app/components/DeviceCard.tsx

import { Device } from "@/types/type";
import { useTranslation } from "react-i18next";


interface Props {
  device: Device;
  index: number;
}

export default function DeviceCard({ device, index }: Props) {
  const isOnline = device.connected;
  const {t} = useTranslation()
  return (
    <div
      className={`
        bg-[var(--content-background)]
        rounded-2xl
        border border-[var(--foreground)]/8
        p-4
        shadow-xl
        transition-all duration-200
        flex flex-col gap-3
      `}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-sm font-mono text-[var(--foreground)]/60">
            #{(index + 1).toString().padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm font-medium text-[var(--foreground)]">
            {device.name}
          </div>
        </div>

        <div
          className={`
            px-3 py-1 rounded-full text-xs font-medium
            ${isOnline
              ? "bg-green-500/20 text-green-700 dark:bg-green-600/30 dark:text-green-400"
              : "bg-red-500/20 text-red-700 dark:bg-red-600/30 dark:text-red-400"
            }
          `}
        >
          {isOnline ? "Online" : "Offline"}
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-1.5 text-sm">
        <span>
            <dt className="text-xs md:text-sm text-[var(--foreground)]/60">{t("Serial")}</dt>
            <dd className="text-[10px] md:text-sm font-mono text-[var(--foreground)]/90">
            {device.serialNumber}
            </dd>
        </span>
        <span>
            <dt className="text-xs md:text-sm text-[var(--foreground)]/60">{t("IP")}</dt>
            <dd className="text-[10px] md:text-sm font-mono text-[var(--foreground)]/90">
            {device.ipAddress}
            </dd>
        </span>
        <span>
            <dt className="text-xs md:text-sm text-[var(--foreground)]/60">{t("LastSeen")}</dt>
            <dd className="text-[10px] md:text-sm text-[var(--foreground)]/90">
            {device.lastConnected}
            </dd>
        </span>
      </div>
    </div>
  );
}
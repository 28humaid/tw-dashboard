"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number; // in milliseconds
  onClose: () => void;
}

const toastStyles: Record<ToastType, string> = {
  success: "bg-[var(--color-present)] text-white",
  error: "bg-[var(--color-absent)] text-white",
  warning: "bg-[var(--color-leave)] text-white",
  info: "bg-[var(--color-holiday)] text-white",
};

export default function Toast({
  message,
  type = "info",
  duration = 4000,
  onClose,
}: ToastProps) {
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`
        relative w-full flex items-center gap-3 
        px-5 py-3.5 rounded-lg shadow-xl border 
        transform transition-all duration-300 ease-in-out
        ${toastStyles[type]}
      `}
      role="alert"
    >
      <div className="text-sm font-medium pr-8">
        {message}
      </div>

      <button
        onClick={onClose}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white focus:outline-none"
        aria-label={t("close") || "Close"}
      >
        <X/>
      </button>
    </div>
  );
}
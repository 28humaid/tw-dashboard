"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Toast from "./Toast";

type ToastMessage = {
  id: number;
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
};

type ToastContextType = {
  toast: (message: string, type?: ToastMessage["type"], duration?: number) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

let toastId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (
    message: string,
    type: ToastMessage["type"] = "info",
    duration = 4000
  ) => {
    const id = toastId++;
    setToasts((prev) => [...prev, { id, message, type, duration }]);

    // Auto remove after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toast = (message: string, type?: ToastMessage["type"], duration?: number) =>
    addToast(message, type, duration);
  
  return (
    <ToastContext.Provider
      value={{
        toast,
        success: (msg, dur) => addToast(msg, "success", dur),
        error: (msg, dur) => addToast(msg, "error", dur),
        warning: (msg, dur) => addToast(msg, "warning", dur),
        info: (msg, dur) => addToast(msg, "info", dur),
      }}
    >
      {children}

      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] flex flex-col gap-4 min-w-[320px] max-w-lg">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            message={t.message}
            type={t.type}
            duration={t.duration}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
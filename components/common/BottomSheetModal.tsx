"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  showCloseButton?: boolean;
}

export default function BottomSheetModal({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
}: BottomSheetModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50">
      <div className="absolute bottom-0 left-0 right-0 top-5 bg-white p-6 animate-slideUp overflow-y-auto">
        
        {showCloseButton && (
          <div className="flex justify-end mb-4 sticky top-0 z-10">
            <button onClick={onClose} className="hover:cursor-pointer">
              <X />
            </button>
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
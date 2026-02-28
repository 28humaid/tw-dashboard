"use client";

import { ReactElement, useState } from "react";
import { Minus, Plus } from "lucide-react";

interface SectionLayoutProps {
  children: ReactElement;
  title?: string;           // optional: show a title if you want
  defaultOpen?: boolean;    // optional: start expanded or collapsed
}

export default function SectionLayout({
  children,
  title,
  defaultOpen = true,
}: SectionLayoutProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    // <div className="bg-[var(--section-background)] rounded-md shadow-sm">
    <div>
      {/* Header / Toggle area */}
      <div
        className="flex items-center px-3 py-2 cursor-pointer select-none hover:bg-gray-100/60 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          className="p-1 -ml-1 mr-2 text-[var(--text-grey-color)] hover:text-gray-700 focus:outline-none focus:text-gray-900"
        >
          {isOpen ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </button>

        {title && (
          <h2 className="text-lg text-[var(--text-grey-color)] font-semibold">{title}</h2>
        )}
      </div>

      {/* Content - only shown when open */}
      {isOpen && (
        <div className="px-3 pb-3 pt-1 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
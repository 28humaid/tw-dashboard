// Button.tsx
"use client";

import { useState, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  fullWidth = false,
  className = "",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Base classes — always applied
  const baseClasses = [
    "inline-flex items-center justify-center gap-2",
    "rounded-md",
    "transition-all duration-200 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    disabled && "opacity-60 cursor-not-allowed pointer-events-none",
    fullWidth && "w-full",
  ]
    .filter(Boolean)
    .join(" ");

  // Size classes
  const sizeClasses =
    size === "sm"
      ? "h-9 px-3 text-sm"
      : size === "lg"
      ? "h-11 px-8 text-base"
      : "h-10 px-4 text-sm"; // md default

  // Variant + hover classes
  let variantClasses = "";

  if (variant === "primary") {
    variantClasses = [
      "bg-gray-200 text-gray-900 shadow-lg",
      isHovered && !disabled && "bg-gray-300 shadow-md -translate-y-px",
    ]
      .filter(Boolean)
      .join(" ");
  } else if (variant === "secondary") {
    variantClasses = [
      "bg-gray-600 text-white",
      isHovered && !disabled && "bg-gray-700 -translate-y-px",
    ]
      .filter(Boolean)
      .join(" ");
  } else if (variant === "danger") {
    variantClasses = [
      "bg-red-600 text-white shadow-sm",
      isHovered && !disabled && "bg-red-700 shadow-md -translate-y-px",
    ]
      .filter(Boolean)
      .join(" ");
  } else if (variant === "outline") {
    variantClasses = [
      "border border-gray-300 bg-white text-gray-900",
      isHovered && !disabled && "bg-gray-50 border-gray-400 -translate-y-px",
    ]
      .filter(Boolean)
      .join(" ");
  } else if (variant === "ghost") {
    variantClasses = [
      "bg-transparent text-gray-900",
      isHovered && !disabled && "bg-gray-100 -translate-y-px",
    ]
      .filter(Boolean)
      .join(" ");
  }

  const combinedClasses = [baseClasses, sizeClasses, variantClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
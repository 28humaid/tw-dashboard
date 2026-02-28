import React from "react"

interface InputProps 
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="text-sm font-medium">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={`border rounded-lg px-3 py-2 w-full 
            ${error ? "border-red-500" : ""}
            ${className || ""}
          `}
          {...props}   //THIS spreads onChange, onBlur, etc.
        />

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
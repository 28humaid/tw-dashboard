// components/common/FormSelect.tsx

interface FormSelectProps {
  label: string;
  required?: boolean;
  options: Array<{ value: string; label: string }>; // adjust if your option shape differs
  register: any; // better: Use `UseFormRegisterReturn` from react-hook-form if you're using it
  error?: { message?: string }; // or the exact error shape from your validation library
  loading?: boolean;
  placeholder?: string;
}

export default function FormSelect({
  label,
  required = false,
  options,
  register,
  error,
  loading = false,
  placeholder = "Select status",
}: FormSelectProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <select
        {...register}
        disabled={loading}
        className={`border rounded-lg px-3 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500
          ${error ? "border-red-500" : "border-gray-400"}`}
      >
        <option value="">
          {loading ? "Loading statuses..." : placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
}
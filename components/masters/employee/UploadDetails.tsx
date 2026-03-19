"use client";

import { useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface UploadDetailsStepProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  fieldPrefix?: string;
}

interface FileUploadCardProps {
  label: string;
  hint: string;
  accept: string;
  previewType: "image" | "signature";
  fieldName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  error?: string;
}

function FileUploadCard({
  label,
  hint,
  accept,
  previewType,
  fieldName,
  form,
  error,
}: FileUploadCardProps) {
  const { setValue } = form;
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setValue(fieldName, file, { shouldValidate: true });

    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
      setFileName(null);
    }
  };

  const handleRemove = () => {
    setValue(fieldName, null, { shouldValidate: true });
    setPreview(null);
    setFileName(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      {/* Drop zone / preview */}
      <div
        className={`relative border-2 border-dashed rounded-xl transition-colors cursor-pointer
          ${error ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50 hover:border-[var(--color-primary)] hover:bg-blue-50"}
          ${previewType === "image" ? "h-52" : "h-32"}
        `}
        onClick={() => inputRef.current?.click()}
      >
        {preview ? (
          <div className="w-full h-full flex items-center justify-center p-2">
            <img
              src={preview}
              alt="preview"
              className={`object-contain rounded-lg
                ${previewType === "image" ? "max-h-44" : "max-h-24"}
              `}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-gray-400 px-4 text-center">
            {/* Upload icon */}
            <svg
              className="w-10 h-10 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <p className="text-sm font-medium text-gray-500">
              Click to upload
            </p>
            <p className="text-xs text-gray-400">{hint}</p>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* File name + remove */}
      {fileName && (
        <div className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-600">
          <span className="truncate max-w-[80%]">{fileName}</span>
          <button
            type="button"
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 font-medium ml-2 flex-shrink-0"
          >
            Remove
          </button>
        </div>
      )}

      {/* Error */}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function UploadDetailsStep({
  form,
  fieldPrefix = "uploadDetails.",
}: UploadDetailsStepProps) {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = form;

  const err = (field: string) => {
    const parts = `${fieldPrefix}${field}`.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return parts.reduce((acc: any, key) => acc?.[key], errors)?.message as
      | string
      | undefined;
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Employee Image */}
        <FileUploadCard
          label={`${t("masters.employeeForm.upload.Employee Image")} *`}
          hint={t("masters.employeeForm.upload.imageHint")}
          accept="image/png, image/jpeg, image/jpg"
          previewType="image"
          fieldName={`${fieldPrefix}employeeImage`}
          form={form}
          error={err("employeeImage")}
        />

        {/* Employee Signature */}
        <FileUploadCard
          label={`${t("masters.employeeForm.upload.Employee Signature")} *`}
          hint={t("masters.employeeForm.upload.signatureHint")}
          accept="image/png, image/jpeg, image/jpg"
          previewType="signature"
          fieldName={`${fieldPrefix}employeeSignature`}
          form={form}
          error={err("employeeSignature")}
        />
      </div>
    </div>
  );
}
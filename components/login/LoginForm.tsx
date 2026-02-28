"use client";

import { useState } from "react";
import { Input } from "../common/InputField";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "../common/ToastProvider";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { t } = useTranslation();
  const { error: showError } = useToast();
  const router = useRouter()

  const [formData, setFormData] = useState({
    companyCode: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!formData.companyCode.trim()) {
      showError(t("login.errors.companyCodeRequired") || "Company code is required");
      return;
    }

    if (!formData.username.trim()) {
      showError(t("login.errors.usernameRequired") || "Username is required");
      return;
    }

    if (!formData.password.trim()) {
      showError(t("login.errors.passwordRequired") || "Password is required");
      return;
    }

    if (formData.companyCode.trim() && formData.username.trim() && formData.password.trim()){
        console.log("Login data:", formData);
        router.push('/home')
        // yha pr.....
    }
  };

  return (
    <form onSubmit={handleSubmit}  noValidate className="flex flex-col gap-6">
      <Input
        label={t("login.companyCode.label")}
        name="companyCode"
        value={formData.companyCode}
        onChange={handleChange}
        placeholder={t("login.companyCode.placeholder")}
        required
      />

      <Input
        label={t("login.username.label")}
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder={t("login.username.placeholder")}
        required
      />

      <div className="relative">
        <Input
          label={t("login.password.label")}
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          placeholder={t("login.password.placeholder")}
          required
          className="pr-10"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-[var(--color-active-members)] text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        {t("login.button")}
      </button>
    </form>
  );
}
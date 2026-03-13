"use client";

import { useState } from "react";
import { Input } from "../common/InputField";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "../common/ToastProvider";
import { useRouter } from "next/navigation";
import {useForm} from "react-hook-form";
import { LoginFormData } from "@/types/type";

export default function LoginForm() {
  const { t } = useTranslation();
  const { error: showError } = useToast();
  const router = useRouter()

  // const [formData, setFormData] = useState({
  //   companyCode: "",
  //   username: "",
  //   password: "",
  // });

  const {register, handleSubmit, formState:{errors}} = useForm<LoginFormData>()

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data:LoginFormData) =>{
    console.log("Login data:", data);
    router.push("/home")
  }

  const onError = () =>{
    if (errors.companyCode) showError(errors.companyCode.message!);
    else if (errors.username) showError(errors.username.message!);
    else if (errors.password) showError(errors.password.message!)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit,onError)}  noValidate className="flex flex-col gap-6">
      <Input
        label={t("login.companyCode.label")}
        error={errors.companyCode?.message}
        {...register("companyCode",{required:t("login.errors.companyCodeRequired") || "Company code is required"})}
        placeholder={t("login.companyCode.placeholder")}
        required
      />

      <Input
        label={t("login.username.label")}
        error={errors.username?.message}
        {...register("username",{required:t("login.errors.usernameRequired") || "Username is required"})}
        placeholder={t("login.username.placeholder")}
        required
      />

      <div className="relative">
        <Input
          label={t("login.password.label")}
          type={showPassword ? "text" : "password"}
          error={errors.password?.message}
          {...register("password",{required:t("login.errors.passwordRequired") || "Password is required"})}
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
"use client"
import { useTranslation } from "react-i18next"

export default function HeadingComponent(){
    const {t}= useTranslation()
    return(
        <h1 className="text-2xl text-center">{t("login.app.name")}</h1>
    )
}
//  i18n/config.ts

"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string) =>
      import(`./locales/${language}.json`)
    )
  )
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
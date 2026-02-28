// app/i18n/provider.tsx  (rename to ServerI18nProvider or keep)
'use client';

import { I18nextProvider as Provider } from 'react-i18next';
import i18n from '@/i18n/config';
import { ReactNode, useEffect } from 'react';

export function I18nextProvider({ children, initialLang }: { 
  children: ReactNode;
  initialLang: string;     // ← pass from server
}) {
  useEffect(() => {
    if (initialLang !== i18n.language) {
      i18n.changeLanguage(initialLang);
    }

    const handleChange = (lng: string) => {
      localStorage.setItem('preferredLanguage', lng); // keep for compatibility
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lng;
    };

    i18n.on('languageChanged', handleChange);
    // Set initial direction
    document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = initialLang;

    return () => i18n.off('languageChanged', handleChange);
  }, [initialLang]);

  return <Provider i18n={i18n}>{children}</Provider>;
}
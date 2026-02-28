// components/LanguageSwitcher.tsx
'use client';

import { useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '@/lib/actions';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  // const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const current = i18n.language === 'en' ? 'en' : 'ar';
  const nextLang = current === 'en' ? 'ar' : 'en';

  const handleSwitch = () => {
    startTransition(async () => {
      // Call server action + pass current path so we can redirect properly
      await setLanguage(nextLang);

      // Optional: optimistic UI update (but usually not needed)
      // document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
      // document.documentElement.lang = nextLang;
    });
  };

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition disabled:opacity-50"
    >
      {current === 'en' ? 'عربی' : 'English'}
    </button>
  );
}
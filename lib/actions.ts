// app/actions.ts
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const COOKIE_NAME = 'preferredLanguage';   // ← match what you already use

export async function setLanguage(lang: 'en' | 'ar') {
  if (!['en', 'ar'].includes(lang)) return;
    const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: lang,
    path: '/',
    httpOnly: true,           // better security
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 90, // 90 days
  });

  redirect('/'); 

  // Option B: we'll pass pathname from client (recommended)

}
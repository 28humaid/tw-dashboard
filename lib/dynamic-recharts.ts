// lib/dynamic-recharts.ts
'use client';

import dynamic from 'next/dynamic';
// import type { ComponentProps } from 'react';

// Dynamically import all Recharts components
export const LineChart = dynamic(
  () => import('recharts').then(mod => mod.LineChart),
  { ssr: false }
);

export const Line = dynamic(
  () => import('recharts').then(mod => mod.Line),
  { ssr: false }
);

export const XAxis = dynamic(
  () => import('recharts').then(mod => mod.XAxis),
  { ssr: false }
);

export const YAxis = dynamic(
  () => import('recharts').then(mod => mod.YAxis),
  { ssr: false }
);

export const Tooltip = dynamic(
  () => import('recharts').then(mod => mod.Tooltip),
  { ssr: false }
);

export const Legend = dynamic(
  () => import('recharts').then(mod => mod.Legend),
  { ssr: false }
);

export const ResponsiveContainer = dynamic(
  () => import('recharts').then(mod => mod.ResponsiveContainer),
  { ssr: false }
);

// For types
export type { LegendPayload } from 'recharts';
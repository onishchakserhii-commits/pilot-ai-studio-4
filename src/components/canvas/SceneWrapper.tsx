'use client';

import dynamic from 'next/dynamic';

export const SceneWrapper = dynamic(
  () => import('./Scene').then((mod) => mod.Scene),
  { ssr: false }
);

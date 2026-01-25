'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.location.protocol === 'https:'
    ) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return null;
}

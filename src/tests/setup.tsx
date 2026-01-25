import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import type { ComponentPropsWithoutRef } from 'react';
import { afterEach, vi } from 'vitest';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => {
    // biome-ignore lint/performance/noImgElement: tests
    return <img src={src} alt={alt} {...props} />;
  },
}));

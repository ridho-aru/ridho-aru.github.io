import withSerwistInit from '@serwist/next';
import type { NextConfig } from 'next';

process.env.SERWIST_SUPPRESS_TURBOPACK_WARNING = '1';

const withSerwist = withSerwistInit({
  swSrc: 'src/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactCompiler: true,
  env: {
    SERWIST_SUPPRESS_TURBOPACK_WARNING: '1',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default withSerwist(nextConfig);

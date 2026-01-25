import withSerwistInit from '@serwist/next';
import type { NextConfig } from 'next';

process.env.SERWIST_SUPPRESS_TURBOPACK_WARNING = '1';

const withSerwist = withSerwistInit({
  swSrc: 'src/sw.ts',
  swDest: 'public/sw.js',
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
};

export default withSerwist(nextConfig);

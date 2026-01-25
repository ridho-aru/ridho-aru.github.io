import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/my-portfolio",
  reactCompiler: true,
  experimental: {
    optimizeCss: true, // Requires 'critters' package
  },
  images: {
    unoptimized: true,
    domains: ["img.icons8.com"],
  },
};

export default nextConfig;

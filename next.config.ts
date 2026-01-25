import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/my-portfolio",
  reactCompiler: true,
  images: {
    unoptimized: true,
    domains: ["img.icons8.com"],
  },
};

export default nextConfig;

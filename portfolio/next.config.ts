import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { remotePatterns: [] },
  experimental: { typedRoutes: true }
};

export default nextConfig;

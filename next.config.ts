import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Allow large page data for wedding gallery
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;

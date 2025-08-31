import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disables Next.js image optimization, which is required for static export
  },
};

export default nextConfig;

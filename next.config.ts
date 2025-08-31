import type { NextConfig } from "next";

const repo = "wedding"; // Replace with your repository name if different
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  assetPrefix: assetPrefix,
  basePath: basePath,
  distDir: "docs",
  images: {
    unoptimized: true, // Disables Next.js image optimization, which is required for static export
  },
};

export default nextConfig;

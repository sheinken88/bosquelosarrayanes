import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Use absolute import path to avoid __dirname issues
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Disable Partial Prerendering to avoid Edge Runtime issues
  experimental: {
    ppr: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tangol.com",
        pathname: "/blog/Fotos/Galeria/**",
      },
      {
        protocol: "https",
        hostname: "tangol.com",
        pathname: "/blog/Fotos/Galeria/**",
      },
      {
        protocol: "https",
        hostname: "blogdeviajes.com.ar",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.esttravel.net",
      },
      {
        protocol: "https",
        hostname: "esttravel.net",
      },
      {
        protocol: "https",
        hostname: "file.esttravel.net",
      },
    ],
  },
};

export default nextConfig;

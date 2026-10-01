import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/sistema-visual",
        destination: "/sistema-visual/index.html",
      },
    ];
  },
};

export default nextConfig;

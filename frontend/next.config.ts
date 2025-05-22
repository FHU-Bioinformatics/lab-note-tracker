import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api",
        destination: process.env.NEXT_PUBLIC_API_URL || "/api/",
      },
    ];
  },
};

export default nextConfig;

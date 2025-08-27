import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/app",
        destination: "https://water.akualis.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

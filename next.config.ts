import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
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

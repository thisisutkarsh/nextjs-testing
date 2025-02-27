import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gh-public-contents.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;

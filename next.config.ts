import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo', // 事前にフェッチする先のurlのホスト名を書き、許可しておく。
      },
    ],
  }
};

export default nextConfig;

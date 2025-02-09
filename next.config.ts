import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'storage.alexav.gg',
      'cdn.medal.tv',
      'lastfm.freetls.fastly.net'
    ]
  }
};

export default nextConfig;

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: '',
        hostname: "m.media-amazon.com"
      },
      {
        protocol: "https",
        port: '',
        hostname: "storage.thatalex.dev" 
      },
      {
        protocol: "https",
        port: '',
        hostname: "lastfm.freetls.fastly.net"
      }
    ]
  }
};

export default config;

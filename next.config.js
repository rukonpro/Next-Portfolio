// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // এই লাইনটা যোগ করলেই সব ইমেজ দেখাবে
  },
};

module.exports = nextConfig;
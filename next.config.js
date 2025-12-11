const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'bcrypt'];
    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    // ✅ এই লাইনটা পরিবর্তন করা হয়েছে: raw.githubusercontent.com যোগ করা হয়েছে
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox; img-src 'self' https://streak-stats.demolab.com https://github-readme-stats.vercel.app https://github-profile-trophy.vercel.app https://raw.githubusercontent.com https://github.com;",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
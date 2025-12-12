// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'github-readme-streak-stats.herokuapp.com' },
      { protocol: 'https', hostname: 'github-readme-stats.vercel.app' },
      { protocol: 'https', hostname: 'github-profile-trophy.vercel.app' },
      { protocol: 'https', hostname: 'komarev.com' },
      { protocol: 'https', hostname: 'img.shields.io' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'metrics.lecoq.io' },
      { protocol: 'https', hostname: 'readme-typing-svg.demolab.com' },
      { protocol: 'https', hostname: 'leetcard.jacoblin.cool' },
      { protocol: 'https', hostname: 'visitor-badge.laobi.icu' },
      { protocol: 'https', hostname: 'holopin.me' },
      { protocol: 'https', hostname: 'api.devcard.dev' },
      { protocol: 'https', hostname: 'i.imgur.com' },
      { protocol: 'https', hostname: 'quotes-github-readme.vercel.app' },
      { protocol: 'https', hostname: 'github-readme-activity-graph.vercel.app' },
      { protocol: 'https', hostname: 'i.ibb.co' },
    ],
  },
};

module.exports = nextConfig;
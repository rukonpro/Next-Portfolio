/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, 'bcrypt'];
    return config;
  },
  images: {
    domains: ['i.ibb.co'],
  },
}

module.exports = nextConfig

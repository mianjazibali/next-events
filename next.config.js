/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/next-events',
  assetPrefix: '/next-events',
};

module.exports = nextConfig;


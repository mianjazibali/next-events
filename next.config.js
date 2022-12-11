/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  basePath: '/next-events',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/next-events',
        basePath: false,
        permanent: false,
      },
    ];
  },
  assetPrefix: '/next-events',
};

module.exports = nextConfig;


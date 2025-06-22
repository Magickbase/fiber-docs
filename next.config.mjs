import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // output: 'export',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/welcome-to-magickbase-platform',
        permanent: true,
      },
      {
        source: '/',
        destination: '/docs/welcome-to-magickbase-platform',
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);

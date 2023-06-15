/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'images.tcdn.com.br', 'dju62cr0hx23m.cloudfront.net', 'www.pneubarato.com.br']
  },
};

module.exports = nextConfig;

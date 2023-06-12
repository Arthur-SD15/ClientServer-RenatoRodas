/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'images.tcdn.com.br']
  },
}

module.exports = nextConfig

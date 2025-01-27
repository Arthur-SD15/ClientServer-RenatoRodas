/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite qualquer domínio
      },
      {
        protocol: 'http',
        hostname: '**', // Permite qualquer domínio com HTTP (se necessário)
      },
    ],
  },
};

module.exports = nextConfig;

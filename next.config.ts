/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['asterwebcolab.com.br'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      domains: ["images.unsplash.com"],
      allowFutureImage: true,
      layoutRaw: true
    }
  }
}

module.exports = nextConfig

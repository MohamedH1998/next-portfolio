const withPlugins = require("next-compose-plugins")
const withImages = require("next-images")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      domains: ["https://images.unsplash.com"],
      allowFutureImage: true,
      layoutRaw: true
    }
  }
}

module.exports = withPlugins([[withImages]], nextConfig)

const withPlugins = require("next-compose-plugins")
const withImages = require("next-images")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      domains: ["https://images.unsplash.com/", "cdn.sanity.io"],

      allowFutureImage: true,
      layoutRaw: true
    }
  },
  async redirects() {
    return [
      {
        source: "/blogs/3",
        destination: "/blogs/my-first-developer-role",
        permanent: true
      }
    ]
  }
}

module.exports = withPlugins([[withImages]], nextConfig)

const path = require("path")

module.exports = {
  stories: [
    "../src/components/**/**/*.stories.mdx",
    "../src/components/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-styled-component-theme/dist/preset"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  staticDirs: ["../public", "../static"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")]
            }
          }
        }
      ],
      include: path.resolve(__dirname, "../")
    })
    return config
  }
}

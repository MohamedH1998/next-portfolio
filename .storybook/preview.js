import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css"
import { addDecorator } from "@storybook/react"
import { withThemesProvider } from "storybook-addon-styled-component-theme"

import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../styled/theme"

const themes = [lightTheme, darkTheme]

addDecorator(withThemesProvider(themes), ThemeProvider)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

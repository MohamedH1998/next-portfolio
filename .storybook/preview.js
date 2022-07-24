import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css"
import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "styled-components"

import { theme } from "../styled/theme"

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

addDecorator(ThemeDecorator)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

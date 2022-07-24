import { useEffect, useState } from "react"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import "../styles/globals.css"
import { lightTheme, darkTheme } from "../styled/theme"

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("lightTheme")

  return (
    <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
      <Component theme={theme} setTheme={setTheme} {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

import { useState } from "react"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import "../styles/globals.css"
import { lightTheme, darkTheme } from "../styled/theme"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("lightTheme")

  return (
    <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
      <ChakraProvider>
        <Component setTheme={setTheme} {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp

import { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  colors: {
    bg: "#0b0908",
    bgCream: "#F0EDE4",
    bgLightestOffset: "#E1DDCE",
    bgLightOffset: "#E1E1E1",
    bgOffset: "#674B37",
    bgDarkerOffset: "#4C362A",
    accent: "#595C5C",
    accentLight: "#798688",
    skin: "#BB7558"
  },
  devices: {
    smMobile: "(min-width: 320px)",
    mdMobile: "(min-width: 375px)",
    lgMobile: "(min-width: 425px)",
    tablet: "(min-width: 768px)",
    laptop: "(min-width: 1024px)",
    lgLaptop: "(min-width: 1440px)",
    desktop: "(min-width: 2560px)"
  }
}

export { theme }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)"
      },
      height: {
        135: "35rem",
        145: "45rem"
      },
      animation: {
        fade: "fadeOut 5s ease-in-out"
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.transparent") },
          "100%": { backgroundColor: theme("colors.red.300") }
        }
      }),
      colors: {
        clrPink: "pink",
        "clr-bg": "#0b0908",
        "clr-bg-cream-offset": "#F0EDE4",
        "clr-bg-lightest-offset": "#E1DDCE",
        "clr-bg-light-offset": "#E1E1E1",
        "clr-bg-offset": "#674B37",
        "clr-bg-darker-offset": "#4C362A",
        "clr-accent": "#595C5C",
        "clr-accent-light": "#798688",
        "clr-skin": "#BB7558"
      }
    }
  }
}

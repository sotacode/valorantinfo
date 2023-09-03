import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {},
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#01cfea",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
      light: {
        colors: {
          primary: {
            DEFAULT: "#01cfea",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      }
    },
  })]
}

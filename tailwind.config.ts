import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        solidHeading: "#42446E",
        darkMode: "#191919",
        darkMode2: "#282C33",
        buttonText: "#018C0F",
        buttonSuccess: "#D7FFE0",
        solidHeadingDarkMode: "#CCCCCC",
        lightContent: "#A7A7A7",
        contentPrimary: "#13B0F5",
        contentSecondary: "#E70FAA",
        lightMode: "#fffefe"
      }
    },
  },
  plugins: [],
  important: true
}
export default config

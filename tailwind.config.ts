import type { Config } from 'tailwindcss'
const maxImages = 60

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        ...Object.fromEntries(
          [...Array(maxImages)].map((_, index) => [
            `image-${index + 1}`,
            `var(--imageUrl-${index + 1})`,
          ])
        ),
      },
    },
  },
  plugins: [],
}
export default config

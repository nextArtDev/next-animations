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
        'firefly-radial':
          'radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)',
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254,254,91, 0.3)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config

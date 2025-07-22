import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          blue: '#0ea5e9',
          purple: '#8b5cf6',
          pink: '#ec4899',
          glass: 'rgba(255,255,255,0.05)',
        },
        card: {
          bg: 'rgba(255,255,255,0.05)',
          border: 'rgba(255,255,255,0.1)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        uizard: ['Inter', 'Geist', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0,0,0,0.37)',
      },
      borderRadius: {
        xl: '1rem',
        glass: '1.5rem',
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(135deg, #a855f7, #ec4899)',
        'gradient-blue': 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
export default config

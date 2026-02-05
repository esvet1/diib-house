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
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        cream: {
          50: '#fdfcf8',
          100: '#faf8f3',
          200: '#f5f0e6',
          300: '#ede4d3',
          400: '#e0d0b8',
          500: '#d0b896',
          600: '#c4a57e',
        },
        earth: {
          100: '#f5f0eb',
          200: '#e8ddd3',
          300: '#d4c4b5',
          400: '#b8a08a',
          500: '#9c8268',
          600: '#7d6550',
          700: '#655244',
          800: '#55443a',
          900: '#4a3d35',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d1d8c7',
          300: '#b3bfa4',
          400: '#95a27f',
          500: '#7a8763',
          600: '#5f6b4d',
          700: '#4d563e',
          800: '#404734',
          900: '#363d2d',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'stone-texture': "url('/images/stone-texture.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'dome': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 40px rgba(120, 113, 108, 0.15)',
      },
      borderRadius: {
        'dome': '50% 50% 50% 50% / 60% 60% 40% 40%',
        'arch': '50% 50% 0 0 / 30% 30% 0 0',
      },
    },
  },
  plugins: [],
}
export default config

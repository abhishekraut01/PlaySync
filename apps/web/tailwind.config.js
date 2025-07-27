/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5E17EB',
          50: '#EFE6FD',
          100: '#DECFFB',
          200: '#BEA3F8',
          300: '#9D77F4',
          400: '#7D4BF1',
          500: '#5E17EB',
          600: '#4B13BC',
          700: '#380F8D',
          800: '#260A5E',
          900: '#13052F',
        },
        accent: {
          DEFAULT: '#9D4EDD',
          lighter: '#C77DFF',
          darker: '#7B2CBF',
        },
        dark: {
          DEFAULT: '#121212',
          50: '#2D2D2D',
          100: '#1A1A1A',
        },
        light: {
          DEFAULT: '#FFFFFF',
          50: '#F5F5F5',
          100: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 1.5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
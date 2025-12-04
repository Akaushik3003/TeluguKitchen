import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#fefdfb',
          100: '#fdf8f0',
          200: '#faecd9',
          300: '#f5dbb8',
          400: '#efc28a',
          500: '#e8a85c',
          600: '#dc8b3c',
          700: '#b86d2e',
          800: '#945529',
          900: '#784725',
          950: '#412312',
        },
        peach: {
          50: '#fef5f2',
          100: '#fee9e2',
          200: '#fdd7ca',
          300: '#fbbda7',
          400: '#f79676',
          500: '#ee6d4d',
          600: '#da4f2f',
          700: '#b73e22',
          800: '#983620',
          900: '#7e3221',
          950: '#44160d',
        },
        cream: {
          50: '#fefef9',
          100: '#fdfce8',
          200: '#faf8c5',
          300: '#f5f199',
          400: '#eee461',
          500: '#e5d132',
          600: '#cbb420',
          700: '#a28718',
          800: '#856b1a',
          900: '#71581b',
          950: '#42300b',
        },
        terracotta: {
          50: '#fcf5f4',
          100: '#f9e9e6',
          200: '#f5d6d1',
          300: '#ecb8af',
          400: '#e09182',
          500: '#d06c5a',
          600: '#bb523f',
          700: '#9c4333',
          800: '#823b2e',
          900: '#6d352c',
          950: '#3a1912',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'warm': '0 4px 20px -2px rgba(232, 168, 92, 0.25)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #fdf8f0 0%, #faecd9 100%)',
        'gradient-cta': 'linear-gradient(135deg, #e8a85c 0%, #dc8b3c 100%)',
        'gradient-hero': 'linear-gradient(180deg, #fefdfb 0%, #fdf8f0 50%, #faecd9 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;

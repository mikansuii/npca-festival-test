/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bdccff',
          300: '#92a8ff',
          400: '#5f7bff',
          500: '#3a52f0',
          600: '#2438d6',
          700: '#1d2cb0',
          800: '#1c2a8a',
          900: '#1b2870',
          950: '#0d1240',
        },
        gold: {
          50: '#fdfbf3',
          100: '#faf2d9',
          200: '#f4e3ad',
          300: '#edcd76',
          400: '#e8b94d',
          500: '#d99c2b',
          600: '#c2791f',
          700: '#a15a1a',
          800: '#85481b',
          900: '#6f3c1a',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(58, 82, 240, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(58, 82, 240, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

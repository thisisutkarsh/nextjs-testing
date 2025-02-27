const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: '#e7a019',
        tertiary: '#1D2B4F',
        cta: colors.purple,
        'custom-purple': 'rgba(147, 52, 234, 1)',
      },
      boxShadow: { plain: '4px 4px 0', even: '0px 0px 14px' },
      fontFamily: {
        sans: ['var(--font-custom)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};

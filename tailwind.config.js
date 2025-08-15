/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#1062FF',
        brandOrange: '#FF7A00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};

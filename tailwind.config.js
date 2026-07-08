import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        salon: {
          primary: '#BE185D',
          'primary-dark': '#9D174D',
          'primary-light': '#FCE7F3',
          accent: '#D4A574',
          'accent-light': '#FDF4E8',
          gray: '#6B7280',
          'gray-light': '#FAF7F5',
          border: '#E7E5E4',
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [tailwindScrollbar],
};

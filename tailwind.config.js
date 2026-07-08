import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Manrope', 'Segoe UI', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        salon: {
          primary: '#A6007A',
          'primary-dark': '#850061',
          'primary-light': '#FDE8F4',
          ink: '#0A0A0A',
          accent: '#F5E6D3',
          'accent-text': '#5C4033',
          gray: '#6B7280',
          'gray-light': '#FAFAFA',
          border: '#E8E8E8',
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.08)',
        magenta: '0 8px 24px rgba(166, 0, 122, 0.25)',
      },
      backgroundImage: {
        damask: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A6007A' fill-opacity='0.04'%3E%3Cpath d='M30 30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [tailwindScrollbar],
};

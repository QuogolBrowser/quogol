/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Quogol brand palette — update as brand solidifies
        'qg-bg':        '#0e0e10',
        'qg-surface':   '#16161a',
        'qg-border':    '#2a2a30',
        'qg-text':      '#e4e4e7',
        'qg-muted':     '#71717a',
        'qg-accent':    '#01696f',
        'qg-accent-lt': '#4f98a3',
      },
      fontFamily: {
        display: ['Satoshi', 'sans-serif'],
        body:    ['General Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

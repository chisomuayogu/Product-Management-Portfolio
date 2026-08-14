/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ivory': 'var(--background)',
        'cream': 'var(--background-secondary)',
        'surface': 'var(--surface)',
        'blush': 'var(--blush)',
        'near-black': 'var(--foreground)',
        'grey-secondary': 'var(--muted)',
        'burgundy': 'var(--accent)',
        'burgundy-light': 'var(--accent-light)',
        'burgundy-dark': 'var(--accent-dark)',
      },
      boxShadow: {
        'wine-sm': 'var(--shadow-accent-sm)',
        'wine': 'var(--shadow-accent)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}

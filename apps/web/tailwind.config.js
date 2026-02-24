/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unc: {
          DEFAULT: '#4B9CD3',
          dark: '#13294B',
          light: '#E6F3FF',
        },
        surface: {
          DEFAULT: '#111827',
          raised: '#1a2235',
          overlay: '#1e293b',
        },
        accent: {
          DEFAULT: '#4B9CD3',
          glow: 'rgba(75,156,211,0.15)',
          muted: 'rgba(75,156,211,0.08)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(75,156,211,0.15)',
        'glow-sm': '0 0 10px rgba(75,156,211,0.1)',
        'glow-lg': '0 0 40px rgba(75,156,211,0.2)',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(75,156,211,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(75,156,211,0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'brand-card': '0 4px 16px rgba(10,14,39,0.08)',
        'brand': '0 6px 24px rgba(10,14,39,0.10)',
        'brand-lg': '0 16px 48px rgba(10,14,39,0.16)',
      },
    },
  },
  plugins: [],
}

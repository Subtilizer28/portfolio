/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7374F',
        secondary: '#88304E',
        accent: '#522546',
        neutral: '#2C2C2C',
        textcolor: "#F1F1F1",
      },
    },
  },
  plugins: [],
}

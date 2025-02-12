/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        notojp: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

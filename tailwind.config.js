/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{html,js,svelte,ts}',
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    colors: {
      'primary': '#0A338A',
      'f-primary': '#333333',
      'good': '#E5445F',
    },
    extend: {},
  },
  plugins: [],
}

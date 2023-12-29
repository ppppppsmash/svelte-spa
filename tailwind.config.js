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
      'white': '#FFF',
      'good': '#E5445F',
    },
    extend: {
      animation: {
        "zoom-out": "zoom-out 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      },
      keyframes: {
        "zoom-out": {
            "0%": {
                transform: "scale(.7)",
                opacity: "1"
            },
            to: {
                transform: "scale(1)",
                opacity: "1"
            }
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./source/**/*.{html,erb}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}


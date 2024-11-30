/** @type {import('tailwindcss').Config} */
{import('tailwindcss').Config}

module.exports = {
  mode: 'jit', 
  content: ["./src/**/*.{html,js, jsx, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif", "Poppins", "Helvetica Neue", "Helvetica", "Arial"],
      },
    },
  },
  plugins: [],

  layers: {
    utilities: {
      layer: 'utilities',
      config: {},
    },
  },

}

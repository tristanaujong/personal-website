/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sfpro: ['SF-Pro'],
        sfprodisplaythin: ['SF-Pro-Display-Thin'],
        sfprodisplaybold: ['SF-Pro-Display-Bold'],
      },
    },
  },
  plugins: [],
}


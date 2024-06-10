module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#ffffff85',
        'custom-gray-2': '#ffffff50'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('daisyui')
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       'mytheme': {
          
  //       },
  //     },
  //   ],
  // },
}

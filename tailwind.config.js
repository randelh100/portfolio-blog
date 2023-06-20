/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        custom: ['Antipasto'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'moonlit-asteroid': '#0F2027',
        'moonlit-asteroid2': '#203A43',
        'moonlit-asteroid3': '#2C5364',
        'dark-ocean': '#373b44',
        'dark-ocean2': '#4286f4',
        'witching-hour': '#c31432',
        'witching-hour2': '#240b36',
        'metopolis': '#659999',
        'metopolis2': '#f4791f',
      },
    },
  },
  plugins: [],
}


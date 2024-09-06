/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      blue: '#0056B3',
      lightblue: '#3ed2ff',
      red: '#F70E02',
      white: '#fff',
      gray: '#A2A2A2',
      lightGray:'#E0DEDB'
    },
    backgroundImage: {
      'gradient-custom': 'linear-gradient(0deg, rgba(0, 219, 255, 0.15) 0%, rgba(224, 255, 255, 1) 100%)',
    },
    bgSlider: {
      'blue-custom': 'linear-gradient(0deg, rgba(0,219,255,0.11808473389355745) 0%, rgba(5,101,180,1) 85%)',
    }
  },
}
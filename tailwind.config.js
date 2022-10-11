/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#20134e",
        
"secondary": "#d3c0f9",
        
"accent": "#a1aded",
        
"neutral": "#262531",
        
"base-100": "#2d1b69",
        
"info": "#9DCCF0",
        
"success": "#26B581",
        
"warning": "#F9AD34",
        
"error": "#EB3D2D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
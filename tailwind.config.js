/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js"
  ],
    
  theme: {
    extend: {
      colors:{
        "text-primer": "",
        "cuaca-primer": "#0000",
        "cuaca-sekunder": "#004E71",
      },
    },
    container:{
      padding: "2rem",
      center: true,
    },

    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
    },
    screens:{
      sm: "640px",
      md: "760px",
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


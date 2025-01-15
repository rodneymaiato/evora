module.exports = {
  content: [
    "./layouts/**/*.html",    // Hugo layouts
    "./content/**/*.md",      // Markdown files
    "./content/**/*.html",    // Raw HTML in content
    "./themes/**/*.html",     // If using a theme
    "./assets/**/*.js",       // Any JS files using Tailwind
    
  ],
      darkMode: 'class',
    // ...
  
  theme: {
    extend: {
      fontFamily: {
          sans: ['Poppins', 'sans-serif'], // Add your Google font
          // custom: ['CustomFont', 'Arial', 'sans-serif'], // Add your local font
      },
  },
},
  plugins: [require('@tailwindcss/typography')],
  
  
};


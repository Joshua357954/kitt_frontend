/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('/src/assets/images/qi (5).jpg')",
      },
    	colors: {
	        customBlue: '#3490dc',
	        customGreen: '#38c172',
	        customRed: '#e3342f',
        // Add more custom colors as needed
    	},
    	fontFamily: {
	        poppins: ['Poppins', 'sans'], // Use 'Poppins' font
	        'poppins-100': ['Poppins', 'sans', '100'],
	        'poppins-200': ['Poppins', 'sans', '200'],
	        'poppins-300': ['Poppins', 'sans', '300'],
	        'poppins-400': ['Poppins', 'sans', '400'],
	        'poppins-500': ['Poppins', 'sans', '500'],
	        'poppins-600': ['Poppins', 'sans', '600'],
	        'poppins-700': ['Poppins', 'sans', '700'],
	        'poppins-800': ['Poppins', 'sans', '800'],
	        'poppins-900': ['Poppins', 'sans', '900'],
      },
    },
  },
  plugins: [],
}


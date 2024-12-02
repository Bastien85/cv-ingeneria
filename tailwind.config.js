/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
         a4: '170mm',
      },
      height: {
        a4: '210mm',
      },
    },
  },
  plugins: [],
}


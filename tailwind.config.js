module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Adjust the paths to match your project structure
  ],
  theme: {
    extend: {
      screens: {
        'mdt': '980px', // 👈 custom breakpoint
      },
    },
  },
  plugins: [],
}

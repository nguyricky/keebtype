export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#CEE6F3",
          "secondary": "#EEEEEE",
          "accent": "#CEE6F3",
          "base-100": "#222831",
        }
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}
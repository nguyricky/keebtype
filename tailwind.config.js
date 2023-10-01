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
          "primary": "#EEBBC3",
          "secondary": "#B8C1EC",
          "accent": "#ffffff",
          "base-100": "#232946",
        }
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}
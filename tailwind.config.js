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
          "accent": "#21242D",
          "neutral": "#232946",
          "base-100": "#232946",
          "base-200": "#121629",
          "base-300": "#8E8E8E",
        }
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}
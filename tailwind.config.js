/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        inter : '"Inter", sans-serif'
      },
      fontSize : {
        title : '50px',
        large : '28px',
        medium : "22px",
        semimedium : "16px",
        small : "14px"
      },
      colors : {
        headline : "#4D4D4D",
        paragraph : "#717171",
        prymgreen : "#4caf4f",
        prymgreenhover : "#2af772",
        silver : "#f5f7fa",
        footer : "#263238"
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//     container : {
//       padding : {
//         DEFAULT :  '1rem'
//       }
//     }, 
//     screens: {
//       sm: '648px',
//       md: '768px',
//       lg: '1024px',
//       xl: '1300px',
//     },
//     colors: {
//       primary : '#101828',
//       secondary : '#667085', 
//       accent : {
//         DEFAULT : '#ed1d24',
//         hover : '#dd242a',
//       },
//       body : '#dedede',
//     },

//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
      },
      screens: {
        sm: '648px',
        md: '768px',
        lg: '1024px',
        xl: '1300px',
      },
      colors: {
        primary: '#101828',
        secondary: '#667085',
        accent: {
          DEFAULT: '#ed1d24',
          hover: '#dd242a',
        },
        body: '#dedede',
      }
    }
  },
  plugins: [],
};



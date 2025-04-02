/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      rotate: {
        '15': '15deg',
        '30': '30deg',
        "60": "60deg",
        '65': '65deg',
        '85': '85deg',
        '100': '100deg',
        '115': '115deg',
        '130': '130deg',
        '145': '145deg',
        '165': '165deg',
        '190': '190deg',
      },
      left: {
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '10': '10px',
        '20': '20px',
      },
      spacing: {
        '10': '10px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '1000': '1000px', // For -left-[1000px]
      },
      perspective: {
        '400': '400px',
      },
    },
  },
  plugins: [require("daisyui")],
}

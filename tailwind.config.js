/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "4.5xl": "2.5rem",
      },
      colors: {
        accent: {
          50:  "hsl(156, 100%, 95%)", // very pale neon green
          100: "hsl(156, 100%, 85%)", // soft mint
          200: "hsl(156, 100%, 70%)", // pastel green
          300: "hsl(156, 100%, 60%)", // light neon
          400: "hsl(156, 100%, 50%)", // exact neon green (#00FF9C)
          500: "hsl(156, 90%, 45%)",  // slightly deeper neon
          600: "hsl(156, 85%, 35%)",  // tealish neon green
          700: "hsl(156, 70%, 25%)",  // deep green
          800: "hsl(156, 60%, 18%)",  // very dark green
          900: "hsl(156, 50%, 12%)",  // near-black with green hue
          950: "hsl(156, 40%, 8%)",   // almost black
        },
        // Add teal theme colors 
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#2c5252', // Dark teal for text
          900: '#1e3a3a', // Darker teal for hover
        }
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "traslateY(0%)" },
          "50%": { transform: "translateY(-100%)" },
        },
        hoverUnderline: {
          '0%': {
            width: '0%',
            opacity: 0.3,
            left: '0%',
          },
          '50%': {
            width: '50%',
            opacity: 0.7,
            left: '25%',
          },
          '100%': {
            width: '100%',
            opacity: 1,
            left: '0%',
          },
        },
      },
      animation: {
        wiggle: "wiggle 15s linear infinite",
        "ping-slow": "ping 1.5s linear infinite",
        'hover-underline': 'hoverUnderline 0.5s ease-in-out forwards',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

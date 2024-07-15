import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow:{
        'inner': 'inset 0 -5px 25px 0px rgba(131, 180, 255, 0.2)',
        'innerOnHover': 'inset 0 0px 25px 0px rgba(131, 180, 255, 0.1)',
        'glow': '0 0 20px 3px rgba(131, 180, 255, 0.3)',
      },
      backgroundSize: {
        '300%': '300%',
      },
      colors: {
        activeBorderColor: '#83B4FF',
        subtleBackground: '#131823',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          light: '#161c29',
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'border-spin-left': {
          '100%': { transform: 'rotate(-180deg)'},
        },
        'border-spin-right': {
          '100%': { transform: 'rotate(0deg)' },
        },

        'login-border-spin': {
          '100%': { transform: 'rotate(-360deg)' },
        },
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float' : {
          '0%' : {
            transform: 'translatey(0px)'
          },
          '50%' : {
            transform: 'translatey(-30px)'
          },
          '100%' : {
            transform: 'translatey(0px)'
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'border-spin-left': 'border-spin-left 1s ease-in-out infinite',
        'border-spin-right': 'border-spin-right 1s ease-in-out infinite',
        'login-border-spin': 'login-border-spin 5s linear infinite',
        'gradient': 'animatedgradient 5s ease infinite alternate',
        'float': 'float 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
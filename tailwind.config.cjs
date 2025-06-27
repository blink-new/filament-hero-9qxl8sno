/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
        border: "#2D3748",
        input: "#2D3748",
        ring: "#FF6B35",
        background: "#1A202C",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#FF6B35",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#2D3748",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#F56565",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#2D3748",
          foreground: "#A0AEC0",
        },
        accent: {
          DEFAULT: "#FF6B35",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#2D3748",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#2D3748",
          foreground: "#FFFFFF",
        },
        orange: {
          500: '#FF6B35',
        },
  		},
  		fontFamily: {
  			sans: [
  				'Inter var',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'fade-in': 'fade-in 0.5s ease-out',
  			'slide-up': 'slide-up 0.5s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(10px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
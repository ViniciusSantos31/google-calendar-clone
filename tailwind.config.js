/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", "sans-serif"],
			},
			gridTemplateColumns: {
				"1/5": "1fr 5fr",
			},
			keyframes: {
				"slide-left": {
					"0%": { transform: "translateX(50%)", opacity: 0 },
					"100%": { transform: "translateX(0)", opacity: 1 },
				},
				"slide-right": {
					"0%": { transform: "translateX(-50%)", opacity: 0 },
					"100%": { transform: "translateX(0)", opacity: 1 },
				},
			},
			animation: {
				"slide-left": "slide-left 0.2s ease alternate",
				"slide-right": "slide-right 0.2s ease alternate",
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,vue}"],
	theme: {
		extend: {
			colors: {
				"blueish-dark-100": "#212023",
				"blueish-dark-200": "#1F1E21",
				"blueish-dark-300": "#1D1C1F",
				"blueish-dark-400": "#1B1A1D",
				"blueish-dark-500": "#19181B",
				"blueish-dark-600": "#171619",
				"blueish-dark-700": "#151417",
				"blueish-dark-800": "#131215",
				"blueish-dark-900": "#111013",
			},
			height: {
				"content-wrapper": "calc(100% - var(--header-height))",
				header: "var(--header-height)",
			},
			minHeight: {
				"content-wrapper": "calc(100% - var(--header-height))",
				header: "var(--header-height)",
			},
			minWidth: {
				"main": "300px",
			},
			maxWidth: {
				"main": "1200px",
			},
			margin: {
				header: "var(--header-height)",
			},
			spacing: {
				header: "var(--header-height)",
			},
		},
	},
	plugins: [],
};

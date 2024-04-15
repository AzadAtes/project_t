/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,vue}"],
	theme: {
		extend: {
			colors: {
				"neutral-910": "#151515",
				"neutral-800": "#1f1f1f",
				/*
				"blueish-dark-100": "#212023",
				"blueish-dark-200": "#1F1E21",
				"blueish-dark-300": "#1D1C1F",
				"blueish-dark-400": "#1B1A1D",
				"blueish-dark-500": "#19181B",
				"blueish-dark-600": "#171619",
				"blueish-dark-700": "#151417",
				"blueish-dark-800": "#131215",
				"blueish-dark-900": "#111013",
				 */
			},
			height: {
				"app-content": "calc(100% - var(--app-header-height))",
				"app-header": "var(--app-header-height)",
			},
			minHeight: {
				"app-content": "calc(100% - var(--app-header-height))",
				"app-header": "var(--app-header-height)",
			},
			maxHeight: {
				"app-content": "calc(100% - var(--app-header-height))",
				"app-header": "var(--app-header-height)",
			},
			width: {
				sidebar: "var(--sidebar-width)",
			},
			minWidth: {
				sidebar: "var(--sidebar-width)",
			},
			maxWidth: {
				sidebar: "var(--sidebar-width)",
			},
			margin: {
				"app-header": "var(--app-header-height)",
			},
			spacing: {
				"app-header": "var(--app-header-height)",
			},
			flex: {
				"0-0-sidebar": "0 0 var(--sidebar-width)",
				"1-0-sidebar": "1 0 var(--sidebar-width)",
				"0-1-sidebar": "0 1 var(--sidebar-width)",
				"1-1-sidebar": "1 1 var(--sidebar-width)",
				"0-0-main": "0 0 var(--main-width)",
				"1-0-main": "1 0 var(--main-width)",
				"0-1-main": "0 1 var(--main-width)",
				"1-1-main": "1 1 var(--main-width)",
				"2-0-main": "1 0 var(--main-width)",
				"2-1-main": "1 1 var(--main-width)",
				"2-2-main": "1 1 var(--main-width)",
				2: "2 1 0",
			},
		},
	},
	plugins: [],
};

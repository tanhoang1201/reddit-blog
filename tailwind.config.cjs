/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ["Poppins", "sans-serif"],
			},
			boxShadow: {
				bxs: "rgba(255, 255, 255, 0.4) 0px 4px 16px, rgba(255, 255, 255, 0.4) 0px 8px 24px, rgba(255, 255, 255, 0.4) 0px 16px 56px",
			},
		},
	},
	plugins: [],
};

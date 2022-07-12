/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'bookmark-purple': '#253761',
				'bookmark-red': '#FA5959',
				'bookmark-blue': '#2f61d8',
				'bookmark-grey': '#9194A2',
				'bookmark-white': '#f7f7f7',
				'bookmark-hover-blue': '#648ff4',
				'bookmark-focus-blue': '#1c47ae',
			},
			backgroundImage: {
				'header-pattern': "url('/src/assets/images/header_background.svg')",
			},
		},
		fontFamily: {
			Poppins: ['Poppins, sans-serif'],
			Montserrat: ['Montserrat, sans-serif'],
			Roboto: ['Roboto, sans-serif'],
		},
		container: {
			center: true,
			padding: '1rem',
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1440px',
			// => @media (min-width: 1440px) { ... }

			'2xl': '1920px',
			// => @media (min-width: 1920px) { ... }
		},
	},
	plugins: [],
}

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		container: {
			margin: '0rem',
			padding: '0rem',
		},
		extend: {
			colors: {
				midnight: '#0f0f17',
				black: '#282c34',
				white: '#abb2bf',
				red: '#e06c75',
				darkred: '#be5046',
				green: '#98c379',
				yellow: '#e5c07b',
				darkyellow: '#d19a66',
				blue: '#61afef',
				magenta: '#c678dd',
				cyan: '#56b6c2',
				grey: '#4b5263',
				darkgrey: '#5c6370',
			},
		},
		screens: {},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/aspect-ratio'), //
		require('@tailwindcss/forms'), //
		require('@tailwindcss/line-clamp'), //
		require('@tailwindcss/typography'), //
	],
};

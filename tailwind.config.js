const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const theme = { ...defaultTheme };

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			midnight: '#0f0f17',
			black: '#282c34',
			white: '#abb2bf',

			blue: colors.blue,
			gray: colors.coolGray,
			grey: colors.blueGray,
			pink: colors.pink,

			codered: '#e06c75',
			codedarkred: '#be5046',
			codegreen: '#98c379',
			codeyellow: '#e5c07b',
			codedarkyellow: '#d19a66',
			codeblue: '#61afef',
			codemagenta: '#c678dd',
			codecyan: '#56b6c2',
			codegrey: '#4b5263',
			codedarkgrey: '#5c6370',
		},
		container: {
			margin: '0rem',
			padding: '0rem',
		},
		fontFamily: {
			sans: ['Roboto', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
			mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
		},
		fontSize: {
			xxs: ['0.65rem', { lineHeight: '1rem' }],
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.25rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.25rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
			'5xl': ['3rem', { lineHeight: '1' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }],
		},
		fontWeight: {
			thin: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		},
		screens: {},
		borderColor: (theme) => ({
			...theme('colors'),
			DEFAULT: theme('colors.gray.200', 'currentColor'),
		}),
		borderOpacity: (theme) => theme('opacity'),
	},
	variants: {},
	plugins: [
		require('@tailwindcss/aspect-ratio'), //
		require('@tailwindcss/forms'), //
		require('@tailwindcss/line-clamp'), //
		require('@tailwindcss/typography'), //
	],
};

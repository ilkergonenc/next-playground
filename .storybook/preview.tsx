import '../styles/globals.css'

import React from 'react'
import { Inter } from 'next/font/google'
import type { Preview } from '@storybook/react'

const inter = Inter({ subsets: ['latin'] })

const decorators = [
	(Story: any) => (
		<main className={inter.className}>
			<Story />
		</main>
	),
]

const BREAKPOINTS_INT = {
	xs: 375,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1400,
}

const customViewports = Object.fromEntries(
	Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
		console.log(val)
		return [
			key,
			{
				name: key,
				styles: {
					width: `${val}px`,
					height: `${(idx + 5) * 10}vh`,
				},
			},
		]
	})
)

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		viewport: { viewports: customViewports },
	},
	decorators,
	globalTypes: {
		darkMode: {
			defaultValue: true,
		},
		className: {
			defaultValue: 'dark',
		},
	},
}

export default preview
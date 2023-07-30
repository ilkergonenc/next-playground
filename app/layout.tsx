import '@/styles/globals.css'

import type { Metadata } from 'next'

import { appMeta } from '@/config'
import { cn } from '@/components/utils'
import { fontSans } from '@/components/ds/fonts'
import LayoutRoot from '@/components/root/layout'
import { RootProviders } from '@/components/root/providers'

export const metadata: Metadata = {
	title: {
		default: appMeta.name,
		template: `%s - ${appMeta.name}`,
	},
	description: appMeta.description,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	icons: {
		icon: '/favicon.ico',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn('antialiased', fontSans.variable)}>
				<div id="__next">
					<RootProviders>
						<LayoutRoot>{children}</LayoutRoot>
					</RootProviders>
				</div>
			</body>
		</html>
	)
}

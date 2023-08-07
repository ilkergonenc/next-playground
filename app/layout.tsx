import '@/styles/globals.css'

import type { Metadata } from 'next'

import { appMeta } from '@/config'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { RootProviders, SiteFooter, SiteHeader } from '@/components/root'

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
						<SiteHeader />
						<main className="min-h-[66vh]">{children}</main>
						<SiteFooter />
					</RootProviders>
				</div>
			</body>
		</html>
	)
}

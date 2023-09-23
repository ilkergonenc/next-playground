import { SiteFooter, SiteHeader } from '@/components/root'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<SiteHeader />
			<main className="min-h-[66vh]">{children}</main>
			<SiteFooter />
		</>
	)
}

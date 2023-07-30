import SiteFooter from './footer'
import SiteHeader from './header'

interface RootLayoutProps {
	children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<SiteHeader />
			<main className="min-h-[66vh]">{children}</main>
			<SiteFooter />
		</>
	)
}

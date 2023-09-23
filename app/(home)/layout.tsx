import { SiteFooter, SiteHeader } from '@/components/root'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SiteHeader />
			<main className="min-h-[66vh]">
				<section className="container flex flex-col divide-y-2">
					{children}
				</section>
			</main>
			<SiteFooter />
		</>
	)
}

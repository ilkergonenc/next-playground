import Link from 'next/link'

import { appNavs } from '@/config'
import BrandLink from '@/components/root/navs/link-brand'
import ThemeToggle from '@/components/root/navs/toggle-theme'

export default function SiteFooter() {
	return (
		<footer className="mt-8 w-full border-t-0 bg-accent/10 py-12">
			<div className="container flex flex-col items-start gap-8 lg:flex-row">
				<BrandLink />
				<div className="flex flex-1 lg:justify-center">
					{appNavs?.footer.length > 0 && (
						<nav className="grid gap-8 lg:grid-cols-3 lg:gap-16">
							{appNavs.footer.map((nav, i) => (
								<div key={i}>
									<h5 className="mb-2 font-semibold text-foreground/90">
										{nav.title}
									</h5>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{nav.links.map((link, i) => (
											<li key={i}>
												{link.external ? (
													<Link
														href={link.href}
														target="_blank"
														rel="noreferrer"
													>
														{link.title}
													</Link>
												) : (
													<Link href={link?.href || '/'}>{link.title}</Link>
												)}
											</li>
										))}
									</ul>
								</div>
							))}
						</nav>
					)}
				</div>
				<ThemeToggle className="lg:ml-auto" />
			</div>
		</footer>
	)
}

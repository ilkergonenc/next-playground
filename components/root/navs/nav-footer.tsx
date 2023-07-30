import Link from 'next/link'

import { appNavs } from '@/config'

const footerMenu = appNavs?.footer || []

export default function SiteFooter() {
	return (
		<div className="flex flex-1 lg:justify-center">
			{footerMenu.length > 0 && (
				<nav className="grid gap-8 lg:grid-cols-3 lg:gap-16">
					{footerMenu.map((nav, i) => (
						<div key={i}>
							<h5 className="mb-2 font-semibold text-foreground/90">
								{nav.title}
							</h5>
							<ul className="space-y-2 text-sm text-muted-foreground">
								{nav.links.map((link, i) => (
									<li key={i}>
										{link.external ? (
											<Link href={link.href} target="_blank" rel="noreferrer">
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
	)
}

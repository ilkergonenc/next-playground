'use client'

import { appNavs, appTheme } from '@/config'
import { useViewport } from '@/lib/hooks/use-viewport'

import { Drawer } from './drawer'
import BrandLink from './navs/link-brand'
import MainNavigation from './navs/nav-main'
import ThemeToggle from './navs/toggle-theme'

export default function SiteHeader() {
	const { windowWidth } = useViewport()
	const isMobile = windowWidth < appTheme.header.breakpoint

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
				<div className="flex items-center space-x-4">
					{isMobile && <Drawer />}
					<BrandLink />
					<MainNavigation
						items={appNavs.main}
						className={isMobile ? 'hidden' : 'flex'}
					/>
				</div>
				<ThemeToggle className="ml-auto" />
			</div>
		</header>
	)
}

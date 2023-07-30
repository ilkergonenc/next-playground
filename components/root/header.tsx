'use client'

import { appNavs, appTheme } from '@/config'
import { useViewport } from '@/hooks/use-viewport'
import BrandLink from '@/components/root/navs/link-brand'
import MainNavigation from '@/components/root/navs/nav-main'
import ThemeToggle from '@/components/root/navs/toggle-theme'

import { Drawer } from './drawer'

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

'use client'

import appConfig from '@/config'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

import BrandLink from './navs/link-brand'
import MainNavigation from './navs/nav-main'
import ThemeToggle from './navs/toggle-theme'

export function Drawer() {
	return (
		<Sheet>
			<SheetTrigger
				className={cn(
					buttonVariants({ variant: 'outline', size: 'icon' }),
					'lg:hidden'
				)}
			>
				<Icons.Menu />
				<span className="sr-only">Open drawer</span>
			</SheetTrigger>
			<SheetContent side="left" className="flex h-full flex-col gap-8">
				<SheetTitle>
					<BrandLink />
				</SheetTitle>
				<MainNavigation items={appConfig.navs.main} direction="vertical" />
				<ThemeToggle className="mt-auto " />
			</SheetContent>
		</Sheet>
	)
}

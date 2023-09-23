// 'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

export default function ChatSidebarTopNavigation({
	toggleSidebar,
	isMobile = false,
}: {
	toggleSidebar?: () => void
	isMobile?: boolean
}) {
	return (
		<div className="flex gap-2 p-2">
			<Link
				href="/chat/new"
				className={cn(
					buttonVariants({ variant: 'outline', size: 'lg' }),
					'flex grow items-center justify-start gap-3 px-3 hover:bg-accent/50'
				)}
			>
				<Icons.Plus size={16} />
				<span>New chat</span>
			</Link>
			{!isMobile && (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger
							aria-label="Close sidebar"
							className={cn(
								buttonVariants({ variant: 'outline', size: 'lg' }),
								'px-3 hover:bg-accent/50'
							)}
							onClick={toggleSidebar}
						>
							<Icons.PanelLeft size={16} />
							<span className="sr-only">Close sidebar</span>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={11}>
							<p>Close sidebar</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			)}
		</div>
	)
}

'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

import ChatSidebarContent from './content'

const defaultSidebarWidth = '260px'

type SidebarState = 'open' | 'closed'

export default function ChatSidebarDesktop() {
	const [sidebarState, setSidebarState] = useState<SidebarState>('open')
	const [sidebarWidth, setSidebarWidth] = useState(defaultSidebarWidth)

	function toggleSidebar() {
		if (sidebarWidth === defaultSidebarWidth) {
			setSidebarState('closed')
			setSidebarWidth('0px')
		} else {
			setSidebarState('open')
			setSidebarWidth(defaultSidebarWidth)
		}
	}

	return (
		<>
			<div
				className="shrink-0 overflow-x-hidden transition-[width]"
				style={{ width: sidebarWidth }}
			>
				<ChatSidebarContent toggleSidebar={toggleSidebar} />
			</div>

			{sidebarState === 'closed' && (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger
							aria-label="Open sidebar"
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'icon' }),
								'fixed left-2 top-2.5 z-40 hover:bg-slate-300 dark:hover:bg-slate-700'
							)}
							onClick={toggleSidebar}
						>
							<Icons.PanelLeft size={16} />
							<span className="sr-only">Open sidebar</span>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={8}>
							<p>Open sidebar</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			)}
		</>
	)
}

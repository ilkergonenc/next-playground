'use client'

import { Close as SheetClose } from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import ChatSidebarContent from './content'

export default function ChatSidebarMobile() {
	return (
		<Sheet>
			<SheetTrigger
				aria-label="Open sidebar"
				className={cn(
					buttonVariants({ variant: 'ghost', size: 'icon' }),
					'fixed left-2 top-2.5 z-40 hover:bg-slate-300 dark:hover:bg-slate-700'
				)}
			>
				<Icons.PanelLeft size={16} />
				<span className="sr-only">Open sidebar</span>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="group w-[260px] bg-gray-900 p-0"
				customCloseBtn
			>
				<SheetClose
					className={cn(
						'absolute -right-8 top-5 rounded-sm opacity-70 ring-offset-background',
						'hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
						'group-data-[state=open]:bg-secondary group-data-[state=open]:transition-opacity',
						'group-data-[state=closed]:opacity-0 group-data-[state=closed]:transition-none'
					)}
				>
					<Icons.X size={20} />
					<span className="sr-only">Close</span>
				</SheetClose>
				<ChatSidebarContent isMobile />
			</SheetContent>
		</Sheet>
	)
}

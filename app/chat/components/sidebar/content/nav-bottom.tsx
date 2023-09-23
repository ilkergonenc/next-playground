// 'use client'

import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'

export default function ChatSidebarBottomNavigation() {
	const [dialogContent, setDialogContent] = useState<string>('')

	return (
		<div className="border-t p-2">
			<Link
				href="/playground"
				className={cn(
					buttonVariants({ variant: 'ghost', size: 'lg' }),
					'flex w-full items-center justify-start gap-3 px-3 font-normal'
				)}
			>
				<Icons.Playground size={16} />
				<span>Open chat in playground</span>
			</Link>
			<Dialog>
				<DialogTrigger
					className={cn(
						buttonVariants({ variant: 'ghost', size: 'lg' }),
						'flex w-full items-center justify-start gap-3 px-3 font-normal'
					)}
				>
					<Icons.Key size={16} />
					<span>Your API key</span>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you sure absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>

			<Dialog>
				<DropdownMenu>
					<DropdownMenuTrigger
						className={cn(
							buttonVariants({ variant: 'ghost', size: 'lg' }),
							'flex w-full items-center px-2 font-normal'
						)}
					>
						<div className="mr-2 flex h-[30px] w-[30px] items-center justify-center rounded bg-sky-500 text-xs uppercase">
							IL
						</div>
						<span>ilkergonenc@gmail.com</span>
						<Icons.MoreHorizontal size={16} className="ml-auto" />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-[calc(260px-1rem)]">
						<DialogTrigger
							className="w-full"
							onClick={() => setDialogContent('custom')}
						>
							<DropdownMenuItem className="flex items-center gap-3">
								<Icons.MessageSquareDashed size={16} />
								<span>Custom instructions</span>
							</DropdownMenuItem>
						</DialogTrigger>
						<DialogTrigger
							className="w-full"
							onClick={() => setDialogContent('settings')}
						>
							<DropdownMenuItem className="flex items-center gap-3">
								<Icons.Settings size={16} />
								<span>Settings</span>
							</DropdownMenuItem>
						</DialogTrigger>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="flex items-center gap-3">
							<Icons.LogOut size={16} />
							<span>Logout</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<DialogPortal>
					{dialogContent === 'custom' && (
						<DialogContent>This is a custom modal.</DialogContent>
					)}
					{dialogContent === 'settings' && (
						<DialogContent>This is a settings modal.</DialogContent>
					)}
				</DialogPortal>
			</Dialog>
		</div>
	)
}

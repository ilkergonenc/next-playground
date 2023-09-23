// 'use client'

import Link from 'next/link'

import { Icons } from '@/components/ui/icons'

export default function ChatSidebarHistoryNavigationItem({
	title,
}: {
	title: string
}) {
	return (
		<li
			className="relative z-[15]"
			style={{
				opacity: 1,
				height: 'auto',
				transform: 'none',
				transformOrigin: '50% 50% 0px',
			}}
		>
			<Link
				href="/chat"
				className="group relative flex cursor-pointer items-center gap-3 break-all rounded-md p-3 hover:bg-accent hover:pr-4"
			>
				{/* <Icons.MessageSquare size={16} /> */}
				<div className="relative max-h-5 flex-1 overflow-hidden text-ellipsis break-all">
					{title}
				</div>
				<div className="invisible absolute right-1 z-10 flex bg-accent text-primary/50 group-hover:visible">
					<div className="absolute inset-y-0 left-0 w-8 translate-x-[-100%] bg-gradient-to-l from-accent "></div>
					<button type="button" className="p-1 hover:text-primary">
						<Icons.PenLine size={16} />
						<span className="sr-only">Edit chat title</span>
					</button>
					<button type="button" className="p-1 hover:text-primary">
						<Icons.Trash size={16} />
						<span className="sr-only">Delete chat</span>
					</button>
				</div>
			</Link>
		</li>
	)
}

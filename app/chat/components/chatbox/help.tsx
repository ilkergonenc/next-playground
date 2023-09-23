import Link from 'next/link'

import {
	Dialog,
	DialogContent,
	DialogPortal,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'

export default function ChatHelp() {
	return (
		<>
			<div className="group absolute bottom-5 right-4 z-10 flex flex-row items-center gap-3">
				<Dialog>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/25 bg-slate-500 font-semibold hover:bg-slate-700">
							?
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>
								<Link
									href="https://help.openai.com/en/collections/3742473-chatgpt"
									target="_blank"
									className="flex w-full items-center gap-3"
								>
									<Icons.ExternalLink size={16} />
									<span>Help & FAQ</span>
								</Link>
							</DropdownMenuItem>
							<DialogTrigger>
								<DropdownMenuItem className="flex items-center gap-3">
									<Icons.Keyboard size={16} />
									<span>Keyboard shortcuts</span>
								</DropdownMenuItem>
							</DialogTrigger>
						</DropdownMenuContent>
					</DropdownMenu>
					<DialogPortal>
						<DialogContent>This is a modal.</DialogContent>
					</DialogPortal>
				</Dialog>
			</div>
		</>
	)
}

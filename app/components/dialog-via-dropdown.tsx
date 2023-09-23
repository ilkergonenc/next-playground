'use client'

import {
	Dialog,
	DialogContent,
	DialogOverlay,
	DialogPortal,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function DialogViaDropdown() {
	return (
		<Dialog>
			<DropdownMenu>
				<DropdownMenuTrigger>Dropdown Menu</DropdownMenuTrigger>
				<DropdownMenuPortal>
					<DropdownMenuContent>
						<DialogTrigger>
							<DropdownMenuItem>Test</DropdownMenuItem>
						</DialogTrigger>
					</DropdownMenuContent>
				</DropdownMenuPortal>
			</DropdownMenu>
			<DialogPortal>
				<DialogOverlay />
				<DialogContent>This is a modal.</DialogContent>
			</DialogPortal>
		</Dialog>
	)
}

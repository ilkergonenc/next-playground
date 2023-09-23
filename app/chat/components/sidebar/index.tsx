'use client'

import { useViewport } from '@/lib/hooks/use-viewport'

import ChatSidebarDesktop from './desktop'
import ChatSidebarMobile from './mobile'

const sidebarBreakpoint = 768

export default function ChatSidebar() {
	const { windowWidth } = useViewport()

	return (
		<>
			{windowWidth >= sidebarBreakpoint ? (
				<ChatSidebarDesktop />
			) : (
				<ChatSidebarMobile />
			)}
		</>
	)
}

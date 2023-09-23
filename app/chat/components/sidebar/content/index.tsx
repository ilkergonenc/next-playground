// 'use client'

import ChatSidebarBottomNavigation from './nav-bottom'
import ChatSidebarHistoryNavigation from './nav-history'
import ChatSidebarTopNavigation from './nav-top'

export default function ChatSidebarContent({
	toggleSidebar,
	isMobile = false,
}: {
	toggleSidebar?: () => void
	isMobile?: boolean
}) {
	return (
		<div className="h-full w-full">
			<div className="flex h-full min-h-0 flex-col ">
				<div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
					<nav
						className="flex h-full w-full flex-col"
						aria-label="Chat History"
					>
						<ChatSidebarTopNavigation
							isMobile={isMobile}
							toggleSidebar={toggleSidebar}
						/>
						<ChatSidebarHistoryNavigation />
						<ChatSidebarBottomNavigation />
					</nav>
				</div>
			</div>
		</div>
	)
}

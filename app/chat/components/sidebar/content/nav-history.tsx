// 'use client'

import { chatHistory7, chatHistory30 } from '../../../data/chat-history'
import ChatSidebarHistoryNavigationItem from './nav-history-item'

export default function ChatSidebarHistoryNavigation() {
	return (
		<>
			<style jsx>{`
				#chatHistoryNav::-webkit-scrollbar {
					width: 0rem;
					opacity: 0;
					visibility: invisible;
				}
				#chatHistoryNav:hover::-webkit-scrollbar {
					width: 0.5rem;
					opacity: 1;
					visibility: visible;
				}
				#chatHistoryNav::-webkit-scrollbar-track {
					background: hsla(var(--background));
					border-radius: 5rem;
				}
			`}</style>
			<div
				className="flex-1 flex-col overflow-y-auto px-2 transition-opacity duration-500"
				id="chatHistoryNav"
			>
				<ChatSidebarHistoryNavigationDates title="Today" data={chatHistory7} />
				<ChatSidebarHistoryNavigationDates
					title="Previous 7 days"
					data={chatHistory7}
				/>
				<ChatSidebarHistoryNavigationDates
					title="Previous 30 days"
					data={chatHistory30}
				/>
				<ChatSidebarHistoryNavigationDates title="Today" data={chatHistory7} />
				<ChatSidebarHistoryNavigationDates
					title="Previous 7 days"
					data={chatHistory7}
				/>
				<ChatSidebarHistoryNavigationDates
					title="Previous 30 days"
					data={chatHistory30}
				/>
			</div>
		</>
	)
}

function ChatSidebarHistoryNavigationDates({
	title,
	data,
}: {
	title: string
	data: string[]
}) {
	return (
		<div className="flex flex-col gap-2 pb-2 text-sm">
			<div
				className="sticky top-0 z-[16]"
				style={{
					opacity: 1,
					height: 'auto',
					transform: 'none',
					transformOrigin: '50% 50% 0px',
				}}
			>
				<h3 className="h-9 overflow-hidden text-ellipsis break-all bg-background px-3 pb-2 pt-3 text-xs font-medium text-slate-500">
					{title}
				</h3>
			</div>
			<ol>
				{data.map((title, key) => (
					<ChatSidebarHistoryNavigationItem title={title} key={key} />
				))}
			</ol>
		</div>
	)
}

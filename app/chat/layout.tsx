import { ReactNode } from 'react'
import { Metadata } from 'next'

import ScrollContainer from '@/components/scrollable'

import ChatFooter from './components/chatbox'
import ChatSidebar from './components/sidebar'

export const metadata: Metadata = {
	title: 'ChatGPT Clone',
	description: 'The OpenAI ChatGPT built using the components.',
}

export default function ChatLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="flex h-screen w-full overflow-hidden">
				{/* LEFT */}
				<ChatSidebar />
				{/* RIGHT */}
				<div className="flex h-full flex-1 overflow-hidden transition-[width]">
					<div role="presentation" className="relative h-full w-full bg-accent">
						<ScrollContainer>
							<main className="flex flex-col">
								{children}
								<div className="h-32 shrink-0 md:h-48"></div>
							</main>
						</ScrollContainer>
						<ChatFooter />
					</div>
				</div>
			</div>
		</>
	)
}

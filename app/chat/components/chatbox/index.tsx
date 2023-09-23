import { cn } from '@/lib/utils'

import ChatActions from './actions'
import ChatForm from './form'
import ChatHelp from './help'

export default function ChatFooter() {
	return (
		<>
			<footer
				className={cn(
					'absolute bottom-0 left-0',
					'w-full pt-2 md:w-[calc(100%-0.5rem)] md:pl-2',
					'bg-gradient-to-t from-accent from-25% to-black/0'
				)}
			>
				<ChatActions />
				<ChatForm />
				<ChatHelp />
			</footer>
		</>
	)
}

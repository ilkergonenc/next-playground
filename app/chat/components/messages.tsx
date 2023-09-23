import { cn } from '@/lib/utils'
import { Icons } from '@/components/ui/icons'

import { type ChatMessageType } from '../data/messages'

function ChatMessage({ id, role, message }: ChatMessageType) {
	return (
		<>
			<div
				data-chat-id={id}
				className={cn(
					'group w-full border-b border-background/25',
					role === 'assistant' && 'bg-primary/10'
				)}
			>
				<div className="m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-[38rem] lg:px-0 xl:max-w-3xl">
					<div className="relative flex shrink-0 flex-col items-end">
						{role === 'assistant' && (
							<div className="flex h-[30px] w-[30px] items-center justify-center rounded bg-teal-500">
								<Icons.ChatGPT />
							</div>
						)}
						{role === 'user' && (
							<div className="flex h-[30px] w-[30px] items-center justify-center rounded bg-sky-500 text-xs uppercase">
								IL
							</div>
						)}
						{/* <div className="!invisible absolute left-0 top-2 -ml-4 flex -translate-x-full items-center justify-center gap-1 text-xs group-hover:visible">
							<button
								disabled
								className="disabled:text-gray-300 dark:text-white dark:disabled:text-gray-400"
							>
								<Icons.ChevronLeft size={12} />
							</button>
							<span className="shrink-0 grow">1 / 1</span>
							<button
								disabled
								className="disabled:text-gray-300 dark:text-white dark:disabled:text-gray-400"
							>
								<Icons.ChevronRight size={12} />
							</button>
						</div> */}
					</div>
					<div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
						<div className="flex grow flex-col gap-3">
							<div className="flex min-h-[20px] flex-col items-start gap-3 overflow-x-auto whitespace-pre-wrap break-words">
								<div className="prose dark:prose-invert">{message}</div>
							</div>
						</div>
						<div className="flex justify-between lg:block">
							<div className="visible mt-2 flex justify-center gap-2 self-end text-gray-400 md:gap-3 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:translate-x-full lg:gap-1 lg:self-center lg:pl-2">
								{role === 'assistant' && (
									<>
										<button className="ml-auto flex gap-2 rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
											<Icons.Clipboard size={16} />
										</button>
										<div className="flex gap-1">
											<button className="rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
												<Icons.ThumbsUp size={16} />
											</button>
											<button className="rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
												<Icons.ThumbsDown size={16} />
											</button>
										</div>
									</>
								)}
								{role === 'user' && (
									<button className="rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible">
										<Icons.PenSquare size={16} />
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default function ChatMessages({
	messages,
}: {
	messages: ChatMessageType[]
}) {
	return (
		<>
			{messages.map((message) => (
				<ChatMessage key={message.id} {...message} />
			))}
		</>
	)
}

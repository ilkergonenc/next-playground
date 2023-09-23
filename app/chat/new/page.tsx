import Link from 'next/link'

import { Icons } from '@/components/ui/icons'

export default function ChatPage() {
	return (
		<section className="mx-2 flex flex-col items-center gap-6 font-mono md:mx-4 lg:mx-auto lg:w-full lg:max-w-2xl xl:max-w-3xl">
			<p className="py-8 text-3xl font-semibold">qooob/ai/chat</p>
			<div className="flex w-full flex-col gap-4 rounded-lg border border-foreground/25 bg-background/50 p-4">
				<p className="text-lg font-semibold">🤗HuggingFace</p>
				<p className="group flex items-center text-xs">
					<Icons.Brain size={12} className="mr-1 block group-hover:hidden" />
					<Icons.ExternalLink
						size={12}
						className="mr-1 hidden group-hover:block"
					/>
					<Link
						href="https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5"
						className="group-hover:underline"
						target="_blank"
					>
						<span>OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5</span>
					</Link>
				</p>
			</div>
			<div className="flex w-full flex-col gap-4 rounded-lg border border-foreground/25 bg-background/50 p-4">
				<p className="flex items-center gap-1 text-lg font-semibold">
					<Icons.ChatGPT className="h-4 w-4" />
					OpenAI
				</p>
				<p className="group flex items-center text-xs">
					<Icons.Brain size={12} className="mr-1 block group-hover:hidden" />
					<Icons.ExternalLink
						size={12}
						className="mr-1 hidden group-hover:block"
					/>
					<Link
						href="https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5"
						className="group-hover:underline"
						target="_blank"
					>
						<span>ChatGPT/GPT-3.5</span>
					</Link>
				</p>
				<p className="group flex items-center text-xs">
					<Icons.Brain size={12} className="mr-1 block group-hover:hidden" />
					<Icons.ExternalLink
						size={12}
						className="mr-1 hidden group-hover:block"
					/>
					<Link
						href="https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5"
						className="group-hover:underline"
						target="_blank"
					>
						<span>ChatGPT/GPT-4</span>
					</Link>
				</p>
			</div>
		</section>
	)
}

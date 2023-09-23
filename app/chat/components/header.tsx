import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import ToggleTheme from '@/components/root/navs/toggle-theme'

export default function ChatHeader() {
	return (
		<header className="sticky top-0 z-10">
			<div className="relative z-20 flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-b border-background/50 bg-accent px-2">
				<div className="h-10 w-10" />
				<div className="flex items-center justify-center p-1">
					<span className="text-sm">Default (GPT-3.5)</span>
				</div>
				<div className="flex items-center gap-3">
					<Button
						aria-label="Share chat"
						variant="ghost"
						size="icon"
						className="hover:bg-slate-300 dark:hover:bg-slate-700"
					>
						<Icons.Share size={16} />
						<span className="sr-only">Share chat</span>
					</Button>
					<ToggleTheme />
				</div>
			</div>
		</header>
	)
}

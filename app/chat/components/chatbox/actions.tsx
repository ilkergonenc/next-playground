import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Switch } from '@/components/ui/switch'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

export default function ChatActions() {
	return (
		<div className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
			<div className="relative flex h-full flex-1 items-stretch md:flex-col">
				<div className="ml-1 flex h-full justify-center gap-0 md:m-auto md:mb-4 md:w-full md:gap-2">
					<div className="flex grow">
						<div
							className={cn(
								buttonVariants({ variant: 'secondary', size: 'sm' }),
								'gap-2 border border-primary/25'
							)}
						>
							<Switch size="xs" color="accent" />
							<span>Search web</span>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<Icons.Info size={14} className="stroke-primary/50" />
									</TooltipTrigger>
									<TooltipContent
										className="max-w-[24rem] border bg-slate-600"
										sideOffset={16}
									>
										<p className="p-1 text-sm font-normal">
											When enabled, the model will try to complement its answers
											with information queried from the web.
										</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
					</div>
					<div className="flex items-center gap-4 md:items-end">
						<Button
							variant="secondary"
							size="sm"
							className="border border-primary/25"
						>
							<div className="flex w-full items-center justify-center gap-2">
								<Icons.Regenerate size={12} />
								Regenerate
							</div>
						</Button>
						<Button
							variant="secondary"
							size="sm"
							className="border border-primary/25"
						>
							<div className="flex w-full items-center justify-center gap-2">
								<Icons.Square size={12} />
								Stop generating
							</div>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

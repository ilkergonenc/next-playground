import Link from 'next/link'

import { cn } from '@/components/utils'
import { buttonVariants } from '@/components/ui/button'
import type { ButtonVariantsProps } from '@/components/ui/button'
import { Skeleton } from '@/components/uix/skeleton'

type ActionType = {
	title: string
	href: string
	variant?: ButtonVariantsProps
	external?: boolean
}

export interface HeroProps extends HeroSkeletonProps {
	title: string | React.ReactNode
	leading: string | React.ReactNode
	actions?: ActionType[]
}

export function Hero({ title, leading, actions, align }: HeroProps) {
	return (
		<div className="space-y-8 py-16">
			<div
				className={cn(
					'flex max-w-[980px] flex-col items-start gap-2',
					align ? 'ml-auto items-end text-right' : ''
				)}
			>
				<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
					{title}
				</h1>
				<p className="max-w-[700px] text-lg text-muted-foreground">{leading}</p>
			</div>
			{actions && (
				<div className={cn('flex w-fit gap-4', align ? 'ml-auto' : '')}>
					{actions.map((cta, i) => {
						if (cta.external)
							return (
								<Link
									key={i}
									href={cta.href}
									className={buttonVariants(cta.variant ? cta.variant : {})}
									target="_blank"
									rel="noreferrer"
								>
									{cta.title}
								</Link>
							)
						return (
							<Link
								key={i}
								href={cta.href}
								className={buttonVariants(cta.variant ? cta.variant : {})}
							>
								{cta.title}
							</Link>
						)
					})}
				</div>
			)}
		</div>
	)
}

export interface HeroSkeletonProps {
	align?: 'right'
}

export function HeroSkeleton({ align }: HeroSkeletonProps) {
	return (
		<div className="space-y-8 py-16">
			<div
				className={cn(
					'flex max-w-[980px] flex-col items-start gap-2',
					align ? 'ml-auto items-end text-right' : ''
				)}
			>
				<Skeleton className="h-9 w-[66%]" />
				<Skeleton className="h-9 w-[75%]" />
				<Skeleton className="h-6 w-[80%]" />
				<Skeleton className="h-6 w-[30%]" />
			</div>
			<div className={cn('flex w-fit gap-4', align ? 'ml-auto' : '')}>
				<Skeleton className="w-36" />
				<Skeleton className="w-28" />
				<Skeleton className="w-32" />
			</div>
		</div>
	)
}

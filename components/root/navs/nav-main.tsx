import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/components/utils'

const navigationVariants = cva('flex gap-4', {
	variants: {
		direction: {
			horizontal: '',
			vertical: 'flex-col',
		},
	},
	defaultVariants: {
		direction: 'horizontal',
	},
})

export interface NavItem {
	title: string
	href?: string
	disabled?: boolean
	external?: boolean
}

interface MainNavigationProps extends VariantProps<typeof navigationVariants> {
	items: NavItem[]
	className?: string
}

export default function MainNavigation({
	items,
	direction,
	className,
	...props
}: MainNavigationProps) {
	if (items?.length === 0) null
	return (
		<nav
			className={cn(navigationVariants({ direction }), className)}
			{...props}
		>
			{items?.map(
				(item, index) =>
					item.href && (
						<Link
							key={index}
							href={item.href}
							className={cn(
								// buttonVariants({ variant: 'ghost' }),
								'flex items-center border-0 font-medium text-muted-foreground',
								item.disabled && 'cursor-not-allowed opacity-80'
							)}
						>
							{item.title}
						</Link>
					)
			)}
		</nav>
	)
}

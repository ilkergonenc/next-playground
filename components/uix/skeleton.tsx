import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/components/utils'

const skeletonVariants = cva('animate-pulse bg-muted', {
	variants: {
		size: {
			xs: 'h-4 w-4',
			sm: 'h-8 w-8',
			default: 'h-12 w-12',
			lg: 'h-16 w-16',
			xl: 'h-20 w-20',
		},
		shape: {
			default: 'rounded-md',
			circle: 'rounded-full',
			block: ' w-full rounded-md',
		},
	},
	defaultVariants: {
		size: 'default',
		shape: 'default',
	},
})

export interface SkeletonProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, size, shape, ...props }: SkeletonProps) {
	return (
		<div
			className={cn(skeletonVariants({ size, shape, className }))}
			{...props}
		/>
	)
}

export { Skeleton }

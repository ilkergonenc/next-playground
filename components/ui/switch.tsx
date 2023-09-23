'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const switchVariants = cva(
	[
		'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		'disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary',
	],
	{
		variants: {
			size: {
				default: 'h-[24px] w-[44px]',
				sm: 'h-[20px] w-[36px]',
				xs: 'h-[16px] w-[28px]',
			},
			color: {
				default: 'data-[state=unchecked]:bg-input',
				accent: 'data-[state=unchecked]:bg-background',
			},
		},
		defaultVariants: {
			size: 'default',
			color: 'default',
		},
	}
)

const thumbVariants = cva(
	[
		'pointer-events-none block rounded-full shadow-lg ring-0 transition-transform',
		'data-[state=unchecked]:translate-x-0',
	],
	{
		variants: {
			size: {
				default: 'h-5 w-5 data-[state=checked]:translate-x-5',
				sm: 'h-4 w-4 data-[state=checked]:translate-x-4',
				xs: 'h-3 w-3 data-[state=checked]:translate-x-3',
			},
			color: {
				default: 'bg-background',
				accent: 'bg-accent',
			},
		},
		defaultVariants: {
			size: 'default',
			color: 'default',
		},
	}
)

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
		VariantProps<typeof switchVariants>
>(({ className, color, size, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(switchVariants({ size, color }), className)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb className={thumbVariants({ size, color })} />
	</SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

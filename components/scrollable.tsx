'use client'

import {
	useCallback,
	useEffect,
	useRef,
	useState,
	type ReactNode,
	type SyntheticEvent,
} from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'

export default function ScrollContainer({ children }: { children: ReactNode }) {
	const outerDiv = useRef<HTMLDivElement>(null!)
	const innerDiv = useRef<HTMLDivElement>(null!)

	const prevInnerDivHeight = useRef<number | null>(null)

	const [showScrollButton, setShowScrollButton] = useState(false)
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const outerDivHeight = outerDiv.current.clientHeight
		const innerDivHeight = innerDiv.current.clientHeight
		const outerDivScrollTop = outerDiv.current.scrollTop

		if (
			!prevInnerDivHeight.current ||
			outerDivScrollTop === prevInnerDivHeight.current - outerDivHeight
		) {
			outerDiv.current.scrollTo({
				top: innerDivHeight! - outerDivHeight!,
				left: 0,
				behavior: prevInnerDivHeight.current ? 'smooth' : 'auto',
			})
			setShowScrollButton(false)
		} else {
			setShowScrollButton(true)
		}

		prevInnerDivHeight.current = innerDivHeight
	}, [children, scrollY])

	const handleScrollButtonClick = useCallback(() => {
		const outerDivHeight = outerDiv.current.clientHeight
		const innerDivHeight = innerDiv.current.clientHeight

		outerDiv.current.scrollTo({
			top: innerDivHeight! - outerDivHeight!,
			left: 0,
			behavior: 'smooth',
		})

		setShowScrollButton(false)
	}, [])

	function scrollEvent(e: SyntheticEvent) {
		const target = e.target as HTMLDivElement
		// console.log('Current scroll position:', target.scrollTop)
		setScrollY(target.scrollTop)
	}

	return (
		<div className="relative h-full">
			<div
				ref={outerDiv}
				className="relative h-full overflow-y-auto"
				onScroll={scrollEvent}
			>
				<div ref={innerDiv} className="relative">
					{children}
				</div>
			</div>
			<Button
				variant="secondary"
				className={cn(
					'absolute bottom-32 right-8 z-10',
					'h-8 w-8 rounded-full border border-primary/25 p-0',
					showScrollButton
						? 'opacity-1 pointer-events-auto'
						: 'pointer-events-none opacity-0'
				)}
				onClick={handleScrollButtonClick}
			>
				<Icons.ChevronDown size={18} />
			</Button>
		</div>
	)
}

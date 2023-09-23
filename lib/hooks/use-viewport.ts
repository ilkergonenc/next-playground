'use client'

import * as React from 'react'

import { appTheme } from '@/config'

export function useViewport() {
	const [windowWidth, setWindowWidth] = React.useState<number>(
		appTheme.header.breakpoint
	)

	React.useEffect(() => {
		setWindowWidth(window.innerWidth)
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth)
			// console.log('[useViewport]: ', windowWidth)
		}
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [windowWidth])

	return { windowWidth }
}

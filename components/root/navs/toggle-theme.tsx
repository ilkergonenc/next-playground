'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'

export default function ToggleTheme({ className }: { className?: string }) {
	const { setTheme, theme } = useTheme()

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			className={className}
		>
			<Icons.Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Icons.Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}

import Link from 'next/link'

import appConfig from '@/config'
import { cn } from '@/components/utils'
import { Icons } from '@/components/ds/icons'

// import { buttonVariants } from '@/components/ui/button'

export default function BrandLink() {
	return (
		<Link
			href="/"
			className={cn(
				// buttonVariants({ variant: 'ghost' }),
				'flex items-center space-x-2 pl-0 pr-4 font-mono'
			)}
		>
			<Icons.logo className="h-5 w-5" />
			<span className="inline-block pl-1 text-xl font-bold">/</span>
			<span className="inline-block text-lg font-bold">
				{appConfig.meta.name}
			</span>
		</Link>
	)
}

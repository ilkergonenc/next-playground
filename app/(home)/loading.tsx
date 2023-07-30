import { HeroSkeleton } from '@/components/ux/hero'

export default function Loading() {
	return (
		<>
			<HeroSkeleton />
			<HeroSkeleton align="right" />
			<HeroSkeleton />
		</>
	)
}

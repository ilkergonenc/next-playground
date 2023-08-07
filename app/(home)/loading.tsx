import { HeroSkeleton } from '@/components/hero'

export default function Loading() {
	return (
		<>
			<HeroSkeleton />
			<HeroSkeleton align="right" />
			<HeroSkeleton />
		</>
	)
}

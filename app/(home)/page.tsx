import { Hero } from '@/components/ux/hero'
import type { HeroProps } from '@/components/ux/hero'

export default async function IndexPage() {
	const data = await getData()
	return (
		<>
			{data.map((hero, key) => (
				<Hero key={key} {...hero} />
			))}
		</>
	)
}

async function getData() {
	await new Promise((resolve) => setTimeout(resolve, 693))
	return [
		{
			title: (
				<>
					Beautifully designed components <br className="hidden sm:inline" />
					built with Radix UI and Tailwind CSS.
				</>
			),
			leading:
				'Accessible and customizable components that you can copy and paste	into your apps. Free. Open Source. And Next.js 13 Ready.',
			actions: [
				{
					title: 'shadcn/ui',
					href: 'https://ui.shadcn.com/docs',
					external: true,
				},
				{
					title: 'radix-ui',
					href: 'https://www.radix-ui.com/docs',
					external: true,
					variant: { variant: 'secondary' },
				},
				{
					title: 'tailwindcss',
					href: 'https://tailwindcss.com/docs',
					external: true,
					variant: { variant: 'outline' },
				},
			],
		},
		{
			align: 'right',
			title: 'Next JS: The React Framework for the Web',
			leading:
				"Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
			actions: [
				{
					title: 'Next JS',
					href: 'https://ui.shadcn.com/docs',
					external: true,
				},
				{
					title: 'React JS',
					href: 'https://www.radix-ui.com/docs',
					external: true,
					variant: { variant: 'secondary' },
				},
				{
					title: 'Vercel',
					href: 'https://www.radix-ui.com/docs',
					external: true,
					variant: { variant: 'outline' },
				},
			],
		},
		{
			title: (
				<>
					Best practices for readability, reuseablity{' '}
					<br className="hidden sm:inline" />& consistentcy, ready to maintain.
				</>
			),
			leading:
				"Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
			actions: [
				{
					title: 'TypeScript',
					href: 'https://ui.shadcn.com/docs',
					external: true,
				},
				{
					title: 'Eslint',
					href: 'https://www.radix-ui.com/docs',
					external: true,
					variant: { variant: 'secondary' },
				},
				{
					title: 'Conventional Commits',
					href: 'https://www.radix-ui.com/docs',
					external: true,
					variant: { variant: 'outline' },
				},
			],
		},
	] satisfies HeroProps[]
}

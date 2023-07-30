import Link from 'next/link'

import appConfig, { appNavs } from '@/config'
import { Icons } from '@/components/@/icons'
import { buttonVariants } from '@/components/ui/button'

export default function IndexPage() {
	const links = appConfig.navs
	return (
		<section className="container flex flex-col divide-y-2">
			<div className="space-y-8 py-16">
				<div className="flex max-w-[980px] flex-col items-start gap-2">
					<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
						Beautifully designed components <br className="hidden sm:inline" />
						built with Radix UI and Tailwind CSS.
					</h1>
					<p className="max-w-[700px] text-lg text-muted-foreground">
						Accessible and customizable components that you can copy and paste
						into your apps. Free. Open Source. And Next.js 13 Ready.
					</p>
				</div>
				<div className="flex gap-4">
					<Link
						href={appNavs.links.docs}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants()}
					>
						shadcn/ui
					</Link>
					<Link
						href={'https://tailwindcss.com/docs/'}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants({ variant: 'secondary' })}
					>
						Tailwind CSS
					</Link>
					<Link
						target="_blank"
						rel="noreferrer"
						href={appConfig.navs.links.github}
						className={buttonVariants({ variant: 'outline' })}
					>
						{/* <Icons.gitHub className="mr-2 h-5 w-5 fill-current" /> */}
						<b>Radix UI</b>
					</Link>
				</div>
			</div>
			<div className="space-y-8 py-16">
				<div className="ml-auto flex max-w-[980px] flex-col items-end gap-2 text-right">
					<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
						The React Framework for the Web
					</h1>
					<p className="max-w-[700px] text-lg text-muted-foreground">
						{`Used by some of the world's largest companies, Next.js enables you
						to create full-stack Web applications by extending the latest React
						features, and integrating powerful Rust-based JavaScript tooling for
						the fastest builds.`}
					</p>
				</div>
				<div className="ml-auto flex w-fit gap-4">
					<Link
						href={appNavs.links.docs}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants()}
					>
						Next.js
					</Link>
					<Link
						target="_blank"
						rel="noreferrer"
						href={appConfig.navs.links.github}
						className={buttonVariants({ variant: 'outline' })}
					>
						{/* <Icons.gitHub className="mr-2 h-5 w-5 fill-current" /> */}
						<b>Vercel</b>
					</Link>
				</div>
			</div>
			<div className="space-y-8 py-8">
				<div className="flex max-w-[980px] flex-col items-start gap-2">
					<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
						Best practices for readability, reuseablity{' '}
						<br className="hidden sm:inline" /> & consistentcy, ready to
						maintain.
					</h1>
					<p className="max-w-[700px] text-lg text-muted-foreground">
						Accessible and customizable components that you can copy and paste
						into your apps. Free. Open Source. And Next.js 13 Ready.
					</p>
				</div>
				<div className="flex gap-4">
					<Link
						href={appNavs.links.docs}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants()}
					>
						shadcn/ui
					</Link>
					<Link
						href={'https://tailwindcss.com/docs/'}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants({ variant: 'secondary' })}
					>
						Tailwind CSS
					</Link>
					<Link
						target="_blank"
						rel="noreferrer"
						href={appConfig.navs.links.github}
						className={buttonVariants({ variant: 'outline' })}
					>
						<Icons.gitHub className="mr-2 h-5 w-5 fill-current" />
						<b>@shadcn</b>
					</Link>
				</div>
			</div>
		</section>
	)
}

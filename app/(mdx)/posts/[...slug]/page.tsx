import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allPosts as posts, type Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

import { Icons } from '@/components/ui/icons'
import { MDXContent } from '@/components/mdx-content'

interface PageParams {
	params: {
		slug: string[]
	}
}

async function getPostFromParams(params: PageParams['params']) {
	const slug = params?.slug?.join('/')
	const post = posts.find((post) => post.slug === slug)

	if (!post) null

	return post
}

export async function generateMetadata({
	params,
}: PageParams): Promise<Metadata> {
	const post = await getPostFromParams(params)

	if (!post) return {}

	return {
		title: post.title,
		description: post.description ? post.description : undefined,
	}
}

export async function generateStaticParams(): Promise<PageParams['params'][]> {
	return posts.map((post) => ({
		slug: post.slug.split('/'),
	}))
}

export default async function Page({ params }: PageParams) {
	const post = await getPostFromParams(params)

	if (!post) notFound()

	return (
		<>
			<div className="container grid items-center py-4 lg:py-8">
				<article className="prose prose-slate mx-auto dark:prose-invert">
					{/* ToDo: create a breadcrumb nav component */}
					<nav className="mx-auto mb-8 text-xs text-foreground/50">
						<Link href="/" className="text-foreground/75">
							{'Home'}
						</Link>
						<span>{' > '}</span>
						<Link href="/posts" className="text-foreground/75">
							{'Posts'}
						</Link>
						<span>{' > '}</span>
						<span>{post.title}</span>
					</nav>
					<h1 className="mb-8">{post.title}</h1>
					{post.description && <p className="lead">{post.description}</p>}
					<div className="flex gap-2">
						<Icons.Calendar className="h-4 w-4 text-foreground/50" />
						<time
							dateTime={post.date}
							className="mb-1 text-xs text-foreground/50"
						>
							{format(parseISO(post.date), 'LLLL d, yyyy')}
						</time>
					</div>
					<MDXContent code={post.body.code} />
				</article>
			</div>
		</>
	)
}

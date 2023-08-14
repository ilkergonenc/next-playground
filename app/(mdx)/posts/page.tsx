import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allPosts as posts, type Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

export default function Page() {
	if (!posts) notFound()

	return (
		<>
			<div className="container grid py-4 md:grid-cols-3 lg:py-8">
				<div className="grid gap-4 sm:grid-cols-2 md:col-span-2 md:grid-cols-1 lg:grid-cols-2">
					{posts.map((post: Post) => (
						<div
							key={post._id}
							className="flex flex-col space-y-4 rounded-lg border border-border/25 bg-accent/25 p-4"
						>
							<Link href={post.url}>
								<h3 className="font-semibold">{post.title}</h3>
							</Link>
							<p className="text-xs text-foreground/75">
								{post.body.raw.substring(0, 63) + '...'}
							</p>

							<time dateTime={post.date} className="text-xs text-foreground/50">
								{format(parseISO(post.date), 'LLLL d, yyyy')}
							</time>
						</div>
					))}
				</div>
				<div className="h-full pl-4">
					<div className="h-full rounded-lg border border-accent/25 bg-accent/10 p-4">
						<h3 className="mb-2">Sidebar</h3>
					</div>
				</div>
			</div>
		</>
	)
}

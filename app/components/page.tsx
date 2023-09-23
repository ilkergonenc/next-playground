import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

import DialogViaDropdown from './dialog-via-dropdown'

const theText =
	'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore incidunt, amet consequatur ut delectus porro? Facilis a fuga quas alias voluptatem commodi molestiae dolorum, saepe animi!'

export const metadata: Metadata = {
	title: 'Components',
}

export default function Page() {
	return (
		<>
			<div className="container z-20 flex gap-8 py-8">
				<DialogViaDropdown />
			</div>
			<div className="container flex gap-8 py-8">
				<Switch />
				<Switch size="sm" />
				<Switch size="xs" />
			</div>
			<div className="container flex gap-8 py-8">
				<Button>Button</Button>
				<Button variant="secondary">Button</Button>
				<Button variant="outline">Button</Button>
				<Button variant="ghost">Button</Button>
				<Button variant="link">Button</Button>
				<Button variant="destructive">Button</Button>
			</div>
			<div className="container grid grid-cols-4 gap-8 py-8">
				<div className="border border-border bg-background p-4 text-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">default</h5>
					{theText}
				</div>
				<div className="border border-border bg-primary p-4 text-primary-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">primary</h5>
					{theText}
				</div>
				<div className="border border-border bg-secondary p-4 text-secondary-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">secondary</h5>
					{theText}
				</div>
				<div className="border border-border bg-accent p-4 text-accent-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">accent</h5>
					{theText}
				</div>

				<div className="border border-border bg-muted p-4 text-muted-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">muted</h5>
					{theText}
				</div>
				<div className="border border-border bg-popover p-4 text-popover-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">popover</h5>
					{theText}
				</div>
				<div className="border border-border bg-card p-4 text-card-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">card</h5>
					{theText}
				</div>
				<div className="border border-border bg-destructive p-4 text-destructive-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">destructive</h5>
					{theText}
				</div>

				<div />
				<div className="border border-border bg-background p-4 text-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">border</h5>
					{theText}
				</div>
				<div className="border border-input bg-background p-4 text-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">input</h5>
					{theText}
				</div>
				<div className="border border-ring bg-background p-4 text-foreground">
					<h5 className="mb-2 text-xl font-semibold capitalize">ring</h5>
					{theText}
				</div>
			</div>
		</>
	)
}

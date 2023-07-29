import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: 'Components/UI/Button',
	component: Button,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	render: (args) => <Button {...args} />,
	args: {
		children: 'Primary',
		variant: 'default',
		size: 'default',
	},
}

export const Secondary: Story = {
	args: {
		children: 'Secondary',
		variant: 'secondary',
		size: 'default',
	},
}

export const Detructive: Story = {
	args: {
		children: 'Detructive',
		variant: 'destructive',
		size: 'default',
	},
}

export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
		size: 'default',
	},
}

export const Ghost: Story = {
	args: {
		children: 'Ghost',
		variant: 'ghost',
		size: 'default',
	},
}

export const Link: Story = {
	args: {
		children: 'Link',
		variant: 'link',
		size: 'default',
	},
}

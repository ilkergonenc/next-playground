'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Textarea from 'react-textarea-autosize'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Icons } from '@/components/ui/icons'

import ChatActions from './actions'

const formSchema = z.object({
	message: z.string(),
})

export default function ChatForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	return (
		<div className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="sr-only">User message</FormLabel>
								<FormControl>
									<div className="shadow-xs dark:shadow-xs relative flex w-full grow flex-col rounded-xl border border-black/10 bg-white py-[10px] dark:border-gray-900/50 dark:bg-slate-700 dark:text-white md:py-4 md:pl-4">
										<Textarea
											placeholder="Send a message"
											rows={1}
											minRows={1}
											maxRows={7}
											style={{ boxSizing: 'border-box' }}
											className="resize-none bg-transparent pr-12 outline-none"
											{...field}
										/>
										<Button
											type="submit"
											variant="ghost"
											size="icon"
											className="absolute bottom-2 right-4"
										>
											<Icons.SendGPT />
											<span className="sr-only">Send</span>
										</Button>
									</div>
								</FormControl>
								<FormDescription className="pb-6 text-center text-xs">
									Free Research Preview. ChatGPT may produce inaccurate
									information about people, places, or facts.{' '}
									<a
										href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
										target="_blank"
										rel="noreferrer"
										className="underline"
									>
										ChatGPT August 3 Version
									</a>
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</div>
	)
}

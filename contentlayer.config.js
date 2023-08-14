import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `posts/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
		},
		date: {
			type: 'date',
			required: true,
		},
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (doc) => `/${doc._raw.flattenedPath}`,
		},
		slug: {
			type: 'string',
			resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
		},
	},
}))

export default makeSource({
	contentDirPath: './content',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
	},
})

const path = require('path')

const prettierCommand = 'prettier --write --cache'
const typeCheckCommand = 'tsc --noEmit'

// https://nextjs.org/docs/app/building-your-application/configuring/eslint#lint-staged
const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`

module.exports = {
	'*.{ts,tsx}': [prettierCommand, buildEslintCommand, () => typeCheckCommand],
	'*.{js,jsx}': [prettierCommand, buildEslintCommand],
	'*.json': [prettierCommand],
}

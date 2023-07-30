/** @type {import('prettier').Config} */
module.exports = {
	trailingComma: 'es5',
	endOfLine: 'lf',
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	importOrder: [
		'^(react/(.*)$)|^(react$)',
		'^(next/(.*)$)|^(next$)',
		'<THIRD_PARTY_MODULES>',
		'',
		'^types$',
		'^@/types/(.*)$',
		'^@/config',
		'^@/config/(.*)$',
		'^@/lib/(.*)$',
		'^@/hooks/(.*)$',
		'^@/components/utils',
		'^@/components/ds/(.*)$',
		'^@/components/ui/(.*)$',
		'^@/components/root/(.*)$',
		'^@/components/uix/(.*)$',
		'^@/components/ux/(.*)$',
		'^@/components/(.*)$',
		'^@/styles/(.*)$',
		'^@/app/(.*)$',
		'',
		'^[./]',
	],
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
}

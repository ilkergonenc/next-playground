import { metadata as meta } from './meta'
import { navigations as navs } from './navs'
import { themeConfig as theme } from './theme'

export const appMeta = meta
export const appNavs = navs
export const appTheme = theme

export default {
	meta,
	navs,
	theme,
} as const

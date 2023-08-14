import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
	Image: (props: NextImageProps) => {
		return <NextImage {...props} />
	},
}

interface MdxProps {
	code: string
}

export function MDXContent({ code }: MdxProps) {
	const MdxComponent = useMDXComponent(code)

	return <MdxComponent components={components} />
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section className="container flex flex-col divide-y-2">{children}</section>
	)
}

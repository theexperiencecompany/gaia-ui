import { DocsSidebar } from "@/components/core/docs-sidebar";

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="border-b">
			<div className="items-start px-8 md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
				<DocsSidebar />
				{children}
			</div>
		</div>
	);
}

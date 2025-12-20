"use client";

import { useState } from "react";
import { ComponentPreviewCard } from "./components-preview-card";
import { cn } from "@/lib/utils";

interface ComponentItem {
	title: string;
	href: string;
}

interface ComponentsGridProps {
	components: ComponentItem[];
	initialCount?: number;
	incrementCount?: number;
	className?: string;
}

export function ComponentsGrid({
	components,
	initialCount = 6,
	incrementCount = 6,
	className,
}: ComponentsGridProps) {
	const [visibleCount, setVisibleCount] = useState(initialCount);

	const visibleComponents = components.slice(0, visibleCount);
	const hasMore = visibleCount < components.length;

	const handleShowMore = () => {
		setVisibleCount((prev) =>
			Math.min(prev + incrementCount, components.length),
		);
	};

	return (
		<div className={cn("relative", className)}>
			{/* Grid */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{visibleComponents.map((component) => {
					const componentName = component.href.split("/").pop() || "";
					return (
						<ComponentPreviewCard
							key={component.href}
							componentName={componentName}
							title={component.title}
							href={component.href}
						/>
					);
				})}
			</div>

			{hasMore && (
				<div className="relative mt-4">
					<div
						className="pointer-events-none absolute -top-20 left-0 right-0 h-20"
						style={{
							background:
								"linear-gradient(to top, var(--background), transparent)",
						}}
					/>

					<div className="flex justify-center pt-2">
						<button
							type="button"
							onClick={handleShowMore}
							className={cn(
								"inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2",
								"bg-muted/80 text-sm font-medium text-muted-foreground",
								"transition-all duration-300",
								"hover:bg-muted hover:text-foreground",
								"border border-border/50",
							)}
						>
							See more
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

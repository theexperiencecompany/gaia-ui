"use client";

import { ComponentPreviewTooltip } from "@/registry/new-york/ui/component-preview-tooltip";

export default function ComponentPreviewTooltipDefault() {
	return (
		<div className="flex gap-4 p-4">
			<ComponentPreviewTooltip componentName="todo-item">
				<button
					type="button"
					className="px-4 py-2 text-sm font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
				>
					Hover me: Todo Item
				</button>
			</ComponentPreviewTooltip>

			<ComponentPreviewTooltip componentName="notification-card">
				<button
					type="button"
					className="px-4 py-2 text-sm font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
				>
					Hover me: Notification Card
				</button>
			</ComponentPreviewTooltip>
		</div>
	);
}

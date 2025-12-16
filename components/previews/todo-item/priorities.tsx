"use client";

import { TodoItem } from "@/registry/new-york/ui/todo-item";

export default function TodoItemPriorities() {
	const todos = [
		{
			id: "1",
			title: "Fix critical bug in production",
			priority: "high" as const,
			completed: false,
		},
		{
			id: "2",
			title: "Update documentation",
			priority: "medium" as const,
			completed: false,
		},
		{
			id: "3",
			title: "Refactor legacy code",
			priority: "low" as const,
			completed: false,
		},
		{
			id: "4",
			title: "Review team submissions",
			priority: "none" as const,
			completed: false,
		},
	];

	return (
		<div className="flex flex-col gap-2 w-full max-w-2xl mx-auto">
			{todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</div>
	);
}

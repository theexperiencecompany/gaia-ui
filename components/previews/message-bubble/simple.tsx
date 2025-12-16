"use client";

import { MessageBubble } from "@/registry/new-york/ui/message-bubble";

export default function MessageBubbleSimple() {
	return (
		<div className="flex w-full flex-col gap-1 p-6">
			<MessageBubble message="Hey there! How's it going?" variant="received" />
			<MessageBubble
				message="This is a single message bubble on the left side"
				variant="received"
			/>

			<MessageBubble
				message="I'm doing great, thanks for asking!"
				variant="sent"
			/>
			<MessageBubble
				message="This is a single message bubble on the right side"
				variant="sent"
			/>
		</div>
	);
}

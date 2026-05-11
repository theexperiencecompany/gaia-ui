"use client";

import { ChatDemo } from "@/registry/new-york/ui/chat-demo";
import { IPhoneMockup } from "@/registry/new-york/ui/iphone-mockup";

export default function IPhoneMockupWithChat() {
	return (
		<div className="flex w-full items-center justify-center p-8">
			<IPhoneMockup>
				<ChatDemo
					platform="imessage"
					title="GAIA"
					messages={[
						{
							from: "them",
							text: "Morning ☀️ Quick standup at 10?",
							time: "9:41 AM",
						},
						{ from: "me", text: "Sounds good — I'll bring coffee.", status: "read" },
						{
							from: "them",
							text: "🙌",
						},
					]}
				/>
			</IPhoneMockup>
		</div>
	);
}

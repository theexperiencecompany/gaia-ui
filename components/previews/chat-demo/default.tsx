"use client";

import { ChatDemo } from "@/registry/new-york/ui/chat-demo";
import { IPhoneMockup } from "@/registry/new-york/ui/iphone-mockup";

export default function ChatDemoDefault() {
	return (
		<div className="flex w-full items-center justify-center p-8">
			<IPhoneMockup>
				<ChatDemo
					platform="imessage"
					title="GAIA"
					messages={[
						{
							from: "them",
							text: "Yo, are you free tonight?",
							time: "Today 9:41 AM",
						},
						{ from: "me", text: "Yeah, what's up?", status: "read" },
						{
							from: "them",
							text: "New ramen place opened on 5th. Wanna try?",
						},
						{ from: "me", text: "Say less. 7pm?", status: "delivered" },
						{ from: "them", text: "Perfect. See you there 🍜" },
					]}
				/>
			</IPhoneMockup>
		</div>
	);
}

"use client";

import { ChatDemo } from "@/registry/new-york/ui/chat-demo";
import { IPhoneMockup } from "@/registry/new-york/ui/iphone-mockup";

export default function ChatDemoImessage() {
	return (
		<div className="flex w-full items-center justify-center p-8">
			<IPhoneMockup>
				<ChatDemo
					platform="imessage"
					title="GAIA"
					messages={[
						{
							from: "them",
							text: "Did you remember to water the plants?",
							time: "Yesterday 6:24 PM",
						},
						{ from: "me", text: "Yes, all done!", status: "read" },
						{ from: "me", text: "Also picked up the dry cleaning 😎" },
						{ from: "them", text: "You're the best ❤️" },
						{ from: "them", text: "Dinner Sunday?" },
						{ from: "me", text: "Wouldn't miss it.", time: "Today 9:41 AM" },
					]}
				/>
			</IPhoneMockup>
		</div>
	);
}

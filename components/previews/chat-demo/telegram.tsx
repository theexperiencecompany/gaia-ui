"use client";

import { ChatDemo } from "@/registry/new-york/ui/chat-demo";
import { IPhoneMockup } from "@/registry/new-york/ui/iphone-mockup";

export default function ChatDemoTelegram() {
	return (
		<div className="flex w-full items-center justify-center p-8">
			<IPhoneMockup screenBackground="#F6F6F6">
				<ChatDemo
					platform="telegram"
					title="GAIA"
					subtitle="last seen 2 minutes ago"
					messages={[
						{ from: "them", text: "Just landed ✈️", time: "14:02" },
						{
							from: "me",
							text: "Welcome back! How was the flight?",
							time: "14:03",
							status: "read",
						},
						{ from: "them", text: "Smooth. Customs took forever though." },
						{
							from: "me",
							text: "Tea is on. See you in 30.",
							time: "14:04",
							status: "delivered",
						},
						{ from: "them", typing: true },
					]}
				/>
			</IPhoneMockup>
		</div>
	);
}

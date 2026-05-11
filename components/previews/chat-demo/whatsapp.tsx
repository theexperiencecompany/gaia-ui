"use client";

import { ChatDemo } from "@/registry/new-york/ui/chat-demo";
import { IPhoneMockup } from "@/registry/new-york/ui/iphone-mockup";

export default function ChatDemoWhatsApp() {
	return (
		<div className="flex w-full items-center justify-center p-8">
			<IPhoneMockup screenBackground="#F6F6F6">
				<ChatDemo
					platform="whatsapp"
					title="GAIA"
					messages={[
						{
							from: "them",
							text: "Hey! Are we still on for tonight?",
							time: "20:14",
						},
						{
							from: "me",
							text: "Yep, see you at 8 🍕",
							time: "20:15",
							status: "read",
						},
						{
							from: "them",
							text: "Perfect. I'll book the table.",
							time: "20:15",
						},
						{
							from: "me",
							text: "You're the GOAT 🐐",
							time: "20:16",
							status: "delivered",
						},
						{ from: "them", typing: true },
					]}
				/>
			</IPhoneMockup>
		</div>
	);
}

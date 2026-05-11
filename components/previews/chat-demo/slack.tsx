"use client";

import { ChatDemo } from "@/registry/new-york/ui/chat-demo";
import { IPhoneMockup } from "@/registry/new-york/ui/iphone-mockup";

export default function ChatDemoSlack() {
	return (
		<div className="flex w-full items-center justify-center p-8">
			<IPhoneMockup>
				<ChatDemo
					platform="slack"
					title="design"
					subtitle="42 members"
					messages={[
						{
							author: "GAIA",
							avatar: "/gaia-glow.png",
							text: "Pushed the new chat-demo component 🚀 Reviews welcome!",
							time: "10:24 AM",
							reactions: [
								{ emoji: "🎉", count: 4 },
								{ emoji: "🔥", count: 2 },
							],
						},
						{
							author: "Aryan",
							avatar: "https://github.com/aryanranderiya.png",
							text: "Looking sharp. One nit: can we bump the line-height on @GAIA's bubble? Also added a `pixel-perfect` label.",
							time: "10:25 AM",
						},
						{
							author: "Aryan",
							avatar: "https://github.com/aryanranderiya.png",
							text: "PR is in #frontend if anyone wants to peek.",
							time: "10:25 AM",
						},
						{
							author: "GAIA",
							avatar: "/gaia-glow.png",
							text: "On it. Will ping when ready.",
							time: "10:26 AM",
						},
					]}
				/>
			</IPhoneMockup>
		</div>
	);
}

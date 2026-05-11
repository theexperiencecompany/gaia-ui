"use client";

import { ChatDemo } from "@/registry/new-york/ui/chat-demo";
import { IPhoneMockup } from "@/registry/new-york/ui/iphone-mockup";

export default function ChatDemoDiscord() {
	return (
		<div className="flex w-full items-center justify-center p-8">
			<IPhoneMockup screenBackground="#1E1F22" statusBarTone="light">
				<ChatDemo
					platform="discord"
					title="general"
					messages={[
						{
							author: "GAIA",
							avatar: "/gaia-glow.png",
							authorColor: "#9CC3FF",
							text: "anyone up for ranked tonight?",
							time: "9:14 PM",
						},
						{
							author: "Aryan",
							avatar: "https://github.com/aryanranderiya.png",
							authorColor: "#F47FFF",
							text: "@GAIA I'm down. Lobby in 10?",
							time: "9:14 PM",
							reactions: [{ emoji: "👍", count: 3 }],
						},
						{
							author: "Aryan",
							avatar: "https://github.com/aryanranderiya.png",
							authorColor: "#F47FFF",
							text: "lemme just finish this `git rebase` real quick",
							time: "9:15 PM",
						},
						{
							author: "GAIA",
							avatar: "/gaia-glow.png",
							authorColor: "#9CC3FF",
							text: "say no more",
							time: "9:15 PM",
						},
					]}
				/>
			</IPhoneMockup>
		</div>
	);
}

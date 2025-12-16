"use client";

import { AuthorTooltip } from "@/registry/new-york/ui/author-tooltip";

export default function AuthorTooltipDefault() {
	return (
		<AuthorTooltip
			author={{
				name: "Aryan",
				avatar: "https://github.com/aryanranderiya.png",
				role: "Founder & CEO",
				github: "https://github.com/aryanranderiya",
				twitter: "https://twitter.com/aryanranderiya",
				linkedin: "https://linkedin.com/in/aryanranderiya",
			}}
			avatarSize="lg"
		/>
	);
}

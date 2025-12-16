"use client";

import { GitHubStarsButton } from "@/registry/new-york/ui/github-stars-button";

export default function GitHubStarsButtonSizes() {
	return (
		<div className="flex items-center gap-4">
			<GitHubStarsButton repo="heygaia/gaia" size="sm" />
			<GitHubStarsButton repo="heygaia/gaia" size="default" />
			<GitHubStarsButton repo="heygaia/gaia" size="lg" />
		</div>
	);
}

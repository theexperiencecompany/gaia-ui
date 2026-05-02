"use client";

import { useGitHubStars } from "@/hooks/use-github-stars";
import { GitHub } from "@/components/icons/github";

interface SocialProofRowProps {
	componentCount: number;
}

export function SocialProofRow({ componentCount }: SocialProofRowProps) {
	const { data: stars, isLoading } = useGitHubStars();

	return (
		<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
			<a
				href="https://github.com/theexperiencecompany/gaia-ui"
				target="_blank"
				rel="noreferrer"
				className="flex items-center gap-1.5 hover:text-foreground transition-colors"
			>
				<GitHub className="h-3.5 w-3.5" />
				<span className="tabular-nums font-medium">
					{isLoading ? "—" : (stars?.toLocaleString() ?? "—")}
				</span>
				<span>stars</span>
			</a>
			<span className="opacity-40" aria-hidden>
				·
			</span>
			<span>
				<span className="tabular-nums font-medium text-foreground">
					{componentCount}
				</span>{" "}
				components
			</span>
			<span className="opacity-40" aria-hidden>
				·
			</span>
			<span>MIT licensed</span>
			<span className="opacity-40" aria-hidden>
				·
			</span>
			<span>Built on shadcn/ui</span>
		</div>
	);
}

"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useContributors } from "@/hooks/use-contributors";

const MAX_VISIBLE = 12;

export function ContributorsStrip() {
	const { data: contributors, isLoading } = useContributors();

	if (isLoading) {
		return (
			<section className="mx-auto max-w-3xl flex flex-col items-center gap-4 py-10">
				<div className="h-4 w-48 bg-muted/40 rounded animate-pulse" />
				<div className="flex -space-x-2">
					{Array.from({ length: 6 }).map((_, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholder
							key={i}
							className="h-9 w-9 rounded-full bg-muted/40 border-2 border-background animate-pulse"
						/>
					))}
				</div>
			</section>
		);
	}

	if (!contributors?.length) return null;

	const displayed = contributors.slice(0, MAX_VISIBLE);
	const extra = Math.max(0, contributors.length - displayed.length);

	return (
		<section className="mx-auto max-w-3xl flex flex-col items-center gap-4 py-10">
			<p className="text-sm text-muted-foreground text-center">
				Built by {contributors.length}+ contributors. Your PR could be next.
			</p>
			<TooltipProvider delayDuration={150}>
				<div className="flex -space-x-2">
					{displayed.map((c) => (
						<Tooltip key={c.login}>
							<TooltipTrigger asChild>
								<a
									href={c.html_url}
									target="_blank"
									rel="noreferrer"
									className="relative transition-transform hover:scale-110 hover:z-10"
								>
									<Avatar className="h-9 w-9 border-2 border-background">
										<AvatarImage src={c.avatar_url} alt={c.login} />
										<AvatarFallback>
											{c.login.slice(0, 2).toUpperCase()}
										</AvatarFallback>
									</Avatar>
								</a>
							</TooltipTrigger>
							<TooltipContent>{c.name || c.login}</TooltipContent>
						</Tooltip>
					))}
					{extra > 0 && (
						<div className="h-9 w-9 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
							+{extra}
						</div>
					)}
				</div>
			</TooltipProvider>
			<Link
				href="https://github.com/theexperiencecompany/gaia-ui/blob/main/CONTRIBUTING.md"
				target="_blank"
				rel="noreferrer"
				className="text-xs text-muted-foreground hover:text-foreground transition-colors"
			>
				How to contribute →
			</Link>
		</section>
	);
}

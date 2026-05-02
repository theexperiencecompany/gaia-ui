"use client";

import Link from "next/link";
import { ArrowRight02Icon, HugeiconsIcon } from "@/components/icons";
import ComposerDefault from "@/components/previews/composer/default";
import MessageBubbleSimple from "@/components/previews/message-bubble/simple";
import PricingCardDefault from "@/components/previews/pricing-card/default";

interface FlagshipTileProps {
	name: string;
	href: string;
	children: React.ReactNode;
}

function FlagshipTile({ name, href, children }: FlagshipTileProps) {
	return (
		<Link
			href={href}
			className="group relative flex flex-col rounded-2xl border border-border bg-muted/30 overflow-hidden transition-colors hover:border-foreground/20"
		>
			<div className="flex-1 min-h-[260px] flex items-center justify-center p-6 overflow-hidden pointer-events-none">
				<div className="w-full">{children}</div>
			</div>
			<div className="flex items-center justify-between border-t border-border bg-background/40 px-4 py-2.5">
				<span className="text-sm font-medium">{name}</span>
				<span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
					View
					<HugeiconsIcon icon={ArrowRight02Icon} size={12} />
				</span>
			</div>
		</Link>
	);
}

export function HeroPreviewTrio() {
	return (
		<section className="w-full max-w-6xl mx-auto">
			<div className="mb-4 px-1 flex items-end justify-between">
				<div>
					<h2 className="text-xl md:text-2xl font-semibold tracking-tight">
						Flagship components
					</h2>
					<p className="text-sm text-muted-foreground mt-0.5">
						Live previews — click to dive in.
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<FlagshipTile name="Composer" href="/docs/components/composer">
					<ComposerDefault />
				</FlagshipTile>
				<FlagshipTile
					name="Message Bubble"
					href="/docs/components/message-bubble"
				>
					<MessageBubbleSimple />
				</FlagshipTile>
				<FlagshipTile name="Pricing Card" href="/docs/components/pricing-card">
					<div className="scale-[0.85] origin-center">
						<PricingCardDefault />
					</div>
				</FlagshipTile>
			</div>
		</section>
	);
}

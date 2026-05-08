"use client";

import {
	ArrowDown01Icon,
	ArrowRight01Icon,
	ArrowUp01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export type StatRowProps = {
	title: string;
	value: string | number;
	unit?: string;
	trend?: "up" | "down" | "neutral";
	trendLabel?: string;
};

const TREND_STYLES: Record<string, { color: string }> = {
	up: { color: "text-emerald-500 dark:text-emerald-400" },
	down: { color: "text-red-500 dark:text-red-400" },
	neutral: { color: "text-muted-foreground" },
};

function TrendIcon({
	trend,
	className,
}: {
	trend: string;
	className?: string;
}) {
	if (trend === "up")
		return <HugeiconsIcon icon={ArrowUp01Icon} className={className} />;
	if (trend === "down")
		return <HugeiconsIcon icon={ArrowDown01Icon} className={className} />;
	return <HugeiconsIcon icon={ArrowRight01Icon} className={className} />;
}

export function StatRow(props: StatRowProps) {
	const trendStyle = props.trend ? TREND_STYLES[props.trend] : null;
	return (
		<div className="rounded-2xl bg-card text-card-foreground border p-5 w-fit min-w-50 h-full flex flex-col justify-between gap-2">
			<p className="text-xs text-muted-foreground truncate">{props.title}</p>
			<div className="flex items-end gap-1.5">
				<span className="text-4xl font-bold text-foreground leading-none">
					{props.value}
				</span>
				{props.unit && (
					<span className="text-sm text-muted-foreground mb-0.5">
						{props.unit}
					</span>
				)}
			</div>
			<div className="h-4 flex items-center">
				{trendStyle && props.trendLabel && props.trend ? (
					<div className={`flex items-center gap-1 ${trendStyle.color}`}>
						<TrendIcon
							trend={props.trend}
							className={`w-3.5 h-3.5 ${trendStyle.color}`}
						/>
						<span className="text-xs font-medium">{props.trendLabel}</span>
					</div>
				) : null}
			</div>
		</div>
	);
}

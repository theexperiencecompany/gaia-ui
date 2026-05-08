"use client";

import type * as React from "react";
import {
	ScatterChart as RechartsScatterChart,
	Scatter,
	XAxis,
	YAxis,
} from "recharts";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const CHART_COLORS = ["#00bbff", "#34d399", "#60a5fa", "#f472b6", "#fb923c"];

function ChartCard({
	title,
	description,
	footer,
	children,
	dataPoints = 0,
}: {
	title?: string;
	description?: string;
	footer?: string;
	children: React.ReactNode;
	dataPoints?: number;
}) {
	const width =
		dataPoints > 0 ? Math.min(768, Math.max(300, dataPoints * 80)) : undefined;
	return (
		<Card
			className="max-w-3xl"
			style={width ? { width } : { width: "100%" }}
		>
			{(title || description) && (
				<CardHeader className="pb-0">
					{title && (
						<p className="text-sm font-semibold text-card-foreground">
							{title}
						</p>
					)}
					{description && (
						<p className="text-xs text-muted-foreground">{description}</p>
					)}
				</CardHeader>
			)}
			<CardContent>{children}</CardContent>
			{footer && (
				<CardFooter>
					<p className="text-xs text-muted-foreground">{footer}</p>
				</CardFooter>
			)}
		</Card>
	);
}

export type ScatterChartProps = {
	data: Array<Record<string, string | number>>;
	xKey: string;
	yKey: string;
	title?: string;
	description?: string;
	footer?: string;
	labelKey?: string;
};

export function ScatterChart(props: ScatterChartProps) {
	const chartConfig: ChartConfig = {
		scatter: { label: "Data", color: CHART_COLORS[0] },
	};
	return (
		<ChartCard
			title={props.title}
			description={props.description}
			footer={props.footer}
			dataPoints={props.data.length}
		>
			<ChartContainer config={chartConfig} className="h-50 w-full">
				<RechartsScatterChart>
					<XAxis
						dataKey={props.xKey}
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#71717a", fontSize: 11 }}
					/>
					<YAxis
						dataKey={props.yKey}
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#71717a", fontSize: 11 }}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					<Scatter data={props.data} fill="var(--color-scatter)" />
				</RechartsScatterChart>
			</ChartContainer>
		</ChartCard>
	);
}

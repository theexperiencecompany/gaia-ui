"use client";

import type * as React from "react";
import {
	LabelList,
	Line,
	LineChart as RechartsLineChart,
	XAxis,
	YAxis,
} from "recharts";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const CHART_COLORS = ["#00bbff", "#34d399", "#60a5fa", "#f472b6", "#fb923c"];

function toKeys(v: string | string[]): string[] {
	return Array.isArray(v) ? v : [v];
}

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

export type LineChartProps = {
	data: Array<Record<string, string | number>>;
	xKey: string;
	yKeys: string | string[];
	title?: string;
	description?: string;
	footer?: string;
	colors?: string[];
	showDots?: boolean;
	showLabels?: boolean;
};

export function LineChart(props: LineChartProps) {
	const keys = toKeys(props.yKeys);
	const colors = props.colors ?? CHART_COLORS;
	const chartConfig: ChartConfig = Object.fromEntries(
		keys.map((key, i) => [
			key,
			{ label: key, color: colors[i % colors.length] },
		]),
	);
	const showLegend = keys.length > 1;
	return (
		<ChartCard
			title={props.title}
			description={props.description}
			footer={props.footer}
			dataPoints={props.data.length}
		>
			<ChartContainer config={chartConfig} className="h-50 w-full">
				<RechartsLineChart
					data={props.data}
					{...(props.showLabels === true
						? { margin: { top: 24, left: 12, right: 12 } }
						: {})}
				>
					<XAxis
						dataKey={props.xKey}
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#71717a", fontSize: 11 }}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#71717a", fontSize: 11 }}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					{showLegend && <ChartLegend content={<ChartLegendContent />} />}
					{keys.map((key) => (
						<Line
							key={key}
							type="monotone"
							dataKey={key}
							stroke={`var(--color-${key})`}
							strokeWidth={2}
							dot={
								props.showDots !== false
									? { fill: `var(--color-${key})` }
									: false
							}
						>
							{props.showLabels === true && (
								<LabelList
									position="top"
									offset={12}
									fontSize={12}
									fill="#a1a1aa"
									dataKey={props.xKey}
								/>
							)}
						</Line>
					))}
				</RechartsLineChart>
			</ChartContainer>
		</ChartCard>
	);
}

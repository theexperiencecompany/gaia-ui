"use client";

import type * as React from "react";
import { Bar, BarChart as RechartsBarChart, XAxis, YAxis } from "recharts";
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

export type BarChartProps = {
	data: Array<Record<string, string | number>>;
	xKey: string;
	yKeys: string | string[];
	title?: string;
	description?: string;
	footer?: string;
	colors?: string[];
	variant?: "default" | "stacked" | "horizontal" | "multiple";
};

export function BarChart(props: BarChartProps) {
	const keys = toKeys(props.yKeys);
	const colors = props.colors ?? CHART_COLORS;
	const chartConfig: ChartConfig = Object.fromEntries(
		keys.map((key, i) => [
			key,
			{ label: key, color: colors[i % colors.length] },
		]),
	);

	const isStacked = props.variant === "stacked";
	const isHorizontal = props.variant === "horizontal";
	const alwaysLegend = props.variant === "multiple";
	const showLegend = alwaysLegend || keys.length > 1;

	return (
		<ChartCard
			title={props.title}
			description={props.description}
			footer={props.footer}
			dataPoints={props.data.length}
		>
			<ChartContainer config={chartConfig} className="h-50 w-full">
				<RechartsBarChart
					data={props.data}
					layout={isHorizontal ? "vertical" : "horizontal"}
				>
					{isHorizontal ? (
						<>
							<YAxis
								dataKey={props.xKey}
								type="category"
								axisLine={false}
								tickLine={false}
								tick={{ fill: "#71717a", fontSize: 11 }}
								width={80}
							/>
							<XAxis
								type="number"
								axisLine={false}
								tickLine={false}
								tick={{ fill: "#71717a", fontSize: 11 }}
							/>
						</>
					) : (
						<>
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
						</>
					)}
					<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
					{showLegend && <ChartLegend content={<ChartLegendContent />} />}
					{keys.map((key) => (
						<Bar
							key={key}
							dataKey={key}
							fill={`var(--color-${key})`}
							radius={8}
							maxBarSize={40}
							{...(isStacked ? { stackId: "stack" } : {})}
						/>
					))}
				</RechartsBarChart>
			</ChartContainer>
		</ChartCard>
	);
}

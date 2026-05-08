"use client";

import type * as React from "react";
import {
	Area,
	AreaChart as RechartsAreaChart,
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

export type AreaChartProps = {
	data: Array<Record<string, string | number>>;
	xKey: string;
	yKeys: string | string[];
	title?: string;
	description?: string;
	footer?: string;
	colors?: string[];
};

export function AreaChart(props: AreaChartProps) {
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
				<RechartsAreaChart data={props.data}>
					<defs>
						{keys.map((key) => (
							<linearGradient
								key={key}
								id={`gradient-${key}`}
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="0%"
									stopColor={`var(--color-${key})`}
									stopOpacity={0.4}
								/>
								<stop
									offset="95%"
									stopColor={`var(--color-${key})`}
									stopOpacity={0.05}
								/>
							</linearGradient>
						))}
					</defs>
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
						<Area
							key={key}
							type="natural"
							dataKey={key}
							stroke={`var(--color-${key})`}
							strokeWidth={2}
							fill={`url(#gradient-${key})`}
						/>
					))}
				</RechartsAreaChart>
			</ChartContainer>
		</ChartCard>
	);
}

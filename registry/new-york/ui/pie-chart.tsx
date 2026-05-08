"use client";

import * as React from "react";
import {
	Cell,
	Label,
	Pie,
	PieChart as RechartsPieChart,
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

const PIE_COLORS = ["#00bbff", "#34d399", "#60a5fa", "#a78bfa", "#f472b6"];

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

export type PieChartProps = {
	data: Array<Record<string, string | number>>;
	nameKey: string;
	valueKey: string;
	title?: string;
	description?: string;
	footer?: string;
	mode?: "donut" | "legend" | "label";
};

export function PieChart(props: PieChartProps) {
	const mode = props.mode ?? "donut";
	const chartConfig: ChartConfig = Object.fromEntries(
		props.data.map((entry, i) => {
			const name = String(entry[props.nameKey] ?? i);
			return [name, { label: name, color: PIE_COLORS[i % PIE_COLORS.length] }];
		}),
	);
	const total = React.useMemo(
		() =>
			props.data.reduce((sum, entry) => {
				const val = entry[props.valueKey];
				return sum + (typeof val === "number" ? val : 0);
			}, 0),
		[props.data, props.valueKey],
	);
	return (
		<ChartCard
			title={props.title}
			description={props.description}
			footer={props.footer}
			dataPoints={props.data.length}
		>
			<ChartContainer
				config={chartConfig}
				className={`h-50 w-full ${mode === "label" ? "[&_.recharts-pie-label-text]:fill-foreground" : ""}`}
			>
				<RechartsPieChart>
					{mode === "donut" ? (
						<Pie
							data={props.data}
							dataKey={props.valueKey}
							nameKey={props.nameKey}
							cx="50%"
							cy="50%"
							outerRadius={80}
							innerRadius={60}
							strokeWidth={0}
						>
							{props.data.map((entry, i) => (
								<Cell
									key={String(entry[props.nameKey])}
									fill={PIE_COLORS[i % PIE_COLORS.length]}
								/>
							))}
							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-2xl font-bold"
												>
													{total}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 20}
													fontSize={12}
													fill="#71717a"
												>
													{props.valueKey}
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
					) : mode === "label" ? (
						<Pie
							data={props.data}
							dataKey={props.valueKey}
							nameKey={props.nameKey}
							cx="50%"
							cy="50%"
							outerRadius={70}
							strokeWidth={0}
							label
						>
							{props.data.map((entry, i) => (
								<Cell
									key={String(entry[props.nameKey])}
									fill={PIE_COLORS[i % PIE_COLORS.length]}
								/>
							))}
						</Pie>
					) : (
						<Pie
							data={props.data}
							dataKey={props.valueKey}
							nameKey={props.nameKey}
							cx="50%"
							cy="50%"
							outerRadius={70}
							strokeWidth={0}
						>
							{props.data.map((entry, i) => (
								<Cell
									key={String(entry[props.nameKey])}
									fill={PIE_COLORS[i % PIE_COLORS.length]}
								/>
							))}
						</Pie>
					)}
					<ChartTooltip
						content={<ChartTooltipContent nameKey={props.nameKey} />}
					/>
					{mode === "legend" && (
						<ChartLegend
							content={<ChartLegendContent nameKey={props.nameKey} />}
							className="-translate-y-2 flex-wrap gap-2"
						/>
					)}
				</RechartsPieChart>
			</ChartContainer>
		</ChartCard>
	);
}

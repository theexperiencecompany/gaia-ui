"use client";

import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from "recharts";
import {
	type ChartConfig,
	ChartContainer,
} from "@/components/ui/chart";

const CHART_COLORS = ["#00bbff", "#34d399", "#60a5fa", "#f472b6", "#fb923c"];

export type GaugeChartProps = {
	value: number;
	title?: string;
	min?: number;
	max?: number;
	unit?: string;
	thresholds?: { warning: number; danger: number };
	variant?: "gauge" | "text" | "stacked";
	secondValue?: number;
	secondLabel?: string;
};

export function GaugeChart(props: GaugeChartProps) {
	const min = props.min ?? 0;
	const max = props.max ?? 100;
	const pct = Math.min(
		100,
		Math.max(0, ((props.value - min) / (max - min)) * 100),
	);
	const warning = props.thresholds?.warning ?? 60;
	const danger = props.thresholds?.danger ?? 80;
	const color =
		pct >= danger ? "#f87171" : pct >= warning ? "#fbbf24" : "#34d399";

	const variant = props.variant ?? "gauge";

	if (variant === "text") {
		const textChartConfig: ChartConfig = {
			value: { label: props.title ?? "Value", color },
		};
		const textData = [{ name: "value", value: pct, fill: color }];
		return (
			<div className="rounded-2xl bg-card text-card-foreground border p-4 text-center">
				<ChartContainer config={textChartConfig} className="mx-auto">
					<RadialBarChart
						data={textData}
						startAngle={0}
						endAngle={250}
						outerRadius={90}
						innerRadius={70}
						className="mx-auto h-[160px] w-[160px]"
					>
						<PolarGrid
							gridType="circle"
							radialLines={false}
							stroke="none"
							className="first:fill-muted last:fill-background"
							polarRadius={[90, 70]}
						/>
						<RadialBar dataKey="value" background cornerRadius={10} />
						<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
													fontSize={28}
													fontWeight="bold"
													fill={color}
												>
													{props.value}
													{props.unit ?? ""}
												</tspan>
												{props.title && (
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy ?? 0) + 22}
														fontSize={12}
														fill="#71717a"
													>
														{props.title}
													</tspan>
												)}
											</text>
										);
									}
								}}
							/>
						</PolarRadiusAxis>
					</RadialBarChart>
				</ChartContainer>
			</div>
		);
	}

	if (variant === "stacked") {
		const total = props.value + (props.secondValue ?? 0);
		const stackData = [
			{ primary: props.value, secondary: props.secondValue ?? 0 },
		];
		const stackChartConfig: ChartConfig = {
			primary: { label: props.title ?? "Primary", color },
			secondary: {
				label: props.secondLabel ?? "Secondary",
				color: CHART_COLORS[1],
			},
		};
		return (
			<div className="rounded-2xl bg-card text-card-foreground border p-4 text-center">
				<ChartContainer config={stackChartConfig} className="mx-auto">
					<RadialBarChart
						data={stackData}
						endAngle={180}
						innerRadius={80}
						outerRadius={110}
						className="mx-auto h-[140px] w-[200px]"
					>
						<RadialBar
							dataKey="secondary"
							fill={CHART_COLORS[1]}
							stackId="a"
							cornerRadius={5}
							className="stroke-transparent stroke-2"
						/>
						<RadialBar
							dataKey="primary"
							fill={color}
							stackId="a"
							cornerRadius={5}
							className="stroke-transparent stroke-2"
						/>
						<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy ?? 0) - 12}
													fontSize={22}
													fontWeight="bold"
													className="fill-foreground"
												>
													{total.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy ?? 0) + 8}
													fontSize={12}
													fill="#71717a"
												>
													{props.title ?? "Total"}
												</tspan>
											</text>
										);
									}
								}}
							/>
						</PolarRadiusAxis>
					</RadialBarChart>
				</ChartContainer>
			</div>
		);
	}

	// Default: "gauge" variant
	const maxArc = 250;
	const valueAngle = Math.max(1, (pct / 100) * maxArc);
	const outerR = 65;
	const innerR = 55;

	const gaugeConfig: ChartConfig = {
		value: { label: props.title ?? "Value", color },
	};
	const gaugeData = [{ name: "value", value: 1, fill: color }];

	return (
		<div
			className="rounded-2xl bg-card text-card-foreground border p-4 text-center"
			style={{ width: 200 }}
		>
			<ChartContainer
				config={gaugeConfig}
				className="mx-auto h-[160px] w-[160px]"
			>
				<RadialBarChart
					data={gaugeData}
					startAngle={0}
					endAngle={valueAngle}
					outerRadius={outerR}
					innerRadius={innerR}
				>
					<PolarGrid
						gridType="circle"
						radialLines={false}
						stroke="none"
						className="first:fill-muted last:fill-background"
						polarRadius={[outerR, innerR]}
					/>
					<RadialBar dataKey="value" cornerRadius={10} />
					<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
												fontSize={28}
												fontWeight="bold"
												fill={color}
											>
												{props.value}
												{props.unit ?? ""}
											</tspan>
											{props.title && (
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy ?? 0) + 22}
													fontSize={12}
													fill="#71717a"
												>
													{props.title}
												</tspan>
											)}
										</text>
									);
								}
							}}
						/>
					</PolarRadiusAxis>
				</RadialBarChart>
			</ChartContainer>
		</div>
	);
}

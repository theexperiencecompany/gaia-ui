"use client";

import { ScatterChart } from "@/registry/new-york/ui/scatter-chart";

const data = [
	{ hours: 1, productivity: 22 },
	{ hours: 2, productivity: 35 },
	{ hours: 3, productivity: 48 },
	{ hours: 4, productivity: 62 },
	{ hours: 5, productivity: 71 },
	{ hours: 6, productivity: 68 },
	{ hours: 7, productivity: 64 },
	{ hours: 8, productivity: 55 },
	{ hours: 9, productivity: 42 },
	{ hours: 10, productivity: 30 },
];

export default function ScatterChartDefault() {
	return (
		<div className="w-full max-w-2xl">
			<ScatterChart
				data={data}
				xKey="hours"
				yKey="productivity"
				title="Hours vs. Productivity"
				description="Self-reported productivity score by hours worked"
			/>
		</div>
	);
}

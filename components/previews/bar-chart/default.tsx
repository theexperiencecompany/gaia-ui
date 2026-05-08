"use client";

import { BarChart } from "@/registry/new-york/ui/bar-chart";

const data = [
	{ month: "Jan", revenue: 4200 },
	{ month: "Feb", revenue: 5100 },
	{ month: "Mar", revenue: 4800 },
	{ month: "Apr", revenue: 6300 },
	{ month: "May", revenue: 7100 },
	{ month: "Jun", revenue: 6850 },
];

export default function BarChartDefault() {
	return (
		<div className="w-full max-w-2xl">
			<BarChart
				data={data}
				xKey="month"
				yKeys="revenue"
				title="Revenue"
				description="Monthly revenue (USD)"
				footer="Last 6 months"
			/>
		</div>
	);
}

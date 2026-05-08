"use client";

import { AreaChart } from "@/registry/new-york/ui/area-chart";

const data = [
	{ month: "Jan", users: 1200, revenue: 4200 },
	{ month: "Feb", users: 1480, revenue: 5100 },
	{ month: "Mar", users: 1620, revenue: 4800 },
	{ month: "Apr", users: 1980, revenue: 6300 },
	{ month: "May", users: 2340, revenue: 7100 },
	{ month: "Jun", users: 2710, revenue: 6850 },
];

export default function AreaChartDefault() {
	return (
		<div className="w-full max-w-2xl">
			<AreaChart
				data={data}
				xKey="month"
				yKeys={["users", "revenue"]}
				title="Growth"
				description="Cumulative users and revenue"
			/>
		</div>
	);
}

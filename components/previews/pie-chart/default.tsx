"use client";

import { PieChart } from "@/registry/new-york/ui/pie-chart";

const data = [
	{ source: "Direct", visitors: 1240 },
	{ source: "Search", visitors: 980 },
	{ source: "Social", visitors: 620 },
	{ source: "Referral", visitors: 410 },
	{ source: "Email", visitors: 280 },
];

export default function PieChartDefault() {
	return (
		<div className="w-full max-w-md">
			<PieChart
				data={data}
				nameKey="source"
				valueKey="visitors"
				title="Traffic Sources"
				description="Visitors by acquisition channel"
			/>
		</div>
	);
}

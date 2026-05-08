"use client";

import { PieChart } from "@/registry/new-york/ui/pie-chart";

const data = [
	{ category: "Engineering", spend: 480 },
	{ category: "Marketing", spend: 220 },
	{ category: "Sales", spend: 310 },
	{ category: "Operations", spend: 180 },
	{ category: "R&D", spend: 260 },
];

export default function PieChartLegend() {
	return (
		<div className="w-full max-w-md">
			<PieChart
				data={data}
				nameKey="category"
				valueKey="spend"
				mode="legend"
				title="Budget Allocation"
				description="Quarterly spend by department (K USD)"
			/>
		</div>
	);
}

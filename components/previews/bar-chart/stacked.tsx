"use client";

import { BarChart } from "@/registry/new-york/ui/bar-chart";

const data = [
	{ month: "Jan", desktop: 1240, mobile: 920, tablet: 410 },
	{ month: "Feb", desktop: 1480, mobile: 1100, tablet: 480 },
	{ month: "Mar", desktop: 1380, mobile: 1280, tablet: 510 },
	{ month: "Apr", desktop: 1620, mobile: 1450, tablet: 590 },
	{ month: "May", desktop: 1810, mobile: 1620, tablet: 640 },
	{ month: "Jun", desktop: 1960, mobile: 1740, tablet: 690 },
];

export default function BarChartStacked() {
	return (
		<div className="w-full max-w-2xl">
			<BarChart
				data={data}
				xKey="month"
				yKeys={["desktop", "mobile", "tablet"]}
				variant="stacked"
				title="Sessions by Device"
				description="Stacked breakdown by device type"
			/>
		</div>
	);
}

"use client";

import { LineChart } from "@/registry/new-york/ui/line-chart";

const data = [
	{ day: "Mon", visitors: 320, signups: 24 },
	{ day: "Tue", visitors: 410, signups: 31 },
	{ day: "Wed", visitors: 380, signups: 28 },
	{ day: "Thu", visitors: 520, signups: 42 },
	{ day: "Fri", visitors: 610, signups: 51 },
	{ day: "Sat", visitors: 480, signups: 36 },
	{ day: "Sun", visitors: 440, signups: 33 },
];

export default function LineChartDefault() {
	return (
		<div className="w-full max-w-2xl">
			<LineChart
				data={data}
				xKey="day"
				yKeys={["visitors", "signups"]}
				title="Weekly Activity"
				description="Visitors and signups by day"
			/>
		</div>
	);
}

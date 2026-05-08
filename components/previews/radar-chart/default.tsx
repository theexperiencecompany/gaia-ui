"use client";

import { RadarChart } from "@/registry/new-york/ui/radar-chart";

const data = [
	{ skill: "Speed", you: 82, team: 70 },
	{ skill: "Accuracy", you: 91, team: 75 },
	{ skill: "Reliability", you: 76, team: 80 },
	{ skill: "Coverage", you: 64, team: 72 },
	{ skill: "Latency", you: 88, team: 78 },
	{ skill: "Cost", you: 70, team: 68 },
];

export default function RadarChartDefault() {
	return (
		<div className="w-full max-w-md">
			<RadarChart
				data={data}
				angleKey="skill"
				valueKeys={["you", "team"]}
				title="Performance"
				description="You vs. team average"
			/>
		</div>
	);
}

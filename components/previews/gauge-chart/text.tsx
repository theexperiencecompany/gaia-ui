"use client";

import { GaugeChart } from "@/registry/new-york/ui/gauge-chart";

export default function GaugeChartText() {
	return (
		<div className="flex flex-wrap gap-4 items-center justify-center">
			<GaugeChart value={92} title="Uptime" unit="%" variant="text" />
			<GaugeChart value={73} title="Score" variant="text" />
		</div>
	);
}

"use client";

import { GaugeChart } from "@/registry/new-york/ui/gauge-chart";

export default function GaugeChartDefault() {
	return (
		<div className="flex flex-wrap gap-4 items-center justify-center">
			<GaugeChart value={42} title="CPU Usage" unit="%" />
			<GaugeChart value={68} title="Memory" unit="%" />
			<GaugeChart value={87} title="Disk" unit="%" />
		</div>
	);
}

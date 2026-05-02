"use client";

import { StatRow } from "@/registry/new-york/ui/stat-row";

export default function StatRowDefault() {
	return (
		<div className="flex flex-wrap gap-3">
			<StatRow
				title="Active Users"
				value="12,480"
				trend="up"
				trendLabel="+12.4%"
			/>
			<StatRow
				title="Revenue"
				value="84.2"
				unit="K"
				trend="up"
				trendLabel="+5.1%"
			/>
			<StatRow
				title="Churn Rate"
				value="3.2"
				unit="%"
				trend="down"
				trendLabel="-0.8%"
			/>
			<StatRow
				title="Avg. Session"
				value="4m 32s"
				trend="neutral"
				trendLabel="No change"
			/>
		</div>
	);
}

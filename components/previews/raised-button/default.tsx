"use client";

import { RaisedButton } from "@/registry/new-york/ui/raised-button";

export default function RaisedButtonDefault() {
	return (
		<>
			<RaisedButton>Default</RaisedButton>
			<RaisedButton color="#3b82f6">Blue</RaisedButton>
			<RaisedButton color="#ef4444">Red</RaisedButton>
			<RaisedButton color="#10b981">Green</RaisedButton>
			<RaisedButton color="#8b5cf6">Purple</RaisedButton>
		</>
	);
}

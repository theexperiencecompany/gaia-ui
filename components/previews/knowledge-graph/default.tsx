"use client";

import { useRef } from "react";
import {
	KnowledgeGraph,
	type KnowledgeGraphHandle,
	type GraphNode,
	type GraphLink,
} from "@/registry/new-york/ui/knowledge-graph";

// Sample data representing a user's knowledge/interests
const sampleNodes: GraphNode[] = [
	{ id: "user", label: "You", type: "user", size: 30 },
	{ id: "react", label: "React", type: "technology", size: 25 },
	{ id: "typescript", label: "TypeScript", type: "technology", size: 25 },
	{ id: "nextjs", label: "Next.js", type: "technology", size: 22 },
	{ id: "ai", label: "AI/ML", type: "interest", size: 24 },
	{ id: "design", label: "UI Design", type: "interest", size: 22 },
	{ id: "coffee", label: "Coffee", type: "preference", size: 18 },
	{ id: "music", label: "Lo-fi Music", type: "preference", size: 18 },
	{ id: "vercel", label: "Vercel", type: "company", size: 20 },
	{ id: "openai", label: "OpenAI", type: "company", size: 20 },
	{ id: "productivity", label: "Productivity", type: "interest", size: 22 },
];

const sampleLinks: GraphLink[] = [
	{ source: "user", target: "react", label: "uses" },
	{ source: "user", target: "typescript", label: "uses" },
	{ source: "user", target: "ai", label: "interested in" },
	{ source: "user", target: "design", label: "practices" },
	{ source: "user", target: "coffee", label: "loves" },
	{ source: "user", target: "music", label: "listens to" },
	{ source: "user", target: "productivity" },
	{ source: "react", target: "nextjs", label: "framework" },
	{ source: "typescript", target: "nextjs" },
	{ source: "nextjs", target: "vercel", label: "deploys to" },
	{ source: "ai", target: "openai", label: "uses" },
	{ source: "design", target: "react" },
];

export default function KnowledgeGraphDemo() {
	const graphRef = useRef<KnowledgeGraphHandle>(null);

	const handleNodeClick = (node: GraphNode) => {
		console.log("Clicked node:", node);
		alert(`Clicked: ${node.label} (${node.type})`);
	};

	return (
		<div className="flex flex-col gap-4 w-full">
			{/* Controls */}
			<div className="flex gap-2">
				<button
					type="button"
					onClick={() => graphRef.current?.exportAsSVG()}
					className="px-4 py-2 text-sm rounded-lg bg-zinc-800 text-zinc-100 hover:bg-zinc-700 transition-colors"
				>
					Export SVG
				</button>
				<button
					type="button"
					onClick={() => graphRef.current?.exportAsPNG()}
					className="px-4 py-2 text-sm rounded-lg bg-zinc-800 text-zinc-100 hover:bg-zinc-700 transition-colors"
				>
					Export PNG
				</button>
				<button
					type="button"
					onClick={() => graphRef.current?.resetZoom()}
					className="px-4 py-2 text-sm rounded-lg bg-zinc-800 text-zinc-100 hover:bg-zinc-700 transition-colors"
				>
					Reset Zoom
				</button>
			</div>

			{/* Graph */}
			<div className="h-[500px] w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
				<KnowledgeGraph
					ref={graphRef}
					nodes={sampleNodes}
					links={sampleLinks}
					onNodeClick={handleNodeClick}
					centerNodeId="user"
					showLegend={true}
					showLinkLabels={true}
				/>
			</div>

			<p className="text-sm text-zinc-500 dark:text-zinc-400">
				💡 Drag nodes to reposition • Scroll to zoom • Click nodes for details
			</p>
		</div>
	);
}

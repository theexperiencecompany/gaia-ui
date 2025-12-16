"use client";

import { SearchResultsTabs } from "@/registry/new-york/ui/search-results-tabs";

export default function SearchResultsTabsWebOnly() {
	const searchResults = {
		web: [
			{
				title: "TypeScript: JavaScript With Syntax For Types",
				url: "https://www.typescriptlang.org",
				content:
					"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
			},
			{
				title: "Tailwind CSS - Rapidly build modern websites",
				url: "https://tailwindcss.com",
				content:
					"A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
			},
			{
				title: "Vercel: Build and deploy the best web experiences",
				url: "https://vercel.com",
				content:
					"Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
			},
		],
	};

	return (
		<div className="w-full max-w-3xl">
			<SearchResultsTabs search_results={searchResults} />
		</div>
	);
}

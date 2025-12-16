"use client";

import { useState } from "react";

import { SearchResultsTabs } from "@/registry/new-york/ui/search-results-tabs";

export default function SearchResultsTabsWithImageClick() {
	const [clickedImage, setClickedImage] = useState<string | null>(null);

	const searchResults = {
		images: [
			"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
			"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
		],
	};

	return (
		<div className="w-full max-w-3xl space-y-4">
			<SearchResultsTabs
				search_results={searchResults}
				onImageClick={setClickedImage}
			/>
			{clickedImage && (
				<div className="rounded-lg border bg-card p-3">
					<p className="text-sm text-muted-foreground">
						Clicked: <span className="text-foreground">{clickedImage}</span>
					</p>
				</div>
			)}
		</div>
	);
}

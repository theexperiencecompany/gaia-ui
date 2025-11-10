"use client";

import { SearchResultsTabs } from "@/registry/new-york/ui/search-results-tabs";
import { MessageBubble } from "@/registry/new-york/ui/message-bubble";

export default function SearchResultsTabsNews() {
  const searchResults = {
    web: [],
    images: [],
    news: [
      {
        title: "AI Assistants Transform Productivity in 2025",
        url: "https://example.com/news/ai-productivity",
        content:
          "New AI assistant platforms are revolutionizing how people manage their digital workflows, with open-source solutions leading the charge in innovation and user adoption.",
        score: 0.95,
        date: "2025-11-08",
      },
      {
        title: "Open Source Projects See Record Contributions",
        url: "https://example.com/news/open-source",
        content:
          "GitHub reports a 40% increase in contributions to open-source projects, with AI and productivity tools seeing the most growth across all categories.",
        score: 0.89,
        date: "2025-11-07",
      },
      {
        title: "The Future of Personal AI: What's Next?",
        url: "https://example.com/news/future-ai",
        content:
          "Industry experts predict that personal AI assistants will become as ubiquitous as smartphones, with new capabilities emerging every quarter.",
        score: 0.87,
        date: "2025-11-06",
      },
    ],
  };

  return (
    <div className="w-full max-w-3xl space-y-4">
      <SearchResultsTabs search_results={searchResults} />

      {/* iOS-style message bubbles */}
      <div className="space-y-1.5 mt-6">
        <div className="flex justify-start">
          <MessageBubble
            message="Wow, AI is evolving fast!"
            variant="received"
          />
        </div>
        <div className="flex justify-end">
          <MessageBubble
            message="Yeah, can't wait to see what's next 🚀"
            variant="sent"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { SearchResultsTabs } from "@/registry/new-york/ui/search-results-tabs";
import { MessageBubble } from "@/registry/new-york/ui/message-bubble";

export default function SearchResultsTabsDefault() {
  const searchResults = {
    web: [
      {
        title: "Steve Jobs - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Steve_Jobs",
        content:
          "Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American businessman, inventor, and investor best known for co-founding the technology company Apple Inc. Jobs was also the founder of NeXT and chairman and majority shareholder of Pixar.",
        score: 0.91813606,
      },
      {
        title:
          "Steve Jobs | Biography, Education, Apple, & Facts | Britannica Money",
        url: "https://www.britannica.com/money/Steve-Jobs",
        content:
          "Steve Jobs (born February 24, 1955, San Francisco, California, U.S.—died October 5, 2011, Palo Alto, California) was the cofounder of Apple Computer, Inc. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications.",
        score: 0.818055,
      },
      {
        title: "Steve Jobs - Official Trailer (HD) - YouTube",
        url: "https://www.youtube.com/watch?v=aEr6K1bwIVs",
        content:
          "Set backstage at three iconic product launches and ending in 1998 with the unveiling of the iMac, Steve Jobs takes us behind the scenes of the digital revolution to paint an intimate portrait of the brilliant man at its epicenter.",
        score: 0.69968605,
      },
      {
        title: "Steve Jobs' 2005 Stanford Commencement Address - YouTube",
        url: "https://www.youtube.com/watch?v=UF8uR6Z6KLc",
        content:
          "Drawing from some of the most pivotal points in his life, Steve Jobs, chief executive officer and co-founder of Apple Computer and of Pixar",
        score: 0.6033015,
      },
      {
        title: "Steve Jobs (2015) - IMDb",
        url: "https://www.imdb.com/title/tt2080374/",
        content:
          "The story unfolds backstage at three iconic product launches, ending in 1998 with the unveiling of the iMac. Steve Jobs takes us behind the scenes of the digital revolution, to paint a portrait of the man at its epicenter.",
        score: 0.5683445,
      },
    ],
    images: [
      "https://cdn.britannica.com/04/171104-050-5B714956/Steve-Jobs-iPhone-2010.jpg",
      "https://cdn.mos.cms.futurecdn.net/GkeSqnHP3o4skUPJa7QSWZ.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*",
      "https://mg.co.za/wp-content/uploads/2023/03/stevejobs.1419962519.jpeg",
    ],
    news: [],
  };

  return (
    <div className="w-full max-w-3xl space-y-4">
      {/* Main component */}
      <SearchResultsTabs search_results={searchResults} />

      {/* iOS-style message bubbles */}
      <div className="space-y-1.5 mt-6">
        <div className="flex justify-start w-[80%]">
          <MessageBubble
            message="Steven Paul Jobs was an American businessman, inventor, and investor best known for co-founding the technology company Apple Inc. Jobs was also the founder of NeXT and chairman and majority shareholder of Pixar."
            variant="received"
          />
        </div>
        <div className="flex justify-end">
          <MessageBubble message="ikr" variant="sent" />
        </div>
      </div>
    </div>
  );
}

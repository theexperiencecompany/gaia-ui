"use client";

import { AuthorTooltip } from "@/registry/new-york/ui/author-tooltip";

export default function AuthorTooltipSizes() {
  return (
    <>
      <AuthorTooltip
        author={{
          name: "Jane Smith",
          avatar: "https://github.com/theexperiencecompany.png",
          role: "Product Designer",
        }}
        avatarSize="sm"
      />
      <AuthorTooltip
        author={{
          name: "Jane Smith",
          avatar: "https://github.com/theexperiencecompany.png",
          role: "Product Designer",
        }}
        avatarSize="md"
      />
      <AuthorTooltip
        author={{
          name: "Jane Smith",
          avatar: "https://github.com/theexperiencecompany.png",
          role: "Product Designer",
        }}
        avatarSize="lg"
      />
    </>
  );
}

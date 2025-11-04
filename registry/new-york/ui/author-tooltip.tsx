"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export interface Author {
  name: string;
  avatar: string;
  role: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

interface AuthorTooltipProps {
  author: Author;
  avatarSize?: "sm" | "md" | "lg";
  avatarClassName?: string;
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export function AuthorTooltip({
  author,
  avatarSize = "sm",
  avatarClassName = "cursor-help border-2 border-border",
}: AuthorTooltipProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar className={cn(sizeMap[avatarSize], avatarClassName)}>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{getInitials(author.name)}</AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent className="p-0 rounded-xl">
        <div className="flex flex-row items-center gap-3 p-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{getInitials(author.name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{author.name}</span>
            <span className="text-xs text-muted-foreground">{author.role}</span>
          </div>
          {(author.linkedin || author.twitter || author.github) && (
            <div className="ml-4 flex gap-2.5">
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background hover:text-muted-foreground transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              )}
              {author.twitter && (
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background hover:text-muted-foreground transition-colors"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
              )}
              {author.github && (
                <a
                  href={author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background hover:text-muted-foreground transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

"use client";

import type * as React from "react";
import { CopyButton } from "@/components/core/copy-button";
import { cn } from "@/lib/utils";

function extractTextFromNode(node: React.ReactNode): string {
  if (node == null) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractTextFromNode).join("");
  if (typeof node === "object" && "props" in node) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return extractTextFromNode(element.props.children);
  }
  return "";
}

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
  raw?: string;
}

export function CodeBlock({
  className,
  children,
  raw,
  ...props
}: CodeBlockProps) {
  const textContent = raw || extractTextFromNode(children);

  return (
    <div className="group relative">
      <pre
        className={cn(
          "overflow-x-auto rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4 font-mono text-sm border-none outline-none ring-0",
          className
        )}
        {...props}
      >
        {children}
      </pre>
      <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
        <CopyButton value={textContent} />
      </div>
    </div>
  );
}

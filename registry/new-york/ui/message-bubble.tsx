"use client";

import "./message-bubble.css";

import { cn } from "@/lib/utils";

export interface MessageBubbleProps {
  message: string;
  variant?: "sent" | "received";
  grouped?: "first" | "middle" | "last" | "none";
  className?: string;
  children?: React.ReactNode;
}

export function MessageBubble({
  message,
  variant = "received",
  grouped = "none",
  className,
  children,
}: MessageBubbleProps) {
  const groupedClasses =
    grouped === "first"
      ? "imessage-grouped-first mb-1.5"
      : grouped === "last"
      ? "imessage-grouped-last"
      : grouped === "middle"
      ? "imessage-grouped-middle mb-1.5"
      : "";

  return (
    <div
      className={cn(
        "imessage-bubble",
        variant === "sent" ? "imessage-from-me" : "imessage-from-them",
        groupedClasses,
        className
      )}
    >
      {children || <p className="whitespace-pre-wrap">{message}</p>}
    </div>
  );
}

export interface ChatMessageProps {
  timestamp?: string;
  messages: string[];
  variant?: "sent" | "received";
  className?: string;
  showTimestamp?: boolean;
}

export function ChatMessage({
  timestamp,
  messages,
  variant = "received",
  className,
  showTimestamp = true,
}: ChatMessageProps) {
  const hasMultipleMessages = messages.length > 1;

  const getGroupedType = (index: number, total: number) => {
    if (total === 1) return "none";
    if (index === 0) return "first";
    if (index === total - 1) return "last";
    return "middle";
  };

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <div className="flex flex-col">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message}
            variant={variant}
            grouped={
              hasMultipleMessages
                ? getGroupedType(index, messages.length)
                : "none"
            }
          />
        ))}
      </div>

      {showTimestamp && timestamp && (
        <span
          className={cn(
            "mt-1 px-2 text-xs text-muted-foreground",
            variant === "sent" && "text-right"
          )}
        >
          {timestamp}
        </span>
      )}
    </div>
  );
}

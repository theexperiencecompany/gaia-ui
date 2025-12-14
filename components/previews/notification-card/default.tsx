"use client";

import { NotificationCard } from "@/registry/new-york/ui/notification-card";

export default function NotificationCardDefault() {
  const notifications = [
    {
      id: "1",
      title: "New message from Alex",
      body: "Hey, I wanted to follow up on our discussion about the project timeline.",
      status: "unread" as const,
      createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      actions: [
        { id: "reply", label: "Reply", type: "modal" as const, style: "primary" as const },
        { id: "view", label: "View", type: "redirect" as const },
      ],
    },
    {
      id: "2",
      title: "Meeting reminder",
      body: "Your team standup starts in 15 minutes.",
      status: "unread" as const,
      createdAt: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
      actions: [
        { id: "join", label: "Join Now", type: "redirect" as const, style: "primary" as const },
        { id: "snooze", label: "Snooze", type: "api_call" as const },
      ],
    },
    {
      id: "3",
      title: "Task completed",
      body: "The automated backup workflow has finished successfully.",
      status: "read" as const,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      actions: [
        { id: "view-log", label: "View Log", type: "redirect" as const, executed: true },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full max-w-lg">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          {...notification}
          onMarkAsRead={(id) => console.log("Mark as read:", id)}
          onAction={(notifId, actionId) => console.log("Action:", notifId, actionId)}
        />
      ))}
    </div>
  );
}

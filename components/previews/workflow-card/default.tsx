"use client";

import { WorkflowCard } from "@/registry/new-york/ui/workflow-card";

export default function WorkflowCardDefault() {
  const workflows = [
    {
      title: "Daily Email Summary",
      description: "Automatically summarize and categorize your emails every morning",
      steps: [
        { id: "1", title: "Fetch emails", toolCategory: "email" },
        { id: "2", title: "Summarize content", toolCategory: "documents" },
        { id: "3", title: "Send notification", toolCategory: "notifications" },
      ],
      totalExecutions: 1250,
      triggerLabel: "Daily at 8:00 AM",
      isActivated: true,
    },
    {
      title: "Meeting Prep Workflow",
      description: "Prepare meeting notes, attendee info, and agenda before each meeting",
      steps: [
        { id: "1", title: "Get calendar event", toolCategory: "calendar" },
        { id: "2", title: "Research attendees", toolCategory: "search" },
        { id: "3", title: "Create agenda", toolCategory: "productivity" },
      ],
      totalExecutions: 456,
      triggerLabel: "Before meetings",
      isActivated: false,
    },
    {
      title: "Code Review Assistant",
      description: "Analyze PR changes and suggest improvements automatically",
      steps: [
        { id: "1", title: "Fetch PR", toolCategory: "development" },
        { id: "2", title: "Analyze code", toolCategory: "development" },
        { id: "3", title: "Post comments", toolCategory: "development" },
      ],
      totalExecutions: 89,
      variant: "explore" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {workflows.map((workflow) => (
        <WorkflowCard
          key={workflow.title}
          {...workflow}
          variant={workflow.variant || "user"}
          onAction={() => console.log("Action:", workflow.title)}
          onClick={() => console.log("Click:", workflow.title)}
        />
      ))}
    </div>
  );
}

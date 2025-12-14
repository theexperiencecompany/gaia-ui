"use client";

import { FilePreview } from "@/registry/new-york/ui/file-preview";

export default function FilePreviewDefault() {
  const files = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=100&h=100&fit=crop",
      name: "photo.jpg",
      type: "image/jpeg",
    },
    {
      id: "2",
      url: "#",
      name: "document.pdf",
      type: "application/pdf",
    },
    {
      id: "3",
      url: "#",
      name: "spreadsheet.xlsx",
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
      id: "4",
      url: "#",
      name: "script.tsx",
      type: "text/typescript",
    },
    {
      id: "5",
      url: "#",
      name: "archive.zip",
      type: "application/zip",
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <FilePreview 
        files={files} 
        onRemove={(id) => console.log("Remove file:", id)} 
      />
    </div>
  );
}

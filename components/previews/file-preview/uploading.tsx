"use client";

import { FilePreview } from "@/registry/new-york/ui/file-preview";

export default function FilePreviewUploading() {
	const files = [
		{
			id: "1",
			url: "#",
			name: "large-video.mp4",
			type: "video/mp4",
			isUploading: true,
		},
		{
			id: "2",
			url: "#",
			name: "completed.pdf",
			type: "application/pdf",
			isUploading: false,
		},
		{
			id: "3",
			url: "#",
			name: "audio-file.mp3",
			type: "audio/mpeg",
			isUploading: true,
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

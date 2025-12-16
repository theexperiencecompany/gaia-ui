"use client";

import {
	FileDropzone,
	type DroppedFile,
} from "@/registry/new-york/ui/file-dropzone";

export default function FileDropzoneDefault() {
	const handleFilesDropped = (files: DroppedFile[]) => {
		console.log("Files dropped:", files);
	};

	return (
		<div className="w-full max-w-md">
			<FileDropzone
				onFilesDropped={handleFilesDropped}
				accept="image/*,.pdf,.doc,.docx"
				maxSize={5 * 1024 * 1024}
				maxFiles={5}
			/>
		</div>
	);
}

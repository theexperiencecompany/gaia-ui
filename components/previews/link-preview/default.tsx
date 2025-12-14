"use client";

import { LinkPreview } from "@/registry/new-york/ui/link-preview";

export default function LinkPreviewDefault() {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-sm leading-relaxed text-foreground">
				GAIA is an open-source AI assistant designed to help you manage your
				digital life. Built with modern web technologies, it provides a seamless
				experience for task automation, email management, and calendar
				integration. Visit{" "}
				<LinkPreview href="https://heygaia.io">GAIA</LinkPreview> to learn more
				about the platform, or check out{" "}
				<LinkPreview href="https://experience.heygaia.io">
					The Experience Company
				</LinkPreview>{" "}
				to see who&apos;s behind the project. The platform is actively
				maintained and welcomes contributions from developers around the world.
				<br />
				<br />
				Check out{" "}
				<LinkPreview href="https://github.com/theexperiencecompany/gaia">
					GAIA on GitHub
				</LinkPreview>{" "}
			</p>
		</div>
	);
}

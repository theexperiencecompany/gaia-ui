import { generateSEO, generateSoftwareSchema } from "@/lib/seo";
import { RaisedButton } from "@/registry/new-york/ui/raised-button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

// Enhanced metadata for the homepage
export const metadata = generateSEO({
	title: "GAIA UI - Open Source Components for AI Assistants",
	description:
		"Beautiful, accessible React components from the GAIA AI assistant project. Free and open source UI library for building chatbots and AI interfaces.",
	keywords: [
		"React Components",
		"UI Library",
		"AI Assistant",
		"Chatbot UI",
		"Open Source",
		"GAIA",
		"Free Components",
		"Radix UI",
		"Tailwind CSS",
	],
	url: "/",
});

export default function Home() {
	const softwareSchema = generateSoftwareSchema();

	return (
		<>
			{/* JSON-LD Structured Data for Software */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
			/>
			<div className="relative px-4">
				<section className="mx-auto flex flex-col max-w-3xl  gap-5 py-8 md:py-16 lg:py-24">
					<h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-4xl">
						We&apos;re building GAIA.
						<br />
						<span className="text-muted-foreground">
							Here&apos;s what we&apos;re using.
						</span>
					</h1>
					<p className="text-sm leading-relaxed text-muted-foreground md:text-base">
						We&apos;re working on an open source AI assistant called GAIA. Along
						the way, we&apos;ve built UI components that we actually use. If
						you&apos;re building chatbots or AI interfaces, these might be
						useful. They&apos;re free and open source.
					</p>
					<div className="flex flex-wrap items-center justify-start gap-3 py-2">
						<Link href="/docs">
							<RaisedButton
								size="default"
								color="#0080ff"
								asChild
								className="flex items-center"
							>
								Browse components
								<ArrowRight className="h-4 w-4" />
							</RaisedButton>
						</Link>
						<Link
							href="https://github.com/heygaia/ui"
							target="_blank"
							rel="noreferrer"
						>
							<RaisedButton
								size="icon"
								color="#3b3b3b"
								asChild
								className="rounded-lg"
							>
								<FaGithub className="h-6 w-6" />
							</RaisedButton>
						</Link>
					</div>
					<div className="space-y-1">
						<h2 className="text-lg font-semibold">What&apos;s this for?</h2>
						<p className="text-sm text-muted-foreground leading-relaxed">
							We needed components that work well for conversational
							interfaces—animated buttons, smooth transitions, accessible
							controls. Instead of keeping them in our repo, we&apos;re sharing
							them for anyone building similar stuff.
						</p>
					</div>
					<div className="space-y-1">
						<h2 className="text-lg font-semibold">What you&apos;ll find</h2>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Components we use in production. Built with Radix UI and Tailwind
							CSS. Copy the code and make it yours.
						</p>
					</div>
					<div className="space-y-1">
						<h2 className="text-lg font-semibold">Why share?</h2>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Open source has given us a lot. This is one of our way&apos;s of
							contributing back.
						</p>
					</div>

					<div className="text-xs text-zinc-600 mt-8 flex items-center gap-1">
						Made with ❤️ by
						<a
							href="https://experience.heygaia.io"
							target="_
            _blank"
							className="underline underline-offset-4 hover:text-zinc-300 transition"
						>
							The Experience Company
						</a>
					</div>
				</section>
			</div>
		</>
	);
}

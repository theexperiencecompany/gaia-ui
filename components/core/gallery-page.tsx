import Link from "next/link";
import { getPreviewComponent } from "@/components/previews";
import { cn } from "@/lib/utils";
import { getComponentsMetadata } from "@/lib/utils/get-component-metadata";

const GALLERY_PREVIEW_COMPONENTS = [
	"author-tooltip",
	"github-stars-button",
	"nested-menu",
	"navbar-menu",
	"composer",
	"slash-command-dropdown",
	"todo-item",
	"raised-button",
	"holo-card",
	"email-compose-card",
	"message-bubble",
	"knowledge-graph",
	"tool-calls-section",
	"notification-card",
	"pricing-card",
	"weather-card",
	"wave-spinner",
	"search-results-tabs",
	"link-preview",
] as const;

const MANUAL_GALLERY_COMPONENTS = [
	{
		name: "notification-card",
		title: "Notification Card",
		description: "A compact notification feed with actions and status states.",
		firstPreview: "notification-card/default",
	},
	{
		name: "todo-item",
		title: "Todo Item",
		description: "An interactive todo row with priority, labels, and subtasks.",
		firstPreview: "todo-item/default",
	},
] as const;

export async function GalleryPage() {
	const metadataComponents = getComponentsMetadata();
	const components = [...metadataComponents];

	for (const manualComponent of MANUAL_GALLERY_COMPONENTS) {
		if (!components.some((component) => component.name === manualComponent.name)) {
			components.push(manualComponent);
		}
	}

	const previewPromises = components.map(async (component) => {
		const previewName =
			component.name === "navbar-menu"
				? "navbar-menu/full"
				: component.firstPreview;
		const PreviewComponent = await getPreviewComponent(previewName);
		return { name: component.name, title: component.title, PreviewComponent };
	});

	const previews = await Promise.all(previewPromises);
	const previewMap = new Map(
		previews
			.filter(
				(
					item,
				): item is {
					name: string;
					title: string;
					PreviewComponent: NonNullable<typeof item.PreviewComponent>;
				} => Boolean(item.PreviewComponent),
			)
			.map((item) => [item.name, item]),
	);

	const renderCard = (name: string, previewWidthClassName?: string) => {
		const item = previewMap.get(name);
		if (!item) return null;

		const { title, PreviewComponent } = item;

		return (
			<div
				key={name}
				data-component={name}
				className="group relative isolate z-0 hover:z-20 focus-within:z-20"
			>
				<div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex -translate-y-full justify-center opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
					<Link
						href={`/docs/components/${name}`}
						className="pointer-events-none rounded-2xl border border-black/10 bg-zinc-100/95 px-4 py-2 text-sm text-zinc-700 shadow-[0_6px_20px_rgba(0,0,0,0.18)] backdrop-blur group-hover:pointer-events-auto group-focus-within:pointer-events-auto"
					>
						<span className="font-semibold text-zinc-800">{title}</span>
						<span className="text-zinc-500"> · View Docs -&gt;</span>
					</Link>
				</div>
				<div
					className={cn(
						"relative flex w-full min-w-0 items-center justify-center rounded-xl border border-zinc-200 bg-white p-4 dark:border-transparent dark:bg-[#0a0a0a]",
						name === "composer" ? "overflow-visible" : "overflow-hidden",
					)}
				>
					<div className={cn("relative z-0 w-full min-w-0", previewWidthClassName)}>
						<PreviewComponent />
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="w-full min-w-0">
			<div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
				{GALLERY_PREVIEW_COMPONENTS.map((name) =>
					renderCard(
						name,
						name === "navbar-menu" || name === "pricing-card"
							? "mx-auto w-full "
							: undefined,
					),
				)}
			</div>

			<div className="hidden w-full flex-col gap-3 lg:flex">
				<div className="grid grid-cols-3 gap-3">
					{renderCard("author-tooltip", "mx-auto w-fit")}
					{renderCard("github-stars-button", "mx-auto w-fit")}
					{renderCard("nested-menu", "mx-auto w-fit [&>div]:py-0")}
				</div>

				<div className="grid grid-cols-3 items-start gap-3">
					<div className="flex flex-col gap-3">
						{renderCard("composer")}
						{renderCard("holo-card")}
						{renderCard("message-bubble")}
					</div>
					<div className="flex flex-col gap-3">
						{renderCard("slash-command-dropdown")}
						{renderCard("todo-item", "w-full min-w-0 overflow-hidden")}
						{renderCard("knowledge-graph")}
					</div>
					<div className="flex flex-col gap-3">
						{renderCard("raised-button")}
						{renderCard("email-compose-card")}
						{renderCard("tool-calls-section")}
						{renderCard("notification-card")}
					</div>
				</div>

				<div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)_minmax(0,1fr)] items-start gap-3">
					<div className="flex flex-col gap-3">
						{renderCard("weather-card")}
						{renderCard("search-results-tabs")}
					</div>
					<div>{renderCard("pricing-card", "mx-auto w-full max-w-[760px]")}</div>
					<div className="flex flex-col gap-3">
						{renderCard("wave-spinner")}
						{renderCard("link-preview")}
					</div>
				</div>

				<div className="grid grid-cols-1 gap-3">{renderCard("navbar-menu")}</div>
			</div>
		</div>
	);
}

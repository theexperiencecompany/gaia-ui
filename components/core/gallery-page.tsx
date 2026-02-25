import Link from "next/link";
import { getPreviewComponent } from "@/components/previews";
import { cn } from "@/lib/utils";
import { getComponentsMetadata } from "@/lib/utils/get-component-metadata";

// Components in this list are shown first in this exact order.
// Components not listed here are added after this list.
const PRIORITY_GALLERY_COMPONENTS = [
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
    "model-selector",
    "workflow-card",
] as const;

const DESKTOP_GALLERY_COMPONENTS = [
    "author-tooltip",
    "github-stars-button",
    "nested-menu",
    "composer",
    "holo-card",
    "message-bubble",
    "slash-command-dropdown",
    "todo-item",
    "knowledge-graph",
    "raised-button",
    "email-compose-card",
    "tool-calls-section",
    "notification-card",
    "weather-card",
    "search-results-tabs",
    "model-selector",
    "pricing-card",
    "wave-spinner",
    "link-preview",
    "navbar-menu",
    "workflow-card",
] as const satisfies readonly (typeof PRIORITY_GALLERY_COMPONENTS)[number][];

const GALLERY_CARD_SURFACE_CLASS = "dark:bg-background";

// Add a component here only if it is missing from registry metadata.
// If a component is in registry metadata, it is added automatically.
const MANUAL_GALLERY_COMPONENTS = [
    {
        name: "notification-card",
        title: "Notification Card",
        description:
            "A compact notification feed with actions and status states.",
        firstPreview: "notification-card/default",
    },
    {
        name: "todo-item",
        title: "Todo Item",
        description:
            "An interactive todo row with priority, labels, and subtasks.",
        firstPreview: "todo-item/default",
    },
    {
        name: "model-selector",
        title: "Model Selector",
        description:
            "A dropdown selector for choosing AI models with provider information and pro badges.",
        firstPreview: "model-selector/default",
    },
    {
        name: "workflow-card",
        title: "Workflow Card",
        description:
            "A card component for displaying workflow templates with icons and descriptions.",
        firstPreview: "workflow-card/default",
    },
] as const;

export async function GalleryPage() {
    const metadataComponents = getComponentsMetadata();
    const components = [...metadataComponents];

    for (const manualComponent of MANUAL_GALLERY_COMPONENTS) {
        if (
            !components.some(
                (component) => component.name === manualComponent.name,
            )
        ) {
            components.push(manualComponent);
        }
    }

    const priorityNames = new Set<string>(PRIORITY_GALLERY_COMPONENTS);

    // New components added to registry.json that are NOT in PRIORITY_GALLERY_COMPONENTS
    // will automatically appear at the bottom of the gallery.
    const appendedComponentNames = components
        .map((component) => component.name)
        .filter((name) => !priorityNames.has(name));

    const galleryComponentNames = [
        ...PRIORITY_GALLERY_COMPONENTS,
        ...appendedComponentNames,
    ] as const;

    const previewNames = new Set<string>(galleryComponentNames);
    const previewComponents = components.filter((component) =>
        previewNames.has(component.name),
    );

    const previewPromises = previewComponents.map(async (component) => {
        const previewName =
            component.name === "navbar-menu"
                ? "navbar-menu/full"
                : component.firstPreview;
        const PreviewComponent = await getPreviewComponent(previewName);
        return {
            name: component.name,
            title: component.title,
            PreviewComponent,
        };
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

    const warnedMissingPreviews = new Set<string>();

    const renderCard = (name: string, previewWidthClassName?: string) => {
        const item = previewMap.get(name);
        const allowOverflowPreview =
            name === "composer" || name === "model-selector";
        const shouldLeftAlignPreview = name === "navbar-menu";
        const previewAlignmentClass = shouldLeftAlignPreview
            ? "items-start justify-start"
            : "items-center justify-center";

        if (!item) {
            if (!warnedMissingPreviews.has(name)) {
                console.warn(
                    `[GalleryPage] Missing preview component for "${name}".`,
                );
                warnedMissingPreviews.add(name);
            }

            return (
                <div
                    key={name}
                    data-component={name}
                    className="group relative isolate z-0 hover:z-20 focus-within:z-20"
                >
                    <div
                        className={cn(
                            "relative flex w-full min-w-0 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 dark:border-zinc-700",
                            previewAlignmentClass,
                            GALLERY_CARD_SURFACE_CLASS,
                            allowOverflowPreview
                                ? "overflow-visible"
                                : "overflow-hidden",
                        )}
                    >
                        <div
                            className={cn(
                                "relative z-0 w-full min-w-0 text-center",
                                previewWidthClassName,
                            )}
                        >
                            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                                Preview unavailable
                            </p>
                            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                                {name} could not be loaded.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        const { title, PreviewComponent } = item;

        return (
            <div
                key={name}
                data-component={name}
                className="group relative isolate z-0 hover:z-20 focus-within:z-20"
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex -translate-y-full justify-center text-zinc-700 opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100 group-focus-within:opacity-100 dark:text-zinc-200">
                    <Link
                        href={`/docs/components/${name}`}
                        className="pointer-events-none rounded-2xl border border-black/10 bg-zinc-100/95 px-4 py-2 text-sm shadow-[0_6px_20px_rgba(0,0,0,0.18)] backdrop-blur group-hover:pointer-events-auto group-focus-within:pointer-events-auto dark:border-white/10 dark:bg-zinc-900/95 dark:shadow-[0_6px_20px_rgba(0,0,0,0.55)]"
                    >
                        <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                            {title}
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400">
                            {" "}
                            · View Docs -&gt;
                        </span>
                    </Link>
                </div>
                <div
                    className={cn(
                        "relative flex w-full min-w-0 rounded-xl border border-zinc-200 bg-white p-4 dark:border-transparent",
                        previewAlignmentClass,
                        GALLERY_CARD_SURFACE_CLASS,
                        allowOverflowPreview
                            ? "overflow-visible"
                            : "overflow-hidden",
                    )}
                >
                    <div
                        className={cn(
                            "relative z-0 w-full min-w-0",
                            previewWidthClassName,
                        )}
                    >
                        <PreviewComponent />
                    </div>
                </div>
            </div>
        );
    };

    const desktopRenderedNames = new Set<string>();
    const desktopCuratedNames = new Set<string>(DESKTOP_GALLERY_COMPONENTS);
    const renderDesktopCard = (
        name: (typeof DESKTOP_GALLERY_COMPONENTS)[number],
        previewWidthClassName?: string,
    ) => {
        desktopRenderedNames.add(name);
        return renderCard(name, previewWidthClassName);
    };

    const gallery = (
        <div className="w-full min-w-0">
            {/* Single render path for all screen sizes. */}
            <div className="flex w-full flex-col gap-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {renderDesktopCard("author-tooltip", "mx-auto w-fit")}
                    {renderDesktopCard("github-stars-button", "mx-auto w-fit")}
                    {renderDesktopCard("nested-menu", "mx-auto w-fit [&>div]:py-0")}
                </div>

                <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-3">
                        {renderDesktopCard("composer")}
                        {renderDesktopCard("holo-card")}
                        {renderDesktopCard("message-bubble")}
                    </div>
                    <div className="flex flex-col gap-3">
                        {renderDesktopCard("slash-command-dropdown")}
                        {renderDesktopCard(
                            "todo-item",
                            "w-full min-w-0 overflow-hidden",
                        )}
                        {renderDesktopCard("knowledge-graph")}
                    </div>
                    <div className="flex flex-col gap-3">
                        {renderDesktopCard("raised-button")}
                        {renderDesktopCard("email-compose-card")}
                        {renderDesktopCard("tool-calls-section")}
                        {renderDesktopCard("notification-card")}
                    </div>
                </div>

                <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)_minmax(0,1fr)]">
                    <div className="flex flex-col gap-3">
                        {renderDesktopCard("weather-card")}
                        {renderDesktopCard("search-results-tabs")}
                    </div>
                    <div>
                        {renderDesktopCard(
                            "pricing-card",
                            "mx-auto w-full max-w-[760px]",
                        )}
                    </div>
                    <div className="flex flex-col gap-3">
                        {renderDesktopCard("wave-spinner")}
                        {renderDesktopCard("link-preview")}
                        {renderDesktopCard(
                            "model-selector",
                            "mx-auto w-full max-w-xs",
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {renderDesktopCard("navbar-menu", "mx-0 w-fit")}
                    {renderDesktopCard("workflow-card", "mx-auto w-full max-w-sm")}
                </div>

                {/* New components from registry auto-appear here */}
                {appendedComponentNames.length > 0 && (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {appendedComponentNames.map((name) => renderCard(name))}
                    </div>
                )}
            </div>
        </div>
    );

    if (process.env.NODE_ENV !== "production") {
        const missingFromDesktopRender = DESKTOP_GALLERY_COMPONENTS.filter(
            (name) => !desktopRenderedNames.has(name),
        );
        if (missingFromDesktopRender.length > 0) {
            throw new Error(
                `[GalleryPage] Desktop renderCard layout is missing preview names: ${missingFromDesktopRender.join(", ")}.`,
            );
        }

        const desktopNamesOutsideCuratedOrder = DESKTOP_GALLERY_COMPONENTS.filter(
            (name) => !priorityNames.has(name),
        );
        if (desktopNamesOutsideCuratedOrder.length > 0) {
            throw new Error(
                `[GalleryPage] DESKTOP_GALLERY_COMPONENTS contains names outside PRIORITY_GALLERY_COMPONENTS: ${desktopNamesOutsideCuratedOrder.join(", ")}.`,
            );
        }

        const appendedNamesInDesktopCuratedLayout = appendedComponentNames.filter(
            (name) => desktopCuratedNames.has(name),
        );
        if (appendedNamesInDesktopCuratedLayout.length > 0) {
            throw new Error(
                `[GalleryPage] Appended names should not be in DESKTOP_GALLERY_COMPONENTS: ${appendedNamesInDesktopCuratedLayout.join(", ")}.`,
            );
        }
    }

    return gallery;
}
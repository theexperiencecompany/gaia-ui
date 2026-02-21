import Link from "next/link";
import { getPreviewComponent } from "@/components/previews";
import { cn } from "@/lib/utils";
import { getComponentsMetadata } from "@/lib/utils/get-component-metadata";

// Keep this list aligned with the canonical registry metadata from getComponentsMetadata().
// Add entries when a component should render in the gallery preview grid, preferring registry-driven data where possible.
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
    "pricing-card",
    "wave-spinner",
    "link-preview",
    "navbar-menu",
] as const satisfies readonly (typeof GALLERY_PREVIEW_COMPONENTS)[number][];

const GALLERY_CARD_SURFACE_CLASS = "dark:bg-background";

// Add manual entries only when preview wiring or metadata is not fully represented in the registry source.
// When adding new registry components, update this list (and GALLERY_PREVIEW_COMPONENTS) as needed to prevent drift.
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

    const previewNames = new Set<string>(GALLERY_PREVIEW_COMPONENTS);
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
                            "relative flex w-full min-w-0 items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 dark:border-zinc-700",
                            GALLERY_CARD_SURFACE_CLASS,
                            name === "composer"
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
                        "relative flex w-full min-w-0 items-center justify-center rounded-xl border border-zinc-200 bg-white p-4 dark:border-transparent",
                        GALLERY_CARD_SURFACE_CLASS,
                        name === "composer"
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
    const renderDesktopCard = (
        name: (typeof DESKTOP_GALLERY_COMPONENTS)[number],
        previewWidthClassName?: string,
    ) => {
        desktopRenderedNames.add(name);
        return renderCard(name, previewWidthClassName);
    };

    const desktopGallery = (
        <div className="hidden w-full flex-col gap-3 lg:flex">
            <div className="grid grid-cols-3 gap-3">
                {renderDesktopCard("author-tooltip", "mx-auto w-fit")}
                {renderDesktopCard("github-stars-button", "mx-auto w-fit")}
                {renderDesktopCard("nested-menu", "mx-auto w-fit [&>div]:py-0")}
            </div>

            <div className="grid grid-cols-3 items-start gap-3">
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

            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)_minmax(0,1fr)] items-start gap-3">
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
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {renderDesktopCard("navbar-menu")}
            </div>
        </div>
    );

    if (process.env.NODE_ENV !== "production") {
        const assertDesktopGalleryCoverage = (
            renderCardRef: typeof renderCard,
        ) => {
            void renderCardRef;

            const desktopNames = new Set<string>(DESKTOP_GALLERY_COMPONENTS);
            const missingFromDesktopList = GALLERY_PREVIEW_COMPONENTS.filter(
                (name) => !desktopNames.has(name),
            );
            const missingFromDesktopRender = GALLERY_PREVIEW_COMPONENTS.filter(
                (name) => !desktopRenderedNames.has(name),
            );

            if (
                DESKTOP_GALLERY_COMPONENTS.length !==
                GALLERY_PREVIEW_COMPONENTS.length
            ) {
                throw new Error(
                    `[GalleryPage] Desktop gallery layout is out of sync with GALLERY_PREVIEW_COMPONENTS. Update DESKTOP_GALLERY_COMPONENTS and renderCard invocations together.`,
                );
            }

            if (missingFromDesktopList.length > 0) {
                throw new Error(
                    `[GalleryPage] DESKTOP_GALLERY_COMPONENTS is missing preview names: ${missingFromDesktopList.join(", ")}.`,
                );
            }

            if (missingFromDesktopRender.length > 0) {
                throw new Error(
                    `[GalleryPage] Desktop renderCard layout is missing preview names: ${missingFromDesktopRender.join(", ")}.`,
                );
            }
        };

        assertDesktopGalleryCoverage(renderCard);
    }

    return (
        <div className="w-full min-w-0">
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
                {GALLERY_PREVIEW_COMPONENTS.map((name) =>
                    renderCard(
                        name,
                        name === "navbar-menu" || name === "pricing-card"
                            ? "mx-auto w-full"
                            : undefined,
                    ),
                )}
            </div>

            {desktopGallery}
        </div>
    );
}

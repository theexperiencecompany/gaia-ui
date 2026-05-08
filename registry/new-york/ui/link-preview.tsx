"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { Globe02Icon, HugeiconsIcon } from "@/components/icons";

import { Skeleton } from "@/components/ui/skeleton";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface UrlMetadata {
	title: string | null;
	description: string | null;
	favicon: string | null;
	website_name: string | null;
	website_image: string | null;
	url: string;
}

interface LinkPreviewProps {
	href: string;
	children: ReactNode | string | null;
	className?: string;
	/**
	 * Endpoint that returns URL metadata as JSON. Receives the target URL as
	 * a `url` query param and must return `{ title, description, image, logo,
	 * publisher }` (microlink.io shape) or a compatible payload. Defaults to
	 * the public microlink.io API.
	 */
	endpoint?: string;
}

// Module-level cache so repeat links (common in chat) don't refetch.
const metadataCache = new Map<string, UrlMetadata>();
const inFlight = new Map<string, Promise<UrlMetadata>>();

const isEmail = (str: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

const isValidHttpUrl = (str: string): boolean => {
	try {
		const url = new URL(str);
		return /^(http|https):$/.test(url.protocol);
	} catch {
		return false;
	}
};

async function fetchUrlMetadata(
	href: string,
	endpoint: string,
): Promise<UrlMetadata> {
	const cached = metadataCache.get(href);
	if (cached) return cached;

	const existing = inFlight.get(href);
	if (existing) return existing;

	const promise = (async () => {
		const apiUrl = `${endpoint}${endpoint.includes("?") ? "&" : "?"}url=${encodeURIComponent(href)}`;
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`Failed to fetch metadata (${response.status})`);
		}

		const json = await response.json();
		const data = json?.data ?? json;
		const urlObj = new URL(href);

		const metadata: UrlMetadata = {
			title: data?.title ?? null,
			description: data?.description ?? null,
			website_image:
				typeof data?.image === "string"
					? data.image
					: (data?.image?.url ?? data?.website_image ?? null),
			favicon:
				typeof data?.logo === "string"
					? data.logo
					: (data?.logo?.url ??
						data?.favicon ??
						`${urlObj.origin}/favicon.ico`),
			website_name: data?.publisher ?? data?.website_name ?? urlObj.hostname,
			url: href,
		};

		metadataCache.set(href, metadata);
		return metadata;
	})();

	inFlight.set(href, promise);
	try {
		return await promise;
	} finally {
		inFlight.delete(href);
	}
}

export function LinkPreview({
	href,
	children,
	className = "cursor-pointer rounded-sm bg-primary/20 px-1 text-sm font-medium text-primary transition-all hover:text-white hover:underline",
	endpoint = "https://api.microlink.io",
}: LinkPreviewProps) {
	const elementRef = useRef<HTMLAnchorElement>(null);
	const [isInView, setIsInView] = useState(false);
	const [validFavicon, setValidFavicon] = useState(true);
	const [validImage, setValidImage] = useState(true);
	const [metadata, setMetadata] = useState<UrlMetadata | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const isValidUrl =
		href &&
		isValidHttpUrl(href) &&
		!isEmail(href) &&
		!href.startsWith("mailto:");

	// Fetch metadata when in view
	useEffect(() => {
		if (!isInView || !isValidUrl || metadata) return;

		let isMounted = true;
		setIsLoading(true);
		setError(null);

		fetchUrlMetadata(href, endpoint)
			.then((data) => {
				if (!isMounted) return;
				setMetadata(data);
				setIsLoading(false);
			})
			.catch((err) => {
				if (!isMounted) return;
				setError(err as Error);
				setIsLoading(false);
			});

		return () => {
			isMounted = false;
		};
	}, [isInView, isValidUrl, href, metadata, endpoint]);

	// Set up intersection observer to detect when element is in view
	useEffect(() => {
		const element = elementRef.current;
		if (!element || !href) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.unobserve(element);
				}
			},
			{
				rootMargin: "100px", // Start fetching 100px before element comes into view
				threshold: 0.1,
			},
		);

		observer.observe(element);

		return () => {
			observer.unobserve(element);
		};
	}, [href]);

	if (!href) return null;

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<a
					ref={elementRef}
					href={href}
					className={className}
					rel="noopener noreferrer"
					target="_blank"
				>
					{children}
				</a>
			</TooltipTrigger>
			<TooltipContent
				className="w-[300px] max-w-[300px] border border-zinc-700 bg-zinc-900 p-3 text-white shadow-lg"
				arrowClassName="bg-zinc-900 fill-zinc-900"
			>
				{isLoading ? (
					<div className="flex w-full flex-col gap-2">
						<Skeleton className="aspect-video w-full rounded-lg bg-zinc-800" />
						<div className="flex items-center gap-2">
							<Skeleton className="size-5 rounded-full bg-zinc-800" />
							<Skeleton className="h-4 w-32 rounded bg-zinc-800" />
						</div>
						<Skeleton className="h-4 w-full rounded bg-zinc-800" />
						<div className="flex flex-col gap-1">
							<Skeleton className="h-3 w-full rounded bg-zinc-800" />
							<Skeleton className="h-3 w-full rounded bg-zinc-800" />
							<Skeleton className="h-3 w-3/4 rounded bg-zinc-800" />
						</div>
						<Skeleton className="h-3 w-48 rounded bg-zinc-800" />
					</div>
				) : error || !isValidUrl ? (
					<div className="flex items-center gap-2 p-3 text-red-400">
						<HugeiconsIcon icon={Globe02Icon} size={16} />
						<span className="text-sm">
							{!isValidUrl ? "Invalid URL" : "Failed to load preview"}
						</span>
					</div>
				) : metadata ? (
					<div className="flex w-full flex-col gap-2">
						{/* Website Image */}
						{metadata.website_image && validImage && (
							<div className="relative aspect-video w-full overflow-hidden rounded-lg">
								<Image
									src={metadata.website_image}
									alt="Website preview"
									fill
									className="rounded-lg object-cover"
									onError={() => setValidImage(false)}
								/>
							</div>
						)}

						{/* Website Name & Favicon */}
						{(metadata.website_name || (metadata.favicon && validFavicon)) && (
							<div className="flex min-w-0 items-center gap-2">
								{metadata.favicon && validFavicon ? (
									<Image
										width={20}
										height={20}
										alt="Favicon"
										className="size-5 shrink-0 rounded-full"
										src={metadata.favicon}
										onError={() => setValidFavicon(false)}
									/>
								) : (
									<HugeiconsIcon
										icon={Globe02Icon}
										size={20}
										className="shrink-0 text-gray-400"
									/>
								)}
								{metadata.website_name && (
									<div className="truncate text-sm font-semibold">
										{metadata.website_name}
									</div>
								)}
							</div>
						)}

						{/* Title */}
						{metadata.title && (
							<div className="line-clamp-2 break-words text-sm font-medium text-white">
								{metadata.title}
							</div>
						)}

						{/* Description */}
						{metadata.description && (
							<div className="line-clamp-3 break-words text-xs text-gray-400">
								{metadata.description}
							</div>
						)}

						{/* URL Link */}
						<div className="truncate text-xs text-primary">
							{href.replace("https://", "").replace("http://", "")}
						</div>
					</div>
				) : (
					<div className="flex items-center gap-2 p-3">
						<HugeiconsIcon
							icon={Globe02Icon}
							size={16}
							className="text-gray-400"
						/>
						<span className="text-sm text-gray-400">No preview available</span>
					</div>
				)}
			</TooltipContent>
		</Tooltip>
	);
}

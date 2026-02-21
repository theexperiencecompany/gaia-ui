"use client";

import type React from "react";
import { useEffect, useMemo, useRef } from "react";
import {
	Cancel01Icon,
	HugeiconsIcon,
	Tag01Icon,
	ToolsIcon,
} from "@/components/icons";

import { cn } from "@/lib/utils";
import { formatToolName, getToolCategoryIcon } from "@/lib/utils/tool-icons";

export interface Tool {
	/** Unique tool identifier */
	name: string;
	/** Category for grouping tools */
	category: string;
	/** Description shown below tool name */
	description?: string;
	/** Custom icon (defaults to category icon) */
	icon?: React.ReactNode;
}

export interface SlashCommandMatch {
	tool: Tool;
	score: number;
}

interface SlashCommandDropdownProps {
	/** List of tools to display */
	matches: SlashCommandMatch[];
	/** Currently selected tool index */
	selectedIndex: number;
	/** Callback when a tool is selected */
	onSelect: (tool: SlashCommandMatch) => void;
	/** Callback when dropdown is closed */
	onClose: () => void;
	/** Position config for the dropdown */
	position: { top?: number; bottom?: number; left: number; width?: number };
	/** Whether the dropdown is visible */
	isVisible: boolean;
	/** If opened via button (shows header) */
	openedViaButton?: boolean;
	/** Currently selected category filter */
	selectedCategory?: string;
	/** Available categories */
	categories?: string[];
	/** Callback when category changes */
	onCategoryChange?: (category: string) => void;
	/** Additional CSS classes */
	className?: string;
	/** Additional inline styles */
	style?: React.CSSProperties;
}

// Default icon size for consistency
const ICON_SIZE = 20;
const CATEGORY_ICON_SIZE = 16;
const MONOCHROME_ICON_CATEGORIES = new Set(["github", "linear"]);

/**
 * Get a default icon for a tool based on its category
 * Always returns an icon - no tool should be without one
 */
const getDefaultToolIcon = (
	tool: Tool,
	size: number = ICON_SIZE,
): React.ReactNode => {
	// If tool has custom icon, use it
	if (tool.icon) return tool.icon;

	// Try to get category icon
	const categoryIcon = getToolCategoryIcon(tool.category, {
		showBackground: false,
		width: size,
		height: size,
	});

	// If category icon exists, use it
	if (categoryIcon) return categoryIcon;

	return (
		<HugeiconsIcon
			icon={ToolsIcon}
			size={size}
			className="text-zinc-500 dark:text-zinc-400"
		/>
	);
};

/**
 * Get icon for a category tab
 */
const getCategoryTabIcon = (category: string): React.ReactNode => {
	if (category === "all") {
		return (
			<HugeiconsIcon
				icon={Tag01Icon}
				size={CATEGORY_ICON_SIZE}
				className="text-current"
			/>
		);
	}

	const icon = getToolCategoryIcon(category, {
		showBackground: false,
		width: CATEGORY_ICON_SIZE,
		height: CATEGORY_ICON_SIZE,
	});

	// Fallback for categories without icons
	return (
		icon || (
			<HugeiconsIcon
				icon={ToolsIcon}
				size={CATEGORY_ICON_SIZE}
				className="text-current"
			/>
		)
	);
};

export const SlashCommandDropdown: React.FC<SlashCommandDropdownProps> = ({
	matches,
	selectedIndex,
	onSelect,
	onClose,
	position,
	isVisible,
	openedViaButton = false,
	selectedCategory = "all",
	categories = [],
	onCategoryChange,
	className,
	style,
}) => {
	const dropdownRef = useRef<HTMLDivElement>(null);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	// Focus the dropdown when it becomes visible (only when opened via button)
	useEffect(() => {
		if (isVisible && openedViaButton && dropdownRef.current) {
			requestAnimationFrame(() => {
				dropdownRef.current?.focus();
			});
		}
	}, [isVisible, openedViaButton]);

	// Get unique categories from matches if not provided
	const computedCategories = useMemo(() => {
		if (categories && categories.length > 0) {
			return categories;
		}
		const uniqueCategories = Array.from(
			new Set(matches.map((match) => match.tool.category)),
		);
		return ["all", ...uniqueCategories.sort()];
	}, [matches, categories]);

	// Filter matches based on selected category
	const filteredMatches = useMemo(() => {
		if (selectedCategory === "all") {
			return matches;
		}
		return matches.filter((match) => match.tool.category === selectedCategory);
	}, [matches, selectedCategory]);

	// Scroll to selected item when selectedIndex changes
	useEffect(() => {
		if (selectedIndex >= 0 && selectedIndex < filteredMatches.length) {
			const selectedElement = scrollContainerRef.current?.querySelector(
				`[data-index="${selectedIndex}"]`,
			);
			if (selectedElement) {
				selectedElement.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
				});
			}
		}
	}, [selectedIndex, filteredMatches.length]);

	if (!isVisible || matches.length === 0) return null;

	return (
		<div
			ref={dropdownRef}
			className={cn(
				// Base styles
				"fixed z-[200] overflow-hidden rounded-2xl",
				// Light mode support
				"border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/95",
				"backdrop-blur-xl shadow-2xl",
				// Animation
				"animate-in fade-in-0 slide-in-from-bottom-2 duration-200",
				className,
			)}
			style={{
				...(position.top !== undefined && { top: 0, height: position.top }),
				...(position.bottom !== undefined && {
					bottom: `calc(100vh - ${position.bottom - 8}px)`,
					maxHeight: Math.min(position.bottom - 16, 400),
				}),
				left: position.left,
				width: position.width,
				...style,
			}}
			tabIndex={-1}
		>
			{/* Header section - Only show when opened via button */}
			{openedViaButton && (
				<div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pl-5 pr-2 py-1">
					<div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
						Browse Tools
					</div>
					<button
						type="button"
						onClick={onClose}
						className="cursor-pointer rounded-full p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
						aria-label="Close"
					>
						<HugeiconsIcon icon={Cancel01Icon} size={16} />
					</button>
				</div>
			)}

			{/* Category Tabs */}
			{computedCategories.length > 1 && (
				<div className="border-b border-zinc-200 dark:border-zinc-800">
					<div className="flex overflow-x-auto px-3 py-1 gap-1.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
						{computedCategories.map((category) => (
							<button
								type="button"
								key={category}
								onClick={() => onCategoryChange?.(category)}
								className={cn(
									// Base styles
									"flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap cursor-pointer transition-all",
									// Selected state
									selectedCategory === category
										? "bg-zinc-100 text-zinc-900 dark:bg-zinc-700/50 dark:text-white"
										: "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200",
								)}
							>
									{category === "github" ? (
										<span className="flex h-4 w-4 items-center justify-center rounded-sm bg-zinc-800 dark:bg-transparent">
											{getCategoryTabIcon(category)}
										</span>
									) : (
										getCategoryTabIcon(category)
									)}
								<span>
									{category === "all" ? "All" : formatToolName(category)}
								</span>
							</button>
						))}
					</div>
				</div>
			)}

			{/* Tool List */}
			<div
				ref={scrollContainerRef}
				className="max-h-[200px] overflow-y-auto py-1.5"
			>
				{filteredMatches.length === 0 ? (
					<div className="px-4 py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
						No tools found
					</div>
				) : (
					filteredMatches.map((match, index) => {
						const isSelected = index === selectedIndex;
						return (
							<button
								type="button"
								key={`${match.tool.category}-${match.tool.name}`}
								data-index={index}
									className={cn(
										// Base styles - full width with consistent padding
										"w-full text-left mx-0 px-3 py-0 cursor-pointer transition-all duration-150",
										// Selected/hover states with light mode support
										isSelected
											? "bg-zinc-100 dark:bg-zinc-800"
											: "hover:bg-zinc-100 dark:hover:bg-zinc-800",
									)}
								onClick={() => onSelect(match)}
							>
								<div className="flex items-center gap-3 py-2.5 px-1">
										{/* Icon container - fixed size for consistency */}
										<div
											className={cn(
												"flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800",
												MONOCHROME_ICON_CATEGORIES.has(match.tool.category) &&
													"[&_img]:brightness-0 dark:[&_img]:brightness-100",
											)}
										>
											{getDefaultToolIcon(match.tool, ICON_SIZE)}
										</div>

									{/* Content - fills remaining space */}
									<div className="min-w-0 flex-1">
										<div className="flex items-center justify-between gap-3">
											<span className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
												{formatToolName(match.tool.name)}
											</span>
											{selectedCategory === "all" && (
												<span className="flex-shrink-0 rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-xs text-zinc-600 dark:text-zinc-400">
													{formatToolName(match.tool.category)}
												</span>
											)}
										</div>
										{match.tool.description && (
											<p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 truncate">
												{match.tool.description}
											</p>
										)}
									</div>
								</div>
							</button>
						);
					})
				)}
			</div>
		</div>
	);
};

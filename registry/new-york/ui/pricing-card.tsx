"use client";

import type { FC, ReactNode } from "react";
import { CheckmarkCircle02Icon, HugeiconsIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { RaisedButton } from "@/registry/new-york/ui/raised-button";

export interface PricingFeature {
	text: string;
	icon?: ReactNode;
}

export interface PricingCardProps {
	/** Plan title (e.g., "Free", "Pro", "Enterprise") */
	title: string;
	/** Price amount (e.g., 0, 9.99, 29) */
	price: number;
	/** Currency symbol (default: "$") */
	currency?: string;
	/** Original price before discount (shows strikethrough on yearly) */
	originalPrice?: number;
	/** Plan description/subtitle — always reserves two lines for row alignment */
	description?: string;
	/** Features included in this plan */
	features?: (string | PricingFeature)[];
	/** Custom label above features list (rendered uppercase, muted) */
	featuresTitle?: ReactNode;
	/** Billing period: true for monthly, false for yearly */
	isMonthly?: boolean;
	/** Show "Current Plan" badge */
	isCurrentPlan?: boolean;
	/** Show "Popular" badge in header */
	isPopular?: boolean;
	/** Marks this card as the highlighted Pro tier (tints feature icons) */
	isPro?: boolean;
	/** Marks this card as the Enterprise tier (changes accent + suffix copy) */
	isEnterprise?: boolean;
	/** Optional plan illustration shown above the price */
	planImage?: string;
	/** Override the price display (e.g., "Custom") */
	priceLabel?: string;
	/** Override the line beneath the price (defaults to "/ per month" etc.) */
	priceSuffix?: ReactNode;
	/** Button label (default depends on plan + state) */
	buttonLabel?: string;
	/** Small text rendered under the CTA button */
	buttonFootnote?: ReactNode;
	/** Button click handler */
	onButtonClick?: () => void;
	/** Whether button is disabled */
	isDisabled?: boolean;
	/** Whether button is in loading state */
	isLoading?: boolean;
	/** Accent color for button (CSS color value) */
	accentColor?: string;
	/** Additional CSS classes */
	className?: string;
}

const formatPrice = (amount: number, currency: string): string => {
	if (amount === 0) return `${currency}0`;
	return `${currency}${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`;
};

export const PricingCard: FC<PricingCardProps> = ({
	title,
	price,
	currency = "$",
	originalPrice,
	description,
	features,
	featuresTitle,
	isMonthly = true,
	isCurrentPlan = false,
	isPopular = false,
	isPro = false,
	isEnterprise = false,
	planImage,
	priceLabel,
	priceSuffix,
	buttonLabel,
	buttonFootnote,
	onButtonClick,
	isDisabled = false,
	isLoading = false,
	accentColor,
	className,
}) => {
	const isFree = price === 0 && !isEnterprise;

	const formattedPrice = formatPrice(price, currency);
	const formattedOriginalPrice = originalPrice
		? formatPrice(originalPrice, currency)
		: null;

	// Yearly Pro: show per-month equivalent above an "/ mo, billed $X / year" line
	const monthlyEquivalent =
		!isMonthly && isPro && price > 0
			? formatPrice(Math.round(price / 12), currency)
			: null;

	const resolvedAccent =
		accentColor ?? (isEnterprise ? "#fa4b00" : isFree ? "#2a2a2a" : "#00bbff");

	const getButtonLabel = (): string => {
		if (isLoading) return "Loading...";
		if (buttonLabel) return buttonLabel;
		if (isCurrentPlan) return "Current Plan";
		if (isFree) return "Start for Free";
		if (isEnterprise) return "Contact Sales";
		return "Get Started";
	};

	const resolvedSuffix: ReactNode = (() => {
		if (priceSuffix !== undefined) return priceSuffix;
		if (isEnterprise) return "Tailored pricing";
		if (price <= 0) return " ";
		if (monthlyEquivalent) return `/ mo, billed ${formattedPrice} / year`;
		return isMonthly ? "/ per month" : "/ per year";
	})();

	const resolvedFootnote: ReactNode = (() => {
		if (buttonFootnote !== undefined) return buttonFootnote;
		if (isEnterprise) return "Reply within 24 hours";
		if (isFree) return "No credit card required";
		return "Cancel anytime · Secure payment";
	})();

	return (
		<div
			className={cn(
				"flex h-full w-full flex-col overflow-hidden rounded-3xl",
				"bg-white/70 dark:bg-zinc-800/50 backdrop-blur-lg",
				className,
			)}
		>
			{/* Header: plan name + badges (reserves a fixed row height) */}
			<div className="flex flex-col gap-1.5 p-6 pb-4">
				<div className="flex min-h-5 items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="text-2xl font-semibold text-zinc-900 dark:text-white">
							{title}
						</span>
						{isCurrentPlan && (
							<span className="rounded-full bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
								Current Plan
							</span>
						)}
					</div>
					{isPopular && !isCurrentPlan && (
						<span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium tracking-wide text-primary">
							Popular
						</span>
					)}
				</div>

				{/* Description — always reserve two lines so cards align */}
				<p className="line-clamp-2 min-h-10 text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
					{description ?? " "}
				</p>
			</div>

			{planImage && (
				<div className="px-6 pb-5">
					<div className="relative h-40 w-full overflow-hidden rounded-2xl">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={planImage}
							alt={`${title} plan`}
							className="h-full w-full object-cover transition duration-300 hover:scale-125"
						/>
					</div>
				</div>
			)}

			{/* Price */}
			<div className="px-6 pb-5">
				<div className="flex items-baseline gap-2">
					{formattedOriginalPrice && !isMonthly && !priceLabel && (
						<span className="text-2xl font-normal text-zinc-500 line-through">
							{formattedOriginalPrice}
						</span>
					)}
					<span className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white">
						{priceLabel ?? monthlyEquivalent ?? formattedPrice}
					</span>
				</div>
				<p className="mt-1 text-sm font-normal text-zinc-500 dark:text-zinc-400">
					{resolvedSuffix}
				</p>
			</div>

			{/* CTA */}
			<div className="px-6 pb-5">
				<RaisedButton
					onClick={onButtonClick}
					disabled={isDisabled || isLoading || isCurrentPlan}
					className="w-full"
					color={resolvedAccent}
				>
					{getButtonLabel()}
				</RaisedButton>
				{resolvedFootnote && (
					<p className="mt-2 text-center text-xs font-light text-zinc-500">
						{resolvedFootnote}
					</p>
				)}
			</div>

			{/* Features — flex-1 so cards in a row equalize their height */}
			{(featuresTitle || (features && features.length > 0)) && (
				<div className="flex flex-1 flex-col gap-2.5 px-6 py-5">
					{featuresTitle && (
						<p className="mb-0.5 text-xs font-normal uppercase text-zinc-500">
							{featuresTitle}
						</p>
					)}

					{features?.map((feature) => {
						const featureText =
							typeof feature === "string" ? feature : feature.text;
						const featureIcon =
							typeof feature === "object" && feature.icon ? (
								feature.icon
							) : (
								<HugeiconsIcon
									icon={CheckmarkCircle02Icon}
									size={15}
									className={cn(
										"mt-0.5 shrink-0",
										isPro || isEnterprise
											? "text-primary"
											: "text-zinc-500",
									)}
								/>
							);

						return (
							<div
								key={featureText}
								className="flex items-start gap-3 text-sm font-light text-zinc-700 dark:text-zinc-300"
							>
								<span className="flex-shrink-0">{featureIcon}</span>
								<span>{featureText}</span>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default PricingCard;

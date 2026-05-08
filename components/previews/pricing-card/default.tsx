"use client";

import Image from "next/image";
import { PricingCard } from "@/registry/new-york/ui/pricing-card";

const proFeatures = [
	"Extended access to everything",
	"Advanced memory features",
	"Priority support",
	"Private Discord access",
];

export default function PricingCardDemo() {
	return (
		<div className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden rounded-2xl">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/wallpapers/field.webp"
					alt="Pricing background"
					fill
					className="object-cover opacity-65"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 dark:to-zinc-950/90" />
			</div>

			{/* Single pricing card with plan image */}
			<div className="relative z-[1] w-full max-w-sm p-6">
				<PricingCard
					title="Pro"
					price={270}
					originalPrice={360}
					isMonthly={false}
					isPro
					isPopular
					planImage="/images/pricing/pro.webp"
					description="A boost of extra access, because you deserve it"
					features={proFeatures}
					onButtonClick={() => alert("Pro plan selected!")}
					className="w-full"
				/>
			</div>
		</div>
	);
}

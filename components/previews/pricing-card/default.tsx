"use client";

import { PricingCard } from "@/registry/new-york/ui/pricing-card";

const freeFeatures = [
	"5 conversations per day",
	"Basic AI responses",
	"Email support",
	"Community access",
];

const proFeatures = [
	"Unlimited conversations",
	"Priority AI responses",
	"All integrations",
	"Priority support",
	"Custom workflows",
	"Advanced analytics",
];

export default function PricingCardDemo() {
	return (
		<div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mx-auto p-6">
			{/* Free Tier */}
			<PricingCard
				title="Free"
				price={0}
				description="Perfect for getting started and exploring the basics."
				features={freeFeatures}
				onButtonClick={() => alert("Free plan selected!")}
				className="flex-1"
				backgroundImage="/media/meadow.webp"
			/>

			{/* Pro Tier with yearly discount */}
			<PricingCard
				title="Pro"
				price={9}
				originalPrice={12}
				isMonthly={false}
				description="For power users who want the full experience."
				features={proFeatures}
				accentColor="#00bbff"
				onButtonClick={() => alert("Pro plan selected!")}
				className="flex-1"
				backgroundImage="/media/surreal.webp"
			/>
		</div>
	);
}

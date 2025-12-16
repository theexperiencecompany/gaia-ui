"use client";

import { useState } from "react";
import {
	ModelSelector,
	type AIModel,
} from "@/registry/new-york/ui/model-selector";

const models: AIModel[] = [
	{
		id: "gpt-4o",
		name: "GPT-4o",
		provider: "OpenAI",
		icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
		isPro: true,
		description: "Most capable model for complex tasks",
	},
	{
		id: "claude-3.5",
		name: "Claude 3.5 Sonnet",
		provider: "Anthropic",
		icon: "https://www.anthropic.com/favicon.ico",
		isPro: true,
		description: "Advanced reasoning and analysis",
	},
	{
		id: "gemini-pro",
		name: "Gemini Pro",
		provider: "Google",
		icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
		description: "Fast and efficient for most tasks",
	},
	{
		id: "llama-3",
		name: "Llama 3",
		provider: "Meta",
		description: "Open source and customizable",
	},
];

export default function ModelSelectorDefault() {
	const [selectedModel, setSelectedModel] = useState(models[0]);

	return (
		<div className="w-full max-w-xs">
			<ModelSelector
				models={models}
				selectedModel={selectedModel}
				onSelect={setSelectedModel}
			/>
		</div>
	);
}

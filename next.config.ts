import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const useProIcons = process.env.USE_PRO_ICONS === "true";
console.log(
	"🎨 USE_PRO_ICONS:",
	process.env.USE_PRO_ICONS,
	"→ Using",
	useProIcons ? "PRO" : "FREE",
	"icons",
);

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "**",
			},
		],
	},
	// Turbopack config for icon alias
	...(useProIcons && {
		turbopack: {
			resolveAlias: {
				"@hugeicons/core-free-icons": "@hugeicons-pro/core-solid-rounded",
			},
		},
	}),
	// Webpack config for icon alias (fallback if not using Turbopack)
	webpack: (config) => {
		if (useProIcons) {
			config.resolve.alias["@hugeicons/core-free-icons"] =
				"@hugeicons-pro/core-solid-rounded";
		}
		return config;
	},
};

// MDX config with serializable plugin references (for Turbopack compatibility)
const withMDX = createMDX({
	options: {
		remarkPlugins: ["remark-gfm", "remark-frontmatter"],
		rehypePlugins: [
			"rehype-slug",
			[
				"rehype-pretty-code",
				{
					theme: {
						dark: "github-dark",
						light: "github-light",
					},
					keepBackground: false,
				},
			],
			[
				"rehype-autolink-headings",
				{
					properties: {
						className: ["anchor"],
						ariaLabel: "Link to section",
					},
				},
			],
		],
	},
});

export default withMDX(nextConfig);

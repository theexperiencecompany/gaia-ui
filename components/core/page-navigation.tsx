import { NavSection } from "@/types/nav-item";
import { PageNavigationClient } from "./page-navigation-client";

interface PageNavigationProps {
	position?: "top" | "bottom";
	markdownContent?: string;
	navigation: NavSection[];
}

export function PageNavigation({
	position = "top",
	markdownContent,
	navigation,
}: PageNavigationProps) {
	return (
		<PageNavigationClient
			position={position}
			markdownContent={markdownContent}
			navigation={navigation}
		/>
	);
}

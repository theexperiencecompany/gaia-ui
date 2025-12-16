import { getNavigation } from "@/lib/navigation";
import { DocsSidebarClient } from "./docs-sidebar-client";

export function DocsSidebar() {
	const navigation = getNavigation();

	return <DocsSidebarClient navigation={navigation} />;
}

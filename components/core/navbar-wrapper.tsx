import { getNavigation } from "@/lib/navigation";
import { Navbar } from "@/components/ui/navbar";

export function NavbarWrapper() {
	const navigation = getNavigation();

	return <Navbar navigation={navigation} />;
}

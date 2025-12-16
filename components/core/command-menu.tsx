import { NavSection } from "@/types/nav-item";
import { CommandMenuClient } from "./command-menu-client";

interface CommandMenuProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	navigation: NavSection[];
}

export function CommandMenu({ open, setOpen, navigation }: CommandMenuProps) {
	return (
		<CommandMenuClient open={open} setOpen={setOpen} navigation={navigation} />
	);
}

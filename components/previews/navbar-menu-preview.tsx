"use client";

import { AnimatePresence } from "motion/react";
import { NavbarMenu as NavbarMenuComponent } from "@/registry/new-york/ui/navbar-menu";
import type { NavbarMenuSection } from "@/registry/new-york/ui/navbar-menu";

export function NavbarMenu({
  activeMenu,
  sections,
  onClose,
}: {
  activeMenu: string;
  sections: NavbarMenuSection[];
  onClose?: () => void;
}) {
  return (
    <div className="relative w-full bg-black  h-full">
      {activeMenu && (
        <NavbarMenuComponent
          activeMenu={activeMenu}
          sections={sections}
          onClose={onClose}
        />
      )}
    </div>
  );
}

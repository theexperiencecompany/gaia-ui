"use client";

import { NavbarWithMenu } from "@/registry/new-york/ui/navbar-menu";

export default function NavbarMenuStaticLinks() {
  return (
    <NavbarWithMenu
      sections={[]}
      navItems={[
        { type: "link", label: "Pricing", href: "/pricing" },
        { type: "link", label: "Blog", href: "/blog" },
      ]}
    />
  );
}

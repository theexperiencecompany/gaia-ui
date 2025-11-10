"use client";

import { NavbarWithMenu } from "@/registry/new-york/ui/navbar-menu";
import { MessageSquare, Lightbulb, CreditCard, Map } from "lucide-react";

export default function NavbarMenuBasic() {
  const sections = [
    {
      id: "pages",
      gridLayout: "grid w-full grid-cols-2 gap-4",
      links: [
        {
          label: "Get Started",
          href: "/login",
          description: "Sign Up / Login",
          icon: <MessageSquare className="w-5 h-5 text-white" />,
        },
        {
          label: "Use Cases",
          href: "/use-cases",
          description: "Discover workflows",
          icon: <Lightbulb className="w-5 h-5 text-white" />,
        },
        {
          label: "Pricing",
          href: "/pricing",
          description: "Choose your plan",
          icon: <CreditCard className="w-5 h-5 text-white" />,
        },
        {
          label: "Roadmap",
          href: "/roadmap",
          description: "What's coming next",
          icon: <Map className="w-5 h-5 text-white" />,
        },
      ],
    },
  ];

  return (
    <NavbarWithMenu
      sections={sections}
      navItems={[{ type: "dropdown", label: "Pages", menu: "pages" }]}
    />
  );
}

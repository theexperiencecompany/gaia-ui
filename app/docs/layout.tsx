import { DocsSidebar } from "@/components/core/docs-sidebar";
import { NavbarWrapper } from "@/components/core/navbar-wrapper";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarWrapper />
      <div className="border-b">
        <div className="max-w-screen-2xl flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-10 px-8">
          <DocsSidebar />
          {children}
        </div>
      </div>
    </>
  );
}

import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import Image from "next/image";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <>
      <DocsLayout
        tree={source.getPageTree()}
        nav={{
          title: (
            <Image src="/assets/logo.svg" alt="Logo" width={56} height={35} />
          ),
          url: "/",
        }}
        themeSwitch={{
          enabled: false,
        }}
      >
        {children}
      </DocsLayout>
      <footer className="w-full bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2023 CarbonTeq. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

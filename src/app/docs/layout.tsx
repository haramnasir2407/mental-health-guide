import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import Image from "next/image";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout 
      tree={source.getPageTree()}
      nav={{
        title: <Image src="/assets/logo.svg" alt="Logo" width={56} height={35} />,
        url: "/",
      }}
      themeSwitch={{
        enabled: false,
      }}
    >
      {children}
    </DocsLayout>
  );
}

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Image src="/assets/logo.svg" alt="Logo" width={56} height={35} />,
      url: "/",
    },
    links: [
      {
        text: "Documentation",
        url: "/docs",
        active: "nested-url",
      },
    ],
    themeSwitch: {
      enabled: false,
    },
  };
}

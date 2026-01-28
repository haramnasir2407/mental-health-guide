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
        text: "About",
        url: "/#about",
        active: "nested-url",
      },
      {
        text: "Playbook",
        url: "/docs",
        active: "nested-url",
      },
      {
        text: "Contact Us",
        url: "/docs/support/seek-professional-support",
        active: "nested-url",
      }
    ],
    themeSwitch: {
      enabled: false,
    },
  };
}

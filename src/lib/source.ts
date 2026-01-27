import { docs } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";
import { icons } from 'lucide-react';
import * as AIIcons from 'react-icons/ai';
import * as Io5Icons from 'react-icons/io5';
import { createElement } from 'react';
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";


// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
  icon(icon) {
    if (!icon) {
      return;
    }

    // Handle prefixed icons: "lucide:Home", "iconoir:User", "fa:FaHome"
    if (icon.includes(':')) {
      const [library, iconName] = icon.split(':');
      
      switch (library) {
        case 'lucide':
          if (iconName in icons) {
            return createElement(icons[iconName as keyof typeof icons]);
          }
          break;
        case 'ai':
          if (iconName in AIIcons) {
            return createElement(AIIcons[iconName as keyof typeof AIIcons]);
          }
          break;
        case 'io5':
          if (iconName in Io5Icons) {
            return createElement(Io5Icons[iconName as keyof typeof Io5Icons]);
          }
          break;
      }
    } else {
      // Default behavior - try Lucide first (for backward compatibility)
      if (icon in icons) {
        return createElement(icons[icon as keyof typeof icons]);
      }
    }

    // No icon found
    return;
  },
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

${processed}`;
}

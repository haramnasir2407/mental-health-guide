import { getPageImage, source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { notFound, redirect } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { LLMCopyButton, ViewOptions } from "@/components/ai/page-actions";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;

  // Redirect /docs to /docs/getting-started/introduction
  if (!params.slug || params.slug.length === 0) {
    redirect("/docs/getting-started/introduction");
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const gitConfig = {
    user: "username",
    repo: "repo",
    branch: "main",
  };

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle
        className={`${tenorSans.className} text-2xl sm:text-3xl lg:text-4xl leading-[1.1] mb-6`}
        style={{
          fontWeight: 400,
          color: "#000000",
        }}
      >
        {page.data.title}
      </DocsTitle>
      <DocsDescription
        className="mb-0 font-satoshi"
        style={{
          fontWeight: 400,
          color: "#1F2937",
          lineHeight: "1.5",
        }}
      >
        {page.data.description}
      </DocsDescription>
      <DocsBody
        className="font-satoshi"
        style={{
          fontWeight: 400,
          color: "#1F2937",
          lineHeight: "1.5",
        }}
      >
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}

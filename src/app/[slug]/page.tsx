import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useMDXComponents } from "@/../mdx-components";
import { source } from "@/lib/source";

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = source.getPage([params.slug]);

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <article className="container max-w-3xl py-12 prose prose-invert mx-auto">
      <header className="mb-8">
        <h1 className="text-xl font-bold mb-2">{page.data.title}</h1>
        {page.data.description && (
          <p className="text-muted-foreground text-lg">{page.data.description}</p>
        )}
      </header>
      <MDX components={useMDXComponents({})} />
    </article>
  );
}

export async function generateStaticParams() {
  return source.generateParams().map((params) => ({
    slug: params.slug[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

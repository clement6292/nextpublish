import { notFound } from "next/navigation";

const docs: Record<string, string> = {
  "getting-started": "Bienvenue dans la documentation de NextPublish.",
  "app-router": "Le App Router est la nouvelle approche du routage dans Next.js.",
  "routing/dynamic-routes":
    "Les routes dynamiques permettent de créer des pages flexibles.",
};

export default async function DocsSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const path = slug.join("/");

  const content = docs[path];

  if (!content) {
    notFound();
  }

  return (
    <article className="space-y-4">
      <h1 className="text-xl font-semibold">
        {slug.join(" / ")}
      </h1>

      <p className="text-neutral-700">
        {content}
      </p>
    </article>
  );
}

import { notFound } from "next/navigation";

const articles = [
  {
    id: "123",
    title: "Découvrir l’App Router de Next.js",
    content:
      "L’App Router introduit une nouvelle manière de structurer les applications Next.js...",
  },
  {
    id: "456",
    title: "Layouts et navigation dans Next.js",
    content:
      "Les layouts permettent de partager une interface commune entre plusieurs pages...",
  },
  {
    id: "789",
    title: "Pages dynamiques et SEO",
    content:
      "Les pages dynamiques jouent un rôle clé dans le référencement naturel...",
  },
];

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound(); // déclenche articles/not-found.tsx
  }

  return (
    <article className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">
          {article.title}
        </h1>
      </header>

      <p className="text-neutral-700 leading-relaxed">
        {article.content}
      </p>
    </article>
  );
}
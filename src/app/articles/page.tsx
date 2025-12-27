import Link from "next/link";

const articles = [
  {
    id: "123",
    title: "Découvrir l’App Router de Next.js",
    excerpt: "Comprendre la nouvelle approche du routage avec Next.js.",
  },
  {
    id: "456",
    title: "Layouts et navigation dans Next.js",
    excerpt: "Structurer une application moderne avec des layouts imbriqués.",
  },
  {
    id: "789",
    title: "Pages dynamiques et SEO",
    excerpt: "Créer des pages dynamiques performantes et bien référencées.",
  },
];

export default function ArticlesPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">
          Articles
        </h1>
        <p className="text-neutral-600">
          Retrouvez ici l’ensemble des articles publiés sur NextPublish.
        </p>
      </header>

      <ul className="space-y-4">
        {articles.map((article) => (
          <li
            key={article.id}
            className="rounded-lg border border-neutral-200 p-4 hover:bg-neutral-50 transition"
          >
            <Link
              href={`/articles/${article.id}`}
              className="block space-y-1"
            >
              <h2 className="text-lg font-medium">
                {article.title}
              </h2>
              <p className="text-sm text-neutral-600">
                {article.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
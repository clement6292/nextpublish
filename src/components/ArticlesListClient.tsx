"use client";
import { useState } from "react";
import ArticlesFilter from "./ArticlesFilter";
import Link from "next/link";
import { Article } from "@/types/article.type";


type Props = {
  articles: Article[];
};

export default function ArticlesListClient({ articles }: Props) {
  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="space-y-6">
      <ArticlesFilter value={query} onChange={setQuery} />

      {filteredArticles.map((article) => (
        <article
          key={article.id}
          className="rounded-lg border border-neutral-200 p-4"
        >
          <h2 className="text-lg font-semibold">
            <Link
              href={`/articles/${article.id}`}
              className="hover:underline"
            >
              {article.title}
            </Link>
          </h2>

          <p className="text-neutral-600 mt-2">
            {article.excerpt}
          </p>
        </article>
      ))}
    </section>
  );
}
import Link from "next/link";

export default function ArticlesNotFound() {
  return (
    <section className="py-24 text-center space-y-6">
      <h2 className="text-2xl font-semibold text-neutral-900">
        Article introuvable
      </h2>

      <p className="text-neutral-600">
        Cet article n’existe pas ou a été supprimé.
      </p>

      <Link
        href="/articles"
        className="text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
      >
        Voir tous les articles
      </Link>
    </section>
  );
}
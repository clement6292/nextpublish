`src/app/docs/page.tsx`
```tsx
import Link from "next/link";

export default function DocsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Documentation
      </h1>

      <p className="text-neutral-600">
        Guides et ressources autour de NextPublish.
      </p>

      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/docs/getting-started" className="underline">
            Bien démarrer
          </Link>
        </li>
        <li>
          <Link href="/docs/app-router" className="underline">
            App Router
          </Link>
        </li>
        <li>
          <Link href="/docs/routing/dynamic-routes" className="underline">
            Routage dynamique
          </Link>
        </li>
      </ul>
    </section>
  );
}

```

`src/app/docs/[...slug]/page.tsx`

```tsx
import { notFound } from "next/navigation";

const docs = {
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

```
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
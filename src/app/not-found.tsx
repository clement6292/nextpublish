import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-3xl font-semibold text-neutral-900">
          Page introuvable
        </h1>

        <p className="text-neutral-600">
          La page que vous cherchez n’existe pas ou a été déplacée.
        </p>

        <Link
          href="/"
          className="inline-block rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800 transition"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
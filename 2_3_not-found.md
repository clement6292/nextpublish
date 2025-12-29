## Pages 404 personnalisées dans NextPublish

Next.js permet de définir des pages **`not-found.tsx` spécifiques par segment de route** et une **page 404 globale**.

C’est un point clé de l’App Router.

---

## 1. 404 globale (toutes les routes)

### Emplacement `src/app/not-found.tsx`

```bash

### Rôle
- s’affiche pour toute route inconnue
- sert de fallback général
- respecte le layout racine

---

### Code — `src/app/not-found.tsx`

```tsx
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

```
___

## 2. 404 spécifique aux articles
**Emplacement**
```bash
src/app/articles/not-found.tsx
```

```tsx
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

```

___

## 3. 404 spécifique au dashboard
**Emplacement**
```bash
src/app/dashboard/not-found.tsx
```

```tsx
import Link from "next/link";

export default function DashboardNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 space-y-6">
      <h2 className="text-xl font-semibold text-neutral-900">
        Section indisponible
      </h2>

      <p className="text-neutral-600 text-sm">
        Cette section du dashboard n’existe pas.
      </p>

      <Link
        href="/dashboard"
        className="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100 transition"
      >
        Retour au dashboard
      </Link>
    </div>
  );
}
```
___

✅ Résumé — fonctionnement réel des 404 dans l’App Router

1. `not-found.tsx` n’est jamais déclenché automatiquement par l’URL
2. Next.js **ne déduit pas** qu’une ressource n’existe pas
3. Une 404 par segment (articles, dashboard, etc.) s’affiche uniquement si `notFound()` **est appelé**
4. `notFound()` doit être appelé dans une page ou un layout existant du segment
5. Une URL qui ne correspond à **aucun fichier** `page.tsx` affiche toujours la **404 globale**

👉 **Conclusion**

> Les 404 par segment sont **liées aux données**, pas aux routes manquantes.
> **Un** `not-found.tsx` **ne remplace pas une route manquante**.
> **Il remplace une route valide dont les données sont invalides**.

___

Code — `app/articles/[id]/page.tsx`

```tsx
import { notFound } from "next/navigation";

// Règle métier
  if (id !== "123") {
    notFound(); // déclenche articles/not-found.tsx
  }
```

___ 

> https://nextjs.org/docs/app/api-reference/file-conventions/not-found
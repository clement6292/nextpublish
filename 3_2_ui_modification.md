🧩 **Ce qu’on va créer MAINTENANT**
1️⃣ **Un Header réel (composant partagé)**

👉 Objectifs pédagogiques :
* comprendre où placer un composant partagé
* utiliser `Link`
* voir l’impact du layout racine

Composant :
```css
src/components/Header.tsx
```

Contenu :
* Logo / nom du projet
* Liens :
  * Accueil
  * Articles
  * Dashboard

➡️ Première vraie brique de l’app.
---

2️⃣ **Un layout racine qui structure l’app**

👉 On ne “parle” plus du layout : **on l’utilise vraiment**.
* injection du Header
* structure `<main>`
* cohérence visuelle globale

➡️ Là, l’étudiant voit ce qu’est un layout.
---

3️⃣ **Une page Articles “vivante” (sans données encore)**
👉 Pas de fetch.
👉 Pas de backend.
👉 Juste du contenu statique structuré.

Exemples :
cartes d’articles
liens dynamiques factices (`/articles/123`)
navigation réelle

➡️ On travaille :
* `Link`
* routes dynamiques
* UX
* organisation des composants
---

4️⃣ **Des composants UI simples et réutilisables**

Exemples :
* `ArticleCard`
* `Container`
* `Button` (optionnel)

👉 Objectifs :
* séparer logique / affichage
* préparer l’arrivée des données
* éviter les pages “monolithiques”
---

5️⃣ **Navigation réelle dans toute l’app**

À la fin de cette étape :
* on peut naviguer partout
* les URLs sont propres
* les pages dynamiques fonctionnent
* les 404 sont maîtrisées

➡️ Le projet ressemble déjà à une vraie app.
---

🧠 Ce qu’on apprend sans même s’en rendre compte

| Concept             | Appris via             |
| ------------------- | ---------------------- |
| App Router          | Structure des dossiers |
| Layout              | Header partagé         |
| Link                | Navigation             |
| Routes dynamiques   | Articles               |
| Organisation projet | Components / app       |
---

#### Arborescence cible

```lua
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Header.tsx
```


👉 Le dossier components est **hors de** `app` :
* composants UI réutilisables
* indépendants du routage
---

#### **Création du composant Header**
`src/components/Header.tsx`

```tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900"
        >
          NextPublish
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/articles"
            className="text-neutral-600 hover:text-neutral-900 transition"
          >
            Articles
          </Link>

          <Link
            href="/dashboard"
            className="text-neutral-600 hover:text-neutral-900 transition"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
```
---

#### Intégration dans le layout racine
`src/app/layout.tsx`

```tsx
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-5xl px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
```
---

**Règle clé à retenir** 
> Tout ce qui est commun à plusieurs pages
doit vivre dans un layout ou un composant partagé.
---

#### **Contenu de la page /articles**
`src/app/articles/page.tsx`

```tsx
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
```
---

#### Page dynamique Article
`src/app/articles/[id]/page.tsx`

```tsx
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

```
---
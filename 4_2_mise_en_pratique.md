### Mise en pratique — Server → Client 

**Étape 1 — ArticlesList (Server Component)**
**Objectif**

- Créer un composant Server
- `async`
- responsable uniquement de l’affichage des articles
- sans interactivité
- sans `"use client"`

👉 Ici, on voit concrètement l’intérêt des Server Components.
---

1️⃣ Où placer ArticlesList

On va suivre l’architecture saine définie plus tôt.

📁 **Composant lié au contenu → hors du routage (app)**

```lua
components/
├─ ArticlesList.tsx
```

Ce composant :

* n’est pas une page
* n’est pas un layout
* peut être réutilisé ailleurs
* reste indépendant du routage
---

2️⃣ ArticlesList — Server Component async
📄 Mise à disposition du fichier **data/articles.ts**


📄 **types/article.type.ts**

```lua
types/
├─ article.type.ts
```

```tsx
export type Article = {
  id: string;
  title: string;
  excerpt: string;
}
```
---

📄 **components/ArticlesList.tsx**
```tsx
import { Article } from "@/types/article.type";
import { getArticles } from "@/utils/article.util";
import Link from "next/link";

export default async function ArticlesList() {
  const articles = await getArticles();

  return (
    <section className="space-y-6">
      {articles.map((article: Article) => (
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
```

📄 **app/articles/page.tsx**
```tsx
export default function ArticlesPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-8">
        Articles
      </h1>

      <ArticlesList />
    </>
  );
}
```

📄 **utils/article.util.ts**

```tsx
import  articles  from "@/data/articles";
import { Article } from "../types/article.type";

export async function getArticles(): Promise<Article[]> {
  // Données mockées (pour l’instant)
  return articles;
}
```
---
3️⃣ Pourquoi c’est un vrai Server Component

✔ pas de `"use client"`
✔ composant `async`
✔ données récupérées avant rendu
✔ aucune logique côté navigateur
✔ aucun JavaScript inutile envoyé

👉 Le navigateur reçoit du HTML prêt à afficher.
---

**Étape 2 — Filtre côté client (Client Component)**
**Objectif pédagogique**

* Introduire un Client Component
* Utiliser "use client" pour une vraie raison
* Ajouter de l’interactivité sans transformer toute la page en client
* Voir **comment un Client Component s’appuie sur des données serveur**

👉 Règle d’or :

> Les données viennent du serveur,
> le filtre vit côté client.
---

**Principe d’architecture (très important)**

On **ne rend pas** `ArticlesList` client ❌
On crée :
* un **Server Component** qui fournit les données
* un **Client Component** qui gère l’interaction

👉 C’est exactement le modèle recommandé par Next.js.
---

**Nouveau composant : `ArticlesFilter` (Client)**

**📁 components/ArticlesFilter.tsx**

```tsx
"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ArticlesFilter({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Filtrer les articles..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
    />
  );
}
```

**Pourquoi c’est un Client Component**

* `"use client"`
* `onChange`
* interaction utilisateur
* state à venir
--- 

**Nouveau composant : ArticlesListClient**
📄 **components/ArticlesListClient.tsx**

```tsx
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
```
---

**Adapter `ArticlesList` (Server → Client boundary)**

On transforme `ArticlesList` pour :

* récupérer les données côté serveur
* déléguer le filtrage au client

📄 **components/ArticlesList.tsx**

```tsx
export default async function ArticlesList() {
  const articles = await getArticles();

  return <ArticlesListClient articles={articles} />;
}
```
---

**Ce qu’on vient de faire (très important)**
🧱 **Séparation parfaite des responsabilités**

| Partie              | Type             | Rôle                     |
| ------------------- | ---------------- | ------------------------ |
| `ArticlesList`       | Server Component | Récupère les données     |
| `ArticlesListClient` | Client Component | Gère l’état et le filtre |
| `ArticlesFilter`     | Client Component | Interaction utilisateur  |

👉 Le serveur fournit, le client interagit.
---

**Pourquoi cette approche est exemplaire**
* ✔ données sécurisées côté serveur
* ✔ JavaScript limité au strict nécessaire
* ✔ architecture claire
* ✔ évolutif (cache, DB, ISR plus tard)
* ✔ conforme aux bonnes pratiques Next.js
---

**À retenir absolument**
> **On ne rend jamais un composant client “par facilité”**.
> On isole l’interactivité dans de petits composants dédiés.
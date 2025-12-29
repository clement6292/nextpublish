## 3. Routage avancé avec l’App Router

Dans cette partie, nous allons approfondir le système de routage de Next.js à travers l’**App Router**, en construisant progressivement la navigation de notre projet **NextPublish**.

L’objectif est double :
- comprendre les concepts fondamentaux du routage
- les appliquer dans un projet réel, sans exemples artificiels

---

### 3.1 Navigation avec `Link`

Next.js fournit le composant `Link` pour naviguer entre les pages **sans rechargement complet**.

👉 Il permet :
- une navigation fluide
- la préservation de l’état
- une meilleure performance

Exemple :

```tsx
import Link from "next/link";

<Link href="/articles">Voir les articles</Link>
```
---

### 3.2 Routes imbriquées

Avec l’App Router, la structure des dossiers définit les routes.

Exemple :

```css
app/
├── page.tsx              → /
├── articles/
│   ├── page.tsx          → /articles
│   └── [id]/
│       └── page.tsx      → /articles/123

```

👉 Chaque dossier représente un segment de route.
👉 Les layouts peuvent être imbriqués pour structurer l’interface.

> https://nextjs.org/docs/app/getting-started/layouts-and-pages#rendering-with-search-params
---

### 3.3 Routes dynamiques ([slug])

Les routes dynamiques permettent de créer des pages à partir d’un paramètre.

Exemple :

```bash
app/articles/[id]/page.tsx
```

URL correspondante :

```bash
/articles/123
```

Le paramètre est accessible via `params`.

Avec Next.js 15 :

```tsx
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <h1>Article {id}</h1>;
}
```

Les routes dynamiques sont essentielles pour :

  * les articles
  * les profils utilisateurs
  * les pages de contenu
---

### 3.4 Routes catch-all

Les routes catch-all permettent de capturer un nombre variable de segments.

Exemple :
```bash
app/docs/[...slug]/page.tsx
```

URLs possibles :

```bash
/docs
/docs/getting-started
/docs/nextjs/app-router
```

Le paramètre devient un tableau :

```ts
slug: string[]
```

Utile pour :
  * documentation
  * arborescences de contenu
  * pages hiérarchiques
---
👉 Ajouter une section Documentation / Pages publiques

1️⃣ Structure catch-all
```css
src/app/docs/
├── page.tsx              → /docs
└── [...slug]/
    └── page.tsx          → /docs/*
```

👉 Le projet reste intact.

2️⃣ Page racine /docs

3️⃣ Catch-all /docs/*
---


### 3.5 Extraction des paramètres (`params` et `searchParams`)

Deux types de paramètres existent :

`params`
* provient de l’URL
* défini par les dossiers dynamiques

`searchParams`
* provient de la query string
* ex : `/articles?page=2`

Exemple :

```tsx
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;

  return <p>Page {page}</p>;
}
```
---

### 3.6 Gestion des pages non trouvées (not-found.tsx)

Next.js permet de définir des pages 404 :

* globales
* ou spécifiques à un segment

⚠️ Important :

> Un `not-found.tsx` s’affiche **uniquement si** `notFound()` **est appelé**.

Exemple :
```tsx
import { notFound } from "next/navigation";

if (!articleExists) {
  notFound();
}
```

Cela déclenchera :
```bash
app/articles/not-found.tsx
```

Les 404 par segment sont liées aux **données**, pas aux routes manquantes.

---

### 3.7 Organisation du routage dans un projet réel

Dans **NextPublish**, le routage est organisé par domaine fonctionnel :

```css
app/
├── page.tsx
├── articles/
│   ├── page.tsx
│   ├── not-found.tsx
│   └── [id]/
│       └── page.tsx
├── dashboard/
│   ├── page.tsx
│   └── not-found.tsx
```

👉 Cette organisation permet :

* une meilleure lisibilité
* une évolution simple du projet
* une UX cohérente

---
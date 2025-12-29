## Correction – Exercice `page.tsx` et `layout.tsx` (NextPublish)

Cette correction est conforme au projet **NextPublish** :
- interface sobre type Notion
- séparation claire public / dashboard
- layouts persistants
- styles intégrés via Tailwind CSS

---

## 1. Arborescence finale validée

```lua
app/
├─ layout.tsx
├─ globals.css
├─ page.tsx
├─ about/
│ └─ page.tsx
├─ articles/
│ ├─ layout.tsx
│ ├─ page.tsx
│ └─ [id]/
│   └─ page.tsx
├─ dashboard/
│ └─ articles/
│   └─ page.tsx
└─ profile/
│ └─ page.tsx
│ ├─ layout.tsx
│ └─ page.tsx
```

---

## 2. Styles globaux (`app/globals.css`)
Installation et configuration de Tailwind CSS
```css
@import 'tailwindcss';

body {
  @apply bg-neutral-50 text-neutral-800;
}

```

---

## 3. Layout global – structure de base

`app/layout.tsx`

```tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <header className="border-b bg-white px-6 py-4">
          <h1 className="text-lg font-semibold">NextPublish</h1>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
```

---

## 4. Pages publiques
**Accueil** – `app/page.tsx`

```tsx
export default function HomePage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Bienvenue sur NextPublish</h2>
      <p className="text-neutral-600">
        Une plateforme de publication de contenus simple et moderne.
      </p>
    </section>
  );
}
```

---

**À propos** – `app/about/page.tsx`

```tsx
export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">À propos</h2>
      <p className="text-neutral-600">
        NextPublish est un projet pédagogique construit avec Next.js.
      </p>
    </section>
  );
}
```

---
## 5. Section Articles (publique)

**Layout Articles** – `app/articles/layout.tsx`

```tsx
export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Articles</h2>
      <div className="rounded-lg border bg-white p-6">
        {children}
      </div>
    </section>
  );
}
```
Layout partagé entre la liste et le détail.
---

**Liste des articles** – `app/articles/page.tsx`
```tsx
export default function ArticlesPage() {
  return (
    <ul className="space-y-2 text-neutral-700">
      <li>Article 1</li>
      <li>Article 2</li>
      <li>Article 3</li>
    </ul>
  );
}
```
---

**Détail d’un article** – `app/articles/[id]/page.tsx`

```tsx
export default async function ArticlePage({ params }: { params: Promise<{ id: string }>; }) {

  const { id } = await params;
  
  return (
    <article className="space-y-4">
      <h3 className="text-lg font-semibold">
        Article #{id}
      </h3>
      <p className="text-neutral-600">
        Contenu détaillé de l’article.
      </p>
    </article>
  );
}
```
---
## 6. Section Dashboard (utilisateurs authentifiés)
 
**Layout Dashboard** – `app/dashboard/layout.tsx`
```tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[70vh] gap-6">
      <aside className="w-56 rounded-lg border bg-white p-4">
        <nav className="space-y-2 text-sm">
          <p className="font-medium">Dashboard</p>
          <ul className="space-y-1 text-neutral-600">
            <li>Accueil</li>
            <li>Articles</li>
            <li>Profil</li>
          </ul>
        </nav>
      </aside>

      <section className="flex-1 rounded-lg border bg-white p-6">
        {children}
      </section>
    </div>
  );
}
```
Sidebar persistante, base du back-office.
---

**Accueil Dashboard** – `app/dashboard/page.tsx`
```tsx
export default function DashboardPage() {
  return <h2 className="text-xl font-semibold">Dashboard</h2>;
}
```
---
**Dashboard Articles** – `app/dashboard/articles/page.tsx`

```tsx
export default function DashboardArticlesPage() {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">Gestion des articles</h2>
      <p className="text-neutral-600">
        Créer, modifier et supprimer des articles.
      </p>
    </section>
  );
}
```
---

**Profil utilisateur** – `app/dashboard/profile/page.tsx`
```tsx
export default function ProfilePage() {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">Mon profil</h2>
      <p className="text-neutral-600">
        Informations personnelles de l’utilisateur.
      </p>
    </section>
  );
}
```





### 4.5 Quand utiliser `"use client"`

Dans une application Next.js (App Router), la directive `"use client"` ne doit **pas** être utilisée par réflexe.  
Elle doit répondre à un **besoin précis d’exécution côté navigateur**.

---

## 🔹 Cas obligatoires

L’utilisation de `"use client"` est **obligatoire** dès que le composant utilise :

- un hook React :
  - `useState`
  - `useEffect`
  - `useContext`
  - `useReducer`
- des événements utilisateur :
  - `onClick`
  - `onChange`
  - `onSubmit`
- l’API du navigateur :
  - `window`
  - `document`
  - `localStorage`
- une librairie dépendante du DOM (charts, animations, etc.)

👉 Sans `"use client"`, ces fonctionnalités **ne fonctionneront pas**.

---

## 🔹 Cas fréquents dans une application réelle

Dans un projet comme **NextPublish**, on utilise `"use client"` pour :

- formulaires (login, inscription, création d’article)
- filtres et barres de recherche
- boutons interactifs (like, favoris, menu)
- modales
- toggles, dropdowns, accordéons

Exemple typique :

```ts
"use client";

import { useState } from "react";

export default function Toggle() {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen(!open)}>
      {open ? "Fermer" : "Ouvrir"}
    </button>
  );
}
```
---

**Bonnes pratiques**

✅ Commencer **sans** `"use client"`
✅ Ajouter `"use client"` **seulement quand c’est nécessaire**
✅ Isoler l’interactivité dans des composants dédiés
✅ Laisser la récupération des données au serveur

Bonne approche :

> Un Server Component appelle un Client Component,
mais pas l’inverse.
---

**Erreurs courantes à éviter**

❌ Mettre `"use client"` dans un layout global sans raison
❌ Transformer une page entière en Client Component
❌ Récupérer des données sensibles côté client
❌ Utiliser `"use client"` « au cas où »

Exemple à éviter :

```tsx
"use client";
// ❌ inutile ici
export default function ArticlePage() {
  return <h1>Article</h1>;
}

```
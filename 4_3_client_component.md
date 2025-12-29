## 4.3 Qu’est-ce qu’un Client Component

Dans Next.js (App Router), les composants sont **par défaut des Server Components**.  
Un **Client Component** est un composant qui s’exécute **dans le navigateur** et permet d’ajouter de l’interactivité à l’application.

---

### 🔹 La directive `"use client"`

Pour transformer un composant en Client Component, il faut **obligatoirement** ajouter la directive suivante **tout en haut du fichier** :

```ts
"use client";
```

Cette directive :
* doit être la **première ligne** du fichier
* marque une **frontière claire** entre le serveur et le client
* indique à Next.js que le composant sera exécuté côté navigateur

Sans `"use client"`, un composant ne peut pas utiliser :
* les hooks React (`useState`, `useEffect`, etc.)
* les événements (`onClick`, `onChange`, …)
* l’API du navigateur (`window`, `document`, …)
---

**Exécution dans le navigateur**

Un Client Component :
* est **envoyé au navigateur**
* est exécuté **après l’hydratation**
* permet des mises à jour dynamiques sans rechargement de page

Exemples de cas d’usage :
* formulaire
* bouton interactif
* filtre de recherche
* menu déroulant
---

**Interactivité et hooks React**

Les Client Components sont indispensables dès que l’on a besoin de :
* `useState` → gérer un état local
* `useEffect` → effets côté client
* gestion d’événements utilisateur

Exemple :
```tsx
"use client";

import { useState } from "react";

export default function ArticleFilter() {
  const [query, setQuery] = useState("");

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Rechercher un article..."
    />
  );
}
```
👉 Ce code ne peut pas fonctionner dans un Server Component.
---

**Impact sur le bundle JavaScript**

Les Client Components :
* sont **inclus dans le bundle JavaScript**
* augmentent la quantité de JS envoyée au navigateur

Bonne pratique :
* limiter les Client Components au strict nécessaire
* préférer des Server Components pour :
  * récupération de données
  * affichage statique
  * logique métier

Stratégie recommandée :

> Server Components pour la structure et les données
> Client Components pour l’interaction
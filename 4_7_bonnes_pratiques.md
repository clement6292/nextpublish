### 4.7 Bonnes pratiques de découpage

Une bonne application Next.js repose sur un **découpage clair entre Server Components et Client Components**.  
Ce découpage conditionne directement les performances, la maintenabilité et l’évolutivité du projet.

---

## 🔹 Architecture recommandée

Principe fondamental :

> **Le serveur gère les données et la structure**  
> **Le client gère l’interaction**

Architecture type :

- Pages et layouts → Server Components
- Chargement des données → Server Components
- Composants interactifs ciblés → Client Components
- UI statique → Server Components

👉 Cette séparation permet de garder :
- un bundle JavaScript minimal
- une logique métier sécurisée

---

## 🔹 Principe des "Client leaf components"

Un **Client leaf component** est un composant client :
- situé **au plus bas de l’arbre**
- sans enfant Server Component
- responsable uniquement de l’interaction

Règle :
> Plus un composant est bas dans l’arbre, plus il est légitime d’être client.

Exemple :
- `ArticlePage` → Server
  - `ArticleList` → Server
    - `ArticleFilter` → Client (leaf)

👉 Le reste de l’arbre reste serveur.

---

## 🔹 Composition Server → Client

Un Server Component peut **importer et utiliser** un Client Component.

✔️ Autorisé :
```ts
// Server Component
import ArticleFilter from "./ArticleFilter";

export default function ArticleList({ articles }) {
  return (
    <>
      <ArticleFilter />
      {/* rendu serveur */}
    </>
  );
}
```

❌ Interdit :

* Client Component → Server Component
* passage de fonctions serveur au client

📌 Le flux doit toujours être :

> Server → Client
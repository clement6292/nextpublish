### 4.6 Limitations et pièges courants

L’architecture Server / Client Components apporte de nombreux avantages, mais elle impose aussi **des règles strictes**.  
Ignorer ces limitations est l’une des principales sources de bugs en Next.js.

---

## 🔹 Hydratation

L’hydratation est le processus par lequel React :
- associe le HTML généré côté serveur
- avec le JavaScript exécuté côté client

📌 Problème courant :
- le rendu serveur ≠ rendu client
- → erreur d’hydratation

Exemples de causes fréquentes :
- utilisation de `Math.random()`
- dates générées côté client
- accès à `window` sans `"use client"`

👉 Règle :
> Le rendu initial doit être **identique** côté serveur et client.

---

## 🔹 Props sérialisables

Un Server Component **ne peut passer au Client Component que des props sérialisables**.

✅ Autorisé :
- string
- number
- boolean
- array
- object JSON

❌ Interdit :
- fonctions
- instances de classe
- objets complexes (Date, Map, Set)

Exemple invalide :

```ts
// ❌ interdit
<ClientComponent onClick={() => console.log("click")} />
```

👉 Les fonctions doivent être définies dans le Client Component lui-même.
---

**Passage de fonctions entre composants**

Règle stricte :

> Un Server Component **ne peut pas **passer de fonction à un Client Component.

Pourquoi ?

* les Server Components ne sont jamais envoyés au navigateur
* une fonction serveur ne peut pas être exécutée côté client

Bonne approche :

* Server Component → données
* Client Component → logique interactive
---

**Surutilisation des Client Components**

Erreur très fréquente chez les débutants :

```tsx
"use client"; // ❌ inutile
export default function Page() {
  return <h1>Page</h1>;
}
```

Conséquences :

* bundle JavaScript plus lourd
* performances dégradées

perte des bénéfices des Server Components

Bonne pratique :

> Commencer **toujours en Server Component**
Passer en Client Component uniquement si nécessaire
---


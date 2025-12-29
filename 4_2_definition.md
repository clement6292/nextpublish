### 4.2 Qu’est-ce qu’un Server Component

Dans Next.js (avec l’App Router), un **Server Component** est un composant React qui :
- s’exécute **uniquement sur le serveur**
- n’envoie **pas de JavaScript** au navigateur (sauf ce qui est strictement nécessaire)
- est le **type de composant par défaut**

👉 Si tu ne fais rien de spécial, ton composant est **un Server Component**.

---

#### Où s’exécute un Server Component ?

Un Server Component :
- est exécuté sur le serveur Node.js (ou Edge)
- génère du HTML
- envoie ce HTML au navigateur

Le navigateur :
- affiche le résultat
- n’exécute pas le composant lui-même

---

#### Ce qu’un Server Component peut faire

Un Server Component peut :

- accéder directement à une base de données
- appeler des APIs internes
- lire des variables d’environnement
- effectuer des calculs lourds
- utiliser `async / await` directement dans le composant

Exemple typique :
- récupérer une liste d’articles
- afficher une page de contenu
- construire un layout

---

#### Ce qu’un Server Component ne peut PAS faire

Un Server Component ne peut pas :

- utiliser les hooks React côté client :
  - `useState`
  - `useEffect`
  - `useRef`
- gérer des événements utilisateur :
  - `onClick`
  - `onChange`
  - `onSubmit`
- accéder au `window`, `document`, `localStorage`

👉 Tout ce qui nécessite une interaction utilisateur **doit être délégué à un Client Component**.

---

#### Server Component ≠ SSR classique

Il est important de ne pas confondre :

- **Server Components**
- **Server Side Rendering (SSR)**

Un Server Component :
- est un concept React
- concerne **où le composant est exécuté**

Le SSR :
- est une stratégie de rendu
- concerne **quand le rendu a lieu**

👉 Les deux peuvent fonctionner ensemble, mais ce sont deux notions différentes.

---

#### Pages et layouts : des Server Components

Dans l’App Router :
- `page.tsx`
- `layout.tsx`

sont :
- des **Server Components par défaut**
- parfaitement adaptés pour :
  - structurer l’application
  - charger des données
  - poser la logique globale

---

#### Exemple mental simple

> Un Server Component est un composant React  
> qui prépare l’interface **avant** qu’elle n’arrive dans le navigateur.

Le navigateur reçoit :
- du HTML prêt à afficher
- sans logique sensible
- sans JavaScript inutile

---

#### Point clé à retenir

- Les Server Components sont la base de Next.js
- Ils améliorent :
  - performances
  - sécurité
  - SEO
- Ils doivent être privilégiés partout où l’interactivité n’est pas requise

---

Dans le point suivant, nous verrons :
👉 **ce qu’est un Client Component**,  
👉 **ce que change la directive `"use client"`**,  
👉 et pourquoi elle doit être utilisée avec parcimonie.

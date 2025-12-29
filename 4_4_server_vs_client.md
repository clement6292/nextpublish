### 4.4 Server Components vs Client Components

Dans Next.js (App Router), comprendre la différence entre **Server Components** et **Client Components** est fondamental pour construire une application performante, sécurisée et maintenable.

---

## 🔹 Comparaison des responsabilités

### Server Components
Responsables de :
- la récupération des données (API, base de données)
- la logique métier
- le rendu initial des pages
- la sécurité (tokens, accès BDD)

👉 Ils constituent la **structure principale** de l’application.

### Client Components
Responsables de :
- l’interactivité
- la gestion des états locaux
- les événements utilisateur
- les animations et effets visuels

👉 Ils enrichissent l’interface sans alourdir le serveur.

---

## 🔹 Différences d’exécution

| Aspect | Server Components | Client Components |
|------|------------------|------------------|
| Lieu d’exécution | Serveur | Navigateur |
| Directive requise | Aucune | `"use client"` |
| Accès à la BDD | ✅ Oui | ❌ Non |
| Hooks React | ❌ Non | ✅ Oui |
| Bundle JavaScript | ❌ Non | ✅ Oui |
| SEO | ✅ Excellent | Dépend du rendu |

---

## 🔹 Avantages et inconvénients

### Server Components

✅ Avantages :
- performances élevées
- bundle JavaScript réduit
- meilleure sécurité
- accès direct aux ressources serveur

❌ Inconvénients :
- pas d’interactivité
- pas d’accès aux APIs du navigateur

---

### Client Components

✅ Avantages :
- interactivité riche
- expérience utilisateur fluide
- gestion fine des états

❌ Inconvénients :
- bundle JavaScript plus lourd
- logique exposée côté client
- dépend de l’hydratation

---

## 🔹 Cas d’usage typiques

### Utiliser un Server Component pour :
- une page d’articles
- un dashboard statique
- une sidebar de navigation
- le chargement de données depuis MongoDB

### Utiliser un Client Component pour :
- un formulaire
- un filtre de recherche
- un bouton (like, favoris)
- une modale

---

## Règle d’or Next.js

> **Tout est Server Component par défaut**  
> Passe en Client Component **uniquement quand l’interactivité est nécessaire**

---


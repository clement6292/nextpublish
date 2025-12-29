## Exercice – Comprendre `page.tsx` et `layout.tsx` avec des routes imbriquées

### Objectif

L’objectif de cet exercice est de comprendre :
- comment Next.js génère les routes à partir des dossiers
- le rôle des fichiers `page.tsx`
- le rôle des fichiers `layout.tsx`
- le fonctionnement des layouts imbriqués
- la persistance des layouts lors de la navigation

---

## Contexte

Tu travailles sur l’application **NextPublish**.

L’application contient :
- une partie publique
- une partie dashboard réservée aux utilisateurs connectés

Chaque partie possède sa propre structure visuelle.

---

## Routes attendues

Tu dois obtenir les routes suivantes :

| URL | Contenu |
|----|--------|
| `/` | Page d’accueil |
| `/about` | Page À propos |
| `/articles` | Liste des articles |
| `/articles/123` | Détail d’un article |
| `/dashboard` | Accueil du dashboard |
| `/dashboard/articles` | Gestion des articles |
| `/dashboard/profile` | Profil utilisateur |

---

## Contraintes de layout

### Layout global

- Présent sur **toutes les pages**
- Contient :
  - un header avec le nom du site
  - une zone de contenu `{children}`

---

### Layout Articles

- Appliqué uniquement aux routes `/articles`
- Contient :
  - un titre "Articles"
  - la liste ou le contenu des articles

---

### Layout Dashboard

- Appliqué uniquement aux routes `/dashboard`
- Contient :
  - une sidebar
  - une zone principale pour le contenu

---

### 2. Implémenter les fichiers `page.tsx`

Chaque `page.tsx` doit :
- retourner un simple texte indiquant la page courante
- permettre d’identifier clairement la route visitée

Exemple :
```tsx
export default function Page() {
  return <h1>Dashboard – Profil</h1>;
}
```
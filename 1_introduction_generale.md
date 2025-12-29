# 1️⃣ Introduction générale à Next.js

## 1.1 Qu’est-ce que Next.js ?

**Next.js** est un framework **React fullstack** permettant de créer des applications web modernes, performantes et optimisées pour le référencement.

Il est maintenu par **Vercel** et repose sur React, tout en apportant :
- un système de routage avancé,
- plusieurs stratégies de rendu,
- des optimisations automatiques,
- et une approche moderne du développement web.

👉 Next.js n’est pas un simple outil de rendu :  
c’est une **plateforme complète pour construire des applications web**.

---

## 1.2 Pourquoi Next.js a été créé ?

### Les limites des applications React classiques (SPA)

Avant Next.js, React était principalement utilisé pour créer des **Single Page Applications (SPA)**.  
Ces applications présentent plusieurs limites :

- ❌ Mauvais SEO par défaut (HTML vide au chargement)
- ❌ Temps de chargement initial élevé
- ❌ Gros bundle JavaScript envoyé au navigateur
- ❌ Logique backend souvent séparée (API externe)
- ❌ Complexité croissante pour les projets sérieux

👉 Ces limites deviennent critiques pour :
- les sites orientés contenu
- les applications publiques
- les projets à fort trafic

---

### La réponse de Next.js

Next.js a été créé pour répondre à ces problématiques en proposant :

- du **rendu côté serveur**
- des **pages pré-générées**
- une **architecture hybride**
- un **backend intégré**
- une **expérience développeur améliorée**

---

## 1.3 Next.js : un framework React fullstack

Contrairement à une SPA classique, Next.js permet de gérer **dans un seul projet** :

- le frontend (UI React)
- le backend (API, actions serveur)
- la base de données
- l’authentification
- le SEO
- le déploiement

👉 On parle donc de **framework fullstack**, et non plus seulement de bibliothèque UI.

---

## 1.4 Les différents types de rendu avec Next.js

Next.js propose plusieurs stratégies de rendu, choisies **page par page** :

### 🔹 Static Site Generation (SSG)
- Pages générées à la compilation
- Ultra performantes
- Idéales pour le SEO

### 🔹 Server Side Rendering (SSR)
- Pages générées à chaque requête
- Données toujours à jour
- Plus flexible

### 🔹 Incremental Static Regeneration (ISR)
- Compromis entre SSG et SSR
- Revalidation automatique après un délai

👉 Cette flexibilité est l’un des **grands points forts de Next.js**.

---

## 1.5 L’évolution de Next.js

### Avant Next.js 13
- Pages Router (`pages/`)
- `getStaticProps`, `getServerSideProps`
- Séparation claire frontend / backend

### Next.js moderne (13+)
- **App Router (`app/`)**
- **Server Components par défaut**
- **Server Actions**
- Streaming et rendering progressif
- Meilleures performances et sécurité

👉 Aujourd’hui, l’**App Router est la recommandation officielle**.

---

## 1.6 Pourquoi apprendre Next.js aujourd’hui ?

Next.js est devenu un **standard de l’écosystème React**.

Il est utilisé pour :
- des blogs
- des dashboards
- des plateformes SaaS
- des applications métier
- des sites à fort enjeu SEO

👉 Apprendre Next.js, c’est :
- comprendre le web moderne
- maîtriser le rendu hybride
- écrire moins de JavaScript côté client
- construire des applications robustes et scalables

---

## 1.7 Présentation du projet fil rouge : NextPublish

Tout au long de cette formation, nous allons construire **NextPublish** :

> Une plateforme de publication de contenus, inspirée de Notion et Medium.

### Fonctionnalités finales :
- Consultation de pages publiques
- Authentification des utilisateurs
- Dashboard privé
- Création et édition de contenu
- Publication et partage
- SEO optimisé
- Déploiement en production

👉 Chaque notion Next.js sera introduite **par un besoin concret du projet**.

---

## 1.8 Organisation de la formation

La formation est organisée de manière :
- progressive
- orientée projet
- alignée avec Next.js moderne

Chaque chapitre :
- introduit une notion clé
- l’applique immédiatement dans le projet
- explique les bonnes pratiques

🎯 Objectif final :
> Être capable de concevoir, développer et déployer une application Next.js moderne.

---

## 1.9 Ce que vous devez savoir avant de continuer

Pré-requis recommandés :
- Bases de JavaScript
- Connaissance de React
- Notions de HTML / CSS

👉 Aucune connaissance préalable de Next.js n’est requise.

---

## Conclusion

Next.js est bien plus qu’un framework React :
- c’est une nouvelle façon de penser le rendu web
- une réponse moderne aux limites des SPA
- une solution complète pour les applications actuelles

Dans le prochain chapitre, nous allons **créer le projet NextPublish** et découvrir concrètement **l’App Router**.

➡️ **Chapitre suivant : Démarrage du projet & App Router**

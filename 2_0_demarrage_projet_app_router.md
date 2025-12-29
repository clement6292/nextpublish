# 2️⃣ Démarrage du projet & découverte de l’App Router

## 2.1 Objectif du chapitre

Dans ce chapitre, nous allons :

- créer le projet **NextPublish**
- découvrir la structure d’un projet Next.js moderne
- comprendre le rôle du **App Router**
- mettre en place le **layout global Notion-like**

🎯 À la fin du chapitre :
> L’application tourne, affiche une première page, et possède une structure claire et évolutive.

---

## 2.2 Création du projet Next.js

Next.js fournit un outil officiel pour initialiser un projet.

### Commande de création

```bash
npx create-next-app@latest nextpublish
```

Pendant l’installation, plusieurs questions sont posées.
Voici les choix recommandés pour ce projet :
* TypeScript → Yes
* ESLint → Yes
* Tailwind CSS → No
* src/ directory → Yes
* App Router → Yes
* Import alias (@/*) → Yes
 
👉 Ces choix correspondent aux bonnes pratiques actuelles.

___

## 2.4 Découverte de la structure du projet
Structure simplifiée :

```lua
nextpublish/
├─ src/
│  ├─ app/
│  ├─ styles/
│  └─ ...
├─ public/
├─ package.json
└─ next.config.js
```
Dossiers importants

* `app/` : cœur du routage (App Router)
* `public/` : fichiers statiques (images, icons)
* `src/` : organisation du code source
* `styles/` : styles globaux

👉 Tout ce qui concerne les pages et layouts vit dans `app/`.

___

## 2.5 Le dossier `app/ :` cœur du App Router
Dans `src/app/`, on trouve par défaut :
```css
app/
├─ layout.tsx
├─ page.tsx
├─ globals.css
```

Dans le App Router, **les fichiers `page.tsx` et `layout.tsx` sont les piliers de toute application Next.js**.  
Ils définissent **ce qui est affiché**, **où**, et **comment les pages s’imbriquent entre elles**.

---

> - Dans le dossier `app/` : une route = un dossier
> - chaque dossier représente un segment d’URL
> - une route est **active uniquement si elle contient un fichier `page.tsx`**

---

#### 1. Le fichier `page.tsx`

##### Rôle
Un fichier `page.tsx` :
- représente **une page accessible via une URL**
- est rendu par défaut **côté serveur**
- est le **point d’entrée visuel** d’une route

👉 **Sans `page.tsx`, la route n’existe pas.**

##### Exemple simple

```lua
app/
├─ page.tsx → /
├─ layout.tsx → layout global
├─ about/
│ └─ page.tsx → /about
└─ articles/
    ├─ articles-details/
      └─ page.tsx → /articles/articles-details
  ├─ page.tsx → /articles
  └─ layout.tsx → layout articles
```
---

#### 3. Le fichier `layout.tsx`

##### Rôle
Un fichier `layout.tsx` :
 * définit une **structure persistante**
 * entoure toutes les pages enfants
 * n’est **pas recréé lors de la navigation**

👉 Il est parfait pour :
   * header
   * sidebar
   * footer
   * providers globaux
---
**Exemple de layout global**
```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header> 
            Header global
        </header>
        {children}
      </body>
    </html>
  );
}
// style={{backgroundColor: "blueviolet",color: "white",paddingBlock: "15px"}}
```
---
Exercice 2_1_exercice_page_layout
---

---
Correction 2_1_exercice_page_layout
---

___

## 2.6 Les fichiers réservés par Next.js

Next.js utilise des noms de fichiers réservés pour activer des comportements spécifiques.

Ces noms sont **stricts** :
> ➡️ une faute = fichier ignoré = route cassée

Liste des fichiers réservés (App Router)

| Nom du fichier  | Rôle                              |
| --------------- | --------------------------------- |
| `page.tsx`      | Crée une route accessible         |
| `layout.tsx`    | Définit une structure persistante |
| `template.tsx`  | Layout non persistant             |
| `loading.tsx`   | Écran de chargement               |
| `error.tsx`     | Gestion des erreurs               |
| `not-found.tsx` | Page 404                          |
| `route.ts`      | API route                         |
| `middleware.ts` | Middleware                        |
| `globals.css`   | Styles globaux                    |

**Règle d’or**

> **Si Next.js ne reconnaît pas le nom, il ignore le fichier sans avertissement.**

___

## 2.11 Import alias avec @/

Next.js permet de définir des alias d’import pour éviter les chemins relatifs complexes.

Lors de la création du projet, nous avons activé l’option :

```pgsql
Import alias (@/*)
```

Où est défini l’alias ?

Dans le fichier tsconfig.json :

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
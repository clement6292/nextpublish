### 4.1 Pourquoi Next.js a introduit les Server Components

Pendant longtemps, les applications React ont été majoritairement construites comme des **Single Page Applications (SPA)**, c’est-à-dire :
- tout le rendu se faisait côté client,
- le navigateur téléchargeait beaucoup de JavaScript,
- puis exécutait ce JavaScript pour afficher l’interface.

Cette approche fonctionne, mais elle pose plusieurs **problèmes structurels**.

---

#### 🚨 Les limites du tout-client

##### 1. Trop de JavaScript envoyé au navigateur
Plus une application grandit :
- plus le bundle JavaScript augmente,
- plus le temps de chargement initial est long,
- plus l’expérience utilisateur se dégrade (surtout sur mobile).

---

##### 2. Problèmes de performance
Dans une SPA classique :
- le navigateur doit attendre que le JavaScript soit téléchargé,
- puis exécuté,
- avant d’afficher quoi que ce soit.

Résultat :
- écran blanc au chargement,
- lenteur perçue,
- mauvaise expérience utilisateur.

---

##### 3. Sécurité limitée
Le code exécuté côté client :
- est visible par l’utilisateur,
- ne peut pas accéder directement à la base de données,
- ne doit jamais contenir de logique sensible.

Cela oblige à multiplier :
- les APIs,
- les couches intermédiaires,
- la complexité globale du projet.

---

##### 4. SEO plus complexe
Même si des solutions existent :
- le SEO est plus difficile à optimiser dans une SPA,
- les moteurs de recherche préfèrent du contenu déjà rendu.

---

#### 🎯 La réponse de Next.js

Next.js a introduit les **Server Components** pour répondre à ces problèmes.

L’idée est simple :

> **Tout ce qui n’a pas besoin d’interactivité  
> doit être calculé et rendu côté serveur.**

---

#### ✅ Ce que permettent les Server Components

Grâce aux Server Components, Next.js permet :

- de rendre l’interface **directement sur le serveur**
- de réduire fortement le JavaScript envoyé au navigateur
- d’accéder directement :
  - à la base de données
  - aux APIs internes
  - aux variables d’environnement
- d’améliorer :
  - les performances
  - la sécurité
  - le SEO

---

#### 🔁 Un changement de mentalité

Avant :
> « Tout est un composant React exécuté dans le navigateur »

Avec Next.js (App Router) :
> « Le serveur est le point de départ,  
> le client intervient uniquement si nécessaire »

---

#### 📌 Point clé à retenir

Les Server Components ne sont pas une option secondaire dans Next.js.

👉 **Ils sont le comportement par défaut.**

Les Client Components ne sont utilisés que :
- lorsqu’une interaction est nécessaire
- lorsqu’un état local est requis

---

Dans la suite, nous verrons :
- ce qu’est concrètement un Server Component
- en quoi il diffère d’un Client Component
- comment les utiliser ensemble efficacement dans notre projet

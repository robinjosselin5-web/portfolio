# AGENTS.md

## Vue d’ensemble

Ce projet est une application React avec TypeScript, Vite et Tailwind CSS v4.
La direction visuelle reprend le portfolio de Josselin Robin : interface éditoriale, fond chaud, contraste noir/bleu et accents jaunes.

## Commandes

- `npm.cmd run dev` : lancer le serveur de développement.
- `npm.cmd run build` : vérifier les types et générer le build de production.
- `npm.cmd run lint` : lancer ESLint.
- `npm.cmd run preview` : prévisualiser le build de production.

Les commandes `npm.cmd` sont préférées à `npm` dans PowerShell lorsque la politique d’exécution bloque `npm.ps1`.

## Structure du projet

- `src/main.tsx` : point d’entrée React.
- `src/App.tsx` : composition principale de la page.
- `src/components/` : composants réutilisables, en PascalCase (`Navbar.tsx`).
- `src/index.css` : import Tailwind, tokens globaux et styles de base.
- `src/App.css` : styles spécifiques à l’application si nécessaire.
- `src/assets/` : assets locaux importés par les composants.
- `public/` : fichiers statiques servis tels quels.

## Conventions React et TypeScript

- Utiliser des composants fonctionnels et l’export par défaut existant dans le projet.
- Nommer les composants et leurs fichiers en PascalCase.
- Utiliser des classes Tailwind dans le JSX pour la mise en page et les styles de composants.
- Privilégier les tailles natives Tailwind et une grille basée sur des multiples de `4` (`p-4`, `gap-4`, `text-2xl`, etc.) pour les textes, espacements et dimensions.
- Utiliser le moins possible les valeurs arbitraires entre crochets (`[]`) ; les réserver aux tokens CSS et aux cas réellement absents des utilitaires Tailwind.
- Garder les chaînes visibles en français, sauf contrainte explicite.
- Ajouter les attributs `aria-label` ou les éléments sémantiques nécessaires aux contrôles et liens iconographiques.
- Conserver les ancres de navigation cohérentes avec les IDs des sections (`#top`, `#profil`, `#parcours`, `#competences`, `#contact`).
- Corriger la casse des chemins d’import pour qu’elle corresponde exactement au nom des fichiers.

## Design tokens

Les couleurs doivent être utilisées via les variables CSS définies dans `src/index.css`, plutôt que répétées en hexadécimal dans les composants.

```css
:root {
  --color-primary: #4863ff;
  --color-primary-foreground: #ffffff;
  --color-background: #f4f2ee;
  --color-surface: #fffdf9;
  --color-text: #15171c;
  --color-text-muted: #6f747b;
  --color-accent: #f6d34e;
  --color-border: #dad8d1;
  --color-shadow: #15171c;
}
```

Exemples d’utilisation Tailwind :

- `bg-[var(--color-background)]`
- `bg-[var(--color-primary)]`
- `text-[var(--color-text-muted)]`
- `border-[var(--color-border)]`
- `shadow-[4px_4px_0_var(--color-shadow)]`

## Typographie

- Police principale : `font-family: Manrope, system-ui, sans-serif;`.
- Police secondaire pour les labels, métadonnées et index : `DM Mono`, monospace.
- Titres : poids fort, interlettrage légèrement négatif et lignes compactes.
- Labels techniques : capitales, taille réduite et espacement des lettres augmenté.
- Les polices externes doivent être chargées dans `index.html` uniquement si elles sont effectivement utilisées dans l’interface.

## Mise en page et responsive

- Largeur maximale de contenu : environ `1180px`.
- Padding horizontal desktop : `32px` ; mobile : `20px`.
- Bordures fines et angles discrets (`4px` à `5px`).
- Utiliser une ombre décalée noire pour les éléments mis en avant.
- Prévoir une version mobile pour chaque nouvelle section.
- Le breakpoint principal de la navigation est autour de `850px`.
- Sur petit écran, les navigations horizontales peuvent défiler sans afficher la scrollbar.

## Images et placeholders

- Utiliser un placeholder explicite tant que l’image finale n’est pas fournie.
- Préférer un bloc neutre utilisant `--color-surface` ou `--color-accent`, avec une taille et un ratio proches de l’image finale.
- Toujours renseigner un texte `alt` descriptif pour une image informative.
- Utiliser `alt=""` pour une image purement décorative.
- Ne pas inventer de fichier image dans `src/assets/` ou `public/`.

## Accessibilité

- Utiliser `header`, `nav`, `main`, `section` et `footer` quand leur rôle sémantique est pertinent.
- Les liens doivent avoir un texte compréhensible hors contexte.
- Conserver un contraste lisible entre les textes et les surfaces.
- Ne pas supprimer les styles de focus sans fournir un remplacement visible.

## Vérification avant livraison

Après toute modification significative :

1. lancer `npm.cmd run lint` ;
2. lancer `npm.cmd run build` ;
3. vérifier les liens d’ancrage et le rendu responsive si la modification concerne l’interface.

# Éditer le contenu du portfolio

La v9 sépare désormais **contenu**, **templates** et **design**.

## Modifier un projet

Les textes sont dans `src/projects/`.

Exemples :

- `src/projects/kouboypi.md`
- `src/projects/macbook-a1534.md`
- `src/projects/project3.md`

Chaque fichier contient un front matter YAML. Les champs que tu modifieras le plus souvent sont :

- `lede`
- `context`
- `objective`
- `protocol`
- `evidence`
- `outcome`
- `lessons`

Pour les projets OpenClassrooms, les champs sont volontairement plus courts :

- `overview`
- `skills`
- `evidence`
- `outcome`

## Modifier l'accueil

Les textes éditoriaux de l'accueil sont dans :

`src/_data/site.json`

Tu peux y changer le texte du hero, les introductions de section, les principes et le profil.

## Ajouter une image

Dépose les images dans `assets/projects/<slug>/`.

L'étape suivante pourra relier les blocs `evidence` à de vraies images et légendes.

## Prévisualiser localement

Une seule fois :

```bash
npm install
```

Puis :

```bash
npm run serve
```

Eleventy sert alors le site localement et reconstruit les pages à chaque modification.

## Publier

Avec TortoiseGit : commit puis push.

Une fois la branche `master` mise à jour, GitHub Actions construit `_site` et le déploie automatiquement sur GitHub Pages.

> Important : dans **Settings → Pages**, la source devra être réglée sur **GitHub Actions** après fusion de la migration v9.

## Où ne pas toucher pour une simple correction de texte

- `styles.css`
- `rrt4-safe.js`
- `src/_includes/*.njk`

Ces fichiers constituent le moteur visuel et les templates.

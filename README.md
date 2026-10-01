# Portfolio IT — source éditable

Ce dépôt publie le portfolio technique de Nicolas Georget.

La branche de migration **v9 Content Architecture** sépare désormais :

- le contenu éditable : `src/projects/*.md` et `src/_data/site.json` ;
- les templates : `src/_includes/*.njk` ;
- le design / mouvement : `styles.css` et `rrt4-safe.js`.

Le site est généré avec **Eleventy (11ty)** puis déployé automatiquement avec GitHub Actions.

Pour modifier un texte, consulter [`CONTENT_EDITING.md`](CONTENT_EDITING.md).

## Développement local

```bash
npm install
npm run serve
```

Le dossier `_site/` est généré automatiquement et n'est pas versionné.

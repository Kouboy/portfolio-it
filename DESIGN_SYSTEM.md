# Portfolio Signal — Design System v1

## 1. Positionnement

**Nom de travail : Technical Optimism**

Le Portfolio Signal combine deux familles d’influences sans chercher à les reproduire :

- **rigueur techno-graphique** : grille, signalétique, typographie, codes, asymétries contrôlées ;
- **chaleur et mouvement** : grand champ safran, espaces négatifs, interfaces simples, sentiment de progression.

Le résultat doit paraître **précis, chaleureux, méthodique et vivant**.

---

## 2. Hiérarchie des couleurs

### Champ principal
- `SUN #F6B500`
- Environ 60 à 70 % de la surface globale.
- C’est l’environnement normal du portfolio, pas une couleur d’alerte.

### Concentration technique
- `BLACK #050505`
- Réservé aux blocs de statut dense, zones techniques, transitions, preuves fortes et pieds de page.

### Lecture / preuves
- `PAPER #F6F0DF`
- Pour les contenus longs, légendes, captures, preuves et zones nécessitant du calme.

### Utilitaires
- `PALE #FFD86C`
- Onglets, petites zones de respiration, utilitaires.
- `WARM GRAY #B8AD8C`
- Métadonnées neutres, bandeaux, zones secondaires.

### Micro-accents
- `CYAN #32D9EE` : diagnostic, réseau, observation, preuve.
- `PINK #FF4A98` : outil, interface, médiation, note humaine.
- `ORANGE #FF5B00` : réparation, action, intervention.

**Règle :** hors page d’index globale, utiliser au maximum deux micro-accents secondaires visibles dans un même écran.

---

## 3. Typographie

### Titres
- Sans-serif lourde, très condensée visuellement par la composition.
- Majuscules.
- Tracking négatif.
- Un seul grand geste typographique par écran.

### Corps
- Sans-serif simple.
- Contraste élevé.
- Largeur de lecture limitée.
- Aucun traitement spectaculaire sur les paragraphes.

### Métadonnées
- Monospace.
- Capitales.
- Petite taille.
- Tracking positif.

---

## 4. Vocabulaire éditorial

- **PROJECT UNIT** : projet.
- **FIELD LOG** : journal de démarche.
- **INCIDENT** : problème réel rencontré.
- **EVIDENCE** : capture, test, mesure ou résultat observable.
- **SYSTEM STATE** : état courant.
- **OUTCOME** : résultat final.
- **PROTOCOL** : méthode.
- **ARCHIVE** : ensemble documentaire ou projet patrimonial.

Ce vocabulaire décrit des fonctions, états et étapes réellement présents dans les projets.

---

## 5. Mascottes comme repères thématiques

### Local Duck
- Réemploi, réparation, bricolage, terrain.
- Peut apparaître dans les notes de bas de page.
- Ton : pratique, légèrement ironique.

### Archive Node
- Systèmes, réseau, services, stockage.
- Ton : infrastructure calme.

### Reviewer Eye
- Diagnostic, preuve, recette, vérification.
- Ton : observation et prudence.

### Spark
- Outils, interfaces, médiation, expérimentation.
- Ton : énergie et exploration.

### Règles
- Une mascotte doit toujours avoir une fonction.
- Éviter plus d’une mascotte principale par section.
- Les pieds de page peuvent accueillir une petite blague ou note contextuelle.
- Les mascottes restent à l’échelle du repère thématique, du composant ou de la signature secondaire.

---

## 6. Flèches et signalétique

Utiliser principalement :
- `→` progression / action ;
- `↗` ouverture / détail ;
- `←` retour ;
- petits triangles pour état ou sélection.

Les flèches indiquent une progression, une ouverture, un retour ou une relation clairement identifiable.

---

## 7. Grille

- Base conceptuelle : 12 colonnes.
- La grille ne doit presque jamais être visible directement.
- Les bordures servent uniquement à clarifier une structure.
- L’espace négatif est un composant à part entière.

---

## 8. Règles de composition

1. Un seul geste majeur par écran.
2. Deux accents secondaires maximum par écran.
3. Les paragraphes restent sobres.
4. Les kanji servent de labels ou de ponctuation.
5. Les mascottes servent de repères thématiques.
6. Le noir concentre, le safran respire.
7. Les preuves doivent rester immédiatement identifiables.
8. Chaque élément visuel doit avoir une raison d’être.

---

## 9. Discipline de composition

- Les surfaces utilisent des aplats francs et des lignes nettes.
- Les ombres restent exceptionnelles ; la hiérarchie repose d’abord sur la composition et le contraste.
- Les composants conservent une géométrie simple et angulaire.
- La grille structure la page de manière discrète.
- Les kanji ont une fonction sémantique stable.
- Les données affichées correspondent à des éléments réels ou documentés.
- Les badges sont regroupés par fonction et limités aux états utiles.
- Les mascottes servent de repères thématiques ou de signatures secondaires.
- Chaque couleur secondaire possède un rôle défini.

---

## 10. Principe de déploiement

Avant de décliner le système sur les autres projets :

1. valider la page d’accueil ;
2. valider une fiche réseau complexe (Projet 3) ;
3. valider une fiche réparation / réemploi ;
4. valider une fiche système Windows ;
5. seulement ensuite généraliser les composants.

Le prototype vivant se trouve dans `system.html`.


---

## 11. Grammaire trilingue

- **FR = contenu**
- **EN = interface**
- **JP = signe sémantique**

Exemples : `FIELD LOG / 記録`, `REPAIR / 修復`, `DIAGNOSIS / 診断`, `EVIDENCE / 証拠`, `OUTCOME / 結果`.

Voir `LEXICON_JP_EN_FR.md`.

**Règle :** les trois couches se complètent, elles ne se répètent pas.


---

## 12. Mouvement / 動き

**Principe :** au repos, le portfolio paraît presque imprimé ; à l’interaction, il révèle sa nature d’interface.

### Temporalité
- Hover / micro-réaction : 140–190 ms
- Ouverture de panneau : environ 280 ms
- Apparition au scroll : environ 420 ms, une seule fois
- Animation ambiante : environ toutes les 10 secondes, un seul élément à la fois

### Fonctions
- Les lignes de projet se décalent légèrement au survol.
- Les flèches accompagnent la progression.
- Les blocs EVIDENCE signalent leur caractère inspectable.
- Les panneaux utilisent une expansion courte et contrôlée.
- Les mascottes peuvent recevoir une micro-animation ponctuelle.
- Les rails de signalétique peuvent avancer d’un cran de temps en temps.

### Accessibilité
Le site respecte `prefers-reduced-motion`. Les animations non essentielles sont alors neutralisées.


---

## 13. Flow généralisé / 流れ

La chorégraphie validée sur l’accueil devient la grammaire commune des fiches du portfolio.

### Hero de fiche
- contexte / petit label ;
- **titre principal + panneau latéral** sur le même beat ;
- faits techniques / kanji en micro-cascade à l’intérieur de ce beat ;
- texte explicatif ensuite.

### Sections
- **rail gauche + titre associé** sur le même beat ;
- labels internes du rail en micro-cascade ;
- paragraphe explicatif après stabilisation ;
- données structurées ensuite.

### Politique
- animations de texte one-shot pendant une visite ;
- Project Select reste un composant UI et n’utilise pas de reveal caractère par caractère ;
- les projets OpenClassrooms conservent leur version éditoriale concise ;
- `prefers-reduced-motion` garde une version immédiatement lisible et statique.

Cette grammaire s’applique à toutes les fiches publiques du portfolio.

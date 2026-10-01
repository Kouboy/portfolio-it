# Portfolio Signal v6 — Full

Première déclinaison complète du design system **Technical Optimism** sur les douze dossiers du portfolio.

## Pages
- `index.html` : accueil et sélection des Project Units
- `kouboypi.html`
- `chipdeck.html`
- `imperatordeck.html`
- `macbook-a1534.html`
- `n53sv.html`
- `lab-ad.html`
- `x71sl.html`
- `eureka-stories.html`
- `archos-gamepad2.html`
- `project3.html`
- `projet2.html`
- `road-to-it.html`
- `system.html` : design system vivant

## Direction éditoriale
Les fiches décrivent formellement :
1. contexte ;
2. objectif ;
3. protocole / Field Log ;
4. preuves ;
5. état ou résultat ;
6. enseignements.

La rédaction privilégie les formulations affirmatives et documentaires.

## Grammaire linguistique
- FR = contenu et raisonnement
- EN = interface et structure
- JP = ponctuation sémantique

## Mascottes
Elles servent de repères thématiques et de petites signatures de bas de page.

## Assets
Les dossiers `assets/projects/` conservent les listes de captures prévues. Les blocs EVIDENCE sont prêts à recevoir les captures réelles.


## V7 — Motion

Couche de mouvement inspirée des interfaces RRT4 :
- reveal du hero au chargement ;
- micro-déplacements au survol ;
- flèches et onglets animés ;
- apparition légère au scroll ;
- signal d’inspection sur les blocs Evidence ;
- animation ambiante cyclée sur une seule mascotte à la fois ;
- petits rails de signalétique ponctuellement animés ;
- composant de panneau dépliable documenté dans `system.html` ;
- prise en charge de `prefers-reduced-motion`.

La page reste calme lorsqu’elle n’est pas manipulée.


## V7.5 — Safe Character Flow

Reconstruction du prototype depuis V7 Motion avec une règle de sûreté :

**le contenu est toujours visible par défaut.**

L’animation ne masque plus durablement les éléments. À l’entrée dans le viewport, elle rejoue temporairement :
- textes ordinaires : caractère par caractère ;
- grands titres anglais : masque/glissé ;
- panneaux : charge `ghost → solid` ;
- kanji / icônes : micro-charge graphique.

À la sortie du viewport, les séquences asynchrones sont annulées, mais le contenu reste affiché. Au retour, les animations rejouent.

Le moteur RRT4 est actif uniquement sur `index.html` et `macbook-a1534.html`.


## V7.6 — Paced Flow

Calibration après revue vidéo :
- animations texte **one-shot** pendant une visite ;
- suppression des replays lors du retour dans le viewport ;
- les entrées suivantes attendent la fin réelle des précédentes ;
- temps de respiration plus longs entre labels, titres et paragraphes ;
- les lignes de Project Select ne sont plus animées caractère par caractère ;
- hover Project Select garanti lisible (fond noir / texte blanc) ;
- seuil d’entrée relevé à ~22 % du viewport pour éviter les déclenchements prématurés.

Objectif : retrouver le débit d’information RRT4 plutôt qu’un flux continu d’effets.


## V7.7 — Grouped Flow

Calibration à partir de la seconde capture vidéo :
- correction du faux double-affichage du panneau noir : son contenu est armé avant l’apparition du panneau ;
- panneau noir = une seule entrée structurelle ;
- séquençage par **beats sémantiques** plutôt que par élément isolé ;
- dans une section, rail gauche + titre principal apparaissent ensemble ;
- le paragraphe explicatif arrive ensuite, seul ;
- les petits labels d’un même groupe peuvent s’assembler en parallèle ;
- tempo global légèrement accéléré sans revenir au flot trop pressé des premières versions ;
- Project Select conserve son hover statique et lisible.

Politique toujours one-shot : aucune animation de texte ne rejoue pendant la même visite.


## V7.8 — Synchronized Groups

Dernière calibration de rythme :
- hero : bandeau noir droit + gros titre anglais = même beat ;
- seconde ligne du titre suit rapidement pendant que le panneau finit de se poser ;
- contenu du panneau noir commence à apparaître pendant le même beat ;
- sections : rail/bandeau gauche + titre principal = apparition simultanée ;
- petits labels d’un rail = cascade très courte à l’intérieur du même beat ;
- paragraphe explicatif seulement après stabilisation de ce groupe ;
- respirations raccourcies sans remettre les animations en concurrence.

Principe : regrouper les éléments qui appartiennent à la même unité de lecture.


## V7.9 — Chapter Beats

Calibration spécifique des grands chapitres de l'accueil :
- `PROJECT INDEX`, `PROTOCOL` et `PROFILE` disposent maintenant d'une chorégraphie dédiée ;
- rail/panneau gauche + badge ou icône + grand titre apparaissent sur le même beat ;
- les labels internes du rail n'ont qu'une micro-cascade de 45 ms ;
- le texte du badge démarre pendant son apparition ;
- le paragraphe explicatif n'arrive qu'une fois ce groupe stabilisé ;
- le petit badge n'a donc plus de séquence autonome qui ralentit la lecture.

Principe : un écran de chapitre doit d'abord être compris comme une composition unique.


## V8 — Generalized Flow

La méthode validée en v7.9 est maintenant généralisée à toutes les pages publiques du portfolio.

### Pages concernées
- accueil ;
- 9 projets personnels / techniques ;
- Lab Active Directory ;
- Projet 2 OpenClassrooms ;
- Projet 3 OpenClassrooms ;
- Road to IT.

### Règles communes
- hero : titre + panneau latéral synchronisés ;
- sections : rail gauche + titre synchronisés ;
- petits labels / kanji / faits = micro-cascade dans le même beat ;
- texte explicatif ensuite ;
- données structurées en dernier ;
- texte one-shot pendant une visite ;
- Project Select reste traité comme interface et non comme paragraphe animé.

`system.html` reste une page de documentation du design system et conserve son comportement de démonstration séparé.


## V8.1 — Protocol Row Flow

Correction du comportement des blocs `PROTOCOL / FIELD LOG` :
- le conteneur n’attend plus tardivement avant d’apparaître ;
- chaque ligne devient une unité de lecture ;
- identifiant + titre de ligne apparaissent ensemble ;
- le paragraphe de la ligne arrive ensuite ;
- courte respiration, puis ligne suivante.

Le protocole suit donc le même principe RRT4 que le reste du site : une information assimilable à la fois.


## V8.2 — Protocol Order Fix

Correction d'un conflit de séquençage :
- les paragraphes contenus dans `.log`, `.outcome`, `.current-state`, `.lesson-list`,
  `.evidence-grid` et `.case-grid` ne sont plus récupérés comme paragraphes généraux ;
- chaque texte structuré appartient désormais à une seule chorégraphie ;
- pour `FIELD LOG`, l'ordre devient strictement :
  `LOG ID + titre` → `description` → respiration → ligne suivante ;
- le correctif évite aussi le même type de double-déclenchement dans les autres blocs structurés.

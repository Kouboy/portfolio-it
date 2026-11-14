# R-PORT-01 · Rigueur vivante

**Statut : règle éditoriale transversale du portfolio IT / Atelier.**  
**Portée :** tous les travaux futurs touchant aux contenus, aux projets, à la documentation, à la présentation visuelle, à l'UX, aux légendes, aux traductions et aux évolutions du site. Ne pas réécrire rétroactivement toutes les pages pour la seule application de cette règle.

## Principe directeur

> **Montrer des compétences vérifiables sans ennuyer le lecteur.** Une démarche technique rigoureuse peut aussi raconter une aventure, susciter la curiosité et transmettre un savoir inattendu.

Le portfolio ne doit être ni une brochure commerciale impersonnelle ni un journal de plaisanteries. C'est un **carnet de terrain techniquement fiable, humain, curieux et vivant**. Sa personnalité est un atout professionnel : expliquer clairement est aussi une compétence IT.

## Les six engagements

1. **Preuve avant panache.** Distinguer ce qui a été observé, testé, déduit, envisagé ou encore inexpliqué. Relier les résultats à leurs preuves (capture, mesure, procédure, journal, version ou source). Ne jamais inventer un résultat, masquer un échec ni transformer une hypothèse en fait.
2. **Raconter la démarche, pas seulement le résultat.** Quand cela éclaire le projet, montrer les hésitations, les surprises, les erreurs évitées, les décisions et les limites. Une anomalie honnêtement investiguée est souvent plus instructive qu'un triomphe sans contexte.
3. **Apprendre au détour du récit.** Lorsqu'une notion technique apparaît et qu'une courte explication aiderait un lecteur non spécialiste, la rendre accessible en une ou deux phrases, sans sacrifier l'exactitude. Développer les acronymes utiles, préciser ce que mesure un outil et ce qu'il ne mesure pas. Les « Notes marginales de l'Atelier » sont un format possible, jamais une obligation.
4. **Employer un humour situé et facultatif.** Privilégier l'autodérision, les clins d'œil issus du terrain et l'ironie légère. Une bonne plaisanterie sert une observation ou une explication ; elle n'interrompt pas le raisonnement et ne se répète pas mécaniquement. Pas d'humour aux dépens des personnes, ni sur la sécurité d'une manière qui banalise un risque réel.
5. **Protéger la lisibilité.** Distinguer visuellement le constat, le protocole, la preuve, la leçon et l'anecdote. Une note facultative ne doit pas interrompre l'accès aux informations essentielles. Respecter le design system, l'accessibilité, les écrans mobiles et la grammaire FR (contenu) / EN (interface) / JP (signe sémantique).
6. **Préserver la voix et la sincérité.** Ne pas « professionnaliser » le texte en effaçant la personnalité de son auteur. Éviter jargon ostentatoire, grandiloquence, blagues forcées, surpromesses et formules publicitaires. Un lecteur doit sentir à la fois la compétence, le plaisir d'apprendre et le souci d'aider autrui.

## Forme éditoriale recommandée

Dans les fiches où cela a du sens :

- **Contexte / objectif** : quel problème concret ?
- **Protocole / décision** : qu'a-t-on fait et pourquoi ?
- **Evidence / résultat** : quelle preuve et avec quelles limites ?
- **Leçon** : qu'a-t-on appris, que referait-on autrement ?
- **Note marginale (facultative)** : une anecdote, une question curieuse ou une micro-explication qui éclaire le propos.

Utiliser les champs existants des projets (`context`, `objective`, `protocol`, `evidence`, `outcome`, `lessons`) plutôt que créer systématiquement un nouveau composant.

## Exemple : War Rig et le bit flip

**Fait mesuré :** MemTest86 teste la DDR5 ; à un instant documenté, quatre passes sont prévues, zéro erreur a été observée pendant la quatrième, et la température de la RAM est stable vers 60 °C. Le statut final doit être confirmé par le rapport de fin de test.

**Note marginale :** « Nous espérons qu'une particule cosmique ne choisira pas la dernière minute pour retourner un bit. »

**Ce qu'on apprend :** un *bit flip* est le passage involontaire d'un bit de 0 à 1, ou inversement. Certains phénomènes physiques, dont des particules énergétiques, peuvent provoquer des erreurs transitoires. Une erreur en MemTest86 ne prouverait toutefois pas qu'un rayon cosmique est responsable ; la stabilité mémoire doit d'abord être diagnostiquée.

**Traitement humoristique :** « Mesure corrective envisagée : installer la tour à 40 mètres sous terre. Rejetée : budget et ventilation. » Ce passage est explicitement une fiction humoristique, pas une recommandation d'exploitation.

## Vérification avant publication ou revue

Pour tout changement significatif au portfolio, se poser ces questions :

- Le lecteur peut-il comprendre **ce qui a été fait, pourquoi, et avec quelles preuves** ?
- Une personne curieuse mais non experte peut-elle suivre sans se heurter à un mur d'acronymes ?
- Le texte est-il vivant **sans sacrifier l'exactitude** et sans humour ajouté pour remplir un quota ?
- Les incertitudes, les risques, les données sensibles et les résultats non validés sont-ils correctement traités ?
- Les choix de présentation rendent-ils l'essentiel plus facile à lire, y compris sur mobile et avec les réglages d'accessibilité ?

Si l'un de ces points échoue, corriger avant publication.

## Gouvernance

Cette règle s'applique aux contributions humaines **et aux agents** intervenant sur le dépôt. Les agents doivent la consulter avant tout travail significatif sur le portfolio et signaler explicitement les arbitrages éditoriaux importants. L'auteur garde le dernier mot sur la voix, le ton et la publication.

**Références associées :** [Guide d'édition](CONTENT_EDITING.md) · [Design system](DESIGN_SYSTEM.md) · [Instructions aux agents](AGENTS.md).

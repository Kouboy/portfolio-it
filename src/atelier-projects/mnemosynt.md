---
layout: atelier-project.njk
permalink: atelier-mnemosynt.html
code: AT / MEMORY / 02
short_title: MNEMOSYNT
title: MNEMOSYNT
category: MEMORY / CONTINUITY
status: PILOT / PARTIAL
status_note: Première intégration documentée ; persistance, rappel et reprise complète encore en qualification.
lede: "Une mémoire de travail pour les agents de l’Atelier : garder les décisions, leur provenance et leurs contradictions, sans confondre un souvenir avec une preuve."
tags_list:
- MULTI-AGENT
- MCP
- PROVENANCE
- PRIVACY
visual:
  src: assets/atelier/mnemosynt/memory-model-public.svg
  alt: "Modèle de mémoire : une observation datée mène à une interprétation révisable, à un état courant, puis à son historique et sa provenance. Les mémoires partagées et individuelles restent distinctes."
  label: "MODÈLE / ÉTAT ET PROVENANCE"
  caption: "L’architecture conceptuelle distingue observation, interprétation et vérité opératoire. Le dessin présente un modèle à éprouver, pas une validation complète des comportements de MNEMOSYNT."
facts:
- label: ROLE
  value: Mémoire commune et espaces propres aux agents
- label: INTERFACE
  value: MCP / OpenViking / Hermès
- label: PHASE
  value: Novembre 2026
context: >-
  Quand plusieurs agents contribuent à un même chantier, les conclusions se dispersent :
  une décision se perd entre deux sessions, une hypothèse finit par se faire passer pour
  un fait, ou un agent recommence une enquête déjà menée. La difficulté n’est pas
  simplement de stocker du texte ; c’est de savoir ce qui mérite d’être rappelé et pourquoi.
objective: >-
  Expérimenter deux niveaux de mémoire, commune et propre à chaque agent, avec des traces
  de provenance, des états de confiance et une procédure de rappel. Les mémoires privées
  ne sont pas un réservoir universel accessible à tout le monde.
method:
- title: Définir les frontières
  text: "Distinguer les décisions communes, la documentation partagée et les espaces propres aux agents. Décrire qui peut proposer, lire, corriger ou confirmer."
- title: Raccorder sans dupliquer
  text: "Utiliser des outils d’accès plutôt qu’une seconde copie improvisée des mêmes données ; conserver la séparation entre collecte, mémorisation et restitution."
- title: Vérifier les chemins et permissions
  text: "Relever la structure des données et les droits sans ouvrir le contenu privé ni faire passer un contrôle de métadonnées pour un test fonctionnel."
- title: Préparer un rappel contrôlé
  text: "Prévoir un parcours où chaque élément retrouvé indique sa source, sa date et sa confiance, puis où les contradictions restent visibles."
evidence_intro: "Les preuves suivantes correspondent à l’état documentaire relevé début novembre 2026. Elles n’attestent pas une mémoire autonome entièrement validée."
evidence:
- state: CONNECTED / DOCUMENTED
  title: Première intégration MCP
  text: "Le raccordement MNEMOSYNT à l’environnement de l’Atelier a été documenté début novembre ; son usage de bout en bout reste un périmètre de recette distinct."
  reference: "Source interne : journal Atelier, novembre 2026."
- state: PASS / METADATA ONLY
  title: Qualification A1
  text: "Le 5 novembre, un relevé borné des métadonnées, emplacements et permissions a obtenu un résultat PASS. Aucun contenu privé n’a été ouvert pour ce contrôle."
  reference: "Registre d’audit : A1 / 05.11.2026."
- state: OBSERVED / SERVICE
  title: Disponibilité technique ponctuelle
  text: "Le 5 novembre, l’inventaire a relevé deux services accessibles avec réponses HTTP 200 sur leurs contrôles de santé. Cela ne prouve ni le rappel correct ni la séparation effective entre espaces privés."
  reference: "Registre d’exploitation MNEMOSYNT, relevé du 05.11.2026."
- state: PARTIAL / RECOVERY
  title: Continuité à démontrer
  text: "Les contrôles de sauvegarde d’autres services de l’Atelier ne prouvent pas une restauration fonctionnelle complète de la mémoire MNEMOSYNT."
  reference: "Passation infrastructure / lot 1."
limits:
- "Le stockage réellement utilisé par le moteur et son registre physique demandaient encore une qualification spécifique après A1."
- "La qualité du rappel, la détection des contradictions et la séparation effective des droits doivent être évaluées par des scénarios reproductibles."
- "Les archives privées, identités et clés restent hors de la documentation publique."
next_steps:
- "Tester le rappel de décisions avec provenance, puis tenter volontairement une contradiction et observer sa restitution."
- "Qualifier une reprise isolée, des permissions effectives et la cohérence de la mémoire restaurée."
- "Documenter des exemples anonymisés, compréhensibles sans ouvrir l’infrastructure interne."
takeaway: "Une mémoire utile n’est pas celle qui retient tout : c’est celle dont on peut contrôler ce qu’elle croit savoir."
next_link:
  href: atelier-pocket-signal.html
  label: Pocket Signal
---

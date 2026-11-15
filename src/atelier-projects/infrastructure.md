---
layout: atelier-project.njk
permalink: atelier-infrastructure.html
code: AT / SYSTEMS / 01
short_title: ATELIER INFRA
title: ATELIER INFRA
category: SYSTEMS / OPERATIONS
status: ACTIVE / QUALIFYING
status_note: Services et accès utilisés au quotidien ; les sauvegardes et restaurations n’ont pas toutes le même niveau de validation.
lede: "Des machines hétérogènes, des services modestes et une règle d’exploitation : pouvoir comprendre ce qui tourne, pourquoi, et comment le remettre sur pied."
tags_list:
- LINUX
- WINDOWS
- NETWORK
- BACKUPS
visual:
  src: assets/atelier/infrastructure/topology-public.svg
  alt: "Architecture de principe : War Rig pour la création, Imperator pour les outils, KouboyPi pour les services réseau, et clients Debian ou Windows sur réseau privé."
  label: "ARCHITECTURE / CARTE DE PRINCIPE"
  caption: "Schéma pédagogique fondé sur les rôles documentés. Les liaisons représentées sont fonctionnelles : ce n’est ni un plan d’adressage ni un état de disponibilité en temps réel."
facts:
- label: NODES
  value: Workstation / Windows / Raspberry Pi / Debian
- label: ACCESS
  value: Réseau privé / Tailscale
- label: FOCUS
  value: Inventaire, disponibilité et reprise
context: >-
  L’Atelier s’est développé autour de besoins concrets : héberger des services utiles,
  retrouver ses travaux, accéder à ses machines à distance et expérimenter des outils IA.
  À mesure que les composants s’ajoutent, le risque est de ne plus savoir ce qui dépend
  de quoi, où se trouvent les données et ce qu’une sauvegarde permet vraiment de restaurer.
objective: >-
  Maintenir un petit environnement personnel vérifiable, documenté et proportionné
  aux besoins. Les systèmes sont classés par fonction ; les services, permissions,
  dépendances et procédures de reprise ont un état explicite.
method:
- title: Distinguer les nœuds
  text: "Répartir les rôles entre station de travail, poste Windows, Raspberry Pi pour les services permanents et client Debian léger."
- title: Limiter l’exposition
  text: "Privilégier un réseau privé pour les connexions à distance ; ne pas transformer une commodité domestique en service exposé publiquement."
- title: Inventorier avant de déplacer
  text: "Identifier les exécutables, dépendances, emplacements de données et commandes de démarrage avant toute réorganisation."
- title: Prouver la reprise par étapes
  text: "Contrôler séparément copie, intégrité des fichiers et bases, puis restauration du service complet. Une réussite sur fichiers ne valide pas tout le système."
evidence_intro: "Les traces de novembre décrivent à la fois des parcours réussis et des zones qui restent à éprouver. Aucun état n’est présenté comme une mesure permanente de disponibilité."
evidence:
- state: OBSERVED / SERVICES
  title: KouboyPi en service
  text: "Les contrôles système récents ont retrouvé Pi-hole, Tailscale, Atelier Remote et Atelier Pocket parmi les services actifs, ainsi qu’un volume externe monté à la demande."
  reference: "État technique KouboyPi, novembre 2026."
- state: TESTED / REMOTE
  title: Accès distant privé
  text: "Les essais via Tailscale ont permis l’accès distant et le réveil d’une machine depuis un autre réseau, sans publication de l’adresse ni des identifiants."
  reference: "Essais Atelier Remote, octobre 2026."
- state: PASS / FILES ONLY
  title: Sauvegardes et restauration de fichiers
  text: "Des ensembles ont été copiés puis contrôlés sur un stockage distinct, avec comparaison de fichiers et vérifications de bases SQLite. Ce test ne constitue pas une restauration générale de tous les services."
  reference: "Lot 1 / 05.11.2026 ; périmètres et réserves conservés."
- state: OPEN / SYSTEM RECOVERY
  title: Reconstruction complète
  text: "Les dépendances, identités et connexions réelles après restauration restent à qualifier pour plusieurs composants."
  reference: "Registre de services et plan de reprise."
limits:
- "Le statut d’un service à une date donnée ne garantit pas sa disponibilité aujourd’hui."
- "Une archive cohérente sur disque ne prouve pas que l’application reconstruite fonctionnera avec ses permissions et intégrations."
- "Les chemins locaux, secrets, identifiants, IP privées et détails d’exploitation restent hors du site public."
next_steps:
- "Établir des recettes courtes de reprise pour les composants critiques, avec critères d’arrêt explicites."
- "Terminer la qualification des sauvegardes du Raspberry Pi et des configurations associées."
- "Produire une carte de l’architecture publique qui montre les dépendances sans exposer les paramètres d’accès."
takeaway: "Une infrastructure fiable n’est pas celle qui ne tombe jamais : c’est celle dont on connaît les limites, et dont la reprise est vérifiable."
related:
- href: kouboypi.html
  label: KouboyPi / Technical Archive
  note: "Inventaire, dépannage et administration de la machine, côté compétences IT."
- href: cockpit-signal.html
  label: Cockpit Signal
  note: "Un outil construit sur cette infrastructure de travail."
next_link:
  href: atelier-mnemosynt.html
  label: MNEMOSYNT
---

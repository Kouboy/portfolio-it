---
layout: atelier-project.njk
permalink: atelier-pocket-signal.html
code: AT / TOOLS / 03
short_title: POCKET SIGNAL
title: POCKET SIGNAL
category: TOOLS / SYNC / WEB
status: WORKING PROTOTYPE
status_note: Parcours de synchronisation éprouvés sur plusieurs machines ; robustesse et reprise encore à documenter.
lede: "Un petit établi de poche pour garder ses notes de session et retrouver son travail d’une machine à l’autre, sans installer une usine à gaz."
tags_list:
- LIGHT WEBAPP
- DEBIAN
- WINDOWS
- SYNC
facts:
- label: SERVICE
  value: Atelier Pocket
- label: CLIENTS
  value: Debian / Windows / navigateur
- label: APPROACH
  value: Sessions versionnées sur réseau privé
context: >-
  Reprendre un travail entre un PC principal, une tablette Linux légère et un petit
  serveur peut coûter plus d’attention que le travail lui-même. Les discussions,
  notes et prochains gestes se dispersent. Pocket Signal part d’un besoin simple :
  ne pas perdre le fil en changeant d’appareil.
objective: >-
  Construire une interface très légère, utilisable sur des machines modestes, avec
  des sessions synchronisées et un accès rapide aux outils habituels. Le serveur
  conserve des versions ; l’interface laisse la priorité à l’écriture et à la reprise.
method:
- title: Héberger un petit service
  text: "Installer Atelier Pocket comme service sur le Raspberry Pi, accessible aux appareils autorisés par le réseau privé."
- title: Synchroniser les sessions
  text: "Échanger les sessions avec le serveur au moyen d’opérations versionnées, pour que les changements puissent être retrouvés depuis d’autres machines."
- title: Vérifier les parcours réels
  text: "Tester la création, la reprise et la suppression persistante des sessions sur l’Alpha et Imperator ; corriger les comportements constatés."
- title: Garder une interface discrète
  text: "Réserver la majeure partie de l’écran au contenu. Le raccourci Noema ouvre ChatGPT ; il ne prétend pas constituer une intégration autonome entre les deux applications."
evidence_intro: "Les tests ont été effectués dans l’environnement personnel de l’Atelier. Le code complet et les captures publiques restent à préparer."
evidence:
- state: OBSERVED / LOCAL
  title: Service Pocket en fonctionnement
  text: "Le service Atelier Pocket figure parmi les services actifs de KouboyPi lors des contrôles de novembre 2026."
  reference: "Contrôles système KouboyPi, novembre 2026."
- state: TESTED / MULTI-DEVICE
  title: Reprise sur plusieurs appareils
  text: "Des essais de synchronisation ont été menés depuis l’Acer Switch Alpha sous Debian et depuis Imperator."
  reference: "Journal d’essais Atelier Pocket v0.3."
- state: FIXED / REGRESSION
  title: Suppression persistante
  text: "Un problème de doublon à la première session et un défaut de persistance lors de la suppression ont été corrigés pendant les essais."
  reference: "Journal de corrections de l’interface."
limits:
- "Les essais ponctuels ne démontrent pas une résistance à toutes les coupures réseau, écritures concurrentes ou pannes de stockage."
- "Le bouton Noema sert de raccourci d’ouverture et non de commande directe de ChatGPT."
- "Les accès du réseau privé, sessions personnelles et paramètres du serveur ne sont pas rendus publics."
next_steps:
- "Capturer une session de démonstration avec des données fictives et mesurer le confort d’usage sur l’Alpha à 4 Go de RAM."
- "Vérifier les conflits de versions, le comportement hors connexion et la possibilité d’exporter les notes."
- "Documenter le redémarrage et la récupération des sessions après une interruption du service."
takeaway: "Le succès n’est pas d’avoir ajouté des boutons : c’est d’avoir rendu la reprise d’une session plus légère que son oubli."
next_link:
  href: atelier-infrastructure.html
  label: Atelier Infra
---

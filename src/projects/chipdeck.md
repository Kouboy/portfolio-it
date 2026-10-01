---
layout: project.njk
tags:
- project
permalink: chipdeck.html
num: '02'
order: 2
slug: chipdeck
title: CHIPdeck
display: CHIPdeck
category: TOOLS / INTERFACE
status: LIVE
status_class: live
theme: tool
jp: 制御
lede: Un PocketCHIP transformé en terminal physique de supervision, conçu autour de Debian Jessie, Python 2.7, PyGTK2, un
  écran 480×272 et des contrôles matériels.
tri:
- en: INTERFACE
  jp: 制御
  fr: Interface
- en: CACHE
  jp: 記録
  fr: État local
- en: LOCAL TOOL
  jp: 道具
  fr: Outil local
facts:
- label: PLATFORM
  value: PocketCHIP
- label: DISPLAY
  value: 480 × 272
- label: STACK
  value: Python 2.7 · PyGTK2 · Cairo
- label: STATE
  value: Utilisé au quotidien
footer_title: SPARK / FIELD NOTE 02
footer_joke: '480×272 : quand chaque pixel paie un loyer, l’interface apprend vite à ranger sa chambre.'
prev:
  file: kouboypi.html
  name: KouboyPi
next:
  file: imperatordeck.html
  name: ImperatorDeck
feature: false
context: Le PocketCHIP conserve un écran, un clavier et des boutons particulièrement adaptés à un petit terminal dédié. CHIPdeck
  exploite ces contraintes comme cadre d’interface et s’appuie sur KouboyPi pour les collectes réseau plus coûteuses.
objective: Fournir une interface rapide, lisible et exploitable sans souris ni navigateur moderne, avec une navigation physique
  claire et un comportement robuste quand le backend devient momentanément indisponible.
protocol:
- title: Écrans
  text: Créer HOME, NETWORK, STORAGE, PIHOLE et plusieurs vues secondaires adaptées au petit écran.
- title: Navigation
  text: Utiliser boutons, flèches et touches de fonction comme contrôles principaux.
- title: Réseau
  text: Confier les opérations réseau lourdes à KouboyPi et garder les appels hors de la boucle graphique.
- title: Cache
  text: Mettre en cache les sources séparément et signaler explicitement les informations périmées.
- title: Résilience
  text: Maintenir une interface consultable lorsque le Pi est temporairement indisponible.
evidence:
- Photo du PocketCHIP en usage
- HOME / vue principale
- NETWORK / appareils
- STORAGE ou Scanner de Terrain
state_label: Résultat
state_title: CHIPdeck
outcome: CHIPdeck sert de tableau de bord local autonome pour consulter le réseau, le stockage, Pi-hole et plusieurs états
  techniques. Les données en cache restent identifiables et certaines acquisitions restent volontairement manuelles.
is_current_state: false
lessons:
- Dimensionner l’interface pour le matériel réel plutôt que pour un écran abstrait.
- Utiliser une pile logicielle proportionnée aux capacités de la machine.
- Découpler les appels réseau de la boucle graphique.
- Traiter le mode dégradé comme un comportement normal du système.
---

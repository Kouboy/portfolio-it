---
layout: project.njk
tags:
- project
permalink: kouboypi.html
num: '01'
order: 1
slug: kouboypi
title: KouboyPi
display: KouboyPi
category: SYSTEMS / NETWORK
status: LIVE
status_class: live
theme: system
jp: 接続
lede: Un Raspberry Pi 2 utilisé comme nœud domestique pour centraliser des services réseau, l’inventaire des appareils, l’état
  des stockages et une API locale commune aux interfaces de supervision.
tri:
- en: SYSTEM
  jp: 構築
  fr: Infrastructure
- en: NETWORK
  jp: 接続
  fr: Réseau
- en: OBSERVATION
  jp: 観測
  fr: Supervision
facts:
- label: PLATFORM
  value: Raspberry Pi 2 Model B
- label: SYSTEM
  value: Raspberry Pi OS 32 bits
- label: ROLE
  value: Services réseau, collecte et API domestique
- label: STATE
  value: Utilisé au quotidien
footer_title: ARCHIVE NODE / FIELD NOTE 01
footer_joke: Une donnée absente est d’abord une donnée absente. Le diagnostic vient ensuite.
prev:
  file: road-to-it.html
  name: Road to IT
next:
  file: chipdeck.html
  name: CHIPdeck
feature: false
context: 'KouboyPi regroupe plusieurs besoins domestiques déjà présents sur le réseau : Pi-hole, stockage partagé, informations
  système, état de disques et inventaire des appareils. Le projet logiciel organise ces données dans une source locale cohérente
  afin que les différents clients puissent les consulter sans réimplémenter chacun leur propre collecte.'
objective: Construire un backend léger, compatible avec les ressources d’un Raspberry Pi 2, capable de distinguer les informations
  fraîches, périmées ou indisponibles et de conserver des identités d’appareils stables malgré les changements d’IP ou certaines
  adresses MAC privées.
protocol:
- title: Inventaire
  text: Fusionner l’inventaire humain de référence, les baux DHCP et la table des voisins Linux.
- title: Identités
  text: Conserver des identités stables malgré les changements d’IP et certaines adresses MAC privées.
- title: API
  text: Exposer une API locale versionnée pour l’état système, le réseau, Pi-hole, les clients, le stockage et quelques données
    complémentaires.
- title: États
  text: Distinguer une donnée fraîche, mise en cache, inconnue ou indisponible afin que les clients représentent correctement
    la situation.
- title: Actions
  text: Réserver les actions sensibles à une liste blanche limitée, notamment les scans manuels et le Wake-on-LAN.
- title: Stockage
  text: Suivre les volumes LaCie et PS2 Vault avec des contrôles SMART en lecture seule et une fréquence adaptée au matériel.
evidence:
- Vue physique du Pi et des disques
- Endpoint API / état système
- Pi-hole / statistiques locales
- SMART / LaCie et PS2 Vault
state_label: Résultat
state_title: KouboyPi
outcome: KouboyPi fournit aujourd’hui une source locale de données commune à CHIPdeck et ImperatorDeck. Les scans coûteux
  restent déclenchés à la demande, le cache est explicite et le suivi SMART reste volontairement léger et en lecture seule.
is_current_state: false
lessons:
- Séparer l’identité d’un appareil des seuls indices de présence réseau.
- Représenter explicitement la fraîcheur et la disponibilité des données.
- Adapter le poids et la fréquence des collectes aux capacités réelles du Raspberry Pi 2.
- Conserver secrets et paramètres sensibles hors du dépôt.
---

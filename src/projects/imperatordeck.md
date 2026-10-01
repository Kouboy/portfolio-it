---
layout: project.njk
tags:
- project
permalink: imperatordeck.html
num: '03'
order: 3
slug: imperatordeck
title: ImperatorDeck
display: ImperatorDeck
category: TOOLS / MULTIPLATFORM
status: FUNCTIONAL
status_class: live
theme: tool
jp: 制御
lede: Une interface Kivy disponible sur desktop et Android pour consulter les données de KouboyPi avec des états ONLINE, CACHE
  et OFFLINE explicites.
tri:
- en: CLIENT
  jp: 制御
  fr: Client
- en: MULTIPLATFORM
  jp: 構築
  fr: Multi-plateforme
- en: STATE
  jp: 観測
  fr: États
facts:
- label: DESKTOP
  value: v0.4.1 stable
- label: ANDROID
  value: v0.5.3.5 fonctionnelle
- label: BUILD
  value: Buildozer / python-for-Android
- label: STATE
  value: Deux clients implémentés
footer_title: SPARK / FIELD NOTE 03
footer_joke: Si l’écran dit OFFLINE avec élégance, c’est déjà une partie du bug qui a été vaincue.
prev:
  file: chipdeck.html
  name: CHIPdeck
next:
  file: macbook-a1534.html
  name: MacBook A1534
feature: false
context: ImperatorDeck reprend le backend commun de KouboyPi dans une interface destinée à des écrans modernes. Le projet
  sépare clairement la collecte des données et leur présentation afin que desktop et Android partagent la même logique métier.
objective: Construire un client multi-format capable de représenter correctement la fraîcheur des données, de conserver certaines
  préférences locales et de rester lisible sur desktop comme sur écran tactile.
protocol:
- title: Desktop
  text: Stabiliser une version Kivy/SDL2 avec HOME, stockage et préférences locales.
- title: États
  text: Représenter ONLINE, CACHE et OFFLINE comme des états fonctionnels distincts.
- title: Tests
  text: Valider la version desktop avec une batterie de 12 tests réussis.
- title: Android
  text: Construire une version mobile avec Buildozer et python-for-Android sous WSL Ubuntu.
- title: Itérations UI
  text: Adapter HOME, NETWORK et DEVICE au tactile et corriger progressivement la lisibilité.
evidence:
- HOME desktop
- Stockage / desktop
- État CACHE ou OFFLINE
- HOME / NETWORK / DEVICE Android
state_label: Résultat
state_title: ImperatorDeck
outcome: ImperatorDeck fonctionne aujourd’hui sur desktop et Android. Les deux clients interrogent KouboyPi, gèrent les états
  de disponibilité et présentent les informations domestiques sans dupliquer la logique de collecte.
is_current_state: false
lessons:
- Séparer backend et clients de présentation.
- Adapter une même logique d’interface à plusieurs formats d’écran.
- Traiter cache et indisponibilité comme des états de première classe.
- Documenter la chaîne de build mobile pour la rendre reproductible.
---

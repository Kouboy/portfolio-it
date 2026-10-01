---
layout: project.njk
tags:
- project
permalink: eureka-stories.html
num: 08
order: 8
slug: eureka-stories
title: Eurêka Stories
display: Eurêka Stories
category: REUSE / MEDIATION
status: FUNCTIONAL
status_class: live
theme: tool
jp: 再利用
lede: Réaffectation d’une liseuse Nook e-ink en support autonome d’histoires illustrées grâce à une application Android dédiée
  et des packs de contenus externes.
tri:
- en: REUSE
  jp: 再利用
  fr: Réemploi
- en: APP
  jp: 構築
  fr: Application
- en: MEDIATION
  jp: 記録
  fr: Contenus
facts:
- label: DEVICE
  value: Nook BNRV510
- label: DISPLAY
  value: e-ink / niveaux de gris
- label: DEPLOYMENT
  value: APK via ADB
- label: STATE
  value: Prototype fonctionnel
footer_title: SPARK / FIELD NOTE 08
footer_joke: 'Le refresh e-ink apprend une vertu rare au développeur : la patience typographique.'
prev:
  file: x71sl.html
  name: ASUS X71SL
next:
  file: archos-gamepad2.html
  name: Archos GamePad 2
feature: false
context: La liseuse devait accueillir de petites histoires illustrées à choix dans un environnement très contraint. La piste
  d’un lecteur générique a été évaluée avant de basculer vers une application dédiée.
objective: Créer une expérience simple, robuste et lisible sur e-ink, en conservant l’application séparée des histoires afin
  que les contenus puissent évoluer sans reconstruire le moteur.
protocol:
- title: Explorer
  text: Tester la piste EPUB interactif avec les capacités du lecteur d’origine.
- title: ADB
  text: Installer KOReader sans root pour évaluer une solution existante.
- title: Évaluer
  text: Mesurer la fiabilité des gestes et du tactile sur le matériel réel.
- title: Développer
  text: Créer une application Android dédiée après validation des contraintes.
- title: Séparer
  text: Scanner les packs externes depuis /sdcard/EurekaStories/stories/ et conserver moteur et contenus indépendants.
evidence:
- Photo de la Nook
- Écran d’accueil
- Choix d’histoire
- Page illustrée / navigation
state_label: Résultat
state_title: Eurêka Stories
outcome: L’application Histoires d’Eurêka a atteint une série v0.5.x avec détection automatique des histoires, pagination,
  illustrations en niveaux de gris et gestion de l’UTF-8. Plusieurs histoires sont installées et utilisables.
is_current_state: false
lessons:
- Tester une solution existante avant de développer.
- Faire évoluer l’architecture en fonction du comportement réel du matériel.
- Adapter l’interface aux propriétés de l’e-ink.
- Séparer moteur et contenus pour simplifier l’ajout de nouvelles histoires.
---

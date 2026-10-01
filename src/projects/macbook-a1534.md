---
layout: project.njk
tags:
- project
permalink: macbook-a1534.html
num: '04'
order: 4
slug: macbook-a1534
title: MacBook A1534
display: MacBook A1534
category: REUSE / REPAIR
status: LIVE
status_class: live
theme: repair
jp: 修復
lede: Remise en service d’un MacBook Retina 12 pouces de 2016 après disparition du stockage interne, grâce à un système installé
  sur SSD externe via hub USB-C.
tri:
- en: REPAIR
  jp: 修復
  fr: Remise en état
- en: REUSE
  jp: 再利用
  fr: Réemploi
- en: BOOT
  jp: 構築
  fr: Démarrage externe
facts:
- label: MODEL
  value: MacBook Retina 12" A1534 · Early 2016
- label: MEMORY
  value: Environ 8 Go
- label: BOOT STORAGE
  value: SanDisk Extreme Pro 1 To externe
- label: STATE
  value: macOS utilisable sur SSD externe
footer_title: LOCAL DUCK / FIELD NOTE 04
footer_joke: Un port USB-C, c’est très élégant jusqu’au moment où il faut brancher le monde entier dessus.
prev:
  file: imperatordeck.html
  name: ImperatorDeck
next:
  file: n53sv.html
  name: ASUS N53SV
feature: false
context: La machine présentait des freezes puis le stockage interne a cessé d’apparaître dans l’Utilitaire de disque depuis
  Recovery. Le reste du matériel restait fonctionnel et permettait d’envisager une remise en service par stockage externe.
objective: Rétablir un environnement démarrable sans intervention irréversible sur la machine, tout en assurant simultanément
  alimentation et stockage par l’unique port USB-C.
protocol:
- title: Recovery
  text: Confirmer l’absence du stockage interne et vérifier que la machine démarre encore en environnement de récupération.
- title: Support externe
  text: Préparer le SSD externe en GUID + APFS.
- title: Connexion
  text: Utiliser un hub UGREEN pour alimenter le MacBook et connecter simultanément le SSD.
- title: Installation
  text: Installer macOS Monterey depuis Internet Recovery sur le support externe.
- title: Validation
  text: Contrôler l’état du SSD de remplacement et vérifier la stabilité de la machine.
- title: Extension
  text: Tester ensuite un environnement Linux Omarchy sur support externe séparé.
evidence:
- Montage hub + SSD externe
- Recovery / Utilitaire de disque
- macOS démarré sur SSD externe
- État SMART / benchmark du SSD
state_label: Résultat
state_title: MacBook A1534
outcome: Le MacBook est redevenu utilisable avec macOS installé sur un SSD externe. La solution reste réversible, conserve
  la machine intacte et fournit aussi une base pour des essais Linux externes.
is_current_state: false
lessons:
- Distinguer une panne de stockage d’une panne générale de la machine.
- Intégrer la connectique et l’alimentation au raisonnement de diagnostic.
- Valider l’état du support de remplacement avant de lui confier le système.
- Privilégier une solution réversible quand l’intervention interne est difficile ou peu rentable.
---

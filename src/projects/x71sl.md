---
layout: project.njk
tags:
- project
permalink: x71sl.html
num: '07'
order: 7
slug: x71sl
title: ASUS X71SL
display: ASUS X71SL
category: RECOVERY / ARCHIVE
status: IN PROGRESS
status_class: progress
theme: diagnostic
jp: 診断
lede: Dossier de sauvegarde et récupération d’un ancien portable Windows Vista, avec validation stricte des images avant migration
  vers SSD et futur environnement Vista/Linux.
tri:
- en: RECOVERY
  jp: 修復
  fr: Récupération
- en: BACKUP
  jp: 記録
  fr: Sauvegarde
- en: DIAGNOSIS
  jp: 診断
  fr: Diagnostic
facts:
- label: MODEL
  value: ASUS X71SL
- label: HISTORIC SYSTEM
  value: Windows Vista
- label: MEMORY
  value: 4 Go
- label: STATE
  value: Diagnostic et sauvegarde à reprendre
footer_title: REVIEWER EYE / FIELD NOTE 07
footer_joke: 73 % n’est pas un format de sauvegarde reconnu, même si Clonezilla avait l’air très convaincu.
prev:
  file: lab-ad.html
  name: Lab Active Directory
next:
  file: eureka-stories.html
  name: Eurêka Stories
feature: false
context: L’objectif est de conserver l’installation historique du portable avant toute migration. Deux sauvegardes réseau
  Clonezilla ont été interrompues, ce qui fournit un cas concret pour distinguer tentative de copie et sauvegarde réellement
  exploitable.
objective: Établir l’état du disque source, obtenir une image vérifiée puis seulement préparer le remplacement par SSD et
  la restauration ou le dual-boot.
protocol:
- title: Préparation
  text: Créer une clé Clonezilla et sélectionner une image savedisk complète.
- title: Tentative 1
  text: Lancer la sauvegarde réseau et documenter l’interruption Host is down pendant /dev/sda2.
- title: Tentative 2
  text: Relancer la procédure et isoler une nouvelle perte de session SMB autour de 73 %.
- title: Conservation
  text: Maintenir le disque source intact et séparer les symptômes réseau des éventuels symptômes disque.
- title: Diagnostic
  text: Reprendre depuis un Linux live avec un audit SMART avant nouvelle stratégie de sauvegarde.
- title: Validation cible
  text: Considérer la sauvegarde acquise uniquement après vérification et scénario de restauration.
evidence:
- Photo du portable
- Capture ou journal Clonezilla
- Événement de déconnexion réseau
- SMART du HDD source
state_label: État actuel
state_title: ASUS X71SL
outcome: 'Le dossier a actuellement un état de référence clair : les deux images partielles sont classées comme non validées,
  le disque source reste préservé et le prochain jalon est l’audit SMART avant nouvelle tentative.'
is_current_state: true
lessons:
- Une sauvegarde devient fiable lorsqu’elle est vérifiée et restaurable.
- Limiter les écritures supplémentaires sur un disque ancien avant diagnostic.
- Séparer les incidents réseau des symptômes de stockage.
- Faire de la validation de restauration un élément du protocole, pas une étape optionnelle.
---

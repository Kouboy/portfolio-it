---
layout: project.njk
tags:
- project
permalink: lab-ad.html
num: '06'
order: 6
slug: lab-ad
title: Lab Active Directory
display: Lab Active Directory
category: SYSTEMS / LAB
status: FUNCTIONAL
status_class: live
theme: system
jp: 構築
lede: Un laboratoire VirtualBox isolé pour manipuler Windows Server 2025, Active Directory, DNS, DHCP et PowerShell dans un
  environnement reproductible.
tri:
- en: LAB
  jp: 試験
  fr: Laboratoire
- en: DIRECTORY
  jp: 構築
  fr: Active Directory
- en: AUTOMATION
  jp: 制御
  fr: Automatisation
facts:
- label: SERVER
  value: Windows Server 2025 Evaluation
- label: CLIENT
  value: Windows 11
- label: NETWORK
  value: 192.168.50.0/24
- label: DOMAIN
  value: ad.lab-it.test
footer_title: ARCHIVE NODE / FIELD NOTE 06
footer_joke: Le domaine de test ne juge personne. Il refuse juste les DNS mal configurés.
prev:
  file: n53sv.html
  name: ASUS N53SV
next:
  file: x71sl.html
  name: ASUS X71SL
feature: false
context: Le laboratoire sert de terrain d’apprentissage pour les services Windows d’entreprise tout en restant indépendant
  du réseau domestique. Les machines virtuelles peuvent être reconfigurées ou restaurées sans impact extérieur.
objective: Disposer d’un réseau suffisamment réaliste pour joindre un poste au domaine, travailler sur les dépendances AD
  DS / DNS / DHCP et automatiser quelques tâches administratives.
protocol:
- title: Réseau
  text: Créer un réseau interne VirtualBox LAB-IT en 192.168.50.0/24.
- title: Serveur
  text: Installer Windows Server 2025 puis AD DS, DNS et DHCP.
- title: Domaine
  text: Créer ad.lab-it.test et joindre le client Windows 11.
- title: Organisation
  text: Créer les OU et groupes Techniciens, Support, RH et Comptabilité.
- title: Automatisation
  text: Écrire des scripts PowerShell de diagnostic et de provisionnement depuis CSV.
evidence:
- Schéma réseau du lab
- Active Directory / OU et groupes
- DNS / zone du domaine
- DHCP / étendue et options
state_label: Résultat
state_title: Lab Active Directory
outcome: Le lab permet de travailler sur le domaine, les utilisateurs et groupes, le DNS, le DHCP et l’automatisation PowerShell
  avec un poste Windows 11 réellement joint à l’Active Directory.
is_current_state: false
lessons:
- Comprendre la dépendance d’Active Directory envers DNS et l’adressage.
- Structurer OU et groupes avant d’automatiser le provisionnement.
- Tester les scripts dans un environnement isolé et réinitialisable.
- Identifier les différences utiles entre PowerShell 5.1 et PowerShell 7.
---

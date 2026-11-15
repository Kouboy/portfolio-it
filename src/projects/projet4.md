---
layout: training-project.njk
tags:
- project
permalink: projet4.html
num: '12'
order: 12
slug: projet4
title: Windows 11 / FOG Deployment
display: Projet 4 — Parc / FOG
category: TRAINING / DEPLOYMENT
status: VALIDATED
status_class: valid
theme: system
jp: 展開
lede: 'Dans un cybercafé fictif, préparer un parc informatique, réaliser un master Windows 11 et déployer deux postes par le réseau avec FOG, en contrôlant chaque résultat.'
tri:
- en: HARDWARE
  jp: 構築
  fr: Choix matériel
- en: IMAGING
  jp: 展開
  fr: Masterisation
- en: VALIDATION
  jp: 証拠
  fr: Recette
facts:
- label: CONTEXT
  value: OpenClassrooms / byteCAFÉ
- label: BUDGET
  value: '8 955,45 € HT / plafond 9 000 €'
- label: TOOLS
  value: Windows 11 · FOG · Chocolatey
- label: STATE
  value: Projet validé
footer_title: REVIEWER EYE / TRAINING NOTE 12
footer_joke: 'Une image restaurée ne suffit pas : il faut encore vérifier ce qui démarre, fonctionne et rejoint réellement le domaine.'
prev:
  file: projet2.html
  name: Projet 2 — CAO / Deploy
next:
  file: road-to-it.html
  name: Road to IT
feature: false
overview: >-
  Le scénario de formation consiste à moderniser le matériel d’un cybercafé puis à industrialiser
  la préparation de postes. La première mission aboutit à un devis justifié et compatible avec les
  équipements existants. La deuxième prépare un Windows 11 de référence, ses applications et son
  image FOG. La troisième restaure cette image sur deux machines virtuelles distinctes et vérifie
  les logiciels, les identités et l’intégration au domaine Active Directory. Les résultats et
  écarts sont consignés dans une procédure illustrée destinée au client fictif.
skills:
- 'Analyser les besoins et la compatibilité du matériel existant : RAM, SSD, processeur, GPU, périphériques et NAS.'
- 'Chiffrer un devis avec quantités, marge de 10 % et contrôle du plafond de 9 000 € HT ; expliquer les arbitrages.'
- 'Préparer Windows 11 en mode Audit, installer six applications avec Chocolatey, contrôler BitLocker et préparer unattend.xml.'
- 'Généraliser le master avec Sysprep, puis capturer une image système dans FOG ; distinguer capture et déploiement.'
- 'Enregistrer les postes par PXE, associer le master, lancer Deploy et restaurer les partitions avec Partclone.'
- 'Valider les postes après déploiement : nom, applications, domaine, accès SYSVOL, assistance RustDesk et administration distante.'
- 'Documenter les écarts et éviter de conclure à une réussite complète à partir d’un seul indicateur de contrôle.'
gallery:
- src: assets/projects/projet4/fog-master.png
  alt: 'Console FOG affichant le master Windows 11, sa taille de 29,82 Gio et la date de capture du 18 octobre 2026.'
  label: 'CAPTURE ORIGINALE / MASTER FOG'
  caption: 'L’image de référence est enregistrée dans FOG : nom, taille et date sont visibles. Cette capture atteste l’existence de l’image, pas à elle seule sa bonne restauration.'
- src: assets/projects/projet4/active-directory.png
  alt: 'Console Utilisateurs et ordinateurs Active Directory, conteneur Computers avec PC-W11-01, PC-ADMIN-CYBER et PC-W11-02.'
  label: 'CAPTURE ORIGINALE / ACTIVE DIRECTORY'
  caption: 'Deux postes issus du master et le poste administratif apparaissent dans le domaine de laboratoire cybercafe.lan. La capture ne suffit pas à confirmer la santé du canal sécurisé.'
evidence:
- 'Devis matériel final du 12 octobre 2026 : 8 955,45 € HT pour un budget maximal de 9 000 € HT.'
- 'Export Chocolatey : six applications demandées identifiées parmi 13 paquets installés.'
- 'Capture du menu Images de FOG : master de 29,82 Gio daté du 18 octobre 2026.'
- 'Procédure de déploiement illustrée (12 pages) et capture du conteneur AD Computers avec trois objets, dont les deux postes déployés.'
outcome: >-
  Projet OpenClassrooms validé. Deux postes ont été restaurés depuis le même master FOG ; les
  six logiciels ont été contrôlés et les objets PC-W11-01, PC-W11-02 et PC-ADMIN-CYBER
  apparaissent dans Active Directory. Le second poste a nécessité une jonction manuelle au
  domaine après l’échec de la jonction automatique observée. Un contrôle du canal sécurisé
  et la synchronisation horaire restaient à éclaircir : ces réserves sont documentées,
  sans leur attribuer de cause non démontrée.
---

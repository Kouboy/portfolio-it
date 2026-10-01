---
layout: project.njk
tags:
- project
permalink: n53sv.html
num: '05'
order: 5
slug: n53sv
title: ASUS N53SV
display: ASUS N53SV
category: REUSE / LINUX
status: LIVE
status_class: live
theme: repair
jp: 再利用
lede: Réaffectation d’un portable ASUS de 2011 en poste secondaire Linux pour la formation, Packet Tracer, Wireshark, la bureautique
  et les sessions de mentorat.
tri:
- en: REUSE
  jp: 再利用
  fr: Réemploi
- en: LINUX
  jp: 構築
  fr: Environnement Linux
- en: TEST
  jp: 試験
  fr: Validation
facts:
- label: MODEL
  value: ASUS N53SV
- label: ERA
  value: '2011'
- label: MEMORY
  value: Environ 8 Go
- label: STATE
  value: Poste secondaire de formation
footer_title: LOCAL DUCK / FIELD NOTE 05
footer_joke: 2011 appelle. Il veut savoir pourquoi son portable compile encore des paquets.
prev:
  file: macbook-a1534.html
  name: MacBook A1534
next:
  file: lab-ad.html
  name: Lab Active Directory
feature: false
context: 'Le N53SV combine un matériel ancien mais encore exploitable : Intel HD 3000, GeForce GT 540M, SSD et disque secondaire.
  Le projet vise une fonction concrète de poste de formation plutôt qu’une modernisation générale.'
objective: Évaluer la charge réelle des usages visés, choisir un environnement Linux proportionné et vérifier que la machine
  reste suffisamment fluide pour les outils de cours et la visioconférence.
protocol:
- title: Test
  text: Valider la fluidité générale à partir d’un environnement Linux live.
- title: Installation
  text: Installer Ubuntu en conservant Windows 10 et remettre le dual-boot GRUB en état.
- title: Allègement
  text: Adopter XFCE pour conserver davantage de marge CPU et mémoire.
- title: Outils
  text: Installer Packet Tracer, Wireshark, LibreOffice et les logiciels utiles à la formation.
- title: Validation
  text: Mesurer partage d’écran, charge CPU, accélération vidéo, audio et webcam.
evidence:
- Photo du portable
- Ubuntu / XFCE
- Packet Tracer en usage
- Mesure de charge lors d’un test visio
state_label: Résultat
state_title: ASUS N53SV
outcome: Le N53SV est utilisé comme poste secondaire de formation. Packet Tracer et Wireshark y fonctionnent, le partage d’écran
  reste exploitable et les limites connues de la webcam sont documentées.
is_current_state: false
lessons:
- Définir l’usage cible avant d’évaluer la pertinence d’un matériel ancien.
- Mesurer la charge réelle plutôt que déduire l’usage des seules spécifications.
- Choisir l’environnement de bureau en fonction des ressources disponibles.
- Conserver les limites observées dans la documentation de la machine.
---

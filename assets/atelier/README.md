# ATELIER / PUBLIC DIAGRAMS

Trois illustrations SVG éditables, conçues spécifiquement pour les fiches Atelier. Ce sont des **schémas explicatifs**, jamais des captures d'outils et jamais des preuves de recette.

| Fichier | Sujet | Sources de cadrage |
| --- | --- | --- |
| `infrastructure/topology-public.svg` | Répartition fonctionnelle des nœuds et des services | Registre privé `infrastructure-atelier/SERVICES.md`, état KouboyPi, tests d'accès Atelier Remote |
| `mnemosynt/memory-model-public.svg` | Observation, interprétation, état, provenance, espace partagé et espaces propres | Modèle d'état/provenance dans Drive Noema, registre MNEMOSYNT, audit A1 du 5 novembre 2026 |
| `pocket-signal/session-sync-public.svg` | Clients Debian/Windows et sessions versionnées sur Raspberry Pi | Journal de développement Atelier Pocket et tests multi-machines de novembre 2026 |

Les diagrammes ont volontairement été dépouillés des IP, noms de comptes, ports, chemins absolus, identifiants d'accès et détails du stockage privé. Les statuts de disponibilité ne sont pas représentés par des couleurs « en ligne » : une telle carte ne serait pas une mesure temps réel.

Toutes les connexions et zones de mémoire sont des **flux ou frontières conceptuels**. Ne pas interpréter un trait comme une preuve de permission testée, une réussite de restauration ou une dépendance réseau physiquement vérifiée.

**Pour la relecture** : la syntaxe, les rôles et la légende peuvent être modifiés dans les SVG ; ne jamais incorporer une copie non anonymisée du registre d'infrastructure.

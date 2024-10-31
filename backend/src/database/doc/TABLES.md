# Schéma Relationnel Simplifié pour Collab'ook

Pour une version initiale de **Collab'ook**, nous commençons avec trois tables principales : `Users`, `Stories`, et `Collaborations`. Cela permettra de gérer les fonctionnalités de base du site, telles que l'inscription des utilisateurs, la création d'histoires, et la collaboration.

## Tables Principales

### 1. Users
Stocke les informations des utilisateurs.

| Nom du champ   | Type         | Description                            |
|----------------|--------------|----------------------------------------|
| `user_id`      | INTEGER (PK) | Identifiant unique de l'utilisateur    |
| `email`        | VARCHAR      | Adresse email de l'utilisateur         |
| `pseudo`       | VARCHAR      | Pseudonyme de l'utilisateur            |
| `password`     | VARCHAR      | Mot de passe hashé                     |
| `created_at`   | TIMESTAMP    | Date de création du compte             |

---

### 2. Stories
Contient les informations des histoires créées par les utilisateurs.

| Nom du champ   | Type         | Description                            |
|----------------|--------------|----------------------------------------|
| `story_id`     | INTEGER (PK) | Identifiant unique de l'histoire       |
| `title`        | VARCHAR      | Titre de l'histoire                    |
| `content`      | TEXT         | Contenu principal de l'histoire        |
| `creator_id`   | INTEGER (FK) | Identifiant de l'utilisateur créateur  |
| `created_at`   | TIMESTAMP    | Date de création de l'histoire         |

- **Clé étrangère** : `creator_id` fait référence à `user_id` dans la table `Users`.

---

### 3. Collaborations
Associe des utilisateurs aux histoires pour permettre la co-écriture.

| Nom du champ     | Type         | Description                                      |
|------------------|--------------|--------------------------------------------------|
| `collaboration_id` | INTEGER (PK) | Identifiant unique de la collaboration           |
| `user_id`        | INTEGER (FK) | Identifiant de l'utilisateur                     |
| `story_id`       | INTEGER (FK) | Identifiant de l'histoire                        |
| `role`           | VARCHAR      | Rôle de l'utilisateur dans l'histoire (e.g., "auteur principal", "co-auteur") |

- **Clés étrangères** : `user_id` fait référence à `user_id` dans la table `Users`, et `story_id` fait référence à `story_id` dans la table `Stories`.

---

## Relations

- **Users - Stories** : Un utilisateur peut créer plusieurs histoires, mais chaque histoire a un seul créateur (`creator_id` dans `Stories`).
- **Users - Collaborations** : Un utilisateur peut collaborer sur plusieurs histoires.
- **Stories - Collaborations** : Une histoire peut avoir plusieurs collaborateurs (co-auteurs).

---

## Fonctionnalités possibles avec ce schéma

1. **Inscription et connexion des utilisateurs** : en utilisant la table `Users`.
2. **Création d'une histoire** : un utilisateur peut créer une histoire via la table `Stories`.
3. **Co-écriture d'une histoire** : en ajoutant des entrées dans la table `Collaborations`, plusieurs utilisateurs peuvent être associés à une même histoire pour permettre la co-écriture.
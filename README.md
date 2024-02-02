# Projet Blockchain Voting Ethereum Dapp - Guide d'Utilisation

## Objectifs du Projet
Le projet Blockchain Voting Ethereum Dapp vise à créer une application de vote décentralisée offrant une alternative transparente, sécurisée et immuable aux systèmes de vote traditionnels. Voici les principaux objectifs du projet :

1. **Développement de l'Application de Vote :** Une application fonctionnelle a été mise en place dans un environnement de développement utilisant Ganache comme simulateur de blockchain et MetaMask comme portefeuille Ethereum.

2. **Candidats Présidentiels :** Les participants sont des amis de classe se portant candidats à la présidence, personnalisant ainsi le projet avec une dimension concrète.

3. **Intégration de Truffle :** Le framework Truffle a été intégré pour faciliter le développement, le déploiement et les tests de contrats intelligents sur la blockchain Ethereum.

## Mise en Place du Projet avec Truffle et Configuration des Contrats
### Étape 1 : Installation de Truffle
```bash
npm install -g truffle@5.1.18
```

### Étape 2 : Création du Projet
```bash
mkdir Voting
cd Voting
npm install -g webpack@4.42.0
truffle unbox webpack
```

### Étape 3 : Suppression des Fichiers Inutiles
```bash
# Dans le répertoire contracts
rm ConvertLib.sol MetaCoin.sol
```

### Étape 4 : Configuration Initiale
La configuration initiale avec Truffle a établi une base solide pour le développement ultérieur. La prochaine étape consistera à intégrer le contrat de vote dans cette structure et à le déployer sur la blockchain.

## Mise à Jour du Projet

1. **Création du Contrat de Vote :** Création du fichier `Voting.sol` dans le répertoire contracts.

    **Vérification de la Présence du Fichier :**
    ```bash
    dir contracts
    ```

2. **Configuration du Déploiement :** Modification du fichier `2_deploy_contracts.js` dans le répertoire migrations pour spécifier les arguments du contrat et définir le gaz nécessaire pour le déploiement.

3. **Configuration Globale du Gaz :** Ajout de l'option "gas" avec la valeur spécifiée (ex. 6700000) dans le fichier `truffle-config.js` pour une gestion uniforme du gaz dans toutes les migrations de contrats.

4. **Mise à Jour du Fichier source index.js :** Remplacement du contenu existant par le nouveau code pour l'interaction avec le contrat de vote déployé sur la blockchain Ethereum.

5. **Mise à Jour du Fichier source index.html :** Remplacement du contenu existant par le nouveau code pour la configuration de l'interface utilisateur.

## Préparation de l'Environnement de Test avec Ganache

1. **Création de l'Espace de Travail dans Ganache :** Création d'un espace de travail "voting_8545" avec les paramètres nécessaires.

2. **Importation du Projet Truffle dans Ganache :** Importation du projet Truffle en spécifiant le fichier `truffle-config.js`.

3. **Configuration des Paramètres dans Ganache :** Configuration du nom d'hôte, du numéro de port et du gaz dans Ganache.

4. **Associations des Clés Privées :** Chaque compte généré par Ganache est associé à une clé privée nécessaire à l'authentification des transactions.

## Déploiement et Interaction avec le Contrat sur la Blockchain

1. **Compilation et Déploiement :**
   ```bash
   truffle migrate --network develop

2. **Vérification dans Ganache :** Vérification du succès du déploiement dans Ganache, où le solde du compte [0] devrait être mis à jour.

3. **Génération du Dossier build/contracts :** Le dossier est automatiquement généré avec les fichiers "Voting.json" et "Migrations.json".

4. **Importance du Fichier Voting.json :** Ce fichier contient l'ABI du contrat et l'adresse du contrat déployé, essentiels pour l'interaction de l'application avec la blockchain Ethereum.

5. **Interaction avec le Contrat via Truffle Console :** Utilisation de Truffle Console pour effectuer des opérations telles que la récupération du nombre de votes et la soumission de votes.

## Lancement de l'Application et Utilisation avec MetaMask

1. **Configuration de MetaMask :** Ajout manuel d'un réseau avec l'URL RPC, l'ID de chaîne et le symbole de la devise.

2. **Création d'un Nouveau Compte :** Création d'un nouveau compte en utilisant l'adresse du compte [0] de Ganache.

3. **Démarrage du Serveur :**
    ```bash
    npm run dev
    ```

4. **Vote avec MetaMask :** Connexion du compte [0] sur MetaMask avec http://localhost:8080 pour effectuer des votes sur le site.

5. **Confirmation de la Transaction :** Après avoir voté, utilisation de MetaMask pour confirmer la transaction avec les détails tels que le coût estimé, la confirmation attendue, les frais maximaux, etc.

6. **Vérification des Transactions dans Ganache :** Confirmation du succès de la transaction en vérifiant le nombre de transactions du compte [0] dans Ganache.

## Conclusion
Ce guide fournit des instructions détaillées sur la configuration, le déploiement et l'utilisation de l'application de vote décentralisée sur la blockchain Ethereum. Suivez ces étapes pour construire, déployer et interagir avec le contrat de vote, démontrant ainsi l'efficacité de la solution dans un environnement local.






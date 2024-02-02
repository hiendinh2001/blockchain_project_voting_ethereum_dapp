# Projet Blockchain Voting Ethereum Dapp - Guide d'Utilisation

## Objectifs du Projet
Le projet Blockchain Voting Ethereum Dapp vise à créer une application de vote décentralisée offrant une alternative transparente, sécurisée et immuable aux systèmes de vote traditionnels. Voici les principaux objectifs du projet :

1. **Développement de l'Application de Vote :** Une application fonctionnelle a été mise en place dans un environnement de développement utilisant Ganache comme simulateur de blockchain et MetaMask comme portefeuille Ethereum.

2. **Candidats Présidentiels :** Les participants sont des amis de classe se portant candidats à la présidence, personnalisant ainsi le projet avec une dimension concrète et amicale.

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
    ls contracts
    ```

2. **Configuration du Déploiement :** Modification du fichier 2_deploy_contracts.js dans le répertoire migrations pour spécifier les arguments du contrat et définir le gaz nécessaire pour le déploiement.

3. **Configuration Globale du Gaz :** Ajout de l'option "gas" avec la valeur spécifiée (ex. 6700000) dans le fichier truffle-config.js pour une gestion uniforme du gaz dans toutes les migrations de contrats.

4. **Mise à Jour du Fichier source index.js :** Remplacement du contenu existant par le nouveau code pour l'interaction avec le contrat de vote déployé sur la blockchain Ethereum.

5. **Mise à Jour du Fichier source index.html :** Remplacement du contenu existant par le nouveau code pour la configuration de l'interface utilisateur.




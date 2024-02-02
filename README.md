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


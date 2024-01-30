pragma solidity ^0.6.4;

contract Voting {
  /* Le champ de mapping ci-dessous est équivalent à un tableau associatif ou à une table de hachage.
  La clé du mapping est le nom du candidat stocké en tant que bytes32 et la valeur est
  un entier sans signe pour stocker le nombre de votes
  */
  
  mapping (bytes32 => uint256) public votesReceived;

  /* Solidity ne permet pas de passer un tableau de chaînes de caractères dans le constructeur (pour le moment).
  Nous utiliserons plutôt un tableau de bytes32 pour stocker la liste des candidats
  */
  
  bytes32[] public candidateList;

  /* C'est le constructeur qui sera appelé une fois lorsque nous
  déploierons le contrat sur la blockchain. Lors du déploiement du contrat,
  nous passerons un tableau de candidats qui participeront à l'élection
  */
  constructor(bytes32[] memory candidateNames) public {
    candidateList = candidateNames;
  }

  // Cette fonction renvoie le total des votes qu'un candidat a reçus jusqu'à présent
  function totalVotesFor(bytes32 candidate) view public returns (uint256) {
    require(validCandidate(candidate));
    return votesReceived[candidate];
  }

  // Cette fonction incrémente le nombre de votes pour le candidat spécifié. Cela
  // équivaut à émettre un vote
  function voteForCandidate(bytes32 candidate) public {
    require(validCandidate(candidate));
    votesReceived[candidate] += 1;
  }

  function validCandidate(bytes32 candidate) view public returns (bool) {
    for(uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i] == candidate) {
        return true;
      }
    }
    return false;
  }
}
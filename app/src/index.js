import Web3 from "web3";
import votingArtifact from "../../build/contracts/Voting.json";

let candidates = { "Rafik": "candidate-1", "Mlach": "candidate-2", "Sara": "candidate-3", "Omayo": "candidate-4", "Erhan": "candidate-5", "Flora": "candidate-6" }
const App = {
  web3: null,
  account: null,
  voting: null,

  start: async function () {
    const { web3 } = this;

    try {
      /* Obtenez le réseau auquel nous sommes connectés, puis lisez le build/contracts/Voting.json et instanciez un objet contrat à utiliser */
      const networkId = 5777;
      const deployedNetwork = votingArtifact.networks[networkId];
      this.voting = new web3.eth.Contract(
        votingArtifact.abi,
        deployedNetwork.address,
      );

      // obtenir des comptes
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];

      this.loadCandidatesAndVotes();
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  loadCandidatesAndVotes: async function () {
    const { totalVotesFor } = this.voting.methods;
    //const { sendCoin } = this.meta.methods;
    //await sendCoin(receiver, amount).send({ from: this.account });
    let candidateNames = Object.keys(candidates);
    for (var i = 0; i < candidateNames.length; i++) {
      let name = candidateNames[i];
      var count = await totalVotesFor(this.web3.utils.asciiToHex(name)).call();
      $("#" + candidates[name]).html(count);
    }
  },

  voteForCandidate: async function () {
    let candidateName = $("#candidate").val();
    $("#msg").html("Vote has been submitted. The vote count will increment as soon as the vote is recorded on the blockchain. Please wait.")
    $("#candidate").val("");

    const { totalVotesFor, voteForCandidate } = this.voting.methods;


    /* Voting.deployed() renvoie une instance du contrat. Chaque appel
    * dans Truffle renvoie une promesse, c'est pourquoi nous avons utilisé then()
    * partout où nous avons un appel de transaction
    */
    await voteForCandidate(this.web3.utils.asciiToHex(candidateName)).send({ gas: 200000, from: this.account });
    let div_id = candidates[candidateName];
    var count = await totalVotesFor(this.web3.utils.asciiToHex(candidateName)).call();
    $("#" + div_id).html(count);
    $("#msg").html("");
  }

};

window.App = App;

window.addEventListener("load", function () {
  if (window.ethereum) {
    // utiliser le fournisseur de MetaMask
    App.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // obtenir la permission d'accéder aux comptes
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    );
  }

  App.start();
});
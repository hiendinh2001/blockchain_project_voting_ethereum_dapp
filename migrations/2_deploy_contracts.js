const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  deployer.deploy(Voting, ['Rafik', 'Mlach', 'Sara', 'Omayo', 'Erhan', 'Flora'].map(name => web3.utils.asciiToHex(name)));
};

var HelloWorld = artifacts.require("./HelloWorld.sol");
var ScoreStore = artifacts.require("./ScoreStore.sol");

module.exports = function(deployer) {
    deployer.deploy(HelloWorld);
    deployer.deploy(ScoreStore);
};

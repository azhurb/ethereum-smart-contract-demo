var HelloWorld = artifacts.require("./HelloWorld.sol");
var ScoreStore = artifacts.require("./ScoreStore.sol");
var MyGame = artifacts.require("./MyGame.sol");

module.exports = function(deployer) {
    deployer.deploy(HelloWorld);
    deployer.deploy(ScoreStore);
    deployer.deploy(MyGame);
};

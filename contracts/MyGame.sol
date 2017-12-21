pragma solidity ^0.4.4;

contract IScoreStore {
    function GetScore(string name) public returns (int);
}

contract MyGame {
    function ShowScore(string name) public returns (int) {
        IScoreStore scoreStore = IScoreStore(0xff47c412528eb0c8179df7f3e800d82329d177ae); // ScoreStore address
        return scoreStore.GetScore(name);
    }
}
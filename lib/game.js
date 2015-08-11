var Event = require("next-event");

function Game(collection, score, matcher) {
    this.collection = collection;
    this.score = score;
    this.matcher = matcher;
    this.onGameOver = new Event();
}

Game.prototype.gameOver = function() {
    this.onGameOver.fire();
};

module.exports = Game;

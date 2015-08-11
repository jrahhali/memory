var assert = require("assert");
var Game = require("./../../lib/game");

describe("Game", function() {
    describe("gameOver()", function() {
        it("should fire a gameOver event", function() {
            var game = new Game();
            var eventFired = false;
            game.onGameOver.addListener(function() { eventFired = true; });
            game.gameOver();
            assert(eventFired);
        });
    });
});

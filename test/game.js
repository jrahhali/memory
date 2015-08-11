var assert = require("assert");
var Matcher = require("./../lib/matcher");
var GameFactory = require("./game-factory");

describe("Game", function() {
    it("should fire a gameOver event once all matches have been made", function() {

        var eventFired = false;
        var gameFactory = new GameFactory();
        var game = gameFactory.create(2);

        game.onGameOver.add(function() {eventFired = true; });

        var matchable1 = game.collection.matchables[0];
        var matchable2 = game.collection.matchables[1];
        debugger;
        matchable1.reveal();
        matchable2.reveal();
        assert(eventFired);
    });
});

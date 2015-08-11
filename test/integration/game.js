var Game = require("./../../lib/game");
var Matchable = require("./../../lib/matchable");
var MatchableCollection = require("./../../lib/matchable-collection");
var Matcher = require("./../../lib/matcher");
var Score = require("./../../lib/score");
var assert = require("assert");

function createGame() {
    // Object graph
    var game = new Game(
        new MatchableCollection(
            0,
            (function() {
                var matchables = [];
                matchables.push(new Matchable(0, Matchable.HIDDEN));
                matchables.push(new Matchable(0, Matchable.HIDDEN));
                return matchables;
            }())
        ),
        new Score(0),
        new Matcher(undefined, Matcher.EMPTY)
    );

    // Wire evething up
    game.collection.matchables.forEach(function(matchable) {
        matchable.onRevealed.addListener(game.matcher, game.matcher.add);
    });
    game.matcher.onMatchMade.addListener(game.collection, game.collection.match);
    game.matcher.onMatchMade.addListener(game.score, game.score.increase);
    game.matcher.onMismatched.addListener(game.collection, game.collection.hide);
    game.collection.onAllMatchesMade.addListener(game, game.gameOver);

    return game;
}

describe("Game", function() {
    it("should fire an onGameOverEvent once all matches have been made", function() {
        var game = createGame();
        var eventFired = false;
        game.onGameOver.addListener(function() { eventFired = true; });
        game.collection.matchables[0].reveal();
        game.collection.matchables[1].reveal();
        assert(eventFired);
    });
});

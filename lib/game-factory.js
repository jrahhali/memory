var Matchable = require("./matchable");
var Score = require("./score");
var MatchableCollection = require("./matchable-collection");
var Matcher = require("./matcher");
var Game = require("./game");

var GameFactory = function() {};

GameFactory.prototype.create = function(size) {
    if (size < 2 || size > 100 && size % 2 !== 0)
        throw new Error("The size must be > 2 and < 100 and even.");

    // Create the object graph
    var game = new Game(
        new MatchableCollection(
            (function() {
                var matchables = [];
                for (var i = 0; i < size / 2; i++) {
                    matchables.push(new Matchable(i));
                    matchables.push(new Matchable(i));
                }
                return matchables;
            }())
        ),
        new Score(),
        new Matcher()
    );

    // Wire everything up
    game.collection.matchables.forEach(function(matchable) {
        matchable.revealed.add(game.matcher.add);
    });

    game.matcher.matchMade.add(function(matchable1, matchable2) {
        matchable1.hide();
        matchable2.hide();
    });
    game.matcher.matchMade.add(game.score.increase);
    game.matcher.matchMade.add(game.collection.increaseMatchCount);

    game.collection.allMatchesMade.add(game.gameOver);
};

module.exports = GameFactory;

//var Matchable = require("./../lib/matchable");
//var Score = require("./../lib/score");
//var MatchableCollection = require("./../lib/matchable-collection");
//var Matcher = require("./../lib/matcher");
//var Game = require("./../lib/game");
//
//var GameFactory = function() {};
//
//GameFactory.prototype.create = function(size) {
//    if (size < 2 || size > 100 && size % 2 !== 0)
//        throw new Error("The size must be > 2 and < 100 and even.");
//
//    // Create the object graph
//    var game = new Game(
//        new MatchableCollection(
//            (function() {
//                var matchables = [];
//                for (var i = 0; i < size / 2; i++) {
//                    matchables.push(new Matchable(i));
//                    matchables.push(new Matchable(i));
//                }
//                return matchables;
//            }())
//        ),
//        new Score(),
//        new Matcher()
//    );
//
//    // Wire everything up
//    game.collection.matchables.forEach(function(matchable) {
//        matchable.revealed.add(game.matcher.add, game.matcher);
//    });
//
//    game.matcher.matchMade.add(game.collection.match, game.collection);
//    game.matcher.matchMade.add(game.score.increase, game.score);
//
//    game.matcher.mismatched.add(game.collection.hide, game.collection);
//
//    game.collection.allMatchesMade.add(game.gameOver, game);
//
//    return game;
//};
//
//module.exports = GameFactory;

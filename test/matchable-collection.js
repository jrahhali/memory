//var assert = require("assert");
//var MatchableCollection = require("./../lib/matchable-collection");
//
//describe("MatchableCollection", function() {
//    describe("increaseMatchCount()", function() {
//        it("should fire an 'allMatched' event once all matches have been made.", function() {
//            var collection = new MatchableCollection(["m1", "m2"]);
//            var eventFired = false;
//            collection.allMatchesMade.add(function() { eventFired = true; });
//            collection.increaseMatchCount();
//            assert(eventFired);
//        });
//
//        it("should not fire an 'allMatched' event if there are still matches left.", function() {
//            var collection = new MatchableCollection(["m1", "m2", "m3", "m4"]);
//            var eventDidNotFire = true;
//            collection.allMatchesMade.add(function() { eventDidNotFire = false; });
//            collection.increaseMatchCount();
//            assert(eventDidNotFire);
//        });
//    });
//});

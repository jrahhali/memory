var assert = require("assert");
var MatchableCollection = require("./../lib/matchable-collection");

function MatchableStub() {
    this.state = "";
    this.match = function() {
        this.state = "matched";
    };

    this.hide = function() {
        this.state = "hidden";
    };
}

describe("MatchableCollection", function() {
    var collection;

    beforeEach(function() {
        collection = new MatchableCollection(0, [1, 2, 3, 4]);
    });

    describe("match()", function() {
        it("should match the two matchables passed in", function() {
            var matchable1 = new MatchableStub();
            var matchable2 = new MatchableStub();
            collection.match(matchable1, matchable2);
            assert(matchable1.state == "matched" && matchable2.state == "matched");

        });

        it("should fire an onAllMatchesMade event when all matches are made", function() {
            var eventFired = false;
            collection.onAllMatchesMade.addListener(function() { eventFired = true; });
            collection.match(new MatchableStub(), new MatchableStub());
            collection.match(new MatchableStub(), new MatchableStub());
            assert(eventFired);
        });

        it("should not fire an onAllMatchesMade event when there are still matches left", function() {
            var eventFired = false;
            collection.onAllMatchesMade.addListener(function() { eventFired = true; });
            collection.match(new MatchableStub(), new MatchableStub());
            assert(!eventFired);
        });
    });

    describe("hide()", function() {
        it("should hide the two matchables passed in", function() {
            var matchable1 = new MatchableStub();
            var matchable2 = new MatchableStub();
            collection.hide(matchable1, matchable2);
            assert(matchable1.state == "hidden" && matchable2.state == "hidden");
        });
    });
});

var assert = require("assert");
var Matcher = require("./../../lib/matcher");

var alwaysMatchesMatchable = {
    matches: function() { return true; }
};

var alwaysMismatchMatchable = {
    matches: function() { return false; }
};

describe("Matcher", function() {
    var matcher;

    beforeEach(function() {
        matcher = new Matcher(undefined, Matcher.EMPTY);
    });

    describe("add()", function() {
        it("should add a matchable", function() {
            matcher.add({});
            assert(matcher.matchable !== undefined);
        });

        it("should not fire an event when only one matchable is added", function() {
            var eventFired = false;
            matcher.onMatchMade.addListener(function() { eventFired = true; });
            matcher.onMismatched.addListener(function() { eventFired = true; });
            matcher.add(alwaysMatchesMatchable);
            assert(!eventFired);
        });

        it("should fire an onMatchMade event if two matchables matched", function() {
            var eventFired = false;
            matcher.onMatchMade.addListener(function() { eventFired = true; });
            matcher.add(alwaysMatchesMatchable);
            matcher.add(alwaysMatchesMatchable);
            assert(eventFired);
        });

        it("should not fire an onMatchMade event if two matchables didn't match", function() {
           var eventFired = false;
           matcher.onMatchMade.addListener(function() { eventFired = true; });
           matcher.add(alwaysMismatchMatchable);
           matcher.add(alwaysMismatchMatchable);
           assert(!eventFired);
        });

        it("should fire an onMismatched event if two matchables didn't match", function() {
           var eventFired = false;
           matcher.onMismatched.addListener(function() { eventFired = true; });
           matcher.add(alwaysMismatchMatchable);
           matcher.add(alwaysMismatchMatchable);
           assert(eventFired);
        });

        it("should not fire an onMismatched event if two matchables matched", function() {
           var eventFired = false;
           matcher.onMismatched.addListener(function() { eventFired = true; });
           matcher.add(alwaysMatchesMatchable);
           matcher.add(alwaysMatchesMatchable);
           assert(!eventFired);
        });
    });
});

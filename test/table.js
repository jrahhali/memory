var assert = require("assert");
var Table = require("./../lib/table");

describe("Table", function() {
    describe("matchMade()", function() {
        it("should fire an 'allMatched' event once all matches have been made.", function() {
            var table = new Table(["m1", "m2"]);
            var eventFired = false;
            table.allMatched.add(function() { eventFired = true; });
            table.matchMade();
            assert(eventFired);
        });

        it("should not fire an 'allMatched' event if there are still matches left.", function() {
            var table = new Table(["m1", "m2", "m3", "m4"]);
            var eventDidNotFire = true;
            table.allMatched.add(function() { eventDidNotFire = false; });
            table.matchMade();
            assert(eventDidNotFire);
        });
    });
});

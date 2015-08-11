var assert = require("assert");
var Score = require("./../../lib/score");

describe("Score", function() {
    var score;

    beforeEach(function() {
        score = new Score(0);
    })

    describe("increase()", function() {
        it("should increase the score", function() {
            score.increase();
            assert(score.score === 1);
        });

        it("should fire an onChanged event", function() {
            var eventFired = false;
            score.onChanged.addListener(function() {
                eventFired = true;
            });
            score.increase();
            assert(eventFired);
        });
    });
});

var Event = require("next-event");

function MatchableCollection(matchesMade, matchables) {
    this.matchesMade = matchesMade;
    this.matchables = matchables;
    this.onAllMatchesMade = new Event();
}

MatchableCollection.prototype.match = function(matchable1, matchable2) {
    matchable1.match();
    matchable2.match();

    this.matchesMade++;
    if (this.matchesMade * 2 === this.matchables.length) {
        this.onAllMatchesMade.fire();
    }
};

MatchableCollection.prototype.hide = function(matchable1, matchable2) {
    matchable1.hide();
    matchable2.hide();
};

module.exports = MatchableCollection;

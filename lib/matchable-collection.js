var Event = require("next-event");

function MatchableCollection(matchables) {
    this._matchesMade = 0;

    this.matchables = matchables;
    this.allMatchesMade = new Event();
}

MatchableCollection.prototype.match = function(matchable1, matchable2) {
    debugger;
    matchable1.match();
    matchable2.match();
    this._matchesMade++;
    if (this._matchesMade * 2 === this.matchables.length)
        this.allMatchesMade.fire();
};

MatchableCollection.prototype.hide = function(matchable1, matchable2) {
    matchable1.hide();
    matchable2.hide();
};

module.exports = MatchableCollection;

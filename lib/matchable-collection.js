var Event = require("next-event");

function MatchableCollection(matchables) {
    this._matchesMade = 0;

    this.matchables = matchables;
    this.allMatchesMade = new Event();
}

MatchableCollection.prototype.increaseMatchCount = function() {
    debugger;
    this._matchesMade++;
    if (this._matchesMade * 2 === this.matchables.length)
        this.allMatchesMade.fire();
};

module.exports = MatchableCollection;

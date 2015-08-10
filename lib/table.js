var Event = require("next-event");

function Table(matchables) {
    this._matchesMade = 0;

    this.matchables = matchables;
    this.allMatched = new Event();
}

Table.prototype.matchMade = function() {
    this._matchesMade++;
    if (this._matchesMade * 2 === this.matchables.length)
        this.allMatched.fire();
};

module.exports = Table;

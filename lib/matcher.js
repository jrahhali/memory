"use strict";

var Event = require("next-event");

function Matcher(matchable, state) {
    this.matchable = matchable;
    this.state = state;
    this.onMatchMade = new Event();
    this.onMismatched = new Event();
}

Matcher.prototype.add = function(matchable) {
    this.state.call(this, matchable);
};

Matcher.EMPTY = function(matchable) {
    this.matchable = matchable;
    this.state = Matcher.FILLED;
};

Matcher.FILLED = function(matchable) {
    if (this.matchable.matches(matchable)) {
        this.onMatchMade.fire(this.matchable, matchable);
    }
    else {
        this.onMismatched.fire(this.matchable, matchable);
    }
    this.state = Matcher.EMPTY;
};

module.exports = Matcher;

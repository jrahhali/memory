"use strict";

var Event = require("next-event");

var Empty = function(matchable) {
    this._matchable = matchable;
    this._state = Filled;
};

var Filled = function(matchable) {
    debugger;
    if (this._matchable.matches(matchable))
        this.matchMade.fire(this._matchable, matchable);
    else
        this.mismatched.fire(this._matchable, matchable);
    this._state = Empty;
};

function Matcher() {
    debugger;
    this._matchable = undefined;
    this._state = Empty;

    this.matchMade = new Event();
    this.mismatched = new Event();
}

Matcher.prototype.add = function(matchable) {
    this._state.call(this, matchable);
};

module.exports = Matcher;

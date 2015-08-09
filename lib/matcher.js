"use strict";

var Event = require("next-event");

function Matcher() {
    this._matchable = null;
    this.matched = new Event();
    this.mismatched = new Event();
}

Matcher.prototype.add = function(matchable) {
    if (this._matchable === null)
        return (this._matchable = matchable);
    if (this._matchable.matches(matchable)) {
        this.matched.fire();
        this._matchable.match();
        matchable.match();
    }
    else {
        this.mismatched.fire();
        this._matchable.hide();
        matchable.hide();
    }

    this._matchable = null;
};

module.exports = Matcher;

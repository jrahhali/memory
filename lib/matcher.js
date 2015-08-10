"use strict";

var Event = require("next-event");

var Empty = function(matchable) {
    this._matchable = matchable;
    this._state = Filled;
};

var Filled = function(matchable) {
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
    this._state = Empty;
};

module.exports = {
    _matchable: undefined,
    _state: Empty,

    matched: new Event(),
    mismatched: new Event(),

    add: function (matchable) {
        this._state.call(this, matchable);
    }
};

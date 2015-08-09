"use strict";

var Event = require("next-event");

var HIDDEN_STATE = "hidden";
var REVEALED_STATE = "revealed";
var MATCHED_STATE = "matched";

function Matchable(id) {
    this._id = id;
    this._state = HIDDEN_STATE;
    this.revealed = new Event();
    this.hidden = new Event();
    this.matched = new Event();
}

Matchable.prototype.hide = function() {
    if (this._state !== REVEALED_STATE)
        throw new Error("Can only hide a revealed matchable.");

    this._state = HIDDEN_STATE;
    this.hidden.fire();
};

Matchable.prototype.reveal = function() {
    if (this._state !== HIDDEN_STATE)
        throw new Error("Can only reveal a hidden matchable.");

    this._state = REVEALED_STATE;
    this.revealed.fire();
};

Matchable.prototype.match = function() {
    if (this._state !== REVEALED_STATE)
        throw new Error("Can only match a revealed matchable.");

    this._state = MATCHED_STATE;
    this.matched.fire();
};

Matchable.prototype.matches = function(matchable) {
    return this._id === matchable._id;
};

module.exports = Matchable;

"use strict";

var Event = require("next-event");

var Hidden = {
    reveal: function() {
        this._state = Revealed;
        this.revealed.fire();
    }
};

var Revealed = {
    hide: function() {
        this._state = Hidden;
        this.hidden.fire();
    },

    match: function() {
        this._state = Matched;
        this.matched.fire();
    }
};

var Matched = { };

function Matchable(id) {
    this._id = id;
    this._state = Hidden;
    this.revealed = new Event();
    this.hidden = new Event();
    this.matched = new Event();
}

Matchable.prototype.hide = function() {
    this._state.hide.call(this);
};

Matchable.prototype.reveal = function() {
    this._state.reveal.call(this);
};

Matchable.prototype.match = function() {
    this._state.match.call(this);
};

Matchable.prototype.matches = function(matchable) {
    return this._id === matchable._id;
};

module.exports = Matchable;

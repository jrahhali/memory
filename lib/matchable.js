"use strict";

var Event = require("next-event");

function Matchable(id, state) {
    this.id = id;
    this.state = state;
    this.onRevealed = new Event();
    this.onHidden = new Event();
    this.onMatched = new Event();
}

Matchable.prototype.hide = function() {
    this.state.hide.call(this);
};

Matchable.prototype.reveal = function() {
    this.state.reveal.call(this);
};

Matchable.prototype.match = function() {
    this.state.match.call(this);
};

Matchable.HIDDEN = {
    reveal: function() {
        this.state = Matchable.REVEALED;
        this.onRevealed.fire(this);
    }
};

Matchable.REVEALED = {
    hide: function() {
        this.state = Matchable.HIDDEN;
        this.onHidden.fire(this);
    },

    match: function() {
        this.state = Matchable.MATCHED;
        this.onMatched.fire(this);
    }
};

Matchable.MATCHED = {
};

module.exports = Matchable;

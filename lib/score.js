var Event = require("next-event");

function Score() {
    this._value = 0;
    this.changed = new Event();
}

Score.prototype.increase = function() {
    this._value++;
};

Score.prototype.toString = function() {
    return this._value.toString();
};

module.exports = Score;

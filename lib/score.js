var Event = require("next-event");

function Score(score) {
    this.score = score;
    this.onChanged = new Event();
}

Score.prototype.increase = function() {
    this.score++;
    this.onChanged.fire();
};

module.exports = Score;

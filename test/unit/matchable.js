"use strict";

var assert = require("assert");
var Matchable = require("./../../lib/matchable");

describe("Matchable", function() {
    var matchable;

    beforeEach(function() {
        matchable = new Matchable(0);
    });

    describe("hide()", function() {
        it("should not be callable from a hidden state", function() {
            var matchable = new Matchable(0, Matchable.HIDDEN);
            try {
                matchable.hide();
                assert(false);
            }
            catch (err) {
                assert(true);
            }
        });

        it("should not be callable from a matched state", function() {
            var matchable = new Matchable(0, Matchable.MATCHED);
            try {
                matchable.hide();
                assert(false);
            }
            catch (err) {
                assert(true);
            }
        });

        it("should be callable from a revealed state", function() {
            var matchable = new Matchable(0, Matchable.REVEALED);
            try {
                matchable.hide();
                assert(true);
            }
            catch (err) {
                assert(false);
            }
        });

        it("should fire an onHidden event", function() {
            var eventFired = false;
            var matchable = new Matchable(0, Matchable.REVEALED);
            matchable.onHidden.addListener(function() { eventFired = true; });
            matchable.hide();
            assert(eventFired);
        });
    });

    describe("reveal()", function() {
        it("should not be callable from a revealed state", function() {
            var matchable = new Matchable(0, Matchable.REVEALED);
            try {
                matchable.reveal();
                assert(false);
            }
            catch (err) {
                assert(true);
            }
        });

        it("should not be callable from a matched state", function() {
            var matchable = new Matchable(0, Matchable.MATCHED);
            try {
                matchable.reveal();
                assert(false);
            }
            catch (err) {
                assert(true);
            }
        });

        it("should be callable from a hidden state", function() {
            var matchable = new Matchable(0, Matchable.HIDDEN);
            try {
                matchable.reveal();
                assert(true);
            }
            catch (err) {
                assert(false);
            }
        });

        it("should fire an onRevealed event", function() {
            var eventFired = false;
            var matchable = new Matchable(0, Matchable.HIDDEN);
            matchable.onRevealed.addListener(function() { eventFired = true; });
            matchable.reveal();
            assert(eventFired);
        });
    });

    describe("match()", function() {
        it("should not be callable from a hidden state", function() {
            var matchable = new Matchable(0, Matchable.HIDDEN);
            try {
                matchable.match();
                assert(false);
            }
            catch (err) {
                assert(true);
            }
        });

        it("should not be callable from a revealed state", function() {
            var matchable = new Matchable(0, Matchable.REVEALED);
            try {
                matchable.match();
                assert(false);
            }
            catch (err) {
                assert(true);
            }
        });

        it("should not be callable from a matched state", function() {
            var matchable = new Matchable(0, Matchable.MATCHED);
            try {
                matchable.match();
                assert(false);
            }
            catch (err) {
                assert(true);
            }
        });

        it("should fire an onMatched event", function() {
            var eventFired = false;
            var matchable = new Matchable(0, Matchable.REVEALED);
            matchable.onMatched.addListener(function() { eventFired = true; });
            matchable.match();
            assert(eventFired);
        });
    });
});

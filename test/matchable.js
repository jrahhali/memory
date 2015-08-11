//"use strict";
//
//var assert = require("assert");
//var Matchable = require("./../lib/matchable");
//
//describe("Matchable", function() {
//    var matchable;
//
//    beforeEach(function() {
//        matchable = new Matchable(0);
//    });
//
//    describe("hide()", function() {
//        it("should fire a hidden event", function() {
//            var eventFired = false;
//            matchable.hidden.add(function() { eventFired = true; });
//            matchable.reveal();
//            matchable.hide();
//            assert(eventFired);
//        });
//
//        it("should throw an error if you try to call hide() again", function() {
//            try {
//                matchable.reveal();
//                matchable.hide();
//                matchable.hide();
//                assert(false);
//            }
//            catch(err) {
//                assert(true);
//            }
//        });
//
//        it("should throw an error if you try to call match()", function() {
//            try {
//                matchable.reveal();
//                matchable.hide();
//                matchable.match();
//                assert(false);
//            }
//            catch(err) {
//                assert(true);
//            }
//        });
//
//        it("should not throw an error when you call reveal()", function() {
//            try {
//                matchable.reveal();
//                assert(true);
//            }
//            catch(err) {
//                assert(false);
//            }
//        });
//    });
//
//    describe("reveal()", function() {
//        it("should fire a revealed event", function() {
//            var eventFired = false;
//            matchable.revealed.add(function() {
//                eventFired = true;
//            });
//            matchable.reveal();
//            assert(eventFired);
//        });
//
//        it("should throw an error if you try to call reveal() again", function() {
//            try {
//                matchable.reveal();
//                matchable.reveal();
//                assert(false);
//            }
//            catch(err) {
//                assert(true);
//            }
//        });
//
//        it("should not throw an error when you call hide()", function() {
//            try {
//                matchable.reveal();
//                matchable.hide();
//                assert(true);
//            }
//            catch(err) {
//                assert(false);
//            }
//        });
//
//        it("should not throw an error when you call match()", function() {
//            try {
//                matchable.reveal();
//                matchable.match();
//                assert(true);
//            }
//            catch(err) {
//                assert(false);
//            }
//        });
//    });
//
//    describe("match()", function() {
//        it("should fire a matched event", function() {
//            var eventFired = false;
//            matchable.matched.add(function() { eventFired = true; });
//            matchable.reveal();
//            matchable.match();
//            assert(eventFired);
//        });
//
//        it("should throw an error if you try to call match() again", function() {
//            try {
//                matchable.reveal();
//                matchable.match();
//                matchable.match();
//                assert(false);
//            }
//            catch(err) {
//                assert(true);
//            }
//        });
//
//        it("should throw an error if you try to call hide()", function() {
//            try {
//                matchable.reveal();
//                matchable.match();
//                matchable.hide();
//                assert(false);
//            }
//            catch(err) {
//                assert(true);
//            }
//        });
//
//        it("should throw an error if you try to call reveal()", function() {
//            try {
//                matchable.reveal();
//                matchable.match();
//                matchable.reveal();
//                assert(false);
//            }
//            catch(err) {
//                assert(true);
//            }
//        });
//    });
//});

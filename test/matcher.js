var assert = require("assert");
var Matchable = require("./../lib/matchable");
var matcher = require("./../lib/matcher");

describe("Matcher", function() {
   describe("add()", function() {
       it("should fire a matched event if two matchables matched", function() {
           var matchable1 = new Matchable("DOG");
           var matchable2 = new Matchable("DOG");
           var eventFired = false;

           matcher.matched.add(function() { eventFired = true; });
           matchable1.reveal();
           matchable2.reveal();
           matcher.add(matchable1);
           matcher.add(matchable2);
           assert(eventFired);
       });

       it("should fire a mismatched event if two matchables didn't match", function() {
           var matchable1 = new Matchable("DOG");
           var matchable2 = new Matchable("CAT");
           var eventFired = false;

           matcher.mismatched.add(function() { eventFired = true; });
           matchable1.reveal();
           matchable2.reveal();
           matcher.add(matchable1);
           matcher.add(matchable2);
           assert(eventFired);
       });

       it("should not fire a matched event if two matchables didn't match", function() {
           var matchable1 = new Matchable("DOG");
           var matchable2 = new Matchable("CAT");
           var eventFired = false;

           matcher.matched.add(function() { eventFired = true; });
           matchable1.reveal();
           matchable2.reveal();
           matcher.add(matchable1);
           matcher.add(matchable2);
           assert(!eventFired);
       });

       it("should fire a mismatched event if two matchables matched", function() {
           var matchable1 = new Matchable("DOG");
           var matchable2 = new Matchable("DOG");
           var eventFired = false;

           matcher.mismatched.add(function() { eventFired = true; });
           matchable1.reveal();
           matchable2.reveal();
           matcher.add(matchable1);
           matcher.add(matchable2);
           assert(!eventFired);
       });
   });
});

//Creats new Execution Context for framework
(function(global, $) {
  console.log("hi 0");
  var Greetr = function(firstName, lastName, language) {
    console.log("hi 6");
    return new Greetr.init(firstName, lastName, language);
  };
  console.log("hi 1");
  Greetr.prototype = {};
  console.log("hi 2");

  Greetr.init = function(firstName, lastName, language) {
    console.log("hi 7");
    var self = this;
    self.firstName = firstName || "Default Jonas";
    self.lastName = lastName || "Default Petraitis";
    self.language = language || "Default en";
  };

  console.log("hi 3");
  Greetr.init.protoype = Greetr.prototype;
  console.log("hi 4");
  global.Greetr = global.G$ = Greetr;
  console.log("hi 5");
})(window, jQuery);
console.log("hi 5.5");
var g = G$("Dave");
var g2 = Greetr("John");
console.log(g);
console.log(g2);

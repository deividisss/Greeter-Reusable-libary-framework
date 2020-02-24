//Creats new Execution Context for framework
(function(global, $) {
  console.log("hi 0");
  var Greetr = function(firstName, lastName, language) {
    console.log("hi 6");
    return new Greetr.init(firstName, lastName, language);
  };

  var supportedLangs = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola"
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };

  var logMessages = {
    en: "Logged in",
    es: "Inició sesión"
  };

  console.log("hi 1");
  Greetr.prototype = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    validate: function() {
      if (supportedLangs.lastIndexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function() {
      return greetings[this.language] + ", " + this.firstName;
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ", " + this.fullName();
    },

    greet: function(formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      return this;
    },

    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    }
  };

  console.log("hi 2");

  Greetr.init = function(firstName, lastName, language) {
    console.log("hi 7");
    var self = this;
    self.firstName = firstName || "Default Jonas";
    self.lastName = lastName || "Default Petraitis";
    self.language = language || "en";
  };

  console.log("hi 3");
  Greetr.init.prototype = Greetr.prototype;

  console.log("hi 4");
  global.Greetr = global.G$ = Greetr;
  console.log("hi 5");
})(window, jQuery);

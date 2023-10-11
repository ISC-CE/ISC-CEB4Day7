// Incorrect Code:
let person = {
    name: "Alice",
    greet: function() {
      setTimeout(function() {
      }, 1000);
      console.log("Hello, my name is " + this.name);
    }
  };
  person.greet();
  
  // Issue: 'this' context is lost inside the setTimeout function.
  
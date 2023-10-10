// Incorrect Code:
let person = {
    name: "Alice",
    greet: function() {
      setTimeout(function() {
        console.log("Hello, my name is " + this.name);
      }, 1000);
    }
  };
  person.greet();
  
  // Issue: 'this' context is lost inside the setTimeout function.
  
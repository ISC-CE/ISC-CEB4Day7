/*
Concept Tutorial:
The 'this' keyword can have different values depending on the context.
In a nested function, 'this' does not refer to the enclosing object.
*/

// Corrected Code:
let person = {
    name: "Alice",
    greet: function() {
      let self = this;  // Saving a reference to the current object
      setTimeout(function() {
        console.log("Hello, my name is " + self.name);  // Using the saved reference
      }, 1000);
    }
  };
  person.greet();
  
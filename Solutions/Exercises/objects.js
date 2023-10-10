// Define an object named 'person'
let person = {
    // Define a property 'name' with a value
    name: "John",
    // Define a property 'age' with a value
    age: 25,
    // Define a method 'greet' to display a greeting
    greet: function() {
      // Log a greeting message to the console using the 'name' property
      console.log("Hello, my name is " + this.name + ".");
    }
  };
  
  // Call the 'greet' method of the 'person' object
  person.greet();  // Output: Hello, my name is John.
  
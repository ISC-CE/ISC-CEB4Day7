const person = {
    name: "Alice",
    age: 25,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };

console.log(person.name); // Alice
console.log(person.age); // 25
person.greet(); // Hello, my name is Alice and I am 25 years old.

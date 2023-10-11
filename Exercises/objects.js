//Define my Object named Person

let Person = {
    name: "Fikayo",
    age: 16,

    sayMyName: function(){
        console.log("Hello, my name is "+this.name);
    },

    sayMyAge: function(){
        console.log("Hello, my age is "+this.age);
    }
};

Person.sayMyName();
Person.sayMyAge();
Person.sayMyAge();
Person.sayMyAge();
Person.sayMyAge();
Person.sayMyAge();

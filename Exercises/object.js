//Define my object named Person

let Person = {
    name: "Rajeev",
    age: 25,

    getName: function(){
        console.log("Hello, my name is ", this.name);
    },

    getAge: function(){
        console.log("Hello, my age is ", this.age);
    }

};

Person.getName();
Person.getAge();
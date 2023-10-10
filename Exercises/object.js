//Define my object named Person

let Person = {
    name: "Rajeev",
    age: 25,

    great: function(){
        console.log("Hello, my name is ", this.name);
    }
};

Person.great();
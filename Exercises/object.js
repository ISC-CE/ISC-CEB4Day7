//define my object named person

let Person ={
    name:"Shraddha",
    age: 24,

    greet: function(){
        console.log("Hello, my name is"+ this.name)
    }

    sayMyAge: function(){
        console.log("Hello, my age is"+ this.age)
    }
};

Person.greet();
Person.age()
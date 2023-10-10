// Define object named car

let Car = {
    name: "Mazda",
    year: 2018,
    owner: "Nikky",

    sayColor: function(){
        console.log("I am a red " + this.name);
    },

    ownersName: function(){
        console.log("My owner is " +this.owner);
    }
}

console.log(Car.sayColor);
console.log(Car);
console.log(Car.name);


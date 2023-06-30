/****3 function constructor before es6*******************/


function Person(name, age) {
    // console.log(this);
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log(`I am ${this.name} and ${this.age} years old`);
    }
}

const jasbir = new Person("Jasbir", 26);
let cap = new Person("Cap", 38);
console.log(jasbir);

// jasbir.sayHi();
// cap.sayHi();
// console.log(jasbir);


/******4 class  after es6*********/
//  class -> strict mode 
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHI() {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//     }
// }

// class SuperHuman extends Person {
//     constructor(name, age) {
//         super(name, age)
//     }
//     sayHI() {
//         console.log(`I am super Human and ${this.name} years old`);
//     }
// }


// const superOne = new SuperHuman("Jasbir",25);
// console.log(superOne);

// const jasbir = new Person("Jasbir", 26);
// let cap = new Person("Cap", 38);


// jasbir.sayHI();
// cap.sayHI();
// console.log(jasbir);



/***
 * inheritance :  code sharing , saving memory 
 * Prototype is : 
 * In JS we create object from an object ->  that object is your parent or prototype ->that chain goes on 
 * Prototypal Inheritance : you inherit the properties from a parent object/ prototype and that inheritance -> 
 * Prototypal Inheritance.
 * Prottype chain
 * 
 * */
let arr = []
// the chain from the current object to null -> protoype chain
console.log(arr.__proto__.__proto__.__proto__)
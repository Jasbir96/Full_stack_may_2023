// console.log("Hello");


/**
 * ways to create object in js
 * 1. object literal
 * 2. Object.create 
 * **/

/******1. Object literal**************
 * 1. properties and methods
 * 2. Object -> as your prototype (parent)
 * ***/
// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//     }
// };
// console.log("Object", obj);


/**
 * 1. array -> Array(Object/class)
 * 2. function -> Function
 * 3. object -> Object 
 * For primitive : temporary parent
 * *  num -> Number
 * *  str -> String
 * *  boolean -> Boolean
 * *  null and undefined -> no parent
 * * etc 
 *     whenever you want to access any method or property
 *      then that  primitive is typecased as a 
 *      children of there respective parent class and 
 *      then that method is applied on that non primitive 
 *      you are returned the answer. -> autoboxing
 *    
 * */
/**** primitives */
// let str = "hi i am str";
// console.log(str);
// str.charAt(0);
// console.log(String.prototype);

/****
 * hirerachy : Inbuilt object 
 *    null-> Object
 *              Array->arr
 *              Function -> function
 *              String
 *              Number
 *              Boolean
 *              Symbol
 *   
 * */

// let arr = [];
// console.log(arr);



/**********2.Object create******/

/****1. you create an object without any parent**/
// let obj2 = Object.create(null);
// obj2.name = "fake name";
// console.log(obj2);



/********2. creating an object from another object*/
let obj = {
    name: "Steve",
    address: {
        state: "Newyork",
        city: "Manhatten"
    },
    sayHi: function () {
        console.log(`${this.name} say's Hi`);
    }
};

let obj2 = Object.create(obj);
// console.log(obj2);
/**overriden the name prop*/
// obj2.name = "symphony";
obj2.lastname = "rogers";
// console.log("1.", obj2.name, " ", obj2.lastname, obj2.address);
// console.log("2. ", obj.lastname);

// console.log(obj.isPrototypeOf(obj2)); //true
// console.log(obj2.isPrototypeOf(obj)); // false

let obj3 = Object.create(obj2);
obj3.friends = ["tony", "bruce"]

// console.log(obj3);
//  loop -> object -> for in loop -> iterate over all the prop of the object , 
// inherited which are enumrable to for in
// for (let key in obj3) {
//     console.log("Keys are ", key);
// }



/********for in loop for your own poperties******/
// 1.
for (let key in obj3) {
    let isMyKey = obj3.hasOwnProperty(key);
    if (isMyKey) {
        console.log("Keys are ", key);
    }
}
//2.
/**
 * object.keys -> normal loop
 * **/
// let keys = Object.keys(obj3);
// for (let i = 0; i < keys.length; i++) {
//     console.log(i + " " + keys[i]);
// }
// console.log(keys);


















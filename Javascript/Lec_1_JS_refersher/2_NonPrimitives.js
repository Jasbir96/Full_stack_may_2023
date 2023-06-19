// function


// defintion
// function fn(param1) {
//     console.log("Hello world!", param1);
//     return "Returned value";

// }
// // fn call
// let rVal = fn();

// console.log("return val", rVal);


// linter -> eslint



// object ->  collection of key:value pairs


// key -> number, string
//value -> any valid JS 

// JS object -> represent an entity
// let cap = {
//     name: "Steve",
//     'last Name': "Rogers",
//     isAvenger: true,
//     address: {
//         city: "manhatten",
//         state: "Newyork"
//     },
//     sayHi: function () {
//         console.log("Cap say's HI");
//     },
//     movies: ["Avenger", "civile War"]
// }

// //  JSON-> Javascript object Notation 
// // **********get******************
// // .operator
// console.log("name is ", cap.name);
// // sqaure bracket
// console.log("last name is ", cap['last Name']);

// cap.sayHi();



let cap = {
    name: "Steve",
    age: 34,
    isAvenger: true,
    key: "hello"
}
for (let key in cap) {
    console.log(key, " ", cap[key], " ", cap.key);
}


// .operator -> literal operator 
// cap.key

// [] -> search for the value of the variable inside it 



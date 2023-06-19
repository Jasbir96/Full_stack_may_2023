// console.log("Hello");


// native object and a host object

// Enviornment ->
//  host object ->browser//  window,document,localstorage
// host object -> nodejs -> global, os ,process

// JS -> given by language 
// native object -> Date, JSON,Object

// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi: function () {

//         console.log("Hi from ", this.firstName);
//     }
// }

// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// var firstName = "loki";
// sayHiAdd();
// global area
// gec -> var will go to global object 
// let firstVar = "created using let";
// var secondVar = "created using var";

// console.log("first", firstVar)
// console.log("first", window.secondVar);
// console.log("Hello from ", this);

// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object
// EC is created with -> function call -> this will be that window


/**********************Question 2 ******************/

// let cap = {
//     firstName: "Steve",
//     sayHi: function (param) {
//         console.log("47", this.firstName);
//         const iAmInner = function (param) {
//             console.log("49", this.firstName);
//         }
//         // EC by this kind of call -> window
//         iAmInner(20);
//     }
// }

// // EC by this -> ?? -> cap
// cap.sayHi(10);

// iamInner -> this =window, param=20
// cap.saHI -> param=10, this = cap
// GEC
/*****************Question3 *******************/
// // var -> GEC 
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("53", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside 
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();



// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object
// EC is created with -> function call -> this will be that window
// Arrow function doesn't bother about above rules -> it takes this from outside 


// GEC -> window -> window.firstName
// var firstName = "thanos";
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("91", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside 
//         const subInner = () => {
//             console.log("94", this.firstName);
//             const iAmInner = () => {
//                 console.log("95", this.firstName);
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap.sayHi();

// windows 
// gec {
//     sayhi=>(){
//         iamInner=>(){

//         }
//     }
// }


// opting into strict mode  -> many difference in which how js works


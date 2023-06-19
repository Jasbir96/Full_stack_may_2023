// var varName="Jasbir";
// window.varName="Arron";
// console.log(varName);


"use strict";
// varName="loki";
// console.log(varName);
/*****************question1***********************/
// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi: function () {
// // console.log(this)
//         console.log("Hi from ", this.firstName);
//     }
// }

// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// var firstName = "loki";
// sayHiAdd();

/*********************question 2***********/
// "use strict";
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("47", this.firstName);
//         const iAmInner = function () {
//             console.log("49", this.firstName);
//         }
//         // EC by this kind of call -> undefined
//         iAmInner();
//     }
// }

// // EC by this -> ?? -> cap
// cap.sayHi();


// ***************question 3***************//
// "use strict";

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

// *******************question 4********************
"use strict";
let cap = {
    firstName: "Steve",
    sayHi: function () {
        console.log("91", this.firstName);
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const subInner = () => {
            console.log("94", this.firstName);
            const iAmInner = () => {
                console.log("95", this.firstName);
            }
            iAmInner();
        }
        subInner();
    }
}
cap.sayHi();
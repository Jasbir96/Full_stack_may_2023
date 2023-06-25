/**
 * functions are also object
 * object : key : value pair  
 * */

// fn defintion
function fn() {
    console.log("Hi I am an fn");
    fn.count++;
}
/** add a property to fn*/
// fn.count = 0;
// fn();
// // fn();
// /** method to a fn */
// fn.showCount = function () {
//     console.log("count on fn  is ", this.count);
// }
// fn.showCount();

// for (let key in fn) {
//     console.log(key, ": ", fn[key]);
// }

/*documentation -> function are the object that implements callable constructor
/**Layman fn is an object that can also be called */



/***
 * function are first class citizens in JS -> 
 *  1. functions also behave as variables in JS
 *  2. Assign a variable , pass a variable as a parameter, return a variable  
 * */

/******a. assignment***/
let a = [10, 20, 30];
let b = a;
/**fn experssion**/
const addrFn = function () {
    console.log(" I am a variable that's why addrfn stores my address");
}
// addrFn();

/**** b. pass a variable as a parameter*/

// function fn(param) {
//     console.log(" I recived a param", param);
//     if (typeof param === "function") {
//         param()
//     }

// }
function smallerfn() {
    console.log("I am smaller");
}
// fn({ name: "Jasbir" });
// fn(smallerfn);


/***HOF -> fn that accepts or returns a fn */

function HOF(cb) {
    console.log("Inside HOF");
    cb();
}
HOF(smallerfn);




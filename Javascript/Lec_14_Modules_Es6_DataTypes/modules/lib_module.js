
// you can choose which data you want to make accessible
// and what to hide
// let abc = "Hello";
// export function fn() {
//     console.log("Hi I am Fn");
// }
// export var a = 10;


// let abc = "Hello";
// function fn() {
//     console.log("Hi I am Fn");
// }
// var a = 10;

// export { a, fn };

/************default export **************/
// console.log("lib is executing");
let abc = "Hello";
var a = 10;
let anotherVariable = "another";
function fn() {
    console.log("Hi I am Fn", abc);
}
console.log("Hi i am lib module");

// named exports
export { a, fn };
// if anyone imports my file -> by default my anothervar -> exported
// there only one default in a file 
export default anotherVariable;




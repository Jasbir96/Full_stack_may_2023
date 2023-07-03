/**
 *
 * Task:
    * Serial Tasks:
    * Parallel Tasks:
 *
 * Code
 *  Asynchronous
 *  Synchronous code
 *
 * Which type of tasks are done serially
 * Serial Tasks: Dependedend Work
 * video -> 3gb -> cloud
 *  : download -> compress -> upload on pepcoding's server
 * Parallel Task : task that are independent
 * **/



// const fs = require("fs");
// /**
//  * synchronous function given by nodejs to read a file
//  * */
// console.log("Before");
// const buffer = fs.readFileSync("./f1.txt");
// console.log("" + buffer);
// console.log("After");


/****
 *
 * Asynchrouns function to read a file
 *
 * */
// console.log("Before");
// fs.readFile("./f1.txt", function (err, data) {
//     console.log("" + data);
// });
// console.log("After");



/***
 * 1.  you can block the main thread 
 * 2. given  2 files -> read them  and 
 * 3. give me the concatenated result in the order for the file supplied
 * 
 * 
 * */

// const fs = require("fs");

// console.log("Before");
// let content1 = fs.readFileSync("./f1.txt");
// let content2 = fs.readFileSync("./f2.txt");
// console.log("" + content1 + "  " + content2);
// console.log("after");










/***
 * 1. You do not have to block the main thread 
 * 2. given  2 files -> read them  and 
 * 3. give me the concatenated result in the order for the file supplied
 * asynchrous function -> callback -> it confirms that your function has beeen executed
 * 
 * */

// const fs = require("fs");
// //1
console.log("Before");
// // 2-> is called -> moved API area 
fs.readFile("./f1.txt", f1cb);
function f1cb(err, data) {
    let content1 = data;
    fs.readFile("./f2.txt", f2cb);
    function f2cb(err, data) {
        let content2 = data;
        //give the concatenated output 
        console.log("" + content1 + " " + content2);
    }
}
// //3
console.log("after");
/***
 * 1. You do not have to block the main thread 
 * 2. given  2 files -> read them  and  print the output
 * 
 * */

// const fs = require("fs");
// console.log("Before");


// fs.readFile("./f1.txt", function (err, data) {
//     console.log("" + data);
// });

// fs.readFile("./f2.txt", function (err, data) {
//     console.log("" + data);
// });
// console.log("After");




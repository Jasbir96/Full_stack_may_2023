/****
 *CallBack hell-> inital defintion
 *     1. Nesting of callbacks -> when we have have to do serial tasks using async fns -> Pyramid of DOOM
 *      i want to read all the files serially
 *     2. Inversion of control : we send our callback function to an async fn and
 *  then that async fn has the control to call it(Trust issues)  
 * */

/****************heart attack code************/
// let fs = require("fs");
// console.log("Before");
// fs.readFile("./f1.txt", function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("content " + data);
//         fs.readFile("./f2.txt", function (err, data) {
//             if (err) {
//                 console.log("error " + err)
//             } else {
//                 console.log("content " + data);
//                 fs.readFile("./f3.txt", function (err, data) {
//                     if (err) {
//                         console.log("Error", err);
//                     } else {
//                         console.log("content " + data);
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log("After");



/*******************Readable code*************/


let fs = require("fs");
console.log("Before");

/**
 * cbs -> trusting a third party library with you cb 
 * */
fs.readFile("./f1.txt", f1cb);
function f1cb(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("content " + data);
        fs.readFile("./f2.txt", f2cb);
    }
}
function f2cb(err, data) {
    if (err) {
        console.log("error " + err)
    } else {
        console.log("content " + data);
        fs.readFile("./f3.txt", f3cb)
    }
}
function f3cb(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("content " + data);
    }
}
console.log("After");



/***********chaining your then and catch**********/

// const fs = require("fs");
// console.log("before");

// const promise = fs.promises.readFile("./f1.txt");

// promise
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     })
//     .catch(function (err) {
//         console.log("err", err);
//     })

// console.log("After");


/***************then chaining************/


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



/*******************nested then*************/

let fs = require("fs");
console.log("Before");
/**
 *
 * */
// let promise = fs.promises.readFile("./f1.txt");
// promise.then(function (data) {
//     console.log("content "+ data);
//     const p2 = fs.promises.readFile("./f2.txt");
//     p2.then(function (data) {
//         console.log("content "+ data);
//         const p3 = fs.promises.readFile("./f3.txt");
//         p3.then(function (data) {
//             console.log("content "+ data);
//         })
//     })
// })


/*******************chaining *********************/

let promise = fs.promises.readFile("./f1.txt");
promise
    .then(function (data) {
        console.log("content " + data);
        return fs.promises.readFile("./f2.txt");
    }).then(function (data) {
        console.log("content " + data);
        return fs.promises.readFile("./f3.txt");
    }).then(function (data) {
        console.log("content " + data);
    })
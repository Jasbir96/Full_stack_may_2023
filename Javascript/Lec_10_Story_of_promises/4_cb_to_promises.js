/**
 * 
 * promisifiy  fs.readfile 
 * */

let fs = require("fs");

function promReadFile(filePath) {
    // 1. return a promise
    // 2. also decide -> when to call then , and when to call catch
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function (err, data) {
            // resolve reject
            //  creater function
            // resolve ->
                // state -> fullfilled -> resolved
                //value -> whatever you pass into
            // reject ->
                // state -> fullfilled -> rejected
                //value -> whatever you pass into -> 
            if (err) {
                reject(err);
            } else {
                resolve(data);
              
            }
        });
    })
}










/***consumption**/
console.log("Before");
const promise = promReadFile("./f1.txt");

promise
    .then(function (futureValue) {
        console.log("Data inside the file is " + futureValue);
    })
promise
    .catch(function (err) {
        console.log("err", err);
    })
console.log("After");


/**
 * 
 * cb -> passed to third party async fns
 * cb -> passed to promise ->third party async fn
 * **/ 

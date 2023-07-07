const fs = require("fs");

/**
 * Promise based fn -> do not take  cbs
 * **/

console.log("before");
const promise = fs.promises.readFile("./f1.txt");
/**
 * State of the promise-> pending
 * */
console.log(promise);
console.log("After");


setTimeout(() => {
    console.log("i after file read")
    console.log(promise);
}, 2000);

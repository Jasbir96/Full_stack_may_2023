const fs = require("fs");
console.log("before");
/***
 * 1. Promise based fn -> takes the input 
 * 2. Returns a promise and the value/state of the promise -> promise based  fn
 * ***/
const promise = fs.promises.readFile("./f1.txt");
/**
 * then is  an event listener over promise  -> fn when promise is resolved (task is done)
 * **/

promise
    .then(function (futureValue) {
        console.log("Data inside the file is "
         + futureValue);
    })
/***
 * catch -> is also an event listener on promises -> fn when promise is rejected(You get an erro)
 * */
promise
    .catch(function (err) {
   console.log("err",err);
    })
/**
 * State of the promise-> pending
 * */
// console.log(promise);
console.log("After");






// setTimeout(() => {
//     console.log("i after file read")
//     console.log(promise);
// }, 2000);

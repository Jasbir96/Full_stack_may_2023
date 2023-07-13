/***
 * What were issued with callbacks-> promises: inversion of control
 *   // cb based async fn -> cb to third party fns -> async fn can call your cb multiple times 
 *   // cb but here we send cb to the promise API : promise can be rejected or resolved once in the life time 
 * */

let fs = require("fs");

// // then 

// let promise = fs.promises.readFile("f11.txt");

/***then is an event listner (handler) for a promise when promise state changes to resolved***/

// promise.then(function (data) {
//     console.log("Hi the data is 15 " + data);
// })

// promise.then(function (data) {
//     console.log("buffer format is 20", data);
// })
// promise.then(function () {
//     console.log("I am not accepting");
// })
/****catch is an event listenre (handler) for a promise when promise state changes to reject***/
// promise.catch(function (error) {
//     console.log("inside catch", error.message);
// })

// promise.catch(function (error) {
//     console.log("inside second catch", "no error message");
// })
/****
 * then takes two paramater -> both cb fns
 * first parameter -> is compulsary  and that is invoked when your promise is resolved
 * second parameter -> if present called when promise is rejected 
 * 
 * **/
// promise.then(scb);
// promise.then(scb, fcb);
// // promise.catch(fcb);
// promise.then(null, fcb);
// promise.finally(finallCB);

// function scb(data) {
//     console.log("Hi the data is 15 " + data);
// }
// function fcb(error) {
//     console.log("inside catch", error.message);
// }

// function finallCB() {
//     console.log(" I will be called finally");
// }



/**
 * promise.catch -> promise.then(null, fcb);
 * try catch finally
 * 
 * then catch finally
 *
 * then , catch and finally -> event listener -> promise  all of them will execute
 * resolve  , reject, finally on both the cases
 *
 * */

// Q1. 
// On reject -> promise.then(null, fcb), promise.catch(f1cb), promise.finally(finallycb)



/***
 * Promise
 * 1. resolve  -> promise with state resolved whatever you pass into it you that value
 * 2. reject  -> promise with state rejected whatever you pass into it as the value
 * 
 * **/




// const promise = Promise.resolve("resolved value");
// promise.then(function (value) {
//     console.log("value", value);
// })

// const promise1 = Promise.reject("Some error");
// promise1.catch(function (err) {
//     console.log("90");
//     console.log("error", err);
// })
// promise1.then(function () {
//     console.log("90", err);
// }).catch(function (err) {
//     console.log("92", err);
// })


// promise1.then(null, function (err) {
//     console.log("90", err);
// }).then(function (err) {
//     console.log("92", err);
// })

// //  when you have a second then thatis chained to the first then -> value promise
// //  recived by the second then is return value of the scb / fcb of the first then


/*************************Q2*********************/
// let promise = Promise.resolve(10);

promise.then(function (data) {
    console.log("92", data);
}).then(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100
}).then(function (secondThenVal) {
    console.log("116", secondThenVal);
    return fs.promises.readFile("f1.txt")
}).then(function (thirdThen) {
    console.log("120", thirdThen);
})
/*************************Q3*********************/

let promise = Promise.resolve(10);
promise
    .then(function (data) {
        console.log("92", data);
        return "hello";
    }).catch(function (firstThenVal) {
        console.log("113", firstThenVal);
        return 100;
    }).then(function (secondThenVal) {
        console.log("116", secondThenVal);
        return fs.promises.readFile("f1.txt");
    }).then(function (thirdThen) {
        console.log("120", thirdThen);
    }).catch(function (firstThenVal) {
        console.log("113", firstThenVal);
        return 100
    })


/***
 * catch -> if it is reciving a rejected value/ error -> it will take it 
 * then -> then will completely ignored 
 * and vice versa 
 * 
 * do not leave a rejected promise openly because that completley halt your code 
 * */


/**
 * 1. Eventlistener -> then ,catch , finally
 * 2. Then -> resolved, catch -> reject, finally -> both individually
 * 2.2 -> catch will always accept -> rejection/error and  then -> always accept values/ promises
 * 3. CHaining then/catch -> rejection|Error -> catch/ everything else -> next then will be called 
 * 4. no catch code stops exceuting 
 * ***/ 

/**
 * 1.finally -> do not take anything 
 * 2.for values and promises -> it does not returns anything / and neither take anything
 * 3.Rejection -> goes to catch -> and give it the error/ rejection
 * 
 * **/ 

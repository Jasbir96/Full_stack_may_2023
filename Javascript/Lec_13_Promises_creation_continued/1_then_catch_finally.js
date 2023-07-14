/****
 * Note: for this whole excercise we will assume that we have a file name f1.txt with the content of "I am F1"
 * 
 * 1.Promise has two state, value
 *  Initial : Pending , value : undefined
 *  Final : 
 *         resolved , value : whatever is passed in resolved
 *         rejected, value : whatever is passed in rejected
 *******************************************************************/






/*****
 * *******************basics of then catch finally **********************************************************************************
 * for this section  
 * we will only asume only one case of promise resolution -> when file is read
 *  we will only asume only one case of promise rejection -> when file is not found 
 * */



/*************then
 * 1. then's is an eventlistener/subscriber  attached to  a promise it's cb only executes when 
 * promise is resolved
 * 2. you can attach multiple then to a given promise and every one will execute 
 * ********/


// let fs = require("fs");
//  let promise = fs.promises.readFile("f1.txt");
// /***************1.& 2**************/ 
// promise.then(function (data) {
//     console.log("Hi the data is 15 " + data); 
// })

// promise.then(function (data) {
//     console.log("buffer format is 20", data);
// })
// promise.then(function () {
//     console.log("I am not accepting")});


/*******************************
 * catch
 *  * 1. catch is an eventlistener/subscriber  attached to  a promise it's cb only executes when 
 * promise is rejected 
 * 2. you can attach multiple catch to a given promise and every one will execute 
 * ***************************/ 


// let fs = require("fs");
//  let promise = fs.promises.readFile("f11.txt");

// /***************1.& 2**************/ 
// promise.catch(function (err) {
//     console.log("err is 1" + err);
// })

// promise.catch(function (err) {
//     console.log("err is 2 ", err);
// })
// promise.catch(function () {
//     console.log("I am not accepting");});




/*******************************
 * finally
 *  * 1. finally is an eventlistener/subscriber  attached to  a promise it's cb will exceute whether your
 * promise is rejected or resolved and it also do not accept any input
 * 2. you can attach multiple finally to a given promise and every one will execute 
 * ***************************/ 

// let fs = require("fs");
//  let promise = fs.promises.readFile("f11.txt");

// // /***************1.& 2**************/ 
// promise.finally(function (err) {
//     console.log("err is 1" + err);
// })

// promise.finally(function (err) {
//     console.log("err is 2 ", err);
// })
// promise.finally(function () {
//     console.log("I am not accepting");
// console.log("second line of finally");
// });




/***
 * Note :If a rejected promise -> if not caught will be converted into error and code stops execution
 * */ 

// let fs = require("fs");
//  let promise = fs.promises.readFile("f11.txt");

// promise.finally(function () {
//     console.log("I am not accepting");
// console.log("I will not exceute");
// });
// promise.then(function () {
//     console.log("I am not accepting");
// console.log("I will not exceute");
// });
/***
 * 
 * skipping chain
 * ***/ 

// 1.
// Promise.reject(100).then(()=>{
//     return Promise.reject("from then");
// }).catch((err)=>{
//     console.log("err",err)
// })


// 2.
// Promise.resolve(100).catch((err) => {
//     console.log("err", err)
// }).
// then((data)=>{
//     console.log("data", data);
// })




// fetch()
// .then(task1)
// .then(task2)
// .then(task3)
// .catch((err)={

// })



/***
 * Relation b/w -> then and catch
 * 1. then -> can have two cbs -> 1st scb (which executes on promise resolution), 
 *  second is fcb (that's optional and which executes on promise rejection )
 * 2. catch is nothing but  then that has fcb fn but scb is null
 * Insight : catch is a subset of then 
 * 
*/
        /*******************1.************/ 
// a.)
//  let fs = require("fs");
//  let promise = fs.promises.readFile("f1.txt");

// function scb(data){
//     console.log("Hi the data is 15 " + data);
// }
// function fcb(err) {
//     console.log("err is 1" + err);
// }
// promise.then(scb,fcb)




// b.)
    // let fs = require("fs");
    // let promise = fs.promises.readFile("f11.txt");

    // function scb() {
    //     console.log("Hi the data is 15 " + data);
    // }
    // function fcb(err) {
    //     console.log("err is 1" + err);
    //     }
    //     promise.then(scb, fcb)

        /*********************2.*****************/ 
        // let fs = require("fs");
        //     let promise = fs.promises.readFile("f11.txt");   
        //     function fcb(err) {
        //         console.log("err is 1" + err);
        //         }
                // promise.then(null, fcb);
        //         promise.catch(fcb);



/**************************************************************************************************************************/







/*******************************
 * Promises ,then, catch ,finally deep dive
 * *************************************************************************************************************************/


/**********************Promise is resolved****************************************************
 //  resolving  -> something has went write
 * Different ways in which you can get a resolved promise 
 * 1. Promise.resolve
 * 2. Getting a resolved value from a promise based fn 
 *
 * 3. for chained then if  then above you  returns a value  or either of above 2  points 
 * 
 * 4. for chained then if catch above you return a value or either of above 2 points
 * *****************/



    /*******************1.********************/
// Promise.resolve(100).then(function (data) {
//     console.log("1", data) // 1 100
// })

    /*************2.****************************************/
// const fs = require("fs");
//  assuming f1 files is present and has content of I am F1   
// let rfIlePromise = fs.promises.readFile("f1.txt");
// rfIlePromise.then(function (data) {
//     console.log("1 " + data); // 1 I am F1
// })
    /******3  *******************************/
//a. first the returns  a  value 
// Promise.resolve("hey then")
// .then(
//     function (data) {
//         console.log("1 ", data);
//         return 10;
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 10
//     })

//  b first then does not return anything 
// Promise.resolve("hey then")
// .then(
//     function (data) {
//         console.log("1 ", data); //1 hey then
       
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 10
//     })

// c first then returns promise.resolve 
// Promise.resolve("hey then").then(
//     function (data) {
//         console.log("1 ", data);
//         return Promise
//         .resolve("i am resolved value returned by first then")
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 i am resolved value returned by first then
//     })

// d  first then returns about to be resolved promise
// Promise.resolve("hey then").then(
//     function (data) {
//         console.log("1 ", data);
//         return fs.promises.readFile("f1.txt");
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 I am F1
//     })

    /*********************4.***********************/
//a. first catch returns  a  value 
// Promise.reject("hey catch").catch(
//     function (data) {
//         console.log("1 ", data);
//         return 10;
//     }).then(function (data) {
//         console.log("2 " + data); 
//     })

//  b first catch does not return anything 
// Promise.reject("hey catch").catch(
//     function (data) {
//         console.log("1 ", data); //1 hey then
//         return 10;
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 10
//     })

// c first catch returns promise.resolve 
// Promise.reject("hey catch").catch(
//     function (data) {
//         console.log("1 ", data);
//         return Promise.resolve("i am resolved value returned by first then")
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 i am resolved value returned by first then
//     })

// d  first catch returns about to be resolved promise
// Promise.reject("hey catch").catch(
//     function (data) {
//         console.log("1 ", data);
//         return fs.promises.readFile("f1.txt");
//     }).then(function (data) {
//         console.log("2 " + data);  
//     })




/**********************Promise is rejected****************************************************
 * Different ways in which you can get a rejected promise 
 * 1. Promise.reject
 * 2. Getting a rejected value  from a promise based fn 
 * 3. throw new Error from then/catch
 * 4. for chained catch if then above you returns either of above 3 points
 * 5. for chained catch if catch above returns either of above 3 points
    *********/

    /*******************1.********************/ 
// Promise.reject("sending rejected err").catch(function (err) {
//     console.log("1", err) // 1 sending rejected err
// })

        /*************2.****************************************/
// const fs = require("fs");
// //  assuming f11 files is not present and has content of I am F1   
// let filePromise = fs.promises.readFile("f11.txt");
// filePromise.catch(function (err) {
//     console.log("1 " + err); // 1  f1.txt not found
// })

        /****************3**************************/
// a) throw new error from then/catch
// Promise.resolve("resolved value ").then((data) => {
//     console.log("1 " + data);
//     throw new Error("Error from then")
// }).catch((err) => { console.log("2"+ err) });

//b) throw new error from catch
// Promise.reject("rejected value ").catch((data) => {
//     console.log("1 " + data);
//     throw new Error("Error from then")
// })
// .catch((err) => { console.log("2"+ err) });

    /***************4*******************************/
//a. first then returns a error
// Promise.resolve("hey then").then(
//     function (data) {
//         console.log("1 ", data); //1 hey then
//         throw new Error("error from first catch")
//     }).catch(function (err) {
//         console.log("2 " + err);  // 2 eror from first catch 
//     })

// b. first then returns promise.reject
// Promise.resolve("hey then").then(
//     function (data) {
//         console.log("1 ", data); //1 hey then
//         return Promise.reject("rejected from first then")
//     }).catch(function (err) {
//         console.log("2 " + err);  // 2 rejected from first catch
//     })
// c.  first then returns a promise that will be rejected  -> assuming f11.txt does not exist
// Promise.resolve("hey catch").then(
//     function (data) {
//         console.log("1 ", data); //1 hey catch
//         return fs.promises.readFile("f11.txt");
//     }).catch(function (data) {
//         console.log("2 " + data);  
//     })

            /************5. Exactly like case 4 *******/ 


/************************** Rules of finally*************************************/
/**
 * 1. finally does not take any parameter -> reject or resolve doesn't matter
 * ***/
// Promise.resolve(1).finally((data) => {
//     console.log("1", data);     //-> 1, undefined 
//     return Promise.resolve(100);
// })

/**
 * 2. if finally returns(reject/throw error/ promise that will be rejected ) then
 *  finally returns the error and parent's reject/resolve is ignored
 * */
// Promise.reject(1).
//     finally((data) => {
//         console.log(data); // undefined
//         throw new Error("I am an error");
//     }).catch((err) => {
//         console.log(err.message); // I am an error
//         return "from catch"
//     })
/**
 *
 * 3. finally returns a value / promise that will be resolved -> then it return  value is ignored &
 *  parents resolved promise/value will be forwarded
 * ***/
// Promise.resolve("rval").finally((data) => {
//     console.log("1", data); // 1 undefined
//     return Promise.resolve(100);
// }).then((data) => {
//     console.log("2", data); // 2 rval
// })

/**
* 4. finally recives  a reject/ throw new Error it executes itself and if it not itself returning (any error or rejected promise)
then it forwards the error to the chain
* */
Promise.reject("some error").
    finally((data) => {
        console.log(data); // undefined
        return "something";
    }).catch((err) => {
        console.log("2", err);  // 2 some error
    })

// *********************************************************************
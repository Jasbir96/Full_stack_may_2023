


let fs = require("fs");
const { promisify } = require("util");
/********************************************/
/******************cb based code*******/
// fs.readFile("f1.txt", function (err, data) {
//     if (err)
//         console.log("err", err);
//     if (data)
//         console.log("data", data);
// })
// *******************cb based code to promises1st approach****************
// function promisifiedreadFile(fileName) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, function (err, data) {
//             if (err)
//                 // console.log("err", err);
//                 reject(err)
//             if (data)
//                 resolve(data);
//         })
//     })

// }

// *******************cb based code to promises 2nd approach****************

// const promisifiedreadFile = promisify(fs.readFile);


/*
1. fn should -> be an error first cb 
**/
function ownPromisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, function (err, data) {
                if (err) {
                    reject(err);
                }else{
                    resolve("data"+data);
                }
            })
        })
    }

}




// function fn(first, secondArgs,fncb) {
//     console.log("fn is called");
// }
// const fncb = () => { console.log("fncb") };

// const newFN = ownPromisify(fn);
// newFN("hi", "hello", fncb);


const promisifiedreadFile =
    ownPromisify(fs.readFile);

promisifiedreadFile("f1.txt")
    .then(function (data) {
        console.log(data);
    })
    .catch((err) => { console.log(err) })

const fs = require("fs");

// callback based usage
// fs.readFile("f1.txt", function (err, data) {
//     if (err) {
//         console.log("err", err);
//     } else {
//         console.log("data" + data);
//     }
// })

// function promissifyReadFile(filePath) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(filePath, function (err, data) {
//             console.log("Hello");
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }


// fs.writeFile();
// fs.mkdir();
// fs.copyFile();
// promise means a future  result for task that has already started
// promissifyReadFile("f1.txt")

// promissifyReadFile("f11.txt")
// .then(
//     (data) => { console.log(data) }
// ).catch(console.log)


// const util = require("util");



// // 1
// const promisifiedReadfile = util.promisify(fs.readFile);

// // 2
// promisifiedReadfile("f1.txt")
//     .then(console.log)
//     .catch(console.log);



// 1. promisify -> 
// input -> cb based fn
//  return   -> function and that function returns a promise

// fs.readFile("f1.txt", cb);
// function cb(err, data) {
// //     if (err) {
// //         console.log("err", err);
// //     } else {
// //         console.log("data" + data);
// //     }
// // }
function ownPromisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            // passing my own cb  -> first will be an error / other params
            fn(...args, function (err, res) {
                if (err) {
                    resolve(err);
                } else {
                    reject(res);
                }
            })
        })
    }
}



// 2. promisified wasy of doing async programming 
// const promisifedVersion = ownPromisify(HOF);
// promisifedVersion(1000, 2000, 3000)
// .then(cb)

const promisefiedFS = ownPromisify(fs.readFile);
promisefiedFS("f1.txt").then(console.log).catch(console.log)

// //  1. cb way of using my fn 
// function cb(sum) {
//     console.log("Hello", sum);
// }
// let obj = {
//     HOF: function (delay, args1, args2, cb) {
//         setTimeout(function () {
//             cb(args1 + args2);
//         }, delay);
//     }

// }


// obj.HOF(1000,2000,3000, cb);


// const promisefiedObjectMethod = ownPromisify(obj.HOF);
// promisefiedObjectMethod(1000, 2000, 3000).then(cb);



// function HOF(delay, args1, args2, cb) {
//     setTimeout(function () {
//         cb(args1 + args2);
//     }, delay);
// }
// //  1. cb way of using my fn 
// function cb(sum) {
//     console.log("Hello", sum);
// }

// HOF(1000, 2000, 3000, cb);












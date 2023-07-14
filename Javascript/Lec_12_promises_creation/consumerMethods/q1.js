let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error("some value"));
    }, 2000);

    resolve("some error");
    setTimeout(function () {
        reject(new Error("some value"));
    }, 2000);
    resolve("some error");
    setTimeout(function () {
        reject(new Error("some value"));
    }, 2000);
});




const fs = require("fs");
p.then(null, function (err) {
    console.log(1);
    console.log(err);
});

p.catch(function (err) {
    console.log(2);
    console.log(err);
});

p.finally(function () {
    console.log("32", 1);
})

p.then(
    function (val) {
        console.log("44", val);
    },
    function (err) {
        console.log(err);
    }
);
/**
 * finally does not take any argumenst -> forwards the argument recieved
 * */

// p.finally(function () {
//     console.log("37", 2);
//     // throw new Error("Hello");
//     return Promise.resolve("some Error");
// }).finally(function () {
//     console.log("37", 2);
//     return fs.promises.readFile("f1.txt");
// })
//     .then(function (val) {
//         console.log("39", val);
//     }).catch(function (err) {
//         console.log("52", err);
//     })



// Promise.resolve(1)
//     .then(() => 2)
//     .then((data) => {
//         console.log("54",data);
//         return 3
//     })
//     .then((value) => {
//         console.log(value);
        // return value * 3;
//     }
//     )
//     .then(console.log)
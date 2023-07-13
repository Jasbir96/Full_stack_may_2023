// const fs = require("fs");


// const promise = fs.promises.readFile("f1.txt");
// const promise2 = fs.promises.readFile("f11.txt");


// const combinedpromise = Promise.all([promise, promise2]);


// combinedpromise.then(function (resultArr) {
//     console.log(resultArr)
// })

















const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(2);
const promise3 = Promise.reject(3);
const promise4 = Promise.reject(4);

// // resolve an reject 
const promiseAll = async () => {
    console.log("1");
    const group1 = await Promise.any([promise1, promise2]);
    console.log("2",group1);
    const group2 = await Promise.any([promise3, promise4])

    console.log("3", group2);
    return [group1, group2]
}
// const promiseAll = async () => {
//     console.log("1");
//     const group1 = await Promise.all([promise1, promise2]);
//     console.log("2", group1);
//     const group2 = await Promise.all([promise3, promise4])

//     console.log("3", group2);
//     return [group1, group2];
// }

promiseAll().then(console.log).catch(console.log);


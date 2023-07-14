Promise.myPromiseALL = function (arrayOFPromises) {
    return new Promise(function (resolve, reject) {
        let unresolved = arrayOFPromises.length;
        const resolvedPromiseArr = [];
        // let say if array is empty
        if (unresolved == 0) {
            resolve(resolvedPromiseArr);
            return
        }
        //  what does a promise represent  : future value of the task that has already started
        // async await -> iterate over the array -> if the value is not resolved -> await
        arrayOFPromises.forEach(async (promise) => {
            try {
                const value = await promise;
                resolvedPromiseArr.push(value);
                unresolved--;
                if (unresolved == 0) {
                    resolve(resolvedPromiseArr);
                }
            } catch (err) {
                reject(err);
            }

        })


    })
}
//  when all the promises are resolved
// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 100);
// });
Promise.myPromiseALL([p0, p1, p2]).then(console.log, (err) => {console.log(err)})













// Promise.all([p0, p1, p2])
//     .then((res) => {
//         console.log("res", res);
//     }).catch((err) => {
//         console.log("err", err);
//     })


// //  when either of the promise gets rejected
const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('An error occurred!');
    }, 100);
});
const p2 = 42;

// Promise.all([p0, p1, p2]).then((res) => {
//     console.log("res", res);
// }).catch((err)=>{
//     console.log("err", err);
// })


Promise.myPromiseALL([p0, p1, p2]).then(console.log, console.log);
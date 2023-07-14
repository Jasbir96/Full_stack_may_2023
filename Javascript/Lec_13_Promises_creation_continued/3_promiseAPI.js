// function promSetTimout(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve("Hey then")
//         }, delay)
//     })
// }


// promSetTimout(1000).then((data)=>{console.log(data)})
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";


// function constructor 
function CustomPromise(executorFn) {
    //    1. add required properties and methods
    // promise does not expose these properties  
    let state = PENDING;
    let value = undefined;
    let scbArr = [];
    let fcbArr = [];
    // it will be attached to your object

    // 2 attach resolve and reject
    const resolve = (value) => {
        if (state != PENDING) return;
        state = RESOLVED;
        value = value;
        // scb
        scbArr.forEach((cbs) => {
            cbs(value)
        })
    }
    const reject = (err) => {
        if (state != PENDING) return;
        state = REJECTED;
        value = err;
        // fcb
        fcbArr.forEach((cbs) => {
            cbs(value)
        })
    }
    this.then = function (cb) {
        if (state === RESOLVED) {
            cb(value);
        } else {
            scbArr.push(cb);
        }
    }
    this.catch = function (cb) {
        if (state === REJECTED) {
            cb(value);
        } else {
            fcbArr.push(cb);
        }
    }
    //  3. call the executor fn
    executorFn(resolve, reject);
}

const executorFn = (resolve, reject) => {
    //   cb based fn 
    setTimeout(function () {
        reject("Hey then");
    }, 1000);
}

// usage of your custom *****************
const myPromise = new CustomPromise(executorFn);

const cb = (data) => {
    console.log(data);
}

myPromise.then(cb)

myPromise.then((data) => {
    console.log("I am the second then");
})




myPromise.catch((err) => {
    console.log("90",err);
})

// const promise = new Promise(executorFn);
// console.log(promise);
// promise.then((data) => {console.log(data)});
// queueMicrotask();, Mutation pbserver









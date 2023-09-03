/**
 * fetch("url") -> call an api -> succeed or fail 
 * create retry -> (promiseBasedFn,retryCount,finalErrormessage) 
 * **/

let testPromise = () => {
    let count = 0;
    return () => {
        return new Promise((resolve, reject) => {
            count += 1;
            if (count <= 5) {
                reject("Api failed ");
            } else {
                resolve("I am successfull ");
            }
        })
    }
}

// const returnFN = testPromise();

// returnFN().then(console.log).catch(console.log);
// returnFN().then(console.log).catch(console.log);
// returnFN().then(console.log).catch(console.log);
// returnFN().then(console.log).catch(console.log);
// returnFN().then(console.log).catch(console.log);
// returnFN().then(console.log).catch(console.log);
/****
 
 * promiseBased FN -> retry -> call it -> at max -> retry count  
 * * the task is done -> gives the result
 * * if you exhuast all the retries -> return back the final message 
 * */
async function retryCalls(promiseFN, retryCount, finalError) {
    try {
        const res = await promiseFN();
        return res;
    } catch (err) {
        if (retryCount == 1) {
           
           return Promise.reject(finalError);
        }
       return retryCalls(promiseFN, retryCount - 1, finalError);
    }

}

const promiseFN = testPromise();
const finalResultPromise = retryCalls(promiseFN, 4, "finally Failed");
finalResultPromise.then((data) => console.log("hello", data))
.catch((err) => console.log("err", err))
console.log(finalResultPromise);
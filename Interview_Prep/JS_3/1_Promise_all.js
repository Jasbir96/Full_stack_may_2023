const fs = require("fs");




const p0 = Promise.resolve(3);  //{value:3}
const p1 = 42;  //{42}
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('foo');
    }, 100);
});  //{state : pending}
const p4 = fs.promises.readFile("f1.txt");  // {state :pending}

/**
 * input -> array of promises
 * output -> 
 *          array of results
 *          error also if either of them are rejected    
 * **/
Promise.myPromiseAll = (arrayofPromises) => {
    return new Promise(async (resolve, reject) => {
        // * try and catch do not work with async code in a normal function
        // * try and catch works for asynchronous code in an async fn
        try {
            // [p0, p1, p2, p4]
            let resultsArray = [];
            for (let i = 0; i < arrayofPromises.length; i++) {
                const result = await arrayofPromises[i];
                resultsArray.push(result);
            }
            // [42,3,100,<buffer>]
            return resolve(resultsArray);
        } catch (err) {
            return reject(err);
        }

    })

}

async function fn() {
    try {
        console.log("Before");
        /**
         * i will return a promise that repersents an array of results of those promise that 
         * i got in an array
         * */
        // const results = await Promise.all([p0, p1, p2, p4])
        //49
        // [42, 3, 100, <buffer>]
        const results = await Promise.myPromiseAll([p0, p1, p2, p4])
        console.log(results);
        console.log("After");
    } catch (err) {
        console.log(err);
    }

}
fn();



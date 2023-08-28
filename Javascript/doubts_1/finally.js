/**
 *  3 ways in which you can get a rejected  promise 
 *      a. throw new Error, 
 *      b. Promise.reject, 
 *      c. promise that is going to be rejected in the future. -> catch
 *  3 ways in which you can get a resolved promise
 *      a. value
 *      b. Promise.resolve, 
 *      c. promise that is going to be resolved in the future. -> then
 * */ 


/**
 * 1. finally does not take any parameter -> reject or resolve doesn't matter
 * ***/
// Promise.resolve(1)
// .finally((data) => {
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
// Promise.resolve("rval")
// .finally((data) => {
//     console.log("1", data); // 1 undefined
//     return Promise.resolve(100);
// }).then((data) => {
//     console.log("2", data); // 2 rval
// })

/**
* 4. finally recives  a reject/ throw new Error it executes itself and if it not itself returning (any error or rejected promise)
then it forwards the error to the chain
* */
// Promise.reject("some error").
//     finally((data) => {
//         console.log(data); // undefined
//         return "something";
//     }).catch((err) => {
//         console.log("2", err);  // 2 some error
//     })

//  -> employee -> laptop -> task 
                            // succeed
                            // fail 
                            // take back that laptop



// finally   -> used at the last after you used all the then  and catches -> cleanup 




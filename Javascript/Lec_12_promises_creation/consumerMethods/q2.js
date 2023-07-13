// Promise.reject(1).
//     catch((err) => {
//         console.log("3", err);
//         return 10;
//     })

//     .then((data) => {
//         console.log("15", data)
//     })
//     .catch(console.log);



/***
 * chain -> then-> promise above is resolved
 * catch -> promise of the above is rejected / throw an error
 * if you have mixture and either then returns a value / catch return -> then will executed with the recieved value
 * finally -> finally works in both resolve or reject but  -> when you reject inside a finally then you upcoming catch will be called 
 * finally -> doesnot take any input / if you retrun either error/ rejected promise -> you need a catch to consume
 * 
 * **/



// Promise.reject(1).finally((data) => {
//     console.log("3", data)
//     return Promise.reject('error')
// })
//     .catch(console.log)
//     .then((data) => {
//         console.log("15", data)
//     })
//     .catch(console.log);

Promise.resolve(1)
    .finally((data) => {
        console.log("3", data)  // 3 undefined
        return Promise.reject('error');
    })
    .catch((error) => {
        console.log("7", error) //7  error
        throw 'error2'
    })
    .finally((data) => {
        console.log("11", data)  //11 undefined
        let rProm = Promise.resolve(2)
        let thenProm = rProm.then(console.log) // 49n -> 2
        return thenProm;
    })
    .then(console.log)
    .catch(console.log);
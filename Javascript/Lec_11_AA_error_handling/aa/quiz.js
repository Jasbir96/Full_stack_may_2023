// function resolveAfterNSeconds(delay, x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, delay);
//     });
// }

// (function () {

//     let a = resolveAfterNSeconds(1000, 1)
//     a.then(async function (x) {
//         //1sec
//         let y = await resolveAfterNSeconds(2000, 2) //2 sec
//         let z = await resolveAfterNSeconds(1000, 3) //1 sec 
//         // 4sec
//         let p = resolveAfterNSeconds(2000, 4);
//         let q = resolveAfterNSeconds(1000, 5);


//         // p = await p;
//         // q = await q;

//         console.log(x + y + z + await p + await q);


//         /**
//          * litreal meaning of await -> waiting for some result 
//          * if result is pdening -> wait
//          * if your result -> use 
//          * **/ 
//     })
// })()


async function getData() {
    return 10
}
let a = await getData();
console.log(a)






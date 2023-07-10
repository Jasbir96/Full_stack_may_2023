/**syntax error can't be solved by try and catch*/
// try {
//     le a
// } catch (err) {

// }

/******/
// try {
// console.log("Before");
//     let a = 10
//     {
//         var a = 20;
//         console.log("Hello", a);
//     }
// } catch (err) { 
//     console.log("Error",err);
// }



/*****
 * runtime Error
 * 
 * *****/
// console.log("Before");
// try {
//     console.log(a);
//     let a;
//     console.log("Before");
// } catch (err) {
//     console.log("Error",err);
// }
// console.log("after");

/***try and catch are synchronous**/
// console.log("Before");
// try {
//     setTimeout(() => {
//         console.log("set timeout is executed");
//         console.log(a);
//     }, 1000);
// } catch (err) {
//     console.log(" message: ", err.message);
//     console.log("name of error: ", err.name);
// }
// console.log("After try catch");
/**********************correct way****************************/
console.log("Before");
setTimeout(() => {
    try {
        console.log("set timeout is executed");
        console.log(a);
    } catch (err) {
        console.log(" message: ", err.message);
        console.log("name of error: ", err.name);
    }

}, 1000);


console.log("After try catch");
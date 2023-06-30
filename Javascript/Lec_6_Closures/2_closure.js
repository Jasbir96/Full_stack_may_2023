



/**
 * Closure : inner fn forms closure over outer fn's variable and it's variables are persent
 * even if outer fn is removed from the stack .
 *  When closure is fromed -> when a inner fn is hoisted it form closure over outer variable
 * */

// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }
// const innerFunc = outerFunction();
// console.log(innerFunc())
// console.log(innerFunc())



// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }
// let c1 = createCounter(10, 5);  // c1 -> count (init=10, delta =5 )
// let c2 = createCounter(5, 2);

// console.log(c1())   //c1 -> count (init =15, delta =5);
// console.log(c2())
// console.log(c1()) 
// console.log(c2())


/***
 * Nested closure : you will get access to outer variable even if the 
 * outer fn is not your direct parent
 * */
// let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
//             console.log("Hi GEC", iamINGEC) // LExical scope
//         }
//     }
// }


// const fnNameRtrn = getFirstName("Jasbir");
// // console.log(fnNameRtrn); // getLastname

// const lnNameRtrn = fnNameRtrn("Singh");
// // console.log(lnNameRtrn);  // greeter

// lnNameRtrn();


/**
 * Every code is executed in an EC : 
 * 1. this , 
 * 2. local fn and var , 
 * 3. global,window obj 
 * 4. lexical scope
 * 5. closure -> till GEC
 * 
 * */


/***
 * Application of closures 
 * 1.  currying : taking one input at a time and you use the input later 
 * 2. asynchrounous code cannnot run without closure 
 * **/
/*get all the inputs at once -> we can execute the code */
// function greeter(firstName, lastName) {
//     console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
// }
// greeter("Jasbir", "singh")




function getFirstName(firstName) {
    console.log("I have got your first Name");
    return function getLastName(lastName) {
        console.log("I have got Your last Name");
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
        }
    }
}
//1 -> shorthand
getFirstName("Jasbir")("Singh")();

const getLastName = getFirstName("Jasbir");
const greeter = getLastName("Singh");
greeter();
console.log("Task in between");
console.log("Task in between");

let a=100;

console.log("Before");
function cb() {
    console.log("I will explode",a);
}
setTimeout(cb, 2000);
console.log("After");

/**GEC */
/**should a exist -> no*/







/**
 * functions -> objects in JS
 * Array -> Object in JS
 * Object -> group Key :value pairs
 * */

/*fn definiton*/
// function fn() {
//     // code 
//     console.log("Hi I am a fn");
// }

// /*fn behaves as an object*/
// fn.count = 0;
// fn.printCount = function () {
//     console.log("count is ", this.count);
// }

// console.log("count prop", fn.count);
// fn.printCount();
// /********************************/
// console.log(fn);
// /*fn call -> execute the code inside the fn defintion */
// fn();
/**
 * fn as an object -> function is an object that implements callabale constructor i.e
 * fn is an object which you can also call
 * Significance -> function are known as first class citizens -> function can be treated as normal variables
 *
 * */



/**
 * variables -> assign a variables ref /value to another variable
 * */


// let arr=[10,20,30];
// let arr2=arr;
// console.log("arr2",arr2);

/**Function expression*/
// const fnAddress = function () {
//     console.log("Hello i am a fn  expression");
// }
// fnAddress();



/**
 * variables ->passed as a param
 *          -> pass a fn as param
 * */


// function fn(param) {
//     console.log("param is ", param); //[Function: param]
//     const rValue = param();
//     console.log("rValue is ", rValue);
//     return "From outer fn";
// }
// // fn("Hello");
// // fn([1, 2, 3, 4]);
// // fn({ name: "Jasbir" });
// const outerFnRVal = fn(smaller);
// console.log(outerFnRVal);
// function smaller() {
//     console.log(" I am smaller");
//     return "hello";
// }



/**
 * variables ->variables can be returned 
 *          -> fn can also be returned from a function 
 * */

function fn() {
    console.log(" I am fn I am returning a fn");  //1
    return function inner() {
        console.log("Returned from fn");  //2
    }
}
// const Rval = fn();
// // console.log("Rval",Rval());
// // console.log("Rval"+Rval);
// console.log("Rval", Rval()); //3

/**
 * fn -> object -> prop , methods to it
 * fn -> assign them , pass them as  a param , retrun them
 * */

// real();
// // this can cause a bug 
// const real = function () { console.log("I am real. Always run me"); }
// const real = function () { console.log("No I am real one "); }
// const real = function () { console.log("You both are wasted"); }



/****************Arrays*********/


/**
 * JS -> array is a collection of anything(Valid JS Datatype)
 * 
 * **/

let arr = [
    1,
    1.1
    , true,
    null,
    "Hello",
    [1, 2, 3, 4, 5],
    { name: "Jasbir" },
    function sayhi() {
        console.log(" I am a fn inside an array")
    }
]
// console.log("arr", arr);
// console.log(arr[5][2]);
// console.log(arr[6]["name"]);
// arr[7]();

/**
 * Arrays are object diguised as an array -> key are numbers 
 * */

/**traverse array*/
// for (let key in arr) {
//     console.log("key : ", key, "value : ", arr[key]);
// }

for (let key in arr) {
    console.log("key : ", key, "value : ", arr[key]);
}
console.log(arr[25]); // undefined
arr[30] = 600;
console.log("144", arr.length); //31
arr["Hello"] = 200;
arr[75] = 800
console.log("146", arr.length);
// for (let key in arr) {
//     console.log("key : ", key, "value : ", arr[key]);
// }
// length -> lastnumericidx+1;

/**length -> no Index out of bound error  -> introduces bugs*/








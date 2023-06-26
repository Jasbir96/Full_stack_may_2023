/**
 * Problem : What is problem
 * What are HOF
 *  Different Inbuilt HOF 
 * */

// let arr = [2, 3, 4, 5];
//  following DRY
// code to square every element in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i]
// }

// // code to cube every elemnt in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i] * arr[i];
// }
// console.log("arr",arr);




// function transformer(arr, logic) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let ans = logic(arr[i]);
//         newArr.push(ans);
//     }
//     return newArr;
// }
// // smaller 
// function squarer(elem) {
//     return elem * elem;
// }
// function cuber(elem) {
//     return elem * elem * elem;
// }

// const squaredArr = transformer(arr, squarer);
// const cubedArr = transformer(arr, cuber);

// console.log("squaredArr", squaredArr);
// console.log("cubedArr", cubedArr);


/***
 * HOF  -> are the function that accepts a fn as a parameter or returns a function
 * Callbacks -> function that are passed as a paramtere to a nother are known as cb fns. 
 * They usually be called by HOFns 
 * */



/***
 * HOF -> majorly available on arrays
 *  these fn doesn't change the source array
    * foreach -> 
    * Map -> 
    * filter -> 
    * reduce -> 
    * sort -> 
 * */



/***traversal -> it is used to travsrese the arr*/
let arr = [2, 3, 4, 5];
// function printELem(elem) {
//     console.log(elem * elem);
// }
// let rVal = arr.forEach(printELem)
// console.log(rVal);



/***************Map-> It changes every element according to the cb fn*****/

// let arr = [2, 3, 4, 5];
function squarer(elem) {
    return elem * elem;
}
function cuber(elem) {

    return elem * elem * elem;
}
// let squaredArr = arr.map(squarer);
// console.log("squaredArr", squaredArr);
// let cubedArr = arr.map(cuber);
// console.log("cubedArr", cubedArr);



/**Polyfill of map*/
// Array.prototype.myMap = function (logic) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         let ans = logic(this[i]);
//         newArr.push(ans);
//     }
//     return newArr;
// }
// let arr2 = [10, 20, 30]

// let squaredArr = arr.myMap(squarer);
// console.log("squaredArr", squaredArr);
// let cubedArr = arr2.myMap(cuber);
// console.log("cubedArr", cubedArr);



/*********************filter -> it filters the elem on the basis of testLogic**/
/*traverse through every elem -> elem to cb fn if cb fn returns true
-> it will add that elem to a new Arr at the end it returns the new Arr*/
// let elems = [1, 2, 3, 11, 4, 5, 34, 12];

// function isOdd(elem) {
//     return elem % 2 == 1;
// }

// function isgtr5(elem) {
//     return elem > 5;
// }
// odd values
// let oddvaluesArr = elems.filter(isgtr5);
// console.log("oddvaluesArr", oddvaluesArr);
// console.log("elem", elems);

/**write ployfill of filter -> HW*/


/*********************reduce******************/

let elems = [1, 2, 3, 4, 5];


function sum(acc, elem) {
    return acc + elem;
}
function product(acc, elem) {
    return acc * elem;
}


// console.log("sum", sumValues);
// const prodValues = elems.reduce(product);
// console.log("prod", prodValues);






/***Intution polyfill of reduce**/
// function sumArr(arr) {
//     // init
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // collects the results
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// cb 
function sum(acc, elem) {
    return acc + elem;
}
function product(acc, elem) {
    return acc * elem;
}
// function reducer(arr, cb) {
//     let acc = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         acc = cb(acc, arr[i]);
//     }
//     return acc;
// }



/**final version-> polyfill of reduce**/
// Array.prototype.reducer = function (cb, defVal) {
//     let acc = defVal != undefined ? defVal : this[0];
//     let sidx = defVal != undefined ? 0: 1;
//     for (let i = sidx; i < this.length; i++) {
//         acc = cb(acc, this[i]);
//     }
//     return acc;
// }
// const sumVal = elems.reducer(sum, 10);
// console.log("sumVall", sumVal);
// const prodVal = elems.reducer(product, 100);
// console.log("prodVal", prodVal);



/*****sort -> is a hof -> by default -> sort -> alphabatically*/

/*string -> dictonary sort*/
// var animals = ['hen',
//     'elephant',
//     'llama',
//     'leopard',
//     'ostrich',
//     'whale',
//     'octopus',
//     'rabbit',
//     'lion',
//     'dog'];

// let sortedArr = animals.sort();
// console.log("sortedArr", sortedArr);

let numArr = [1, 2, 3, 4, 5, 11,];
// const sortedArr = numArr.sort();
// console.log("sortedArr", sortedArr);

function sortHelper(a, b) {
    /**increasing order*/ 
    return b-a;

}
let sortedArr = numArr.sort(sortHelper);
console.log("sortedArr", sortedArr);












//  classes in JS -> abstraction so that java dev can also 

let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];


// bad way of giving a feature************
// arr.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }



// arr2.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// arr2.sum();
// arr.sum();

// console.log(typeof arr);

// arr.push("hello")
// console.log(arr);




// arr -> Array ->Object-> null

// Array -> all the method required by every array

// using an inherited property
// console.log(arr.toString());
// advantage  of  inheritance -> 
//1. reuse of the code
// 2. saving memory space 



/*************parent************/
 Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    console.log(sum);
}
// usecase of this and prototype
arr.sum();
arr2.sum();



// i am admant -> i will keep on my own -> borrow for once 
// bind , call ,apply
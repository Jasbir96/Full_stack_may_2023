/**
 * default parameter 
 * **/

// function fn(param1, param2, param3 = "default") {
//     console.log("Hi params are ", param1, param2, param3);
// }

// fn("Hi", "Hello", "Hola");
// fn("Hi", "Hello");



/**
// 
 * spread operator : copies value,ref from on array to another for only first level
 * 
 * */

// assignment operator -> reference remain
// let arr = [1, 2, 3, 4, 5];

// // arr2 and arr has the same ref
// let arr2 = arr;
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// console.log("contest arr", arr);



let arr = [1, 2, [3, 4], 4, 5];


// // spread copies value  from one array another array for the first level
let arr2 = [...arr];
arr2.pop();
arr2.push(100);
// let arr = [1, 2, [3, 4], 4, 5];
// [value,value,ref,value,value]
// arr2[2] = 100;
// arr2[2][0] = 200;
// console.log("orginal arr", arr, "updated array", arr2);



// let a=10;
// //copied value -> primitive types 
// let b=a;



// let arr=[1,2,3,4];
// you get the ref
// let arr2=arr;


// let arr = [1, 2, [3, 4], 4, 5];
// [value,value,ref,value,value]

// let arr2 = [...arr];





/****
 * rest -> It is used as paremeter of fn .
 *  use you to collect remianing parameters numbers of params . 
 * ***/



function fn(param1, ...param2) {
    console.log(" params are ", param1);
    console.log("Rest paramateres",param2);
}

fn("Hi", "Hello");
fn("Hi", "Hello", "Hola");



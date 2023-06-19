// Javascript  -> dynamically typed ,
// high level language  v8Engine -> C++, 
// a connection with java
// // dynaminc  -> name
// var a;

// // statically typed lang
// int a;



// Fact-1 default of JS -> always -> undefined

var myVar;
console.log("value of ", myVar);

// Datatypes in JS
// Primitive types -> number, string , null , undefined , boolean
// New Types -> BigInt,Symbol

// Non-primitve types  ->  object, functions and arrays
// New Types -> map ,set, weakmap and weakset


// ********** number -> similar to mathematical  -> 64 floating values
// console.log(5 / 2);


//  *********strings ********

let age = 25;
// no difference between single quotes and double quotes
let str1 = 'I am ' + age + " years old ";
console.log(str1);

// Problem : JS '' and "" doen't support multiple line strings;

let templateString = `I am ${age} yeard old`;
console.log(str1);


//****************null***/

// null, undefined -> empty  -> undefined -> js
// null -> empty value -> user defined




// ***********typeof Operator***********************

// var a = 10;
// console.log("55", typeof a);
// a = "string";
// console.log("57", typeof a);
// a = { "name": "Jasbir" };
// console.log("59", typeof a);



// Fact-2 : JS -> just 10days -> netscape

//  it is a bug 
// console.log(typeof null);

// typeof array -> object
// console.log(typeof [1, 2, 3, 4]);

// correct way to check whether you are recieving array or object
// let arr = [1, 2, 3, 4];
// console.log(Array.isArray(arr));





















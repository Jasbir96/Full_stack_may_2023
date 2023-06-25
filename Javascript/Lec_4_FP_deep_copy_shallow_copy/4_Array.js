/** array is an object */

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// //  it gives you the copy
// // params -> starting index , ending index
// // it copies the elem from  si to ei - 1
// let slicedArr = arr.slice(2, 4);
// // modifies the original array
// // params -> starting index , delete count
// console.log("slicedArr: ", slicedArr);
// let splicedArr = arr.splice(2, 3);
// console.log("splicedArr: ", arr,splicedArr);



/**concat*/
// It concat a two array without chainging the original array

// let concatArr = arr.concat([100, 200, 300]);
// console.log("concatArr: ", concatArr);
// console.log("arr",arr)


// split and join 
// split splits a string into an array of string 
// with the use of a delimiter 
let str = "Hi i am google".trim();
let arrStr = str.split(" ");
// joins the array of string into  string on the basis of delimiter
let joinedStr = arrStr.join("+");
console.log("joinedStr",joinedStr);



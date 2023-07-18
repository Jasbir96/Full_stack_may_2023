// in js num datatype -> 64 bit 
let num = 1000000 ^ 10000000;
// console.log(num);

/***if you want to store a value that is greater then 2^63-1
BigInt -> Stored in heap 
It is a primitive 
You can only do operations among bigINt

***/
// 1
// let bigNum = BigInt(1000000) * BigInt(10000000);

// console.log("big num", bigNum);
// //2
// let bigNUm1 = 10000000000000000n;
// let bigNUm2 = 12345768n;
// let res = bigNUm1 * bigNUm2;
// console.log("product", res);

// let div = res / 10000;
// console.log("div", div);
/****** 
 * symbols  : used to create unique primitives 
//  * usecase-1
        when you want only to add or delete a property from an object but not  update it
 *     hide it during iteration -> you have to use symbol
 * */

// non primitives -> references 
let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4,]
// console.log(a == b);
// primtive -> value
// let str1="Hello";
// let str2="Hello";
// console.log(str1 == str2);

let sym = Symbol("hi");
let sym2 = Symbol("bye");
// console.log("symbol", sym);
// console.log("symbol", sym2);
// console.log(sym==sym2);

let obj = {
    "key1": "Hello",
    key2: "hi",
    [sym]: "Private"
}

for(let key in obj){
    console.log(key ," : ", obj[key]);
}

console.log("55",obj[sym]);







// let obj = {
//     [Symbol("id")]: 1234,
//     [Symbol("name")]: "Hello"
// }

// //  -> you only want to add/delete  property but you don't want to update it 
// let id = Symbol("id");
// let name = Symbol("name");
// // obj["id"] = "fake";
// // console.log(obj);
// let id1 = Symbol("id");
// // only added an no previous proprty is updatd 
// obj[id1] = "fake";
// obj[name]="Fakename";

// console.log("Before",obj);


// delete obj[id1];

// console.log("After",obj);



console.log(obj);

















/***
 * Object , Map -> store data in key, value pair
 * Map
 * */
/******** 1. syntax***************************/
const print = console.log
// a.
let cap = {
    name: "Steve",
    occupation: "Super Hero",
    age: 35
}

// cap.newProp = "Hello";
// delete cap.name;

let arrKeys = Object.keys(cap);
let size = arrKeys.length;

// b. map
const personMap = new Map();

// adding/update a key in map
personMap.set('name', "Jasbir");
personMap.set("age", 35);
personMap.set('occupation', 'Super Hero');
personMap.delete("age");
personMap.get("occupation");

// map.has(key) – returns true if the key exists, false otherwise.
// map.clear() – removes everything from the map

// print("object", cap);
// print("map", personMap);
// print("size",personMap.size);

/*************differences
 * 1. iteration
 *  Iterate over a map ->
 *          all the HOF ,
 *          for of loop,
 *          for in loop does not work
 * Can't iterate over an object ->
 *          hoF not applicable,
 *          for of loop not work,
 *          for in loop work
 *  ***************/
// a.  
//  forEach 
// let arr = [1, 2, 3, 4];
// arr.forEach(function (elem,idx) {
// print("Data at this idx", idx ," is ", elem)
// })

// cap.forEach((elem, key) => {
// print("key", key , " : ", elem);
// })

// personMap.forEach((elem, key) => {
// print("key", key , " : ", elem);
// })

// b. for of loop 
// for(let [elem, key] of personMap){
// print("key", key , " : ", elem);
// }

// for (let [elem, key] of cap) {
//     print("key", key, " : ", elem);

// }


// c.  for in loop
// for(let key in personMap){
// print("key", key , " : ", personMap[key]);
// }
// console.log("after map for in ")


// for (let key in cap) {
//     print("key", key, " : ", cap[key]);
// }



/******
 * Map -> keys can be of any type
 * Obj -> String , Number , Symbols
 * Usecase : when you want to store properties with a key that has some metadata
 * ***/

//  user -> mmultiple entries
// const user1 = { id: 1, name: 'Alice' };
// const user2 = { id: 2, name: 'Bob' };
// const user3 = { id: 3, name: 'Charlie' };

// // //  extended data 
// let preferenecsObj1 = { theme: 'dark', language: 'en' }
// let preferenecsObj2 = { theme: 'light', language: 'fr' }
// let preferenecsObj3 = { theme: 'dark', language: 'de' }

// let preferenceMap = new Map();

// preferenceMap.set(user1, preferenecsObj1);
// preferenceMap.set(user2, preferenecsObj2);
// preferenceMap.set(user3, preferenecsObj3);

// console.log("first Users name", user1.name);
// console.log("first users preference", preferenceMap.get(user1));



/******************object format of implementaion************************/

// const user1 = {
//     id: 1, name: 'Alice',
//     pereferences: { theme: 'dark', language: 'en' }
// };
// const user2 = {
//     id: 2, name: 'Bob',
//     pereferences: { theme: 'light', language: 'fr' }
// };
// const user3 = {
//     id: 3, name: 'Charlie',
//     pereferences: { theme: 'dark', language: 'de' }
// };

//  extended data 
// let preferenecsObj1 = { theme: 'dark', language: 'en' }
// let preferenecsObj2 = { theme: 'light', language: 'fr' }
// let preferenecsObj3 = { theme: 'dark', language: 'de' }

// console.log("first Users name", user1.name);
// console.log("first users preference", user1.pereferences);




//  2. when you have lot update / delete -> amount of data set -> Map





print(cap);
print(personMap);

print("````````````````");
let strMap = JSON.stringify(personMap);
console.log("strMap: " , strMap);
print("````````````````");
let strObj=JSON.stringify(cap);
print("strObj: " , strObj);









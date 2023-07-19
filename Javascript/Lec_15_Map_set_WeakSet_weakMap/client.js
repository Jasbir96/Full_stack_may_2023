const { process, cache } = require("./4_useWeakMap.js");

let obj = { task1res: "Hello" };
let obj2 = { task2res: "Bye" };
let result1 = process(obj);
console.log("resul1", result1);
let result2 = process(obj);
console.log("resul2", result2);
let result3 = process(obj2);
console.log("result3", result3);
obj=null;
let result4 = process(obj2);
console.log("result4", result4);
// console.log("14",cache.get(obj2));
// console.log("14",cache.get(obj));


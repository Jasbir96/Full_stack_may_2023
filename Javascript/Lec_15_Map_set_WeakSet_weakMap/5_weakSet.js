/***
 * Weakset :  it also takes only object as keys
 * add 
 * delete
 * has
 * **/ 

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// // visitedSet has 2 users now
john = null;
// // check if John visited?
console.log(visitedSet.has(john)); // true

// // check if Mary visited?
console.log(visitedSet.has(mary)); // false
visitedSet.delete(pete)
console.log(visitedSet.has(pete)); // false



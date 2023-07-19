/********Q1***************/

// let jhon={};
// jhon.age=25;
// console.log("John 5", jhon);
// jhon=null;
// console.log("John 7", jhon);


/*******************Q2***************/

// let jhon = {};    

// jhon.age = 25;
// let arr = [jhon];
// console.log("John 13", jhon);
// arr[0]=null;
// jhon = null;
// console.log("John 15", jhon);
// console.log("John 17", arr[0]);



/****
 * Garage collection : when an unused type  -> object ,value etc -> they are not in use then 
 * JS's Garbage collector removes it from the memory and frees up the memory for further usage
 * 
 * Ques How do you define whether a type is unused -> 
 * Mark and sweep algorithm -> identified unused types and then remove them  -> if a type is not 
 * refering to any other type/var/ array
 * 
 * **/




/***********************
 * Map and strong refreences
 * 
 * ******************/


// let john = { name: "John" };

// let map = new Map();
// map.set(john, "hi");
// john = null;
// console.log("in map",map);
// console.log("48",map.get(john));


/****
 * WeakMap : In weakMap you cannot have primitives a key
 * weakMap.set(key, value)
      weakMap.get(key)
      weakMap.delete(key)
      weakMap.has(key)
 * 
 * */
// let john = { name: "John" };
// let john2 = { name: "steve" };
// let weakMap = new WeakMap();
// weakMap.set(john, "hi");
// weakMap.set(john2, "Bi");
// john = null;
// console.log("in map", weakMap);
// console.log("48", weakMap.get(john));
// console.log("48", weakMap.get(john2));


let weakMap = new WeakMap();
weakMap.set("100", "hello");




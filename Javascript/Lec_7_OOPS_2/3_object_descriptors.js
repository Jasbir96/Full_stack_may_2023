// Metadata -> object descriptors 
// DATA  -> prop                 
// value   -> value of that prop         
// writable  -> can you change 
    //   it is iteratble using for in loop 
// enumerable ->  can iterate over it 




let obj = {
    name: "Jasbir"
}

Object.defineProperty(obj, 'test', {
    value: 'fail',
    enumerable: false
});

// console.log(obj);
console.log(obj.test);
for(let key in obj){
    console.log("in loop",key);
}
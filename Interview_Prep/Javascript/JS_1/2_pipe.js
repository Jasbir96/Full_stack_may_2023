const obj = {
    key4: (a, b, c) => a - b - c,
    key5: [1, 2, 3, 4, 5],
    key1: {
        key2: (a, b, c) => a + b + c,
        key3: (a, b, c) => a + b - c,
    },
    key5: null
}

/**
*  obj={
                key4:-1,
                key5:[1,2,3,4,5],
                key1:{
                    key2:3,
                    key3: 0
                },
                key5:null
            } 
 * */

function Fn(obj) {
    return function (...args) {
        for (let key in obj) {
            let val = obj[key];
            if (typeof val == "function") {
                obj[key] = val(...args);
            } else {
                // it the value-> is object 
                if (val && typeof val == "object" && !Array.isArray(val)) {
                    Fn(val)(...args);
                }
            }
        }
    }
}
Fn(obj)(1, 1, 1);
console.log("obj",obj);


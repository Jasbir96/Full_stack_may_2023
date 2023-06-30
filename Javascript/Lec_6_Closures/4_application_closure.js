// infinite curry

function counter(args) {
    // write code only inside this function
    let count = 0;
    count++;
    if (args == 0) {
        return count;
    } else {
        return function inner(args) {
            count++;
            if (args == 0) {
                return count;
            } else {
                return inner;
            }
        }
    }


}


// console.log(counter(0)); // print -> 1
// console.log(counter()(0)); // print ->2
// console.log(counter()()()()(0)); // print ->3 


// function sum() {

// }

// sum(3)(4)();  // 7

// sum(3)(7)(8)(); //18 


/**
 * Memoization function
 * creating private variables
 * */


/***************Private variables******/
// function createEvenStack() {
//     let items= [];
//     return {
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 items.push(item);
//             }
//             else {
//                 console.log("Please input even value");
//             }
//         },
//         pop() {
//             return items.pop();
//         }
//     };
// }

// const stack = createEvenStack();
// stack.push(10);
// stack.push(5);
// stack.pop();
// stack.items; // => [10]
// console.log(stack.items);
// stack.items = [10, 100, 1000]; // prevent this behaviour

/**
 * Memoization : sum calculation take a lot of time  with 
 * memoization we can store  result of costly calculations -> useMemo
 * */


function calc(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += n;
    }
    return sum;
}

// console.time();
// let res = calc(100);
// console.log("res", res);
// console.timeEnd();
// {5: sum of five, 10:sumof 10}
function memoize(fn) {
    let cache = {};
    return function (n) {
        //  cache -> res -> present
        let istheInputPresent = cache[n]==undefined;
        if (istheInputPresent) {
            return cache[n];
        } else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }
        //  it is not  -> call the actual fn and 
        // add the res to the cache
        //then return  the result
    }
}
let efficentCalcFN = memoize(calc);
console.time();
efficentCalcFN(5);
console.timeEnd();

console.time();
efficentCalcFN(5);
console.timeEnd();
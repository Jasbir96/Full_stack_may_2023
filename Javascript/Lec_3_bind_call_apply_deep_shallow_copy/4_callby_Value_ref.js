// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;
// arr2.pop();
// arr2 = 10;
// console.log(arr);


function modifier(a, b) {
    console.log("9", a, b)
    a[0] = 10;
    b[1] = 20;
    console.log("12", a, b)
}
let p = [4, 7, 9]
let q = [3, 6, 8]
console.log("17", p, q);
modifier(p, q)

console.log("19", p, q);

//  what a reference is -> address -> pointer

// call by value -> call by sharing
//  primitive -> value
// no primitive -> val of the reference
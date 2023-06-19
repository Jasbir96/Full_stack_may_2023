// interpreted lang
let a = 10;
console.log("line number 2", a);
function fn() {
    // reference -> cannot
    let a = 20;
    console.log("line number 4", a);
    a++;
    console.log("line number 7", a);
    if (a) {
        let a = 30;
        a++;
        console.log("line number 11", a);
    }
    console.log("line number 13", a);
}
fn();
console.log("line number 16", a);

// ******************var************
// reassign
// var a=10
// a=20;
// redeclared -> yes 
// var a=30;

// udef
// console.log(a);

// var a=10;
// 10
// console.log(a);


// **********let*************
// reassign -> yes
// redeclaration -> X
// let a=10;
// a=20;
// let a;

// let Hoisting -> undefined
// before declaration let and const variables cannot be accessed ->
//  temporal dead zone

//  let -> script scope
// console.log(a);
// let a;
// console.log(a);
// a=10;
// console.log(a);


// block -> {
    
}







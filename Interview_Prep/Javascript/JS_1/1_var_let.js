/***
 * EC : execution context 
 * When an EC is created 
 *          1. your file executes -> for the variables that are outside every fn and top level fn .
 *          2. a funnction is called 
 * Code execution -> is done in EC 
 *        EC  
 *         -> creation    
 *                  -> 1. Hositing : memory allocation 
 *                                      var -> undefined
 *                                      fn statement -> memory allocated 
 * 
 *                  -> 2. current this 
 *                  -> 3. global object : window/global
 * 
 *          -> code execute 
 *              
 * 
 * */ 


// var a = 10;
// console.log("line number 2", a); //10
// function fn() {
//     console.log("line number 4", a); //undefined 
//     var a = 20;
//     a++;
//     if (a) {
//         a = 30;
//         a++;
//         console.log("line number 10", a);
//     }
//     console.log("line number 12", a);
// }
// fn();
// console.log("line number 2", a);


/**
 * 1. you can redeclare a var declaration 
 * 2. var is fn scope 
 * 
 * 
 * */

/**
 * Differerence between undefined , undeclared and null
 * 
 * 1. Undeclared variables are created when you assign a value to an identifier that is not previously created using var, let or const. 
 * Undeclared variables will be defined globally, outside of the current scope. In strict mode, a ReferenceError will be thrown when you try to assign to an undeclared variable. Undeclared variables are bad just like how global variables are bad. 
 * 
 * 
 * 2. Undefined is value that is given to a variable by the JS Engine during hoisting
 * 3. Null is value that is given explicitely by the user it also represent nothing. 
 * **/ 

// b=10;
// console.log("global",global.b);
// console.log("b",b);





let a = 10;
console.log("line number 2", a);
function fn() {
    let a = 20;
    console.log("line number 4", a); //line number 4
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
console.log("line number 2", a);


/***
 * Que : difference between let , var and const 
 * **/ 






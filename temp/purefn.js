/**
 * impure fn ->
 * *  will not give same result for same input
 * * it will input from outer scope
 * 
 * pure fn -> give same output for same input
 * all it's varaiables: does not changes any outer variable(produce side Effect) 
 * */

let y = 10;

function fn(x,y) {

    y = 2 * y;
    x = x * y;
    console.log("x", x, "y", y);
}


fn(5, 2);
fn(5, 2);
fn(5, 2);
fn(5, 2);
fn(5, 2);
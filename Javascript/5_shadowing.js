
// let fruits = "apple";
// console.log(fruits); // apple

// {
//     console.log(fruits); //tdz 
//     let fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);


//  legal
// let fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     console.log("25",fruits);
//     fruits = "orange";
//     {
//         let fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);



var fruits = "apple";
console.log("21",fruits); // apple
{ 
    let fruits;
    fruits = "orange";
    console.log("25",fruits);
    {
        let fruits;
        console.log("28",fruits)
    }
    console.log(fruits);
}
console.log(fruits);



// illegal shadowing



// let fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits);
//     {
//         var fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);
//events :  click, hover 


// const EventEmitter = require('events');



// -> someone -> emits the event 

// Element.addEventListener("click", function(){
// console.log("click action")
// })
const EventEmitter = require('events');


// create a simple instance of eventEmitter
const myEmitter = new EventEmitter();

function evenHandler1(param1, param2) {
    console.log("sum", param1 + param2)
}
function evenHandler2F(param1, param2) {
    console.log("product", param1 * param2);
}
function evenHandler3F(param1, param2) {
    console.log("third callback");
}

// subscribe -> use that event 
myEmitter.on("notification", evenHandler1);
myEmitter.on("notification", evenHandler2F);



// producer -> 
myEmitter.emit("notification", 2, 5);
myEmitter.emit("notification", 10, 20);

myEmitter.on("notification", evenHandler3F);
console.log("`````````````````");
myEmitter.emit("notification", 10, 20);


// dom manipulation : Browser : emits the event 
// developer only consume the event


// it will be called once 
myEmitter.once("notification", function onceFN() {

})
// it will remove from subscribers 
myEmitter.remove("event", evenHandler3F)



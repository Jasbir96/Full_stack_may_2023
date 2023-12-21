/***
 * Event Emitter is the base module that enables event driven architecture in nodejs  and
 * provide event feature to other modueles
 * you create you own custom event using event Emitter
 * */
const EventEmitter = require('events');
const myEmitter = new EventEmitter();


// consumption -> listeners are added 
myEmitter.on("myEvent", function (...args) {
    console.log("my event was called", args);
})
const secondCB = function (...args) {
    console.log("my event was called", args);
}
myEmitter.on("myEvent", secondCB)

myEmitter.off("myEvent", secondCB);

// creation  -> event are then emitted
myEmitter.emit("myEvent");
console.log("````````````````");
myEmitter.emit("myEvent", 10, 20);
console.log("````````````````");

myEmitter.emit("myEvent", [10, 20, 30]);
console.log("````````````````");
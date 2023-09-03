// const EventEmitter = require('events');
function MyEventEmitter() {
    this.events = Object.create(null);
}
MyEventEmitter.prototype.on = function (eventName, evenHandler1) {
    let myEmitter = this;
    if (myEmitter[eventName]) {
        let handlersArr = myEmitter[eventName];
        handlersArr.push(evenHandler1);
    } else {
        myEmitter[eventName] = [evenHandler1];
    }
}
MyEventEmitter.prototype.emit = function (eventName, ...args) {
    let myEmitter = this;
    if (myEmitter[eventName]) {
        const handlers = myEmitter[eventName];
        handlers.forEach((fn) => {
            fn(...args);
        })
    } else {
        console.log("event not found");
    }
}



const myEmitter = new MyEventEmitter();
// method call
myEmitter.on("notification", evenHandler1);
myEmitter.on("notification", evenHandler2F);

myEmitter.emit("notification", 10, 12);
myEmitter.emit("notification", 20, 30);
myEmitter.on("notification", evenHandler3F);
console.log("`````````````````");
myEmitter.emit("notification", 10, 20);

function evenHandler1(param1, param2) {
    console.log("sum", param1 + param2)
}
function evenHandler2F(param1, param2) {
    console.log("product", param1 * param2);
}

function evenHandler3F() {
    console.log("third callback");
}
// // subscribe -> use that event 


let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
    }
}
let ironMan = {
    name: "Tony",
    team: "Iron Man",
}

//Call -> It is on Function -> 


/**
 * polyfill of call method
 * **/
Function.prototype.myCall = function (requiredObj, ...args) {
    console.log("my call invoked ")
    // console.log(this);
    // fn we have to call
    const requiredFn = this;
    // call -> i want to call fn as it is part of the given object
    requiredObj.requiredFn = requiredFn;
    // console.log("obj", requiredObj);
    requiredObj.requiredFn(...args);
    // delete the added fn
    delete requiredObj.requiredFn
}
// let peterTeamFN = cap.petersTeam;

// // with which guy i am calling myCall -> polyfill
// peterTeamFN.myCall(ironMan, "loki", "thor");

// // original
// peterTeamFN.call(ironMan, "loki", "thor")


/*******************break 10:28*********************/




Function.prototype.myApply = function (requiredObj, args) {
    // console.log("my Apply invoked ",args,...args)

    // fn we have to call
    const requiredFn = this;
    // call -> i want to call fn as it is part of the given object
    requiredObj.requiredFn = requiredFn;
    requiredObj.requiredFn(...args);
    // delete the added fn
    delete requiredObj.requiredFn
}

// let peterTeamFN = cap.petersTeam;
// peterTeamFN.myApply(ironMan, ["loki", "thor"]);
// peterTeamFN.apply(ironMan,["loki","thor"]);

Function.prototype.myBind = function (reqObj) {
    const requiredFn = this
    return function (...args) {
        requiredFn.call(reqObj,...args);
    }
}
//  bind a fn 
const boundFn = cap.petersTeam.bind(ironMan);
// call it later
boundFn("loki", "thor");

const myBounFn = cap.petersTeam.myBind(ironMan);
myBounFn("loki", "thor");



/***
 * 1. bind , call and apply -> are available on function
 * 2. use bind,call,apply in those fn -> this ->fn
 * 3. object passed to bind,call and apply -> on which you fn is called
 * 
 * **/ 


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
Function.prototype.myCall = function (requiredObj,...args) {
    console.log("my call invoked ")
    // console.log(this);
    // fn we have to call
    const requiredFn = this;
    // call -> i want to call fn as it is part of the given object
    requiredObj.requiredFn = requiredFn;
    console.log("obj", requiredObj);
    requiredObj.requiredFn(...args);
    // delete the added fn
    delete requiredObj.requiredFn
}
let peterTeamFN = cap.petersTeam;

// with which guy i am calling myCall -> polyfill
peterTeamFN.myCall(ironMan, "loki", "thor");

// original
peterTeamFN.call(ironMan, "loki", "thor")











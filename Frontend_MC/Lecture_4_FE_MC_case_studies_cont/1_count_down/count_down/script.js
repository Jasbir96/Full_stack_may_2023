"use strict";
// ## Requirements
// Must have features
//     * pass time in hours, minute and second
// * validation so that if user enters any time
//  
//              * edge cases -> validation
//                  * negative values
//                   * hours > 24 
// * greater 60 then it should move to left bit
// * start the count down 
//       * start, pause, continue 
// 

// Good to have
//     * reset option 

// ## Approach

// selected elements
// btns
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");

// inputs
const minInput = document.getElementById("min");
const hrsInput = document.getElementById("hr");
const secInput = document.getElementById("sec");
let counterID;
let saveTimeLeft;

// 1. click -> start ->
//     pause -> display : block, start : hide
startBtn.addEventListener("click", function () {
    // 3 things -> 
    // 1. taking the input
    let mins = minInput.value || 0;
    let hrs = hrsInput.value || 0;
    let secs = secInput.value || 0;
    // converting strings into numbers 
    mins = parseInt(mins);
    hrs = parseInt(hrs);
    secs = parseInt(secs);
    console.log("mins", mins, "hrs", hrs, "secs", secs);
    // a. validate that input  
    const res = validatedInputs(mins, hrs, secs);
    if (res == false)
        return;

    // console.log("44",res)
    // b. transform our input -> object 
    const { transformedSecs,
        transformedMins,
        transformedHrs
    } = tranformInputs(secs, mins, hrs);
    
    minInput.value = transformedMins;
    hrsInput.value = transformedHrs;
    secInput.value = transformedSecs;
    let countDownTime = transformedHrs * 3600 + transformedMins * 60 + transformedSecs;
    timer(countDownTime);
    startBtn.style.display = "none";
    pauseBtn.style.display="block";

})
pauseBtn.addEventListener("click", function () {
    // pause the processing 
    clearInterval(counterID);
    // no changes on the  UI
    // 2. click -> pause -> 
    //     continue -> block, pause -> hide
    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
})
continueBtn.addEventListener("click", function () {
    // continue the timer
    timer(saveTimeLeft);
})
resetBtn.addEventListener("click", function () {
    //    reset UI 
    minInput.value = "00";
    secInput.value = "00";
    hrsInput.value = "00";
    // reste process
    saveTimeLeft = 0;
    clearInterval(counterID);
})



/***********************helper functions**************************/
function timer(countDownTime) {
    counterID = setInterval(() => {
        // a. process transformed  input -> every one second 
        countDownTime--;
        saveTimeLeft = countDownTime;
        // console.log(countDownTime);
        // b. change the UI
        updateUIEverySec(countDownTime);
    }, 1000);


}


function updateUIEverySec(countDownTime) {
    // 1. countDOWNTIME-> hrs:mins:secs-> put it to the UI
    let hrs = Math.floor(countDownTime / 3600);
    let mins = Math.floor((countDownTime % 3600) / 60);
    let secs = countDownTime % 60;
    console.log(mins, secs, hrs)
    if (mins == 0 && secs == 0 && hrs == 0) {
        // console.log("Timer Finished");
        // stop the timer
        clearInterval(counterID);
        return;
    }

    if (secs > 0) {
        secs--;
        // 10 -> 9
        secInput.value = secs < 10 ? `0${secs}` : `${secs}`;
        return;
    }
    if (mins > 0) {
        mins--;
        minInput.value = mins < 10 ? `0${mins}` : `${mins}`;
        secInput.value = 59;
        return;
    }

    if (hrs > 0) {
        hrs--;
        minInput.value = 59;
        secInput.value = 59;
        hrsInput.value = hrs < 10 ? `0${hrs}` : `${hrs}`
    }

    // 2. get it from UI -> 
    //mins==0&& sec==0&&hrs==0 -> stop
    // sec >0, sec--
    // sec ==0 -> mins--
    // min==0 &&sec==0 -> hrs -> -- 
}

function validatedInputs(mins, hrs, secs) {

    //   a. checked for neg />24hrs
    if (mins < 0 || secs < 0 || hrs < 0 || hrs > 24) {
        alert("negative value's / hrs >24 is not valid");
        return false;
    }
    // b. check for after transformation does becomes greater 24
    const { transformedHrs } = tranformInputs(secs, mins, hrs);
    console.log("here");
    if (transformedHrs > 24) {
        alert("negative value's / hrs >24 is not valid");
        return false;
    }

    return true;
}
// DRY
function tranformInputs(secs, mins, hrs) {
    if (secs >= 60) {
        secs = secs - 60;
        mins++;
    }
    if (mins >= 60) {
        mins = mins - 60;
        hrs++;
    }


    if (secs == 0 && mins > 0) {
        mins--;
        secs = 59
    } else if (mins == 0 && hrs > 1) {
        hrs--;
        mins = 59;
        secs = 59;

    }


    return {
        transformedSecs: secs,
        transformedMins: mins,
        transformedHrs: hrs
    };
}




/***
 * DRY -> do not repeat yourself
 * Single responsibility principles
 * */

// 20hrs 10min 20 sec -> 20 * 3600,














// UI -> data -> into sync  -> 2 way binding



// 20 == 20 * 3600 + 40 * 60 + 20 +
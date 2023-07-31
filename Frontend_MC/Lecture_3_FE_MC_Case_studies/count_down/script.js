// ## Approach
//     * Inputs : 
//         test case : 1:25: 30
//     -> html: input: number
// mins = 25
// input: 30
//     -> star button
// 1. countdown -> 1sec -> setInterval ->
//     a.time -> decrement
// b.show the text change
// 2. start -> pause


// add eveentListener

const startBtn = document.getElementById("start");
const minInput = document.getElementById("min");
const hrsInput = document.getElementById("hr");
const secInput = document.getElementById("sec");
const resetBtn = document.getElementById("reset");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
// const timerObject = {};
let prevTimer = 0;
let timerId;
let prevInsecs;
let timeInSeconds;


pauseBtn.addEventListener("click", function () {
    prevInsecs = timeInSeconds
    clearTimeout(timerId);
})

continueBtn.addEventListener("click", function () {
    timer(prevInsecs);

})

startBtn.addEventListener("click", function () {
    // get the values 
    let hrs = hrsInput.value || 0;
    let mins = minInput.value || 0;
    let sec = secInput.value || 0;
    // find out the time in second

    timeInSeconds = parseInt(hrs) * 3600 + parseInt(mins) * 60 + parseInt(sec);
    // console.log(timeInSeconds)
    timer(timeInSeconds);
})

resetBtn.addEventListener("click", function () {
    // timerObject.timeLeft = 0;
    prevInsecs=0;

    clearTimeout(timerId);
    // clear the text 
})

function timer(timeInSeconds) {
//    -> timer automatically goes to zero
    if (timeInSeconds == 0)
        return;
    //  depending upon recursion 
    timerId = setTimeout(() => {
        console.log("Timer clocked", timeInSeconds);
        timeInSeconds--;
        timer(timeInSeconds);
    }, 1000)
}


// singleton -> export it as component


















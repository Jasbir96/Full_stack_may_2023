/*****setTimeout -> clearTimeout****/
// console.log("Before");
// function cb() {
//     console.log("Settimouts cb has been called");
// }
// const timerID = setTimeout(cb, 3000);

// function canceller() {
//     console.log("Cancelling the timeout");
//     clearTimeout(timerID);
// }
// setTimeout(canceller, 2000);
// console.log("AFter");
/*************************************/


/************setInterval, clearInterval*********/
console.log("Before");
function cb() {
    console.log("Interval called ");
}
const timerId = setInterval(cb, 1000);

function cancelInterval() {
    console.log("cancelling the interval timer");
    clearInterval(timerId);
}
setTimeout(cancelInterval, 3000);
console.log("after");




                                        // Web API                      console-> before 
                                    //    cb -> SETINTERVAL : 1             after
                                    //  cancelcb->   setTimeout  :3        Interval called
                                                                        //    Interval called
// cancelcb
// callstack              
                    // cancelcb, cb
                         // queue


//  cb -> of setTimout -> higher precedence then cb of setInterval -> why precedence of SINt<STime



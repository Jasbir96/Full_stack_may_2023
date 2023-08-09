function debounce(fn, delay = 500) {
    let timeoutID = null;
    return function (...args) {
        if (timeoutID) {
            // reseting the timer 
            console.log("reseting the timers");
            clearTimeout(timeoutID)
        }

        timeoutID = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}




function printHello() {
    console.log("hello");
}
const debouncedPrintHello = debounce(printHello, 2000);
debouncedPrintHello();


setTimeout(() => {
    debouncedPrintHello();
    setTimeout(() => {
        debouncedPrintHello();
    }, 1000);
}, 1000)
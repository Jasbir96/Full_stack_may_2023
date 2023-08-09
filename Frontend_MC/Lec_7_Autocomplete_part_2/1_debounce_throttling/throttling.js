
let productValue = 100;
function apply20Coupon() {
    console.log("New price", productValue - (productValue * 0.2));
}
function throttle(fn, interval = 500) {
    let shouldWait = false;
    console.log("1 returning fn");
    return function (...args) {
        //prevent it also 
        if (shouldWait == true) {
            console.log(" 3 I have been called before");
            return;
        }
        fn(...args);
        shouldWait = true;
        // console.log(" 2Called fn first time");
        // console.log(" 2should Wait", shouldWait);
        setTimeout(() => {
            shouldWait = false;
        }, interval)
    }
}






const throttledApplyCoupon = throttle(apply20Coupon, 3000);
console.log("```````````````````");
throttledApplyCoupon();  //1
console.log("```````````````````");
throttledApplyCoupon();  //2


setTimeout(() => {
    console.log("at t=2000");
    throttledApplyCoupon(); //3
}, 2000);

setTimeout(() => {
    console.log(" at t=5000");
    throttledApplyCoupon(); //4
},5000);







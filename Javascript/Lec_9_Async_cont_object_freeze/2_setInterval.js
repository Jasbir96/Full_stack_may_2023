

/***
 * create polyfill of setInterval with the help setTimeout
 * 1. setInterval -> settimout that is called at a given interval again and again
 *  Learning : whenever you want to have single source of truth -> non-primitive
 * 2. clearInterval  : simple fn that recives and object and it changes it's prop to false
 *   and setInterval only excutes the further setTimouts on the basis of that flag 
 * */
function mysetInterval(cb, delay) {
    // in my setInterval fn value flag =true
    // primitive
    let obj = {
        flag: true
    }
    function myfn() {
        if (obj.flag == true) {
            cb();
            setTimeout(myfn, delay);
        }
    }
    setTimeout(myfn, delay);
    return obj;
}
function clearMyInterval(obj) {
    obj.flag = false;
}
function cb() {
    console.log("I will be called on every interval")
}
/*******usage****/
function clearCb() {
    console.log("cancelled th cb");
    clearMyInterval(obj);
}
let obj = mysetInterval(cb, 1000);
setTimeout(clearCb, 3000);

// t -> 0 SetINterval   setTimout -> 3sec(Webapi)
// t -> 1 myfn          setTimout -> 3sec(Webapi)
// t -> 2 myfn setTimeout setTimeout
// t-> 3 myfn




// console:
// interval
// interval
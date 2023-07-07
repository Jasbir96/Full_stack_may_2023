function runMlalgo(amount, cb) {
    console.log("running ml algo");
    console.log("processing payment");
    setTimeout(function () {
        console.log("payment done");
        cb();
        cb();
        cb();
        cb();
        cb();
    }, 1000);
}


function pRunMLalgo() {
    return new Promise((resolve, reject) => {
        console.log("running ml algo");
        console.log("processing payment");
        setTimeout(function () {
            console.log("payment done");
            resolve();
            resolve();
            resolve();
            resolve();
            resolve();
            reject();
        }, 1000);
    })
}


module.exports = {
    runMlalgo,
    pRunMLalgo

}
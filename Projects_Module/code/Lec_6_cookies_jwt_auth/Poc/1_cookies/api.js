const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");


// home
// products
// clearCookie
app.use(cookieParser());
// -> home get thre request i will add a cookie -> share that cookie with res
app.get("/", function (req, res) {
    /****
     * To send a cookie you will need 
*           key and value both in string
*   Some optional  but important options
*       **maxAge** : after how many milli seconds cookie will expire
*       **httpOnly** : true , "now your cookie will only be accessed through server not by client
     side js  so it can't be tampered
     * 
     * **/
    res.cookie("prevpage", "home", {
        maxAge: 1000000000000,
        httpOnly: true
    })
    res.status(200).json({
        message: "thank you for the visit"
    })
})

// i will check whether the user visiting for the first or it has already visited
app.get("/product", function (req, res) {
    console.log("cookie", req.cookies)
    let messageStr = ""
    if (req.cookies.prevpage) {
        messageStr = `You have already visited ${req.cookies.prevpage}`;
    }
    res.status(200).json({
        message: `thank you for accessing product route ${messageStr}`
    })
})

// clear your cookies -> on a server
app.get("/clearCookies", function (req, res) {
    // clearing a cookie
    res.clearCookie("prevpage", { path: "/" });

    res.status(200).json({
        message: "i have cleared your cookie"
    })

})

app.listen(3000, function () {
    console.log(` server is listening to port 3000`);
})
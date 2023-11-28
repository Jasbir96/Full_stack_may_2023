const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

const jwt = require("jsonwebtoken");
const promisify = require("util").promisify;

const promisfiedJWTSign = promisify(jwt.sign);
const promisfiedJWTVerify = promisify(jwt.verify);

const payload = "1234";
const secretKey = "i am a secret";
/****send the token ***/
app.get("/sign", async function (req, res) {
    try {
        const authToken = await promisfiedJWTSign({ data: payload, }, secretKey, { algorithm: 'HS256' });
        // transport -> cookies
        res.cookie("jwt", authToken, { maxAge: 90000000, httpOnly: true });
        res.status(200).json({
            message: "signed the jwt and sending it in the cookie",
            authToken
        })

    } catch (err) {
        console.log("err", err);
        res.status(400).json({
            message: err.message,
            status: "failure"
        })
    }
})

/*************verifying those tokens********************/
app.get("/verify", async function (req, res) {
    try {
        const token = req.cookies.jwt;
        const decodedToken = await promisfiedJWTVerify(token, secretKey);
        // console.log("Token decoded", decodedToken);
        res.status(200).json({
            message: `token is decoded`,
            decodedToken
        })
    } catch (err) {
        console.log("err", err);
        res.status(400).json({
            message: err.message,
            status: "failure"
        })
    }

})


// server -> run on a port 
app.listen(3000, function () {
    console.log(` server is listening to port 3000`);
})

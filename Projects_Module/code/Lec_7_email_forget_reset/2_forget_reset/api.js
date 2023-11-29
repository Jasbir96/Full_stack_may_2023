
const express = require("express");

const dotenv = require("dotenv");
const mongoose = require("mongoose");

// including env variables
dotenv.config();
const { PORT, DB_PASSWORD, DB_USER, JWT_SECRET } = process.env;


const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const promisify = require("util").promisify;
const promisifiedJWTSign = promisify(jwt.sign);
const promisifiedJWTVerify = promisify(jwt.verify);


/**********************connection to our DB********************************/

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.drcvhxp.mongodb.net/?retryWrites=true&w=majority`;
// only done once 
mongoose.connect(dbURL)
    .then(function (connection) {
        console.log("connected to db");
    }).catch(err => console.log(err))
const UserModel = require("./model/UserModel");

const sendEmailHelper = require("./dynamicMailSender");
const fs = require("fs");
// never -> sync in your server 
const HtmlTemplateString = fs.readFileSync("./otp.html", "utf-8");
/*************************************************/
const app = express();
/***to get the data in req.body **/
app.use(express.json());
/*******to get the cookie in req.cookies**/
app.use(cookieParser());
/*****
 * 1. signup 
 * 2. login 
 * 3. /allowIfLoggedIn -> allows you to acess getUserData if user is authenticated 
 * **/


const signupController = async function (req, res) {
    try {
        // add it to the db 
        const userObject = req.body
        //   data -> req.body
        let newUser = await UserModel.create(userObject);
        // send a response 
        res.status(201).json({
            "message": "user created successfully",
            user: newUser,
            status: "success"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
            status: "success"
        })
    }
}



const loginController = async function (req, res) {
    try {

        /***
         * 1. enable login -> tell the client that user is logged In
         *      a. email and password 
         **/

        let { email, password } = req.body;
        let user = await UserModel.findOne({ email });
        if (user) {
            let areEqual = password == user.password;
            if (areEqual) {
                // user is authenticated
                /* 2. Sending the token -> people remember them
                       * */
                // payload : id of that user 
                let token = await promisifiedJWTSign({ id: user["_id"] }, JWT_SECRET);
                console.log("sendning token");
                res.cookie("JWT", token, { maxAge: 90000000, httpOnly: true, path: "/" });
                res.status(200).json({
                    status: "success",
                    message: "user logged In"
                })
            } else {
                console.log("err", err)
                res.status(404).json({
                    status: "failure",
                    message: "email or password is incorrect"
                })
            }


        } else {
            res.status(404).json({
                status: "failure",
                message:
                    "user not found with creds"
            })
        }


    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}
const protectRouteMiddleWare = async function (req, res, next) {
    try {
        let jwttoken = req.cookies.JWT;

        let decryptedToken = await promisifiedJWTVerify(jwttoken, JWT_SECRET);
        if (decryptedToken) {
            let userId = decryptedToken.id;
            // adding the userId to the req object
            req.userId = userId
            next();
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure"
        })

    }
}
const getUserData = async function (req, res) {
    try {
        const id = req.userId;
        const user = await UserModel.findById(id);
        res.status(200).json({
            "message": "user data retrieved  successfully",
            user: user
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }
}

/**
 * It will open forgetPassword
 *  *
 *  * Token 
 * **/

const forgetPasswordController = async function (req, res) {
    try {
        // -> send his email 
        let { email } = req.body;
        //  check for the email -> exist or not
        let user = await UserModel.findOne({ email: email })
        if (user) {
            // exists ->
            const otp = otpGenerator();

            // 1. send the Email -> token
            await sendEmailHelper(otp, HtmlTemplateString, user.name, user.email)
            // 2. save that token in DB 
            user.token = otp;
            user.otpExpiry = Date.now() + 1000 * 60 * 5;
            // if you update an object -> model
            await user.save();

            res.status(200).json({
                message: "user updated",
                status: "success",
                otp: otp,
                userId: user.id
            })
        } else {
            //  if not -> return -> no user found
            res.status(404).json({
                status: "failure",
                message: "no user with this email id found"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }



}


const resetPasswordController = async function (req, res) {
    //  -> otp 
    //  newPassword and newConfirmPassword 
    // -> params -> id 
    try {
        const userId = req.params.userId;
        const { password, confirmPasword, otp } = req.body;
        /****
         * 1. search user using id
         * 
         *      a.  not found -> invalid otp or session  
         *      b. it's found 
         *                  -> get the token  is matching&&check it's expiry>currentTime 
         *                          -> update the user's password
         *                              
         * **/

        const user = await UserModel.findById(userId);
        if (user) {
            if (otp && user.token == otp) {
                let currentTime = Date.now();
                if (currentTime < user.otpExpiry) {
                    user.confirmPassword = confirmPasword;
                    user.password = password;
                    delete user.token;
                    delete user.otpExpiry
                    await user.save();
                    res.status(200).json({
                        "status": "success",
                        message: "your password is updated"
                    })
                }
            } else {
                res.status(404).json({
                    status: "failure",
                    message: "otp is not found or wrong"
                })
            }

        } else {
            res.status(404).json({
                status: "failure",
                message: "no user with this email id found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }


}




function otpGenerator() {
    return Math.floor(100000 + Math.random() * 900000);
}






/***
 * Forget password -> Email 
 * Reset PAssword
 * */


/************routes***************/
app.post("/signup", signupController);
app.post("/login", loginController);
app.get("/allowIfLoggedIn", protectRouteMiddleWare, getUserData);
app.patch("/forgetpassword", forgetPasswordController);
app.patch("/resetPassword/:userId", resetPasswordController);


/******************handler functions ***************/
// 404 route not found
app.use(function cb(req, res) {
    // console.log("");
    // response 
    res.status(404).json({
        status: "failure",
        message: " route not found"
    })
})
// server -> run on a port 
app.listen(PORT, function () {
    console.log(` server is listening to port ${PORT}`);
})
// express is imported
const express = require("express");
// syntax

const short = require('short-uuid');
const dotenv = require("dotenv");
const mongoose = require("mongoose")
dotenv.config();
const { PORT, DB_PASSWORD, DB_USER } = process.env;
const app = express();




// driver 
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.drcvhxp.mongodb.net/?retryWrites=true&w=majority`;
// once 
mongoose.connect(dbURL)
    .then(function (connection) {
        console.log("connected to db",)
    }).catch(err => console.log(err))
// ecommerce -> Amazon 
const userSchemaRules = {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
    ,
    confirmPassword: {
        type: String,
        required: true,
        minlength: 8,
        // validate property 
        validate: function () {
            return this.password == this.confirmPassword
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}

// schema-> structure and validation 
const userSchema = new mongoose.Schema(userSchemaRules);

// this model -> will have queries 
const UserModel = mongoose.model("userModel", userSchema);



















app.use(express.json());

app.use(function (req, res, next) {
    // console.log("36",req.method);
    if (req.method == "POST") {
        // check if the body is empty or not 
        const userDetails = req.body;
        const isEmpty = Object.keys(userDetails).length == 0;
        if (isEmpty) {
            res.status(400).json({
                status: "failure",
                message: "userDetails are empty"
            })
        } else {
            next();
        }
    } else {
        next();
    }
})

/***********routes**************/
app.get("/api/user", getAllUserHandler);
app.post("/api/user", createuserHandler);
app.get("/api/user/:userId", getUserById);
/******************handler functions ***************/
async function getAllUserHandler(req, res) {
    try {
        console.log("I am inside  get method");

        const userDataStore = await UserModel.find();
        if (userDataStore.length == 0) {
            throw new Error("No users are present")
        }
        res.status(200).json({
            status: "success",
            message: userDataStore
        })
    } catch (err) {
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }

}
async function createuserHandler(req, res) {
    try {
        const userDetails = req.body;
        // adding user to the file 
        const user = await UserModel.create(userDetails);

        res.status(200).json({
            status: "successfull",
            message: `added  the user `,
            user: user
        })
    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }

}
async function getUserById(req, res) {
    try {
        const userId = req.params.userId;
        const userDetails = await UserModel.findById(userId);

        if (userDetails == "no user found") {
            throw new Error(`user with ${userId} not found`);
        } else {
            res.status(200).json({
                status: "successfull",
                message: userDetails
            })
        }
    } catch (err) {
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}
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
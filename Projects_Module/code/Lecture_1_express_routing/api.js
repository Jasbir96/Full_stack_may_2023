// express is imported
const express = require("express");
// syntax
const app = express();
const fs = require("fs");


//it is an inbuilt middleware -> to add  data coming in body of HTTP request to req.body
app.use(express.json());


// when someone makes a get request on the route /api/user -> execute the handler/cb
app.get("/api/user", function (req, res) {
    console.log("I am inside  get method")
    res.status(200).json({
        status: "success",
        message: " sending resp from get method"
    })
})

app.post("/api/user", function (req, res) {
    console.log("I am inside  post method", req.body);
    res.status(200).json({
        status: "success",
        message: " sending resp from post method"
    })
})



/**** 
 * app.use -> a method -> express
 * You can pass a handler fn  -> 
 * 1. req : object representing request
 * 2. res : objedct representing response 
 * ** */

app.use(function cb(req, res) {
    // console.log("");
    // response 
    res.status(404).json({
        status: "failure",
        message: " route not found"
    })
})








const port = process.env.PORT || 3000;
// server -> run on a port 
app.listen(port, function () {
    console.log(" server is listening to port 3000");
})
const express = require("express");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const shortId = require("shortid");
const cors = require("cors");
// it is part of nodejs 
const crypto = require("crypto");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json())
const { PUBLIC_KEY, PRIVATE_KEY, WEBHOOK_SECERET } = process.env;
/***
 * this instance identifies your server
 * **/
const razorpayInstance = new Razorpay({
    key_id: PUBLIC_KEY,
    key_secret: PRIVATE_KEY,
});

// initial booking
app.post("/checkout", async function (req, res) {
    const amount = 500;
    const currency = "INR";
    const payment_capture = 1;
    try {
        const options = {
            amount: amount * 100,
            currency: currency,
            receipt: shortId.generate(),
            payment_capture: payment_capture
        }
        // you create an order -> you are telling your payment gateway that some user 
        // is going to pay in a bit  of time 
        const orderObject = await razorpayInstance.orders.create(options);
        // you send the order it to frontend 
        res.status(200).json({
            status: "success",
            message: {
                id: orderObject.id,
                currency: orderObject.currency,
                amount: orderObject.amount
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }


})
// payment verification
app.post("/verification", async function (req, res) {
    try {
        // this object -> sha256+webhook_secret
        const shasum = crypto.createHmac("sha256", WEBHOOK_SECERET);
        shasum.update(JSON.stringify(req.body));
        const freshSignature = shasum.digest("hex");
        const razorPaySign = req.headers["x-razorpay-signature"];
        // console.log(req.headers);;
        console.log(freshSignature, razorPaySign);
        if (freshSignature == razorPaySign) {
            // ok
            console.log("Payment is verified", req.body);
            res.status(200).json({
                message: "OK",
            });
        } else {
            // there some tempering 
            res.status(403).json({ message: "Invalid" });
        }

    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
})

app.listen(3000, function () {
    console.log("Listening at port 3000");
})
const express = require("express");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const shortId = require("shortid");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json())
const { PUBLIC_KEY, PRIVATE_KEY } = process.env;
/***
 * this instance identifies your server
 * **/
const razorpayInstance = new Razorpay({
    key_id: PUBLIC_KEY,
    key_secret: PRIVATE_KEY,
});


app.post("/checkout", async function (req, res) {
    const amount = 500;
    const currency = "INR";
    try {

        const options = {
            amount: amount*100,
            currency: currency,
            receipt: shortId.generate(),
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



app.listen(3000, function () {
    console.log("Listening at port 3000");
})
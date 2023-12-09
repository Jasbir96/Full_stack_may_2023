const mongoose = require("mongoose");
// ecommerce -> Amazon 
const bookingSchemaRules = {

    bookedAt: {
        type: Date,
        default: Date.now()
    },
    priceAtThatTime: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "failed", "sucess"],
        required: true,
        default: "pending"
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "userModel"
    },
    product: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "newProductModel"
    },
    payment_order_id: {
        type: String
    }
}



const bookingSchema = new mongoose.Schema(bookingSchemaRules);
// this model -> will have queries 
const BookingModel = mongoose.model("bookingModel", bookingSchema);
module.exports = BookingModel;

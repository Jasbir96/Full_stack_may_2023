const mongoose = require("mongoose");

const reviewSchemaRules= {
    review: {
        type: String,
        required: [true, "Review can't be empty"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, "Review must contain some rating"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
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
}
const reviewSchema = new mongoose.Schema(reviewSchemaRules)
const ReviewModel = mongoose.model("reviewModel", reviewSchema);
module.exports = ReviewModel;
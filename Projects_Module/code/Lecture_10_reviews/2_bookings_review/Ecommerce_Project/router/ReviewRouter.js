const express = require("express");
const ReviewRouter = express.Router();
const ReviewModel = require("../model/ReviewModel");
const { protectRouteMiddleWare } = require("../controller/AuthController");
const UserModel = require("../model/UserModel");
const ProductModel = require("../model/ProductModel");


const createReviewController = async function (req, res) {
    try {
        // all the inputs are here
        const userId = req.userId;
        const productId = req.params.productId;;
        const { review, rating } = req.body;
        /**
         * 1. check for the status of payment-> sucess
         * 
         * 2. create a review document
         * 3. update average rating as well
         * 4. push that review to review array in ProductModel
         * **/
        /****2**/
        const reviewObject = await ReviewModel.create({
            review,
            rating,
            product: productId,
            user: userId
        })

        /***3 -> recacculate your avg rating***/
        const productObject = await ProductModel.findById(productId);
        const averageRating = productObject.averageRating;

        if (averageRating) {
            let sum = productObject.averageRating * productObject.reviews.length;
            let finalAvgRating =
                (sum + reviewObject.rating) / (productObject.reviews.length + 1);
            productObject.averageRating = finalAvgRating
        } else {
            productObject.averageRating = reviewObject.rating;
        }
        /*** 4 review is added **/ 
        productObject.reviews.push(reviewObject["_id"]);

        await productObject.save();
        res.status(200).json({
            status:"success",
            message:reviewObject
        })

    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}



const getAllReviewForAProductController = async function (req, res) {

}
ReviewRouter.post("/:productId", protectRouteMiddleWare, createReviewController);

ReviewRouter.get("/:productId", getAllReviewForAProductController);

module.exports = ReviewRouter;

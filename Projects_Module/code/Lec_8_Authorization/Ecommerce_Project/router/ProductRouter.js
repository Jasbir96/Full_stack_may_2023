const express = require("express");
const ProductRouter = express.Router();
const { createProductHandler,

    getProductById,
    deleteProductById } = require("../controller/ProductController");
const { checkInput } = require("../controller/middleWares");
const ProductModel = require("../model/ProductModel");
const { protectRouteMiddleWare, isAuthorizedMiddleWare } = require("../controller/AuthController");
/***********products***********/
ProductRouter.post("/", checkInput,
    protectRouteMiddleWare, isAuthorizedMiddleWare(['Admin', 'Seller']),
    createProductHandler);
ProductRouter.get("/", getAllProductHandler);
ProductRouter.get("/:productId", getProductById);
ProductRouter.delete("/:productId", isAuthorizedMiddleWare(['Admin', 'Seller']), deleteProductById);
module.exports = ProductRouter;

async function getAllProductHandler(req, res) {
    try {
        // are done on the level of DB
        // -> find all the data
        // -> sort
        // -> select  

        let query = req.query;
        let selectQuery = query.select;
        let sortQuery = query.sort
        // console.log("selectParam", selectParam);
        // console.log("sortParam", sortParam);
        // make a find query -> searching for the product
        let queryResPromise = ProductModel.find()
        // sort the entries 
        if (sortQuery) {
            // "price inc"
            let order = sortQuery.split(" ")[1];
            let sortParam = sortQuery.split(" ")[0];
            // console.log("order",order,"sortParam",sortParam);
            // applying this logic for inc and dec 
            if (order == "inc") {
                queryResPromise = queryResPromise.sort(sortParam);
            } else {
                queryResPromise = queryResPromise.sort(-sortParam);
            }
        }
        if (selectQuery) {
            queryPromise = queryResPromise.select(selectQuery);
        }
        // when find and sort both are done 
        const result = await queryResPromise;

        res.status(200).json({
            message: result,
            status: "success"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }

    // sorting -> increarsing 
    // selecting -> (name,price)
}
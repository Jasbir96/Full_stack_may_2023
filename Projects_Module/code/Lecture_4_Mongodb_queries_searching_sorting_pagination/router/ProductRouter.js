const express = require("express");
const ProductRouter = express.Router();
const { createProductHandler,

    getProductById,
    deleteProductById } = require("../controller/ProductController");
const { checkInput } = require("../controller/middleWares");
/***********products***********/
ProductRouter.post("/", checkInput, createProductHandler);
ProductRouter.get("/", getAllProductHandler);
ProductRouter.get("/:productId", getProductById);
ProductRouter.delete("/:productId", deleteProductById);
module.exports = ProductRouter;

function getAllProductHandler(req, res) {
    console.log(req.query);
    res.status(200).json({
        message: req.query,
        status: "success"
    })
    // sorting -> increarsing 
    // selecting -> (name,price)
}
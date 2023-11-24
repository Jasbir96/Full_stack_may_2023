
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
// including env variables
dotenv.config();
const { PORT, DB_PASSWORD, DB_USER } = process.env;
/**********************connection to our DB********************************/
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.drcvhxp.mongodb.net/?retryWrites=true&w=majority`;
// once 
mongoose.connect(dbURL)
    .then(function (connection) {
        console.log("connected to db");
    }).catch(err => console.log(err))



// with this your creating simple app -> api
const app = express();
;
const ProductModel = require("./model/ProductModel");
app.get("/api/product", getAllProductHandler);
app.get("/api/bigbillionProducts", getTop4Products, getAllProductHandler);

/***
 * When you list of data 
 * 
 * filter the product -> requirements
 * sorting of the result
 * selection
 * paginate the result
 * */
async function getAllProductHandler(req, res) {
    try {
        let query = req.query;
        // getting all the keys 
        let selectQuery = query.select;
        let sortQuery = query.sort;
        let myQuery = query.myQuery;
        let page = query.page;
        let limit = query.limit;

        // we have to make a find the list of data -> JSON object 
        // remove the $ from the string -> parse -> you gt 
        const transformedQuery = transformQueryHelper(myQuery);
        console.log("47 transformedQuery", transformedQuery);
        let queryResPromise = ProductModel.find(transformedQuery);
        // // logic making query 
        if (sortQuery) {
            // "price inc"
            let order = sortQuery.split(" ")[1];
            let sortParam = sortQuery.split(" ")[0];
            // console.log("order",order,"sortParam",sortParam);
            // applying this logic for inc and dec 
            if (order == "inc") {
                // it by default sorts in inc order 
                console.log("Sorted increasing order", sortParam)
                queryResPromise = queryResPromise.sort(sortParam);

            } else {
                // if you pass negative then it will sort in desc
                queryResPromise = queryResPromise.sort(-sortParam);
            }
        }
        // selection of the fields
        if (selectQuery) {
            queryPromise = queryResPromise.select(selectQuery);
        }
        // limit() -> no of products that could on a given page 
        // .skip() -> starting idx;
        // /***************************Pagination**************************/
        // if page number is passed
        page = page || 1;
        limit = limit || 2;
        const elementsToSkip = (page - 1) * limit;
        // console.log(elementsToSkip)
        queryResPromise = queryResPromise.skip(elementsToSkip).limit(limit);
        // when find and sort both are done 
        const result = await queryResPromise;
        console.log("Result", result);
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

async function getTop4Products(req, res, next) {

    // stock_quantity -> 30
    // rating >4.6
    // limit -> 4 
    req.query.myQuery = {
        stock_quanitity: { $lt: 30 },
        rating: { $gt: 4.6 },
        limit: 4
    }
    // all the middlewares share the same req,res obect 
    next()
}

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



function transformQueryHelper(myQuery) {
    const parseQuery = JSON.parse(myQuery);
    const queryOperators = {
        gt: '$gt',
        gte: '$gte',
        lt: '$lt',
        lte: '$lte',
        // Add more operators as needed
    };
    for (let key in parseQuery) {

        let internalObject = parseQuery[key];
        if (typeof internalObject == "object") {
            // in the inner obj -> operators 
            for (let innerKey in internalObject) {
                if (queryOperators[innerKey]) {
                    internalObject[`$${innerKey}`] = internalObject[innerKey];
                    delete internalObject[innerKey];
                }
            }
        }

    }
    return parseQuery;
}







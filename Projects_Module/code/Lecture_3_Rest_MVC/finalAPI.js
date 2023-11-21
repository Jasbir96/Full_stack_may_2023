
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

/*****************models that will be there********************/
const UserModel = require("./UserModel");
const ProductModel = require("./ProductModel");

// with this your creating simple app -> api
const app = express();
/*****************controller functions***********************/
/**********************users*************/
const getAllUserHandler = async function (req, res) {
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
const createuserHandler = async function (req, res) {
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
const getUserById = async function (req, res) {
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
const deleteUserById = async function (req, res) {
    let { userId } = req.params;
    try {
        let User = await UserModel.findByIdAndDelete(userId);
        res.status(200).json({
            status: "successfull user deleted",
            message: User
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "failure",
            message: err.message

        });
    }
}
const checkInput = function (req, res, next) {
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
}

/******************products************************/
const createProductHandler = async function (req, res) {
    try {
        const productDetails = req.body;
        // adding user to the file 
        const product = await ProductModel.create(productDetails);
        res.status(200).json({
            status: "successfull",
            message: `added  the product `,
            product: product
        })
    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }

}
const getAllProductHandler = async function (req, res) {
    try {

        const productDataStore = await ProductModel.find();
        if (productDataStore.length == 0) {
            throw new Error("No produtcs are present")
        }
        res.status(200).json({
            status: "success",
            message: productDataStore
        })
    } catch (err) {
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }

}
const getProductById = async function (req, res) {
    try {
        const productId = req.params.productId;
        const ProductDetails = await ProductModel.findById(productId);

        if (ProductDetails == "no user found") {
            throw new Error(`product with ${productId} not found`);
        } else {
            res.status(200).json({
                status: "successfull",
                message: ProductDetails
            })
        }
    } catch (err) {
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}
const deleteProductById = async function (req, res) {
    let { productId } = req.params;
    try {
        let product = await ProductModel.findByIdAndDelete(productId);
        res.status(200).json({
            status: "successfull product deleted",
            message: product
        });
    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: err.message
        });
    }
}
// used to add data from http packet -> adds it to req.body 
app.use(express.json());

/***********routes**************/
/**********users*****/
app.get("/api/user", getAllUserHandler);
// chaining
app.post("/api/user", checkInput, createuserHandler);
app.get("/api/user/:userId", getUserById);
app.delete("/api/user/:userId", deleteUserById);

/***********products***********/
app.post("/api/product", checkInput, createProductHandler);
app.get("/api/product", getAllProductHandler);
app.get("/api/product/:productId", getProductById);
app.delete("/api/product/:productId", deleteProductById);
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

/***
 * At code level -> prevent Repetiton -> Factory
 * At file level -> structure to segregate the code  -> MVC
 * **/











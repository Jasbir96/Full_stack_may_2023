const mongoose = require("mongoose");
// ecommerce -> Amazon 
const productSchemaRules = {
    name: {
        type: String,
        // error handling 
        required: [true, "kindly pass the name"],
        unique: [true, "product name should be unique"],
        maxlength: [40, "Your product length is more than 40 characters"],
    },
    price: {
        type: String,
        required: [true, "kindly pass the price"],
        validate: {
            validator: function () {
                return this.price > 0;
            },
            message: "price can't be negatives"
        }
    },
    categories: {
        type: String,
        required: true
    },
    productImages: {
        type: [String]
    },
    averageRating: Number,
    discount: {
        type: Number,
        validate: {
            validator: function () {
                return this.discount < this.price;
            },
            message: "Discount must be less than actual price",
        },
    },
}
// schema-> structure and validation 
const productSchema = new mongoose.Schema(productSchemaRules);
// this model -> will have queries 
const ProductModel = mongoose.model("productModel", productSchema);
module.exports = ProductModel;

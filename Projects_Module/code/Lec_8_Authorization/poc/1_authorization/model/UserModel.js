const mongoose = require("mongoose");
// ecommerce -> Amazon 
const userSchemaRules = {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
    ,
    confirmPassword: {
        type: String,
        required: true,
        minlength: 8,
        // validate property 
        validate: function () {
            return this.password == this.confirmPassword
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    token: {
        type: String
    },
    otpExpiry: {
        type:Date
    },
    role:{
        type:String,
        default:"user"
    }
}
// schema-> structure and validation 
const userSchema = new mongoose.Schema(userSchemaRules);
// this model -> will have queries 
const UserModel = mongoose.model("userModel", userSchema);
module.exports = UserModel;

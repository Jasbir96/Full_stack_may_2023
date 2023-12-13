const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    bookings: {
        type: [mongoose.Schema.ObjectId],
        ref: "bookingModel"
    },
    /****
     *  token -> forget and reset 
     * **/
    token: {
        type: String
    },
    otpExpiry: {
        type: Date
    },
    /***
     * role -> aut
     * */
    role: {
        type: String,
        default: "user"
    }
}
// schema-> structure and validation 
const userSchema = new mongoose.Schema(userSchemaRules);
let validCategories = ['Admin', "user", 'Seller'];

userSchema.pre("save", async function (next) {
    const user = this;
    const password = user.password;
    const confirmPassword = user.confirmPassword;
    if (password == confirmPassword) {
        delete user.confirmPassword
        user.password = await bcrypt.hash(password, 10);
    } else {
        const err = new Error("Password and confirmPassword are not the same ")
        next(err)
    }
})
// schema-> structure and validation 
userSchema.pre("save", function (next) {
    const user = this;
    if (user.role) {
        const isValid = validCategories.includes(user.role);
        if (isValid) {
            next();
        } else {
            return next(err);
        }
    } else {
        user.role = "user";
        next();
    }

})
// this model -> will have queries 
const UserModel = mongoose.model("userModel", userSchema);
module.exports = UserModel;
